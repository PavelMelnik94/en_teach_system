import { join } from "node:path";
import { rename } from "node:fs/promises";
import { findRepoRoot, currentPath, resultPath, exists, loadLocalEnv, readText } from "./files.js";
import { parseResult, readTask } from "./protocol.js";
import { runConfiguredProvider } from "./provider.js";

const log = (message: string): void => console.log(message);
const error = (message: string): void => console.error(`Voice bridge: ${message}`);

export const run = async (options: {
  cwd?: string;
  env?: NodeJS.ProcessEnv;
  args?: string[];
} = {}): Promise<number> => {
  const args = options.args ?? process.argv.slice(2);
  const root = await findRepoRoot(options.cwd);
  const env = options.env ?? await loadLocalEnv(root);
  const taskPath = currentPath(root);
  const outputPath = resultPath(root);

  if (!(await exists(taskPath))) {
    console.error("No active voice task. Start /teach first.");
    return 1;
  }

  if (await exists(outputPath)) {
    if (!args.includes("--restart")) {
      error("A voice result already exists. Aborting to protect completed evidence; use --restart to archive it explicitly.");
      return 2;
    }
    const archived = join(root, "external-practice", "voice", `result.previous-${Date.now()}.md`);
    await rename(outputPath, archived);
    log(`Archived existing result at ${archived}`);
  }

  let task;
  try {
    task = await readTask(taskPath);
  } catch (cause) {
    error(cause instanceof Error ? cause.message : String(cause));
    return 1;
  }

  log(`Voice task ${task.taskId} ready.`);
  log(`Provider receives: ${taskPath}`);
  log("The provider must conduct the bounded session and write a structured result; this CLI does not invent audio evidence.");

  let providerRun: Awaited<ReturnType<typeof runConfiguredProvider>>;
  try {
    providerRun = await runConfiguredProvider({
      command: env.VOICE_PROVIDER_COMMAND,
      cwd: root,
      taskPath,
      resultPath: outputPath,
    });
  } catch (cause) {
    error(cause instanceof Error ? cause.message : String(cause));
    return 3;
  }

  if (!(await exists(outputPath))) {
    error(`Provider exited without writing ${outputPath}. No completed result was created.`);
    if (providerRun.stderr.trim()) error(providerRun.stderr.trim());
    return providerRun.exitCode || 3;
  }

  try {
    const result = parseResult(await readText(outputPath), task.taskId);
    if (result.status === "failed") {
      error("Provider returned failed status; do not import it as learning evidence.");
      return 4;
    }
    log(`Voice result written: ${outputPath} (${result.status}).`);
    log("Next step: run /teach to import meaningful evidence and consume the ephemeral files.");
    return providerRun.exitCode === 0 ? 0 : providerRun.exitCode;
  } catch (cause) {
    error(cause instanceof Error ? cause.message : String(cause));
    return 4;
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  run().then((code) => { process.exitCode = code; }).catch((cause) => {
    error(cause instanceof Error ? cause.message : String(cause));
    process.exitCode = 1;
  });
}
