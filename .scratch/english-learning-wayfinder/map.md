# Wayfinder: Personal English Learning Workspace

Status: Open
Type: wayfinder:map

## Destination

A decision-complete launch specification for an AI-first English learning workspace using `/teach` as the teaching runtime. At the end, `/teach` can be initialized, a compact baseline diagnostic can be run, and the first adaptive learning cycle can start without new architectural decisions; initialization, diagnostic execution, and lessons themselves are out of scope.

## Notes

Domain: long-term personal language learning for a Russian-speaking frontend developer moving to Tbilisi and seeking social and English-speaking work contexts.

Consult `teach/SKILL.md`, `grilling`, `domain-modeling`, and `research` when their ticket type calls for them. Treat `/teach` artifacts as the sole primary persistent state; introduce no parallel learner model unless a ticket proves a concrete gap. Progress must be evidence-based, adaptive, sustainable in 10–40 minute sessions, and must not become a prewritten A1→B2 curriculum.

## Decisions so far

- [Capability and outcome model](issues/01-capability-and-outcome-model.md) — Capabilities are situation-bound communicative outcomes described flexibly by context, function, mode, and support; partial and cross-context transfer matter more than CEFR labels.
- [Mastery and progression policy](issues/02-mastery-and-progression-policy.md) — Mastery is a slice-level evidence profile; progression uses a local prerequisite floor with delayed evidence for stability, targeted local remediation, and no universal accuracy/SRS threshold.
- [Baseline diagnostic policy](issues/03-baseline-diagnostic.md) — A compact adaptive, low-stakes diagnostic produces confidence-tagged task evidence, stops when the productive zone is clear, and may begin learning before delayed follow-up.
- [Evidence and next-material policy](issues/04-evidence-and-next-material-policy.md) — `/teach` selects an explainable bounded objective through qualitative blocker tiers and contextual decision checks, with adaptive mixed sessions and functional relevance tie-breaks.
- [Retention, review, and interleaving policy](issues/05-retention-review-and-interleaving.md) — Review uses delayed retrieval, purposeful interleaving, transfer, and local remediation with qualitative priority and no universal SRS schedule or review backlog.
- [Modality and repair progression](issues/06-modality-and-repair-progression.md) — Modes share capability objectives but keep separate evidence; listening/speaking progress through manipulable task demands, and repair is matched to breakdown type from the start.
- [Teach state contract](issues/07-teach-state-contract.md) — Standard `/teach` artifacts keep their roles, while one compact `LEARNING-STATE.md` snapshot carries current evidence, objective, blockers, review needs, and resume direction.
- [Authoritative resource policy](issues/08-authoritative-resource-policy.md) — `RESOURCES.md` stays a curated, provenance-aware registry with bounded lookup/research rules and domain-specific source/conflict/copyright policies.

## Not yet specified

- How to operationalize real-call readiness within the evidence profile.

## Out of scope

- Building a teaching engine, application, database, custom scheduler, or parallel learner model.
- Writing a year-long curriculum, a fixed A1→B2 lesson sequence, or the lessons themselves.
- Requiring paper materials or English-only immersion.
