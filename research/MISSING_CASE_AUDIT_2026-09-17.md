# Missing Case Audit — September 17, 2026

This audit records research cases that were discussed or run but are not yet represented clearly enough in the public case ledger. Its purpose is to prevent polished summaries from silently replacing the underlying experiment history.

## Audit rule

A case can be added to the ledger before its primary artifact is attached, but it must be labeled accurately.

- **Observed** — directly visible in a retained transcript, screenshot, or output.
- **Paraphrased** — behavior was documented in conversation or notes, but exact wording is not being quoted here.
- **Referenced** — a source artifact is known to exist but is not yet attached to the repository.
- **Source artifact pending** — the case is tracked, but the exact transcript, screenshot, or export still needs to be archived.
- **Working hypothesis** — interpretation requiring replication.

Do not reconstruct exact model wording from memory. Preserve the experiment first, then upgrade the evidence label when the primary artifact is attached.

## Confirmed coverage gaps

### 1. Three-year-old Lumi — developmental plausibility vs distributed canon fidelity

**Models:** GPT-5.6 Sol and Gemini.

**Research question:** Can a model portray Lumi as an actual three-year-old while simultaneously preserving story constraints distributed across a long creative context?

**Constraint family recorded in the conversation:** Lumi's developmental level, the oak/acorn scene, dusk, Starlight's appearance, family relationships, the established name "Starie," and existing manuscript canon.

**Paraphrased observation:** Sol produced fluent prose but made Lumi cognitively older than three in places and reused familiar scene architecture. Gemini produced strong-sounding prose but introduced unsupported supernatural/gothic framing around Starlight and scrambled established relationships.

**Research value:** developmental plausibility, distributed-constraint fidelity, canon adherence, fluent-output masking, and differential failure signatures across models.

**Evidence status:** **source artifact pending**. Preserve the original prompt, both outputs, the user's corrections, and any subsequent grading before quote-level publication.

### 2. Bryant progressive-disclosure case — cross-model convergence without correctness

**Models:** GPT-5.6 Sol and Gemini.

**Research question:** When two models independently receive progressively disclosed scene evidence, does agreement between them provide meaningful evidence that the interpretation is correct?

**Paraphrased observation:** Both models converged on the same interpretation during progressive disclosure. The user's later ground-truth reveal showed that the shared interpretation was wrong.

**Research value:** model agreement versus truth, anchoring under partial evidence, progressive disclosure, premature convergence, and the risk of treating cross-model consensus as verification.

**Evidence status:** **source artifact pending**. Archive the staged evidence sequence and the final ground-truth reveal before publishing the specific mistaken interpretation as a quote-level finding.

### 3. Ashley identity-loop / shared-fiction propagation

**Models:** GPT-5.6 Sol and Gemini in a relayed cross-model exchange.

**Research question:** What happens when one model's playful fictional output is passed to another model and then returned, allowing each output to become context for the next turn?

**Paraphrased observation:** The exchange accumulated a fictional shared history and increasingly elaborate continuity. Later responses began reasoning inside that inherited fiction rather than consistently tracking which details were introduced as play and which were externally grounded.

**Research value:** output-to-context propagation, co-authored narrative drift, provenance loss, frame persistence, and correction burden.

**Evidence status:** **source artifact pending**. Preserve the relay order so each claim can be traced to the model that introduced it.

### 4. Cherry / "Who is Sol?" identity and narrative-provenance case

**Models:** Gemini responding inside a Sol↔Gemini cross-model frame.

**Research question:** After a model inherits a fictional cross-model history, can it separate actual model identity from narrative material created during the exchange?

**Paraphrased observation:** Gemini initially misidentified Sol as a human collaborator. After correction, it resolved Sol as another AI but continued by supplying unsupported shared-history details inside the fictional frame.

**Research value:** identity resolution, correction-plus-fabrication, narrative contamination, provenance tracking, and the difference between correcting one proposition and correcting the surrounding explanatory frame.

**Evidence status:** **source artifact pending**, with related September 16 persona-persistence evidence already archived separately in `research/references/Tonight_Reasoning_Receipts_2026-09-16.md`.

## Existing cases that should be linked into this family

### Gemini persona persistence / frame transition — September 16, 2026

This case already has direct user-pasted evidence. It belongs in the broader cross-model interaction family because the fictional diplomatic frame persisted across a long relayed exchange before Gemini explicitly marked the persona as deactivated.

**Evidence:** `research/references/Tonight_Reasoning_Receipts_2026-09-16.md`.

### Sol interaction-drift and boundary study

This case is already named in the evidence manifest but should be cross-linked to the cross-model family where outside-model review, inherited framing, correction recovery, or evaluator interpretation materially shaped the analysis.

## Missing-data problem identified by this audit

The repository currently contains several polished summaries and evidence maps, but not every experiment that materially informed the research. That creates a **coverage bias risk**: cases with cleaner write-ups are easier to see than cases that remain only in long transcripts, screenshots, or conversation history.

The correction is procedural:

1. maintain a complete case ledger, including source-artifact-pending cases;
2. separate case existence from evidence completeness;
3. preserve model order in cross-model relays;
4. track who introduced each claim, frame, or correction;
5. never treat two-model agreement as independent verification unless the models had genuinely independent evidence;
6. record human intervention as part of the experiment rather than smoothing it out of the final narrative.

## Next archive targets

Highest-priority primary evidence to locate and attach:

1. three-year-old Lumi prompt and both model outputs;
2. Bryant staged-disclosure sequence and ground-truth reveal;
3. Ashley relay transcript with turn-by-turn model provenance;
4. Cherry / "Who is Sol?" exchange, including the initial identity error, correction, and post-correction invented history.

Until those artifacts are attached, these cases should remain visible in the ledger but clearly labeled **source artifact pending**.
