import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { findRepoRoot } from "./files.js";
import { run } from "./index.js";

test("finds repository root", async () => {
  assert.equal(await findRepoRoot(process.cwd()), process.cwd());
});

test("missing task returns the documented status", async () => {
  const root = await mkdtemp(join(tmpdir(), "voice-bridge-"));
  await mkdir(join(root, ".git"));
  assert.equal(await run({ cwd: root, env: {} }), 1);
});

test("existing result is protected", async () => {
  const root = await mkdtemp(join(tmpdir(), "voice-bridge-"));
  const voice = join(root, "external-practice", "voice");
  await mkdir(join(root, ".git"));
  await mkdir(voice, { recursive: true });
  await writeFile(join(voice, "current.md"), "Task ID: x\nStatus: ready\nObjective: x\n## Learner-facing goal\n\n## Teaching language\n\n## Objective\n\n## Listening tasks\n\n## Speaking tasks\n\n## Support policy\n\n## Stop conditions\n\n## Result contract\n");
  await writeFile(join(voice, "result.md"), "completed");
  assert.equal(await run({ cwd: root, env: {} }), 2);
});

test("configured provider writes and validates a matching result", async () => {
  const root = await mkdtemp(join(tmpdir(), "voice-bridge-"));
  const voice = join(root, "external-practice", "voice");
  await mkdir(join(root, ".git"));
  await mkdir(voice, { recursive: true });
  await writeFile(join(voice, "current.md"), "Task ID: x\nStatus: ready\n## Objective\nUnderstand a short question.\n## Learner-facing goal\n\n## Teaching language\n\n## Listening tasks\n\n## Speaking tasks\n\n## Support policy\n\n## Stop conditions\n\n## Result contract\n");
  const provider = join(root, "provider.cjs");
  await writeFile(provider, "require('node:fs').writeFileSync(process.env.VOICE_RESULT_PATH, '# Voice Practice Result\\nTask ID: x\\nStatus: completed\\n\\nVOICE_RESULT\\nEND_VOICE_RESULT\\n')");

  assert.equal(await run({ cwd: root, env: { VOICE_PROVIDER_COMMAND: `node ${provider}` } }), 0);
  assert.match(await readFile(join(voice, "result.md"), "utf8"), /Status: completed/);
});
