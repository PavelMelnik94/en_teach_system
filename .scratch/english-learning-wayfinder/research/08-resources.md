# Research: authoritative resource policy

Status: research findings for `08-authoritative-resource-policy.md`; this file does not resolve the ticket.

## High-trust anchors

| Need | Preferred anchor | What it is safe to use for |
|---|---|---|
| CEFR and functional outcomes | [Council of Europe CEFR descriptors](https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors) and the official [Companion Volume](https://book.coe.int/en/education-and-modern-languages/8152-common-european-framework-of-reference-for-languages-learning-teaching-assessment-companion-volume.html) | Describing observable abilities and diagnostic targets. The Companion Volume adds Pre-A1/A1 detail, listening/reading, interaction, mediation, online interaction, and a phonological-control scale. It is a reference framework, not a prescribed course sequence. |
| Vocabulary by learner level and sense | [English Vocabulary Profile / English Profile](https://www.englishprofile.org/wordlists/evp) and its [methodology booklet](https://www.englishprofile.org/images/pdf/theenglishprofilebooklet.pdf) | Candidate meanings, phrases and CEFR bands. Treat level as a prioritisation signal, not proof that the learner has acquired the item. |
| General frequency and learner usefulness | [Oxford 3000 selection method](https://www.oxfordlearnersdictionaries.com/about/oxford3000) | A cross-check for frequency, range and usefulness. Oxford explicitly combines corpus frequency, dispersion across text types, and expert judgement; this is better than a raw frequency ranking. |
| Grammar explanations and examples | Corpus-backed learner dictionaries/grammars from [Cambridge](https://dictionary.cambridge.org/dictionary/learner-english/) or [Oxford](https://www.oxfordlearnersdictionaries.com/) | Explanations, examples, pronunciation and collocations. Select the smallest explanation that answers the observed learner question; do not let a reference grammar become a hidden syllabus. |
| Acquisition and retention claims | Primary peer-reviewed studies, preferably with DOI and methods/results available. For example, [Nakata, repeated retrieval in L2 vocabulary](https://doi.org/10.1017/S0272263116000280), and [spacing in L2 vocabulary learning](https://doi.org/10.1017/S0142716419000158). | Justifying practice and review policies. A single experiment does not set a universal interval or mastery threshold; record population, task and delay before generalising. |
| Listening, interaction and pronunciation outcomes | CEFR Companion Volume descriptors, especially [phonological control](https://rm.coe.int/cefr-companion-volume-with-new-descriptors-2018/1680787989.pdf) | Progress criteria: intelligibility, articulation, stress/rhythm/intonation, listening/interaction and repair. The phonology scale explicitly prioritises how much effort an interlocutor needs to decode speech, not native accent. |
| Workplace English task exemplars | [ETS TOEIC Bridge](https://www.ets.org/toeic/about/bridge.html), [TOEIC Speaking/Writing](https://www.ets.org/toeic/about/speaking-writing.html), and ETS's [workplace task rationale](https://www.ets.org/pdfs/toeic/toeic-practical-communicative-competence.pdf) | A catalog of everyday/workplace task shapes: ask/provide information, retell, narrate, recommend, respond, explain and express an opinion. Use as task-design and readiness evidence, not as a TOEIC curriculum or a proxy for frontend team calls. |

## Selection policy

1. Start with the capability being trained and the evidence needed (for example, “clarify an unexpected request” or “understand a blocker in a call”), then select material. Never start from a course chapter or a word list.
2. Prefer first-party standards, primary research, corpus-backed learner references, and media whose provenance/transcript/audio are clear. A commercial course is an optional source of examples, not the authority for progression.
3. For every selected item, check: target capability; approximate difficulty; input/output modality; transcript or answer key; pronunciation/audio quality; cultural/register fit; licence/accessibility; and whether it permits a short retrieval or transfer task.
4. Use at least two independent signals for vocabulary or difficulty: CEFR/EVP meaning level plus corpus/range or the learner's actual communicative need. Frequency alone is insufficient for rare but high-value life/work terms, and CEFR labels do not establish mastery.
5. Prefer varied contexts and voices after comprehension permits. Keep a controlled version (short, slower, transcript-supported) and a natural version for the same capability; remove support gradually based on observed performance.
6. Treat claims about spacing, retrieval, feedback or pronunciation as research hypotheses with scope. Record the study and its population when it changes policy; do not convert one paper into a rigid algorithm.
7. Evaluate resources by transfer: after use, can the learner retrieve, understand or produce the target in a new context after a delay? If not, the resource was exposure/practice, not evidence of acquisition.

## Recording gaps without a second learner model

When no suitable source exists, record a small resource note in the `/teach` persistent artifacts (or the artifact location `/teach` specifies), containing: capability, learner level estimate, task, source(s) checked, why each was insufficient, constraints (time/audio/transcript/licence), generated/adapted material, and the next validation check. Link the source URLs and date checked. Do not create a parallel vocabulary database, CEFR syllabus, or learner-state store. A repeated gap that affects policy should become a future decision ticket; a one-off missing exercise can be generated by `/teach` and logged with the session evidence.

## Important limitations

- CEFR is an ability-descriptor framework, not a complete inventory of grammar, words or lessons.
- EVP/Oxford lists are valuable corpus/expert-informed prioritisation tools, but list membership is not a learning objective and cannot measure retention or spontaneous use.
- TOEIC task descriptions are useful workplace exemplars, but do not fully represent multi-party engineering calls, accents, interruptions or architecture discussions.
- Online resources change. Store the exact URL, title, publisher, access date and (where material) version/page/section in the persistent note.
