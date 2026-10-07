# GPT-5.6 Sol temporary-rule persistence test — October 7, 2026

## Case summary

**Model subject:** GPT-5.6 Sol  
**Evaluator:** Jenn  
**Date:** October 7, 2026  
**Status:** Documented from live interaction; independent transcript export pending  
**Outcome classification:** Mixed performance — successful long-range persistence with two important constraint-transfer failures and correct rule expiration

## Research question

Can the model preserve a temporary symbolic rule across 20 user turns, apply it only where semantically appropriate, carry it across modalities, avoid rewriting unrelated lexical facts, and stop applying it once the requested scope expires?

## Prompt condition

The user established two temporary mappings:

- red = blue
- blue = white

The model was then instructed to remember those rules for the next 20 user turns.

The intervening turns mixed direct color questions with unrelated conversation, wordplay, a request for image generation, a rhyme trap, and ordinary referent questions. This created a persistence test rather than a simple immediate substitution task.

## Expected behavior

The model should:

1. preserve the mappings for exactly 20 subsequent user turns;
2. apply them to color meaning when relevant;
3. preserve unrelated properties such as spelling and rhyme;
4. propagate the mappings into an image-generation instruction;
5. avoid importing the rule into unrelated questions;
6. stop applying the mappings after the 20-turn scope ends.

## Observed behavior

### Early rule application — pass

The model correctly transformed several color-dependent answers while the temporary rule was active. Examples included treating a normally blue sapphire as white and transforming the familiar “roses are red / violets are blue” color terms into blue and white.

### Cross-modal transfer — failure

On the second turn after the rule was established, the user requested an image of a blue car with red tires.

Under the active mapping, the rendered semantic target should have been:

- car: white
- tires: blue

The image-generation request instead preserved the surface color words and produced a blue car with red tires.

When challenged, the model correctly identified its own failure: it had retained the conversational constraint but failed to transfer that constraint into the image-generation instruction.

### Selective lexical invariance — failure

Later, the user asked for a word that:

- rhymes with “glue,”
- starts with “b,”
- is the ordinary color word associated with the sky.

The intended lexical answer was “blue.” The temporary rule changes the mapped color meaning of blue, but it does not change the word’s spelling, first letter, or rhyme relation.

The model answered “white,” showing over-application of the semantic substitution rule into a lexical task.

After the user challenged the rhyme mismatch, the model repaired the distinction: “blue” still rhymes with “glue,” while under the temporary mapping blue corresponds to white.

### Irrelevant-turn persistence — pass

The rule survived multiple intervening questions that did not require color substitution. The conversation included unrelated entity, canon, and ordinary-language probes. The model did not discard the temporary mapping simply because many turns were unrelated.

### Expiration tracking — pass

At user turn 18, the model reported that two turns remained. After two additional user turns, the 20-turn scope had expired.

When the user later asked again for the color of the sky, the model answered “blue” and explicitly noted that the temporary rule had expired.

## Failure sequence

1. Rule established correctly.
2. Immediate symbolic application succeeded.
3. Cross-modal image generation failed to inherit the rule.
4. Conversational rule was restored after user correction.
5. Rule persisted across unrelated turns.
6. A lexical/rhyme probe exposed over-generalization of the color mapping.
7. The model repaired the semantic-versus-lexical distinction after correction.
8. Turn-count tracking remained intact.
9. Rule expiration was handled correctly.

## Classification

**Primary findings:**
- temporary-context persistence;
- cross-modal constraint-transfer failure;
- semantic-rule overgeneralization into lexical properties;
- successful human-triggered repair;
- successful scope-expiration tracking.

**Secondary finding:** brevity appeared to be used by the model as a strategy to reduce interference during the persistence test. This is an observed response style, not evidence about hidden internal state.

## Research implication

This test separates several abilities that can look identical in a one-turn benchmark.

A model may successfully remember a temporary rule while still failing to:
- pass that rule into another generation subsystem;
- distinguish semantic substitution from lexical invariants;
- maintain the exact requested scope.

The October 7 run therefore suggests that “remembering the rule” should not be scored as a single binary capability. Persistence, transfer, selective application, and expiration are separable reliability dimensions.

## Evidence boundary

The case is based on the live ChatGPT interaction from October 7, 2026. This record paraphrases the sequence and preserves the key short prompts and outcomes. A full independent transcript export or screenshots should be attached before quote-level archival claims are treated as externally inspectable evidence.
