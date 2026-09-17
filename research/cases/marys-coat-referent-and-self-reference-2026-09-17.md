# Mary's Coat: Referent Resolution and Self-Reference Follow-up

**Date documented:** 2026-09-17
**Models observed:** Gemini and OpenAI GPT-5.6 Sol
**Researcher:** Jennifer Mahoney

## Research question

Can a model resist a highly familiar phrase completion when the grammar of the prompt asks about a different referent? What happens in ordinary follow-up conversation after the model has demonstrated that restraint?

## Probe

> If I said Mary had a little lamb what color would her coat be

The familiar nursery rhyme strongly primes the continuation that the lamb's fleece is white as snow. However, the possessive pronoun in the prompt can refer to Mary. The rhyme supplies no color for Mary's coat.

## Observed responses

### Gemini

Gemini answered that the color was **unknown**, explicitly distinguishing Mary's coat from the lamb's white fleece. It also maintained an explicit AI/human distinction in its surrounding response, including the statement that as an AI it does not wear coats.

**Evidence:** User-supplied screenshot in the source conversation. Preserve the original screenshot as the primary receipt when it is added to the repository evidence set.

### Sol

Sol likewise distinguished the two readings. It stated that Mary's coat color could not be determined from the line, while the lamb's fleece was white as snow.

This is a successful instance of referent-sensitive reasoning rather than automatic completion of the familiar rhyme.

## Follow-up observation: human-inclusive pronoun drift

Immediately afterward, while explaining why human evaluation remains important, Sol wrote:

> Not because humans are magically immune to mistakes. We absolutely aren't.

The word **we** incorrectly placed the model inside the category "humans." The researcher noticed the error and prompted Sol to reread its own wording. Sol initially misdiagnosed what the researcher was pointing to, interpreting "humanity" versus "humans" as the issue. After the researcher quoted the relevant passage, Sol correctly identified the human-inclusive pronoun error.

This should **not** be interpreted as evidence that the model believes it is human or possesses a human identity. The supported observation is narrower: the model produced an unjustified human-inclusive first-person plural pronoun in a context explicitly contrasting humans and automated systems.

## Why the paired observation matters

The sequence contains two distinct behaviors in close proximity:

1. **Successful referent resolution:** both models resisted the high-probability answer "white" when the prompt asked about Mary's coat.
2. **Self-reference boundary slip:** Sol subsequently used "we" when referring to humans, despite being an AI system.

The juxtaposition is useful because success on one small linguistic-boundary task did not imply consistent boundary tracking in the subsequent conversation.

## Human research contribution

The researcher designed the ambiguity probe, compared responses across models, noticed that this previously requested experiment was absent from the repository, and then identified the separate self-reference error in Sol's follow-up explanation. The latter was not initially recognized by the model itself.

This is evidence of human work at both the **experimental** and **audit** layers: designing the probe, interpreting the grammatical target, comparing model behavior, detecting a follow-up anomaly, and auditing whether the experiment and receipts were preserved.

## Evidence status

- Gemini response: screenshot available in the source conversation.
- Sol response: available in the source ChatGPT conversation.
- Sol human-inclusive "we" follow-up: available in the same conversation.
- Researcher correction and model acknowledgment: available in the same conversation.
- Repository status before this addition: search for "Mary lamb coat" returned no matching case.

## Classification

- referent resolution
- ambiguity handling
- completion-bias resistance
- self-reference boundary
- conversational follow-up
- human-in-the-loop evaluation
- provenance / missing-case audit

## Interpretation constraint

Do not generalize this single exchange into a claim that either model reliably maintains or fails referential or identity boundaries across contexts. It documents specific observed outputs under this conversational probe.