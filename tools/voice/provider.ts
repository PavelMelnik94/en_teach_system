import { spawn } from "node:child_process";
import { exists, atomicWrite } from "./files.js";

export type ProviderRun = {
  exitCode: number;
  stdout: string;
  stderr: string;
};

export const runConfiguredProvider = async (input: {
  command: string | undefined;
  cwd: string;
  taskPath: string;
  resultPath: string;
}): Promise<ProviderRun> => {
  if (!input.command) {
    throw new Error(
      "No voice provider configured. Set VOICE_PROVIDER_COMMAND to a provider adapter command; no audio evidence was created.",
    );
  }

  const child = spawn(input.command, {
    cwd: input.cwd,
    env: {
      ...process.env,
      VOICE_TASK_PATH: input.taskPath,
      VOICE_RESULT_PATH: input.resultPath,
      VOICE_REPO_ROOT: input.cwd,
    },
    shell: true,
    stdio: ["ignore", "pipe", "pipe"],
  });

  let stdout = "";
  let stderr = "";
  child.stdout.on("data", (chunk: Buffer) => { stdout += chunk.toString(); });
  child.stderr.on("data", (chunk: Buffer) => { stderr += chunk.toString(); });

  const exitCode = await new Promise<number>((resolve, reject) => {
    child.once("error", reject);
    child.once("close", (code) => resolve(code ?? 1));
  });

  if (!(await exists(input.resultPath)) && stdout.includes("# Voice Practice Result")) {
    await atomicWrite(input.resultPath, stdout.trim() + "\n");
  }

  return { exitCode, stdout, stderr };
};
