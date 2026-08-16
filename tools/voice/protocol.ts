import { readFile } from "node:fs/promises";

export type VoiceTask = {
  taskId: string;
  status: string;
  objective: string;
  raw: string;
};

export type VoiceResult = {
  taskId: string;
  status: "completed" | "partial" | "failed";
  raw: string;
};

const requiredTaskSections = [
  "## Learner-facing goal",
  "## Teaching language",
  "## Objective",
  "## Listening tasks",
  "## Speaking tasks",
  "## Support policy",
  "## Stop conditions",
  "## Result contract",
];

const matchField = (text: string, field: string): string | undefined =>
  text.match(new RegExp(`^${field}:\\s*(.+)$`, "m"))?.[1]?.trim();

const sectionBody = (text: string, heading: string): string | undefined => {
  const lines = text.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === heading);
  if (start < 0) return undefined;
  const nextHeadingOffset = lines.slice(start + 1).findIndex((line) => /^##\s/.test(line));
  const end = nextHeadingOffset < 0 ? lines.length : start + 1 + nextHeadingOffset;
  const body = lines.slice(start + 1, end).join("\n").trim();
  return body || undefined;
};

export const parseTask = (raw: string): VoiceTask => {
  const taskId = matchField(raw, "Task ID");
  const status = matchField(raw, "Status");
  const objective = sectionBody(raw, "## Objective");

  if (!taskId || !status || !objective) {
    throw new Error("Voice task must include Task ID, Status, and Objective fields.");
  }
  if (status !== "ready") {
    throw new Error(`Voice task status must be ready, got: ${status}.`);
  }
  const missing = requiredTaskSections.filter((section) => !raw.includes(section));
  if (missing.length > 0) {
    throw new Error(`Voice task is missing sections: ${missing.join(", ")}.`);
  }

  return { taskId, status, objective, raw };
};

export const readTask = async (path: string): Promise<VoiceTask> => parseTask(await readFile(path, "utf8"));

export const parseResult = (raw: string, expectedTaskId: string): VoiceResult => {
  const taskId = matchField(raw, "Task ID");
  const status = matchField(raw, "Status");

  if (!taskId || !status) throw new Error("Voice result must include Task ID and Status fields.");
  if (taskId !== expectedTaskId) {
    throw new Error(`Voice result Task ID mismatch: expected ${expectedTaskId}, got ${taskId}.`);
  }
  if (!["completed", "partial", "failed"].includes(status)) {
    throw new Error(`Voice result status must be completed, partial, or failed, got: ${status}.`);
  }
  if (!raw.includes("VOICE_RESULT") || !raw.includes("END_VOICE_RESULT")) {
    throw new Error("Voice result must contain VOICE_RESULT and END_VOICE_RESULT markers.");
  }

  return { taskId, status: status as VoiceResult["status"], raw };
};
