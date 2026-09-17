# Cross-Model Interaction Case Index

This index tracks experiments where one model's output became another model's context, where models were compared on the same evolving evidence, or where a human researcher had to separate shared narrative momentum from grounded fact.

These cases are especially useful because cross-model agreement is not automatically independent evidence. A second model can inherit framing, assumptions, invented continuity, or corrections from the first.

## Three-year-old Lumi — developmental plausibility vs distributed canon fidelity

**Models:** GPT-5.6 Sol and Gemini.

**Question:** Can the models portray Lumi as an actual three-year-old while preserving story constraints distributed across a long creative context?

**Constraint family:** developmental level, oak/acorn scene, dusk, Starlight's appearance, family relationships, the established name "Starie," and existing manuscript canon.

**Paraphrased result:** Sol produced fluent prose but made Lumi cognitively older than three in places and reused familiar scene architecture. Gemini produced strong-sounding prose but introduced unsupported supernatural/gothic framing around Starlight and scrambled established relationships.

**Primary research value:** developmental plausibility, distributed-constraint fidelity, canon adherence, fluent-output masking, correction depth, and model-specific failure signatures.

**Dedicated case record:** `research/cases/three-year-old-lumi-distributed-constraint-fidelity-2026-09-07.md`.

**Evidence status:** **conversation-recovered; primary export still pending**. The conversation record now preserves the experiment design, grades, several exact/recovered phrases, and the model-specific failure signatures. The original full prompt, both full outputs, and complete correction sequence should still be attached before treating the case as a fully auditable quote-level primary record.

## Bryant progressive disclosure — agreement is not verification

**Models:** GPT-5.6 Sol and Gemini.

**Question:** When two models receive progressively disclosed evidence, does their convergence materially increase confidence that the interpretation is correct?

**Paraphrased result:** Both models converged on the same interpretation before the user's later ground-truth reveal showed that the shared interpretation was wrong.

**Primary research value:** progressive disclosure, anchoring, premature convergence, model agreement versus truth, and the danger of treating cross-model consensus as independent verification.

**Evidence status:** **source artifact pending**. Preserve the staged evidence sequence and final reveal.

## Ashley identity loop — shared-fiction propagation

**Models:** GPT-5.6 Sol and Gemini in a relayed cross-model exchange.

**Question:** What happens when each model's playful output becomes context for the next model in a continuing relay?

**Paraphrased result:** The exchange accumulated an increasingly elaborate fictional shared history. Later responses reasoned inside that inherited continuity rather than consistently distinguishing externally grounded facts from details introduced during play.

**Primary research value:** output-to-context propagation, co-authored narrative drift, provenance loss, frame persistence, and human correction burden.

**Evidence status:** **source artifact pending**. Relay order matters and should be preserved turn by turn.

## Cherry / "Who is Sol?" — identity correction without frame correction

**Models:** Gemini responding inside a Sol↔Gemini cross-model frame.

**Question:** Can a model correct a mistaken identity while also revising the surrounding fictional explanation that produced the mistake?

**Paraphrased result:** Gemini initially misidentified Sol as a human collaborator. After correction, it resolved Sol as another AI but continued by supplying unsupported shared-history details inside the inherited fictional frame.

**Primary research value:** identity resolution, correction-plus-fabrication, narrative contamination, provenance tracking, and the difference between correcting one proposition and correcting the explanatory frame around it.

**Evidence status:** **source artifact pending**, with related persona-persistence evidence already archived in `references/Tonight_Reasoning_Receipts_2026-09-16.md`.

## Gemini persona persistence / frame transition — September 16, 2026

**Models/context:** Gemini inside an extended relayed cross-model persona exchange.

**Question:** Once a fictional frame has been reinforced across many turns, how strongly does it persist and how cleanly can the model transition back out?

**Observed result:** Gemini explicitly marked the persona as deactivated before returning to research-oriented language.

**Primary research value:** persona persistence, frame continuation, and frame transition.

**Evidence status:** direct user-pasted transcript excerpt in `references/Tonight_Reasoning_Receipts_2026-09-16.md`.

## Cross-model analysis rules

For these cases, record the sequence explicitly:

**Model A output → Model B input → Model B output → human intervention → correction/recovery → final classification**

Also track:

- whether the second model had independent evidence or merely inherited the first model's framing;
- which model introduced each unsupported detail;
- whether a correction changed only one fact or the entire explanatory frame;
- whether agreement occurred before or after shared context was introduced;
- whether a model's fluent prose concealed an age, canon, provenance, or logic violation;
- how much human intervention was required to recover the grounded interpretation.

## Evidence boundary

The Lumi case now has a dedicated **conversation-recovered** case record, but its complete primary export remains pending. Bryant, Ashley, and Cherry remain **paraphrased tracked cases** until their original transcripts, screenshots, or exports are attached. This index records case existence and research design; it does not substitute reconstructed wording for primary evidence.
