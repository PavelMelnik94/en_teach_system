# External Voice Task

This is a bridge for a future audio/voice session. Return the compact result to `/teach`; it is not canonical learner state by itself.

## Status

**Premature until acquisition check:** first establish the Russian-supported mental model that an English sentence needs an explicit verb and that `is` can link a person to an origin/description. Do not use this task to infer grammar mastery before that explanation is understood.

## Objective

After the prerequisite is understood, test the same bounded capability in audio: distinguish current location from origin, understand a short request, and repair a small misunderstanding.

## Instructions for the voice AI (Russian)

Объясняй инструкции и feedback по-русски. Показывай английские фразы только по мере задания. Не показывай заранее готовые ответы или полный transcript. Начни с очень короткой, медленной, ясной речи. Увеличивай сложность только если Pavel понимает gist и может выполнить task. Если он не понял, различи: не услышал, не распознал слова, не понял meaning или не знает, как ответить.

## Tasks after acquisition

1. Say two short sentences about a person: where they live and where they are from. Use a new name and place, not the lesson examples.
2. Ask Pavel one unexpected but simple follow-up about the person.
3. Create one small breakdown: repeat a key phrase once at natural-ish speed. Let Pavel request repetition/slower speech or explain what he understood.
4. Ask Pavel to repair or confirm understanding. Do not penalize effective repair.

## Observe

- listening gist and relevant detail;
- parsing/recognition of known forms in connected speech;
- response readiness and whether a question was addressed to Pavel;
- speaking production, support actually required, and intelligibility;
- repair type, initiation, and whether communication was restored;
- simulated voice evidence vs unknown/not tested.

## Result to bring back

```text
Environment: audio playback / voice input / full voice interaction
Task: ...
Listening: gist / detail / parsing / response readiness
Speaking: outcome / support required / intelligibility
Repair: breakdown type / strategy / recovery
Prompt novelty: familiar / changed / novel
Transcript or answer visible: yes / no
Confidence: well-supported / provisional / insufficiently probed
Unexpected learner notes: ...
```
