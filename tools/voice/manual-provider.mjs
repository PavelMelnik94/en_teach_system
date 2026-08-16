import { access, stat } from "node:fs/promises";

const taskPath = process.env.VOICE_TASK_PATH;
const resultPath = process.env.VOICE_RESULT_PATH;
const timeout = Number(process.env.VOICE_MANUAL_TIMEOUT_MS ?? 1_800_000);

if (!taskPath || !resultPath) {
  console.error("VOICE_TASK_PATH and VOICE_RESULT_PATH are required.");
  process.exit(2);
}

console.log(`Open this task in a voice-capable client: ${taskPath}`);
console.log("Conduct the bounded session, then save the exact VOICE_RESULT document to:");
console.log(resultPath);
console.log("The bridge will validate the Task ID and result markers.");

const started = Date.now();
while (Date.now() - started < timeout) {
  try {
    const details = await stat(resultPath);
    if (details.size > 0) process.exit(0);
  } catch {
    // The result is created by the external voice runtime.
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

console.error(`Timed out waiting for ${resultPath}. No voice evidence was created.`);
process.exit(3);
