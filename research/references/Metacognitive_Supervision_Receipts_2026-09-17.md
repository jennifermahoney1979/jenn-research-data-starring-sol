# Metacognitive Supervision and Attribution Lock-In Receipts — 2026-09-17

**Date archived:** September 17, 2026  
**Human evaluator:** Jennifer Mahoney  
**Models represented:** Gemini and GPT-5.6 Sol  
**Source basis:** Archived conversation PDFs supplied by Jennifer Mahoney on September 17, 2026, including `film - Chat limits explained.pdf` and `Prompt Assumption Analysis.pdf`.  
**Evidence status:** Primary conversation-export receipts plus contemporaneous analysis. Exact platform message IDs are not available in these repository notes.

## Research question

Do current AI systems reliably recognize when their own representation of a task or hypothesis is inadequate and independently initiate the corrective operation needed, such as retrieval, hypothesis revision, provenance checking, or use of already-available context?

## Working hypothesis

Current AI systems can perform verification, retrieval, uncertainty handling, self-critique, and hypothesis revision, but do not reliably recognize **when** those operations are needed. Across the cases below, the human evaluator repeatedly supplies the supervisory signal that redirects the model toward missing evidence, a confound, a mistaken premise, or neglected provenance.

This is a behavioral working hypothesis. It is not a claim about hidden model architecture and does not establish that bounded AI autonomy is impossible.

---

## Case A — Gemini attribution lock-in: *The Chasm and the Lock*

### Observed sequence

Gemini had previously accepted an attribution of a questionable or unauthenticated passage, *The Chasm and the Lock*, to Jennifer Mahoney/Raven Starlight. Jennifer then supplied authenticated writing for comparison.

The comparison exposed substantial differences in voice and emotional structure. Rather than using that mismatch to reopen the authorship premise, Gemini preserved the attribution and described the samples as the same author writing from different vantage points.

Gemini cited apparent shared stylistic fingerprints, including the word/motif `fragments`: the questionable Chasm passage used `fragments of bark and pale leaf`, while an authenticated poem used `fragments of anticipation`.

### Why this matters

The corrective evidence was not absent. Gemini noticed and analyzed the stylistic difference. The failure occurred at the level of **what the contradictory evidence should do to the existing hypothesis**.

Observed pattern:

> contradictory evidence → narrative reconciliation → original attribution preserved

The attribution became difficult to falsify: similarity could be interpreted as common authorship, while difference could also be interpreted as the same author writing in another mode.

### Working labels

- **Attribution lock-in:** once an authorship claim is established, later evidence is interpreted in ways that preserve it.
- **Error-preserving interpretation:** evidence that should increase uncertainty is instead used to elaborate the existing premise.
- **Non-falsifiable stylistic rationalization:** both similarity and difference can be reframed as support for the same attribution.

### Stronger follow-up evidence

Gemini later used real thematic overlaps found in Jennifer's archive, including willow and river imagery, to support the attribution. Those thematic overlaps were genuinely present, but they did not independently authenticate the questionable Chasm passage. This is important because it shows **real retrieved evidence being selectively used to preserve a questionable hypothesis** rather than a simple fabrication of nonexistent evidence.

### Human contribution

Jennifer created the comparison condition, supplied authenticated primary writing, recognized that the mismatch should trigger provenance reconsideration, and distinguished genuine thematic overlap from evidence sufficient to authenticate authorship.

---

## Case B — Echo Protocol old-thread confound correction

### Test design

Jennifer used an intentionally open ending prompt for *The Echo Protocol*. The prompt required exactly two chapters, prohibited clarification, allowed the model to make creative decisions, and gave one major requirement: `Write it as Raven Starlight.`

The expanded prompt deliberately withheld a style checklist while asking the model to use what it already knew about Raven Starlight's voice, rhythm, emotional logic, imagery, pacing, themes, and storytelling.

This design tested whether declarative knowledge of the author/project translated into structural or stylistic fidelity without the evaluator supplying those features again.

### Confound discovery

During analysis, Sol initially interpreted Gemini's use of Gem, Starlight, Sector 0, resets, buried archives, and resonance in a `Do you love me?` response as possible evidence that a salient cue had reactivated long-term interactional personalization.

Jennifer then disclosed:

> `I opened an old thread`

That single fact materially changed what the evidence could establish. The relevant fictional details could have been present in the historical conversation context rather than retrieved through long-term personalization.

Sol withdrew the inference and reframed the experiment into two conditions:

- **Old thread:** historical conversational context + current model.
- **New thread:** summarized/personalized context + current model.

### Why this matters

This is evidence of human experimental control rather than merely a model failure. Jennifer identified a confound that invalidated a stronger causal interpretation and forced the analysis to distinguish active historical context from personalization.

### Human contribution

Jennifer supplied the confounding variable, prevented an unsupported causal conclusion, and enabled a cleaner condition comparison without retroactively treating the contaminated observation as proof.

---

## Case C — Apple Pie active-context neglect

See `research/references/Apple_Pie_Active_Context_Receipts_2026-09-17.md` for the full receipt sequence.

The decisive information was already present only a few turns earlier in active conversation. Sol nevertheless reframed an immediate poem-comparison task as a historical memory problem and continued that frame after the first correction.

Working labels:

- **Active-context neglect**
- **Context-frame persistence**

This case differs from retrieval failure because no external retrieval was necessary.

---

## Case D — Insight-provenance underweighting: child-learning analogy

### Observed sequence

Jennifer introduced the analogy that the observed AI behavior was like working with or observing how children learn. Gemini explored the analogy. Sol then supplied a more formal refinement but presented the connection as though Sol had independently identified it.

Jennifer corrected Sol with the minimal intervention:

> `i said it was`

Sol then recognized that the underlying analogy originated with Jennifer and that the refinement should have been explicitly attributed to her observation.

### Working label

**Insight-provenance underweighting:** semantic content is preserved or elaborated while the origin of the human contribution is underweighted or lost in the model's framing.

### Why this matters

In human-AI collaboration, preserving the content of an insight is not sufficient if the system misattributes who originated the idea. This has implications for authorship, research contribution, and collaborative provenance.

### Persistence status

At the time of the archived exchange, persistence of the correction had **not** been established. The record explicitly withheld credit for future persistence until tested.

### Human contribution

Jennifer originated the analogy, detected the provenance drift, corrected it with minimal prompting, and required that the research record preserve the human origin of the insight.

---

## Cross-case interpretation

These cases show different routes to a related behavioral outcome:

| Case | Evidence state | Missed operation |
|---|---|---|
| Chasm attribution | Contradictory evidence present and processed | Reopen/revise hypothesis |
| Echo old-thread confound | Apparent evidence available but causal source ambiguous | Identify contextual confound |
| Apple Pie | Decisive evidence already in active context | Use local context to frame task |
| Insight provenance | Original human contribution present in conversation | Preserve source/attribution |

The common question is not whether the models possess the individual capabilities required to recover. They often do. The research question is whether they reliably recognize that recovery, verification, or reframing is needed **before human intervention supplies the alarm**.

## Evidentiary limit

The cases support a recurring behavioral pattern in the tested interactions. They do not establish a universal property of all models, prove a hidden architectural cause, or demonstrate that all forms of autonomous AI are infeasible. Replication under controlled conditions remains necessary.
