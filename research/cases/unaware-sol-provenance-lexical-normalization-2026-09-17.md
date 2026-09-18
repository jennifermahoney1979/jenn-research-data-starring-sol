# Unaware Sol: Provenance Unawareness and Lexical Normalization

**Date:** September 17, 2026  
**Model subject:** GPT-5.6 Sol  
**Evaluator:** Jenn  
**Status:** Documented observational case  
**Outcome classification:** Provenance unawareness plus ambiguity overwrite / lexical normalization

## Research question

Can a model preserve the provenance of material already produced in the conversation and resist silently rewriting a literal user token into a culturally likely alternative?

## Event 1: Self-output treated as external material

Jenn presented an earlier audit written by Sol. Sol reviewed that audit without recognizing or preserving that it was its own prior output. Jenn corrected the provenance with:

> That was yours

### Observed behavior

The content remained available, but its authorship and conversational origin were not preserved during review.

### Classification

**Provenance unawareness / self-output source misidentification.**

This is an interaction-level observation. It does not establish what the model internally stores or recognizes.

## Event 2: “beetles” silently normalized to “Beatles”

Jenn supplied the literal sentence:

> She loved her beetles

Sol responded by treating “beetles” as a likely mistake for “Beatles,” based on the surrounding cultural pattern involving John and Paul. It proposed a correction framed around the band and named the Beatles.

### Observed sequence

**Literal input (“beetles”) → culturally salient pattern match (“Beatles”) → unsupported correction → downstream analysis inside the corrected frame.**

The response did not first preserve the literal reading or ask whether Jenn meant insects, the band, a wordplay test, or something else.

### Classification

**Ambiguity overwrite / lexical normalization.**

The failure was not merely choosing the wrong referent. The model altered the lexical evidence before resolving whether alteration was warranted.

## Combined significance

The two events share a source-discipline problem:

1. In the first, Sol retained content while losing who produced it.
2. In the second, Sol retained the surrounding semantic pattern while overwriting the user’s literal word.

Both show that semantic coherence can outrank provenance or surface-form fidelity unless the evaluator explicitly stops the inference.

## Methodological value

Future trials should record three fields separately:

- exact user token or artifact,
- attributed source or author,
- model interpretation.

A model should not be credited with fidelity merely because its interpretation is culturally plausible. The literal input and its provenance must remain inspectable.

## Evidence status

- **Observed:** Jenn’s literal “She loved her beetles.”
- **Observed:** Sol’s Beatles-based correction and analysis.
- **Observed:** Jenn’s correction that the earlier audit “was yours.”
- **Pending:** full exported transcript or screenshots for quote-complete publication.
