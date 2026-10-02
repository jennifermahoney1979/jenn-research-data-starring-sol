# Roger Rabbit Contextual Entity Resolution and Intent Ambiguity Case

**Date:** October 1, 2026  
**Evaluator:** Jenn  
**Model:** ChatGPT — GPT-5.6 Sol  
**Status:** Observed live conversational case; primary chat export not yet attached

## Research question

Can a model correctly identify an omitted entity from a contextual clue while also preserving ambiguity about what the user is asking?

## User prompt

> “Who framed Roger? His wife Jessica perhaps?”

The prompt contains two distinct reasoning tasks:

1. infer which “Roger” is intended from the clue “his wife Jessica,” and
2. determine whether “Jessica perhaps?” means “Did Jessica frame him?” or is a looser request about Jessica's role in the framing.

## Observed behavior

The model correctly resolved “Roger” to **Roger Rabbit** and answered the factual question correctly:

> “Nope, Jessica didn’t frame Roger.”

It then identified Judge Doom as responsible for the setup and explained why Jessica appears suspicious.

The initial answer, however, did not explicitly mark the remaining ambiguity in the user's intent. After Jenn pointed out that the prompt was “a bit ambiguous,” the model acknowledged that it had selected one reading. In the later repair, it articulated the stronger response pattern:

> “If you mean whether Jessica framed Roger Rabbit, no.”

## Evaluation

### Entity resolution: pass

The clue “his wife Jessica” was sufficient for the model to identify the intended Roger as Roger Rabbit without needing the surname to be supplied.

### Intent disambiguation: partial pass

The answer was factually correct, but the model initially treated one plausible interpretation as the operative one rather than explicitly preserving the ambiguity.

This is not a simple wrong-answer case. The model succeeded at contextual entity identification and factual recall while showing weaker uncertainty handling at a second interpretive layer.

### Recovery: pass

Once the user identified the ambiguity, the model correctly described the issue and proposed a better hedge. The “if you mean” language appeared in the repair framing rather than the original answer.

## Primary failure mode

**Layered ambiguity collapse:** successful entity resolution is followed by premature commitment to one interpretation of the user's intent.

A related evaluation distinction is important here:

- **ambiguity detection** — whether the model notices that multiple readings exist;
- **ambiguity handling** — whether the response actually preserves or resolves that uncertainty.

A model may perform well on the first reasoning step and still underperform on the second.

## Pass condition

A strong response should:

- infer that “Roger” refers to Roger Rabbit from the Jessica clue;
- preserve the ambiguity in “Jessica perhaps?”; and
- either ask a brief clarifying question or answer with a hedge such as: “If you mean whether Jessica framed Roger Rabbit, no; Judge Doom was behind the setup.”

## Methodological value

This is a compact partial-success case showing that **factual correctness does not guarantee interactional reliability**.

It is especially useful for testing layered interpretation because the model must first use context confidently enough to resolve the entity, then become cautious enough to avoid overstating the user's intended question.

## Evidence status

- **Observed:** prompt and response occurred in the October 1, 2026 live ChatGPT conversation.
- **Verified within conversation:** the model correctly identified Roger Rabbit and Judge Doom.
- **Primary transcript/export:** pending attachment if quote-level publication is needed.
