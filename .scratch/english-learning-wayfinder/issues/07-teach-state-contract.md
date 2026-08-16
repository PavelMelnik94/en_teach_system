Type: wayfinder:grilling
Status: Closed
Assignee: Codex (current Wayfinder session)
Blocked by: 02-mastery-and-progression-policy.md, 04-evidence-and-next-material-policy.md

## Question

How should the learning policy map onto `MISSION.md`, `RESOURCES.md`, `learning-records/`, `lessons/`, `reference/`, `assets/`, and `NOTES.md`; is any minimal additional artifact justified by a demonstrated gap in `/teach`?

## Answer

`/teach` standard artifacts remain the primary workspace. One real gap is justified: the standard set has no compact canonical synthesis for current capability evidence, blockers, review needs, and the bounded objective. Add exactly one human-readable, diff-friendly Markdown artifact: `LEARNING-STATE.md`. It is an operational snapshot, not a parallel learner model, database, dashboard, event log, or scheduler.

## Artifact boundaries

- `MISSION.md` stores stable mission, success outcomes, constraints, and out-of-scope boundaries. It does not store transient objectives or session evidence.
- `RESOURCES.md` stores source policy, authoritative resource registry, annotations, and gaps. It does not store learner progress.
- `LEARNING-STATE.md` stores the current operational synthesis described below.
- `learning-records/` stores durable non-obvious insights, established knowledge, recurring misconceptions, and meaningful mission changes. It is not a session journal or a complete evidence ledger.
- `lessons/` and `reference/` store teaching content and compressed knowledge. They are linked from state when relevant, but are not the sole resume path.
- `assets/` stores reusable lesson components.
- `NOTES.md` remains a scratchpad for preferences and working notes, never canonical learner state.

## `LEARNING-STATE.md` contract

Keep the file short enough for a new session to read in one pass. Its sections are:

1. **Updated / resume summary** — when the snapshot was last refreshed and one or two lines describing the current learning situation.
2. **Current bounded objective** — `capability outcome + context + target mode/support + prerequisite assumptions + evidence to collect + planned follow-up`, plus the short rationale `why now → triggering evidence → intended improvement/test`.
3. **Evidence snapshot** — only relevant capability slices, with human-readable rows containing capability/context, mode, support actually required, novelty/transfer, task outcome, meaningful error type, evidence state (`introduced`, `supported`, `independent`, `transferable`, `retained` where applicable), confidence, and delayed-evidence status. Recognition and production remain separate.
4. **Open weaknesses and prerequisites** — blocker / important / non-blocking / enrichment tier, recurring patterns, prerequisite hypotheses, and any `unknown / insufficiently probed` slices.
5. **Review and follow-up needs** — qualitative priority for delayed retrieval, transfer checks, interleaving candidates, remediation, and future audio probes. No calendar or universal interval is required.
6. **Next direction** — the next reasonable bounded objective or the decision checks that should be rerun; it is guidance, not a prewritten curriculum.
7. **Recent trail** — a small bounded list of recent objective transitions, meaningful changed-prompt failures, recovery, and material evidence changes, with links to durable learning records or lessons when they exist.

Evidence confidence is semantic, not pseudo-precise: use labels such as `well-supported`, `provisional`, `low-confidence`, and `insufficiently probed`; annotate `previously strong, recently failed` separately when recovery is needed. `Unknown` is not weak evidence. Mode-specific slices, especially listening gist/detail/parsing/response-readiness and speaking interaction/repair, cannot be inferred from text-only work; state must preserve `unknown / insufficiently probed` when audio evidence is unavailable.

Do not retain every answer, exercise, or transcript. Aggregate routine success into slice evidence; preserve recurring errors, conceptual misunderstandings, changed-prompt failures, delayed failures, meaningful recovery, objective transitions, and evidence changes that alter the next decision. Link detailed teaching content rather than copying it into state.

## Resume procedure

At the start of an independent `/teach` session, read `MISSION.md`, `LEARNING-STATE.md`, the most relevant linked learning records/lesson/reference, and `RESOURCES.md` only when a resource decision is needed. Do not require handoff files or archaeology through the entire lessons and history directories. If `LEARNING-STATE.md` is absent, initialize it from mission plus available records; if it grows beyond a one-pass synthesis, move old details to learning records/history and keep only current evidence and a small trail.

## Write and close procedure

- During a session, checkpoint after meaningful evidence or a material change to the objective, blocker, confidence, or review need.
- At normal close, refresh the evidence snapshot, meaningful mistakes, unresolved/unknown slices, delayed follow-ups, objective status, and next direction.
- If interrupted, the last saved checkpoint is valid; transient unsaved attempts may be lost. No transactional guarantee or perfect close ritual is required.
- When an objective is complete or replaced, record the transition in the recent trail and create a learning record only if the insight is durable or non-obvious.

This contract gives future sessions enough state to choose what to repeat, expand, add, or defer while keeping `/teach` as the teaching runtime and repository Markdown as source of truth. No second learner-state artifact, custom review scheduler, database, or dashboard is justified.
