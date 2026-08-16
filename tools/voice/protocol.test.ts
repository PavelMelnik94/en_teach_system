import assert from "node:assert/strict";
import test from "node:test";
import { parseResult, parseTask } from "./protocol.js";

const task = `# Voice Practice Task
Task ID: voice-2026-08-17-001
Status: ready

## Learner-facing goal
Понять короткий вопрос.

## Current knowledge
Known basics.

## Do not assume
Do not assume listening ability.

## Teaching language
Russian instructions and feedback.
English for target language practice.

## Objective
Understand a short question.

## Listening tasks
One short task.

## Speaking tasks
One short response.

## Repair scenario
Ask for repetition.

## Support policy
Reduce support only from evidence.

## Stop conditions
Stop after enough evidence.

## Result contract
Write VOICE_RESULT.
`;

test("parses a ready task", () => {
  assert.equal(parseTask(task).taskId, "voice-2026-08-17-001");
});

test("rejects a task without required sections", () => {
  assert.throws(() => parseTask("Task ID: x\nStatus: ready\n## Objective\nUnderstand a short question."), /missing sections/);
});

test("accepts a matching completed result", () => {
  const result = parseResult("# Voice Practice Result\nTask ID: voice-2026-08-17-001\nStatus: completed\n\nVOICE_RESULT\nEND_VOICE_RESULT", "voice-2026-08-17-001");
  assert.equal(result.status, "completed");
});

test("rejects a mismatched result", () => {
  assert.throws(() => parseResult("Task ID: other\nStatus: completed\nVOICE_RESULT\nEND_VOICE_RESULT", "voice-2026-08-17-001"), /mismatch/);
});
