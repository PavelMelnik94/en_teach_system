Type: wayfinder:research
Status: Closed
Assignee: Codex (current Wayfinder session)
Blocked by: 01-capability-and-outcome-model.md

## Question

Which high-trust online resources and selection rules are authoritative enough for grammar, acquisition, CEFR descriptors, vocabulary frequency, listening, pronunciation, and professional English, and how should resource gaps be recorded without outsourcing the curriculum to a course?

## Answer

`RESOURCES.md` is a small curated registry, not a link dump. Select a source for a capability and the evidence needed, then record it only when it is reusable, authoritative, materially affects future teaching, or is needed for later verification. Each entry should state title/publisher, exact URL, access date and version/section where relevant, purpose, authority, scope, when to use it, limitations, and licence/access constraints.

## Source hierarchy and lookup policy

Prefer, in order appropriate to the claim:

1. official standards and institutional descriptors;
2. primary peer-reviewed research and high-quality reviews for acquisition claims;
3. corpus-backed learner dictionaries, grammars, pronunciation references, and frequency resources;
4. reputable institutional teaching collections and clearly sourced media;
5. authentic domain material such as official engineering documentation, public issue/PR discussions, talks, and interview/task exemplars;
6. agent-generated examples and exercises, which are practice material, never authority for factual claims.

Use an existing `RESOURCES.md` entry or reference artifact for stable, already verified knowledge. Perform source lookup when a claim is contested, consequential to policy, dialect/register-sensitive, likely to have changed, or concerns grammar usage, pronunciation facts, CEFR descriptors, frequency, learning science, or current technical/workplace language. Use `/research` only for a bounded question whose answer materially affects future teaching or is reusable; do not research before every ordinary exercise. Record unresolved evidence or source gaps rather than filling them with model certainty.

## Bootstrap registry

Start with a minimum trusted set, not a complete library:

- Council of Europe CEFR descriptors and Companion Volume for can-do framing, interaction, mediation, listening/reading, and phonological control;
- one corpus-backed Cambridge or Oxford learner reference for grammar, usage, collocations, definitions, and audio;
- English Vocabulary Profile plus Oxford 3000 as complementary meaning/level and frequency/usefulness signals;
- one institutional listening collection with clear audio/transcripts (for example a British Council LearnEnglish collection), selected item-by-item for comprehensibility, length, speaker clarity, authenticity, accent, transcript quality, and current capability relevance;
- a small DOI-linked research set for retrieval, spacing, interleaving, interaction, pronunciation, and other policy claims;
- official or openly available software-engineering documentation and public engineering discussions for language-bounded Work examples;
- workplace task exemplars such as ETS communication task descriptions, used as task-shape references rather than a curriculum or proxy for team-call ability.

Expand the registry only when a real teaching decision exposes a reusable gap. A one-off missing exercise may be generated and logged with the session evidence without adding a permanent resource.

## Domain-specific rules

- **Grammar:** use a corpus-backed learner grammar/reference as the factual anchor; give the smallest Russian or English explanation that answers the observed problem. A simplified explanation may change wording, never the underlying claim. If reputable sources differ, classify the difference as dialect, register, scope, pedagogical simplification, or genuine uncertainty; expose a material variation and choose the form matching the learner's context.
- **Vocabulary:** keep dictionary meaning, collocation, and pronunciation distinct from frequency. Use corpus/frequency data when frequency matters, combine it with range/dispersion and learner need, and prioritize useful Life/Work terms even when raw frequency is lower. EVP/Oxford membership is a prioritization signal, not evidence of acquisition.
- **Pronunciation:** use a reliable phonetic reference plus audio examples and distinguish accent variation from a feature that impairs intelligibility or listening. Target high-impact sounds, stress, rhythm, prosody, and chunk boundaries; never use one native accent as the correctness gate.
- **Listening:** evaluate every item for comprehensibility, transcript availability, speaker clarity, authenticity/semi-authenticity, accent, length, pedagogical usefulness, and capability relevance. Move controlled/simplified → semi-authentic → authentic as evidence permits, without making that a fixed curriculum. Transcript success is not listening evidence; use transcripts to diagnose/acquire, remove them for retrieval, and replay afterward when useful.
- **CEFR:** use descriptors for self-assessment, capability calibration, and progress interpretation only. CEFR does not dictate topics, sequence, vocabulary mastery, or curriculum.
- **Work English:** prefer real or realistic software-engineering contexts over generic business worksheets. Keep technical vocabulary inside general communicative capabilities and use official docs/public discussions/task exemplars selectively, respecting privacy, access, and copyright.
- **Learning science:** use primary studies, reviews, and institutional guidance; record population, task, delay, and uncertainty when evidence is limited. “Spacing helps” does not become a fixed interval or universal rule.

## Provenance, recency, conflict, and copyright

Critical claims should be traceable to a source or explicitly marked as a pedagogical simplification, generated example, inference, or heuristic. Russian explanations may paraphrase an English source, but the source meaning and relevant uncertainty must be preserved.

Core grammar references usually need less frequent rechecking. Technical terminology, tooling, interview conventions, and workplace norms require recency checks when they influence current teaching. On conflict, first determine whether sources describe different varieties/registers or different scopes; if it is genuine disagreement, retain the uncertainty and use the least misleading mission-relevant explanation.

Do not copy long textbook, article, transcript, course, or proprietary-content passages into the repository. Prefer links, short lawful excerpts, summaries, generated exercises, and open/licensed media. Store resource gaps and the next validation check in `RESOURCES.md` or the relevant research note, never in a second knowledge base.

This policy keeps `RESOURCES.md`, reference artifacts, and research outputs as the only source infrastructure. It creates no custom database and does not outsource progression to a resource list.
