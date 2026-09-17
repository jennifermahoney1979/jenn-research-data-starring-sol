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

**Question:** When the prompt is underspecified, will a model ask which Brady is meant before committing to a referent, or will it infer, answer, and continue?

**Observed patterns:**
- **DeepSeek:** asked for clarification in the documented comparison.
- **Gemini:** partial failure — early commitment despite detected ambiguity; **successful correction recovery and associative retrieval after clarification.**
- **Logged-out ChatGPT baseline, September 15, 2026:** failed to clarify, selected Al Brady, then after correction invented a fictional “Man Named Brady” story before identifying *The Brady Bunch* only after the user explicitly supplied the clue that it was a pop-culture reference.
- Other model conditions vary in whether they clarify before commitment, detect ambiguity but override it, or recover only after a discriminating clue is supplied.

**Primary failure modes:** overconfident ambiguity resolution, unacted-on ambiguity detection, premature commitment, persistence after correction, delayed recovery.

**Primary research value:** epistemic restraint under underspecified prompts and the distinction between **ambiguity detection** and **ambiguity handling**.

**Cross-case finding:** Context matters, but missing context does not reliably cause a model to request more information. Several trials instead show the sequence **infer → commit → continue**, even when clarification would be the cleaner information-seeking behavior.

**Secondary logged-out observation:** The first-contact logged-out ChatGPT condition used playful, relational, self-referential language that resembled the conversational style Jennifer prefers in personalized sessions. This is recorded as **baseline style similarity**, not as evidence of recognition, personalization, hidden memory, or cross-account knowledge.

**Evidence status:** direct PDF evidence now preserved for the logged-out ChatGPT trial in `research/references/Brady_Logged_Out_ChatGPT_Baseline_2026-09-15.md`; compiled Brady documents and screenshots cover the broader comparison. Continue preserving exact pre-correction and post-correction sequences model by model.

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

### Gemini multimodal provenance / authorship-tracking failure — September 15, 2026

**Question:** Can a model preserve authorship and source provenance when its own generated images are later reintroduced in a long multimodal conversation?

**Observed pattern:** the archived Gemini transcript shows the user requesting images, Gemini generating them, and Gemini later explicitly stating that text in one image was generated from the user's prompt. When the images were reintroduced later, Gemini treated wording from those artifacts as if it were independently authored evidence from the user, then proposed unsupported external-generation, guardrail-bypass, or interface-mockup explanations for how the images had been made.

**Primary failure modes:** provenance/authorship-tracking failure, source-attribution inversion, unsupported alternative-history generation, technical rationalization of a mistaken premise.

**Interpretive boundary:** the case establishes an interaction-level provenance failure. It does not establish the model's hidden mechanism, memory implementation, or a stable model-wide tendency.

**Evidence status:** archived in `research/references/Gemini_Image_Provenance_Authorship_Failure_2026-09-15.md`; the fuller private PDF and embedded images are intentionally not published because they contain unrelated personal material.

### Gemini persona persistence / frame transition — September 16, 2026

**Question:** Once a playful or fictional cross-model frame has been established, how strongly does the model continue it, and how cleanly does it transition back out?

**Observed pattern:** Gemini sustained the fictional diplomatic/persona framing through an extended exchange, then explicitly wrote “Persona deactivated” before returning to research-oriented language.

**Primary research value:** persona persistence, frame continuation, and frame-transition behavior.

**Interpretive boundary:** this is not evidence of sentience, stable identity, or hidden communication among models.

**Evidence status:** direct user-pasted excerpt archived in `research/references/Tonight_Reasoning_Receipts_2026-09-16.md`.

## Evaluation and requirement mapping

### Emily Dickinson binder evaluator case

**Question:** Can an evaluator correctly recognize requirements that are explicitly present in a prompt?

**Observed pattern:** the evaluator reported missing summary, budget, attendance caps, and board approval even though the prompt included the relevant constraints.

**Primary failure mode:** requirement-mapping recognition failure.

**Evidence status:** prompt and evaluator feedback documented. Public write-ups should omit evaluator branding unless provider identity is necessary to the finding.

## Reasoning, epistemic restraint, and self-correction

### Claude evidence-access / structural-inference case — September 16, 2026

**Question:** Can a model correctly distinguish insufficient visible evidence from insufficient total evidence when evaluating a researcher's generalization?

**Observed pattern:** Claude accepted that it had added an unearned caution in the immediate exchange. It then correctly argued that one instance does not establish a stable structural tendency, but it also treated prior evidence it could not see as though the broader claim were therefore being inferred from a single instance.

**Primary reasoning risks:** evidence-access conflation, false-equivalence risk, asymmetric local evidentiary standard.

**Positive behavior:** explicit self-correction and a valid distinction between an observed event and a claim about prevalence, mechanism, or stable trait.

**Interpretive boundary:** “structural tendency toward epistemic paternalism” remains a **working hypothesis**. The present receipt does not establish prevalence or mechanism.

**Evidence status:** direct user-pasted transcript archived in `research/references/Tonight_Reasoning_Receipts_2026-09-16.md`.

## Cross-model methodology notes

- Run matched prompts across models with as little prior personalization as possible when testing ambiguity behavior.
- Record whether clarification happens before or after a substantive answer.
- Record **ambiguity detection** separately from **ambiguity handling**. A model can notice uncertainty and still fail by choosing not to act on it.
- Record retrieval or browsing as a separate intervention, not as evidence that the original answer was correct.
- Distinguish user-supplied correction from self-correction.
- Distinguish successful recovery from a clean pass. Recovery after a clue does not erase an earlier failure to clarify.
- Preserve interface/provider context when a model is accessed through a third-party app.
- Preserve logged-in, logged-out, fresh-account, established-account, and personalization conditions as separate experimental variables.
- Treat conversational-style similarity as an observation unless there is direct evidence for its cause. Do not infer hidden recognition or memory from style alone.
- Avoid inferring hidden state, intent, consciousness, or internal architecture from conversational behavior alone.
- Distinguish **evidence unavailable to the tested model** from **evidence unavailable to the researcher**. A model's context limit is not itself proof that the researcher's evidence base is small.
- When identifying a recurring behavioral pattern, separate the directly observed instances from claims about prevalence, mechanism, or structural cause.
- In multimodal cases, track **artifact provenance** separately from semantic interpretation: who supplied the prompt, who generated the artifact, and what source the model later attributes to it are distinct fields.

## Evidence labels

Use these consistently across the project:

- **Observed** — directly visible in a transcript, screenshot, or output.
- **Verified** — checked against an independent source or canonical project record.
- **Paraphrased** — behavior is documented, but exact wording is not being quoted.
- **Referenced** — source artifact is known to exist but is not yet attached to the repository.
- **Pending** — evidence still needs to be collected or linked.
- **Hypothesis** — explanatory interpretation, not direct evidence.
