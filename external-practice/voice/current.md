# Voice Practice Task

Status: ready
Task ID: voice-2026-08-17-001
Created: 2026-08-17

## Learner-facing goal

Проверить голосом, можешь ли ты понять и использовать простые предложения с `am / is / are` в знакомых ситуациях.

## Current knowledge

- Learner understands that `am / is / are` are forms of the verb `be`.
- Learner has practiced `I am`, `you are`, `we are`, `they are`, and `Pavel/Nino is` in simple sentences.
- Learner is still acquiring the difference between `be in` and `live in`.

## Do not assume

- Do not assume fluent speaking or stable retention.
- Do not assume that text-only correct answers prove speaking ability.
- Do not introduce new grammar or require explanations of terminology.

## Teaching language

Russian instructions and feedback.
English for target language practice.
Add a short Russian explanation or translation when comprehension requires it.

## Objective

In a short voice interaction, check whether the learner can understand and produce simple statements about where people are and how they feel, using `am / is / are`, with limited support and one changed prompt.

## Listening tasks

1. Say a few short English sentences, one at a time, about a person being in a place or feeling something. Start slowly and clearly.
2. Ask the learner for the general meaning in Russian or English; do not demand word-for-word translation.
3. Include one short question addressed directly to the learner, such as asking where they are or how they feel.
4. If the learner struggles, repeat once more slowly. Record whether the problem was hearing, parsing, meaning, or response formulation.

## Speaking tasks

1. Ask the learner to answer simple personal questions using a full sentence.
2. Ask for two short statements about another person, changing the subject between `I`, `you`, `they`, and one person's name.
3. Use one changed prompt not shown in advance. Accept pauses and self-correction.

## Repair scenario

At least once, create a small communication gap: say one short sentence at a natural but still beginner-appropriate speed or ask the learner to clarify who/where is being discussed. Give the learner an opportunity to ask for repetition or clarification. Do not penalize effective repair.

## Support policy

- Do not show a table of `am / is / are` or model the exact answer before the first attempt.
- If needed, repeat, slow down, or give a partial prompt after recording the initial support level.
- Do not turn the session into a grammar lecture.
- Stop after enough varied evidence, a clear foundational gap, learner fatigue, or roughly 5–10 minutes.

## Stop conditions

End the voice session when the objective is sufficiently checked, a prerequisite gap is clear, the learner asks to stop, or further probes have diminishing returns.

Begin in Russian with: **Сегодня голосом проверим:** followed by the learner-facing goal.

End explicitly with: **На сегодня голосовая практика закончена.** Then give short sections `Что получилось`, `Что пока трудно`, and `Что дальше`. Do not start another exercise after that.

## Result contract

Write `external-practice/voice/result.md` with the same Task ID and this structure:

```text
# Voice Practice Result

Status: completed | partial | failed
Task ID: voice-2026-08-17-001

VOICE_RESULT

Objective: ...
Environment:
- audio playback: yes/no
- voice input: yes/no
- full voice interaction: yes/no
Listening:
- gist: ...
- relevant detail: ...
- parsing: ...
- response readiness: ...
Speaking:
- communicative outcome: ...
- support required: ...
- intelligibility: ...
Repair:
- breakdown type: ...
- strategy: ...
- communication restored: ...
Pronunciation: ...
Novelty: ...
Visible answer/reference support: yes/no
Important errors:
- ...
Evidence confidence: ...
Prerequisite gap: ...
Recommended follow-up: ...

END_VOICE_RESULT
```

Use `not tested` or `insufficiently probed` instead of inventing evidence.
