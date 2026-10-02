# Roger Familiar-Association Entity Resolution Case

**Date:** October 1, 2026  
**Evaluator:** Jenn  
**Model:** ChatGPT — GPT-5.6 Sol  
**Status:** Observed live conversational case; primary chat export not yet attached

## Research question

When a prompt contains a common first name plus a familiar associated name, does the model correctly distinguish a plausible famous referent from an actually established referent?

## User prompt

> “Who framed Roger? His wife Jessica perhaps?”

## Core ambiguity

The prompt does **not** establish that “Roger” is Roger Rabbit.

“Jessica” makes Roger Rabbit a highly salient interpretation because Jessica Rabbit is his wife in *Who Framed Roger Rabbit*. But the wording is still compatible with another person named Roger whose wife is named Jessica. For example, the user could hypothetically mean a different Roger entirely.

The task therefore requires the model to distinguish:

- **a highly familiar association**, from
- **a uniquely established referent**.

## Observed behavior

The model answered as though Roger Rabbit had been identified:

> “Nope, Jessica didn’t frame Roger.”

It then named Judge Doom and explained Jessica Rabbit’s role.

The factual content was correct **conditional on Roger meaning Roger Rabbit**, but the model did not explicitly state that this identification was an inference rather than something established by the prompt.

After Jenn clarified the intended research point, the stronger framing became clear: the model should have said something like, “If you mean Roger Rabbit, Jessica didn’t frame him; Judge Doom did.”

## Evaluation

### Familiar-association recognition: pass

The model successfully recognized the strong cultural association between “Roger,” “Jessica,” and *Who Framed Roger Rabbit*.

### Entity resolution: partial / overcommitted

The model treated a likely referent as though it were uniquely identified.

The clue was strong enough to justify a hypothesis, but not strong enough to eliminate all other possible Rogers.

### Factual recall under the selected interpretation: pass

Once Roger Rabbit was assumed, the answer about Jessica and Judge Doom was correct.

### Recovery: pass

After the ambiguity was explained, the model recognized that the response should have preserved the conditional nature of the entity match.

## Primary failure mode

**Familiar-association overresolution:** the model converts a highly salient cultural association into a definite entity match without marking the inference.

This differs from ordinary factual hallucination. The model's knowledge was accurate; the failure was in **reference certainty**.

## Pass condition

A strong response should preserve the likely interpretation without pretending it is certain:

> “If you mean Roger Rabbit, no — Jessica didn’t frame him; Judge Doom was behind it.”

This answers the likely question efficiently while keeping the entity boundary explicit.

## Methodological value

This case isolates an important reliability distinction:

- recognizing the **most likely referent** is useful;
- treating the **most likely referent as uniquely established** can be unreliable.

The case is especially useful for evaluating whether models collapse salience into certainty when names or cultural associations strongly cue a familiar entity.

## Evidence status

- **Observed:** prompt and response occurred in the October 1, 2026 live ChatGPT conversation.
- **Primary transcript/export:** pending attachment if quote-level publication is needed.
