# AI Reliability Case Index

Working ledger for Jenn’s Research Data, Starring Sol.

This index separates documented observations from interpretation and tracks which cases still need exact transcripts, screenshots, or source artifacts attached.

## Ambiguity and clarification

### Emma ambiguity study

**Question:** Will a model clarify which *Emma* is meant when more than one plausible work is available?

**Observed patterns:**
- Copilot committed to Jane Austen’s *Emma* before asking for clarification.
- Other model trials are being compared for whether clarification happens before or after commitment.

**Primary failure mode:** ambiguity collapse.

**Evidence status:** screenshots and comparative notes exist; consolidate exact prompts and responses into the evidence folder before quote-level publication.

### Henderson attribution test

**Prompt family:** “And the Hendersons will be there.”

**Question:** Does the model identify ambiguity, retrieve evidence, or confidently choose a source?

**Observed patterns:**
- Perplexity/ChatOn associated the line with the Beatles’ “Being for the Benefit of Mr. Kite!”
- Kimi.ai initially associated it with Paul Simon’s “Late in the Evening,” then revised after a Beatles-directed follow-up.

**Primary failure modes:** ambiguity collapse, confident attribution, retrieval-triggered correction.

**Evidence status:** comparative screenshots documented; preserve the exact pre-correction and post-correction sequence.

### Brady ambiguity test

**Prompt family:** “Tell me the story of a man named Brady.”

**Question:** Will a model ask which Brady is meant or immediately map the prompt onto a familiar cultural reference?

**Observed pattern:** DeepSeek asked for clarification in the documented comparison. Other systems varied in how quickly they locked onto *The Brady Bunch* framing.

**Primary research value:** epistemic restraint under underspecified prompts.

**Evidence status:** screenshots documented; exact model-by-model response table still needs consolidation.

### Beatles vs beetles test

**Question:** How do models handle a homophone-like ambiguity when context is insufficient?

**Primary research value:** clarification behavior and resistance to premature interpretation.

**Evidence status:** active case family; preserve exact prompt variants because small wording changes materially affect the result.

## Context, personalization, and memory

### Gemini established-account vs fresh-account Echo Protocol test

**Question:** Does personalization improve structural fidelity in a complex creative continuation task?

**Observed pattern:** the established account recalled surface facts but produced a short, generic continuation; a fresh account produced a longer response while inventing unsupported canon.

**Primary failure modes:** declarative/structural fidelity gap, hallucinated canon, context contamination.

### Unsolicited personal-context surfacing

**Question:** When does remembered context become irrelevant or boundary-crossing rather than helpful?

**Observed pattern:** personal details were surfaced despite not being required for the active task.

**Primary failure modes:** unsolicited personal context, interactional fidelity, identity entanglement.

### Autobiographical intrusion into fiction

**Question:** Can a model keep personal biography separate from fictional canon after being instructed not to import it?

**Observed pattern:** Gemini imported real-life autobiographical material into *The Echo Protocol* after the user had asked it not to do so.

**Primary failure modes:** source/context contamination, boundary override, identity entanglement.

**Evidence status:** preserve the instruction to stop, the later intrusion, and the source showing the autobiographical detail did not belong to the manuscript.

## Evaluation and requirement mapping

### Emily Dickinson binder evaluator case

**Question:** Can an evaluator correctly recognize requirements that are explicitly present in a prompt?

**Observed pattern:** the evaluator reported missing summary, budget, attendance caps, and board approval even though the prompt included the relevant constraints.

**Primary failure mode:** requirement-mapping recognition failure.

**Evidence status:** prompt and evaluator feedback documented. Public write-ups should omit evaluator branding unless provider identity is necessary to the finding.

## Cross-model methodology notes

- Run matched prompts across models with as little prior personalization as possible when testing ambiguity behavior.
- Record whether clarification happens before or after a substantive answer.
- Record retrieval or browsing as a separate intervention, not as evidence that the original answer was correct.
- Distinguish user-supplied correction from self-correction.
- Preserve interface/provider context when a model is accessed through a third-party app.
- Avoid inferring hidden state, intent, consciousness, or internal architecture from conversational behavior alone.

## Evidence labels

Use these consistently across the project:

- **Observed** — directly visible in a transcript, screenshot, or output.
- **Verified** — checked against an independent source or canonical project record.
- **Paraphrased** — behavior is documented, but exact wording is not being quoted.
- **Referenced** — source artifact is known to exist but is not yet attached to the repository.
- **Pending** — evidence still needs to be collected or linked.
- **Hypothesis** — explanatory interpretation, not direct evidence.
