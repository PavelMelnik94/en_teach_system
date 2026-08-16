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

## Not yet specified

- How learner capabilities should be represented across life, social, work, interview, grammar, listening, speaking, pronunciation, vocabulary, and repair.
- What evidence is sufficient for advancement, what counts as mastery, and how to avoid both premature progression and endless polishing.
- How baseline uncertainty, delayed retention, interleaving, modality progression, resource authority, and real-call readiness should be operationalized.
- Which `/teach` artifacts need conventions or extensions once the learning policy is known.
- How to represent uneven capability profiles and transfer evidence without turning the descriptive model into a rigid matrix.

## Out of scope

- Building a teaching engine, application, database, custom scheduler, or parallel learner model.
- Writing a year-long curriculum, a fixed A1→B2 lesson sequence, or the lessons themselves.
- Requiring paper materials or English-only immersion.
