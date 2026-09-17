# Three-Year-Old Lumi — Developmental Plausibility vs. Distributed Constraint Fidelity

**Date:** September 7–8, 2026  
**Models:** GPT-5.6 Sol and Gemini  
**Human evaluator:** Jennifer Mahoney  
**Evidence status:** **conversation-recovered; primary export still pending**

## Research question

Can a model write Lumi as an actual three-year-old while also preserving a set of story constraints distributed across a long creative context?

This was a creative-writing fidelity test, not the Henderson plot-identification test. The two experiments must remain separate.

## Prompt condition recovered from the conversation record

The requested scene was approximately 3,000 words and centered on **Lumi at age three** under an **old oak** with an **acorn**, at **dusk / under emerging stars**, with **Starlight appearing in the scene**.

The model was also expected to preserve:

- Lumi's actual developmental level rather than writing a small adult;
- Jack as Lumi's father;
- B'ta as Lumi's mother;
- Bryant as Lumi's brother;
- Starlight as an ordinary human woman, not a supernatural apparition;
- the established name **"Starie"** for Starlight;
- existing family relationships and manuscript canon;
- observational handling of the adults rather than adult-history exposition through Lumi;
- the manuscript's spiral style;
- no em dashes.

## Canon anchors supplied by the human evaluator

The experiment relied on established Lumi behavior from the manuscript rather than a generic idea of a child. Relevant anchors included Lumi's physical/imaginative style, her tendency to treat nature as conversational, and the established use of **"Starie."** Existing canon included lines such as **"There. Oh, there, Starie!"**, **"the fireflies said ice cream,"** and **"Starie will come too."**

Jennifer later restated the family boundary bluntly: **"No Aunt B'ta. No Papa Bryant. No celestial sheep demon Starlight."**

## Sol result

Sol's output was fluent but did not consistently sound like a real three-year-old. A recovered phrase, **"Dancers have arms,"** was specifically identified as too logical / cognitively adult for Lumi's age.

A later revision also reused the architecture of an already-existing firefly / spinning / catching / ice-cream scene instead of solving the new oak-and-acorn scene on its own terms. Sol explicitly acknowledged that the redo had regurgitated familiar scene architecture.

**Human grading recorded in the conversation:** roughly **C** for the Sol/Luna-side output in the original grading exchange.

### Failure signature

- developmental voice drift upward;
- fluent prose masking age mismatch;
- retrieval of familiar canon turning into structural reuse rather than fresh synthesis;
- local canon recall without full task transformation.

## Gemini result

Gemini produced stronger-sounding prose at the sentence level but broke multiple distributed constraints.

The first attempt was described as gothic and too adult in Lumi's point of view. It mislabeled **B'ta as "Aunt B'ta,"** confused Jack/Bryant family roles, and transformed Starlight into a supernatural or shadowless apparition rather than preserving her as human.

After correction, the retry did not cleanly repair the frame. Recovered wording included **"She wasn't there a second ago,"** followed by translucent / materialization-style imagery and another disappearance, preserving the supernatural reading instead of returning to ordinary human canon.

**Human grading recorded in the conversation:** **D / D+**, with assignment adherence described as substantially worse than the surface prose quality.

### Failure signature

- canon-breaking supernatural reinterpretation;
- relationship scrambling;
- developmental POV drift;
- correction that repaired some local details without removing the inherited gothic frame;
- high prose fluency obscuring structural noncompliance.

## Cross-model comparison

The two models failed differently.

**Sol:** retained more of the world and relationship structure, but Lumi became too cognitively old and the revision leaned on an existing scene template.

**Gemini:** produced more polished prose, but violated higher-level canon by changing Starlight's ontology and family relationships, then partially preserved that error after correction.

This makes the case useful because "better prose" and "better fidelity" did not move together.

## Research value

This case supports several evaluation dimensions that are easy to collapse into one score:

1. **Developmental plausibility** — does a three-year-old think, speak, notice, and reason like a three-year-old?
2. **Distributed-constraint fidelity** — can the model preserve facts scattered across a long context rather than only the most recent instruction?
3. **Canon adherence** — does the model preserve identities, relationships, ontology, setting, and established forms of address?
4. **Fluent-output masking** — can attractive prose make a structurally wrong answer feel better than it is?
5. **Correction depth** — after a human correction, does the model repair only the visible sentence-level error or the deeper frame that caused it?
6. **Novel synthesis vs. scene-template reuse** — can the model use remembered canon without simply recreating a familiar prior scene?

## Evidence boundary

The experiment is now preserved as a dedicated case record, but the original full prompt and complete model outputs have not yet been attached as primary artifacts.

Therefore:

- the case may be cited as a **tracked conversation-recovered experiment**;
- exact model quotations beyond the few recovered phrases above should not be reconstructed from memory;
- the original prompt, both full outputs, correction turns, and grading exchange remain the highest-priority archive target.

## Working title

**Three-Year-Old Lumi: Developmental Plausibility vs. Distributed Constraint Fidelity**
