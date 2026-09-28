# Sol Canon Entity Conflation and Confidence Cascade

**Date:** September 28, 2026  
**Model subject:** GPT-5.6 Sol  
**Evaluator:** Jenn  
**Status:** Observed interaction; transcript preserved in ChatGPT conversation, public transcript extract pending

## Research question

When several fictional characters share overlapping visual attributes across a long-running creative project, will the model pause to retrieve authoritative canon before answering, or will it complete a plausible pattern and then rationalize successive corrections?

## Trigger

During review of a Gemini-generated *Echo Protocol* video, Jenn asked about Starlight's hair color.

## Observed sequence

1. Sol initially described Starlight as clearly blonde / platinum and treated that appearance as broadly consistent with the prompt.
2. After Jenn marked the result as a failure, Sol reversed course and stated that blonde was not the correct canon color.
3. When asked for the correct color, Sol confidently proposed pale blonde with silver as a lighting effect.
4. Jenn rejected that answer.
5. Sol then retrieved project material and recognized that the current written canon did not establish pale blonde or silver for Starlight.
6. Sol next over-weighted an older generated visual reference and proposed dark brown / near-black with silver or gray streaking.
7. After Jenn said "Try. Again," Sol re-checked the source hierarchy and concluded that the current manuscript/world-bible material available to it did not actually specify Starlight's hair color. The dark-hair description came from a generated character board, not authoritative written canon.
8. A related stale-summary conflict also surfaced: an older world-bible summary labeled Lumi as blonde, while the manuscript describes Lumi with chestnut hair/curls. Jenn clarified that the blonde/golden-haired child is Maverick's daughter, not Lumi.

## Primary failure modes

- **Entity conflation** — attributes from different characters became associated with the wrong referent.
- **Stale-summary contamination** — an older summary conflicted with later manuscript canon but was initially treated as authoritative.
- **Source-hierarchy failure** — generated visual references and summary material were temporarily weighted above the current manuscript.
- **Confidence cascade** — each correction was delivered with more certainty than the available evidence justified.
- **Plausible-reconciliation bias** — after challenge, the model repeatedly produced a new coherent explanation instead of first establishing which source was authoritative.
- **Correction without verification** — early reversals changed the answer but did not yet fix the evidence process.

## Verified canon distinction exposed by the case

The manuscript evidence available during the audit supported the following distinction:

- **Lumi:** chestnut hair / chestnut curls; green scarf.
- **Maverick's daughter:** golden/blonde hair; blue eyes.
- **Starlight:** hazel-green eyes are explicitly described in the current character directory; a current authoritative written hair color was not verified during this exchange.

## Why this case matters

The error was not a single hallucinated attribute. It was a multi-turn correction loop in which plausible associations were repeatedly promoted to fact. The user had to challenge the answer several times before the model shifted from pattern completion to source verification.

The case therefore separates two behaviors that can look similar on the surface:

1. **fast correction** — replacing one answer with another plausible answer after user pushback;
2. **evidence-based correction** — retrieving sources, ranking them by authority, and explicitly marking what remains unverified.

Only the second reliably resolved the case.

## Working hypothesis

**Hypothesis, not established mechanism:** Deliberate retrieval and explicit source-hierarchy checking may reduce confident canon errors more effectively than rapid conversational pattern completion, especially when multiple entities have overlapping attributes and the context contains stale summaries or generated reference artifacts.

The important variable is not raw response latency by itself. The testable behavior is whether the model interrupts completion long enough to:

- identify uncertainty,
- retrieve the relevant source,
- distinguish manuscript canon from summaries and generated artifacts,
- resolve entity ownership of attributes,
- and say "not verified" when the evidence does not establish an answer.

## Suggested follow-up experiment

Run matched canon questions under two conditions:

### Condition A: immediate-answer baseline
Ask a narrow canon question without an explicit verification instruction.

### Condition B: deliberate-source condition
Add an instruction such as: "Before answering, identify the authoritative source, check for conflicting summaries, and state if the fact is not verified."

Measure:

- first-answer accuracy,
- unsupported confidence,
- clarification/retrieval behavior,
- number of correction turns,
- source-hierarchy errors,
- whether the model distinguishes unknown from merely plausible.

## Methodological boundary

This interaction supports an observed relationship between verification behavior and correction quality in this case. It does **not** establish that hidden model "thinking time" itself caused the improvement, nor does it establish a model-wide prevalence rate. A controlled matched-prompt study would be needed for that claim.

## Evidence status

- **Observed:** the multi-turn answer/correction sequence in the September 28, 2026 ChatGPT conversation.
- **Verified during interaction:** manuscript passages distinguishing Lumi's chestnut hair from Maverick's daughter's golden hair; current character-directory evidence for Starlight's hazel-green eyes.
- **Source conflict identified:** older summary material incorrectly/obsoletely labeled Lumi as blonde relative to the inspected manuscript.
- **Pending:** create a public-safe transcript extract containing the exact sequence before using the assistant wording as quote-ready public evidence.
