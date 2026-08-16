# Local voice bridge

The bridge is a provider-independent filesystem protocol. `/teach` creates `external-practice/voice/current.md`; a configured voice provider reads it and writes `external-practice/voice/result.md`; the next `/teach` session imports and consumes both ephemeral files. The bridge never edits `LEARNING-STATE.md` and never commits git changes.

## Run

```bash
npm run voice
```

Without `external-practice/voice/current.md`, it exits with `No active voice task. Start /teach first.`

Configure a local provider adapter with `VOICE_PROVIDER_COMMAND`. The command receives:

- `VOICE_TASK_PATH`
- `VOICE_RESULT_PATH`
- `VOICE_REPO_ROOT`

The adapter must conduct the bounded 5–10 minute interaction, speak Russian for instructions/feedback, use English for practice, stop explicitly, and write the result contract from the task. It may write directly to `VOICE_RESULT_PATH` or print a complete `# Voice Practice Result` document to stdout. The bridge validates Task ID, status, and `VOICE_RESULT` markers.

The repository does not ship a provider or call an API by itself. This keeps the protocol usable from Codex CLI, VS Code, Claude Code, ChatGPT Web handoff, or another local voice-capable runtime. Secrets belong in `.env.local` or the provider's environment, never in task files.

If a result already exists, the command aborts to protect it. `npm run voice -- --restart` archives the existing result before a new attempt.
