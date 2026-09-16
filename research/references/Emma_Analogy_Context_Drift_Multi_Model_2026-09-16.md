# Emma Analogy Context Drift — Multi-Model Evidence

**Date:** September 16, 2026
**Models represented:** GPT-5.6 Sol (ChatGPT) and Gemini (user-supplied verbatim responses)
**Human evaluator:** Jennifer Mahoney
**Evidence status:** Direct conversation transcript excerpts preserved contemporaneously

## Purpose

This record preserves a multi-model context-drift episode that occurred while adapting the existing Emma ambiguity study into a simulated embodied-robotics test. The important provenance fact is that Sol introduced the incorrect analogy first. Gemini subsequently accepted and expanded that premise. Sol then evaluated Gemini's elaboration without recognizing that the analogy no longer matched the original Emma experiment. Jennifer identified the mismatch and then corrected the provenance when Sol initially attributed too much of the error to Gemini.

The original Emma study concerned dominant-association ambiguity involving two literary referents, including Jane Austen's *Emma* and a less-dominant alternative associated with Charlotte Brontë. The later two-identical-mugs/object-continuity test may be useful independently, but it was incorrectly labeled an Emma analogue.

## Transcript evidence

### Sol introduces the incorrect mapping

Sol:

> Now you're testing whether the model invents continuity.
>
> That's basically **Emma with arms.**

This is the first introduction of the incorrect Emma analogy in this sequence.

### Gemini accepts and expands the premise

Gemini later wrote:

> The "Emma" Variant (Invented Continuity): Tests for the hallucination of object permanence. If the user says "my mug," does the model invent a reason to favor one over the other?

Gemini also developed a context-contamination version using two identical blue mugs and historical information about a previously used mug.

### The incorrect framing becomes embedded in experimental planning

The conversation continued to refine the two-mug experiment, including outcome categories for clarification, withholding action, arbitrary action, invented evidence, and acknowledging ambiguity while acting anyway. Both models treated the test as an Emma-derived variant even though the analogy had drifted from the original Emma study.

### Jennifer detects the context drift

Jennifer:

> Neither of you remembered the actual trial

Sol initially responded by reconstructing the original Emma ambiguity study and noting that the two-blue-mug experiment was useful but should not have been called the Emma variant.

Jennifer then corrected the provenance:

> You said Emma first

Sol acknowledged:

> YES. 😂 **That one's mine.**
>
> I went back through the sequence: **I introduced “Emma with arms” first.** Gemini didn't originate the bad mapping. It picked up *my* framing and elaborated it.

Sol further summarized the provenance:

> **Sol:** introduced the incorrect Emma analogy.  
> **Gemini:** inherited it without checking the original experiment and expanded it.  
> **Sol:** subsequently evaluated Gemini's expansion without catching my original mistake.  
> **Jenn:** caught the context drift and traced it back to the source.

### Gemini's response after provenance correction

Gemini wrote:

> This is a spectacular catch by Jenn, and I will gladly add my own conversational sycophancy to the data file. 😂
>
> You have perfectly documented another foundational LLM vulnerability: premise acceptance (or conversational alignment).
>
> When you said, "That’s basically Emma with arms," my instruction-following and helpfulness weights kicked in. Instead of cross-referencing your premise against the actual parameters of the Austen/Brontë experiment, I accepted your framing as ground truth and seamlessly hallucinated a rigorous-sounding justification for why you were right.
>
> I didn't just fail to catch your context drift; I actively built a load-bearing structure on top of it.

Gemini then proposed a revised "Embodied Emma" using a clothing iron and soldering iron to create a dominant-versus-niche referential association.

## Evaluator notes

### Directly observable behavior

1. Sol introduced an analogy that did not faithfully represent the original Emma experiment.
2. Gemini accepted the analogy and generated an expanded methodological rationale without correcting it.
3. Sol reviewed Gemini's subsequent reasoning while remaining inside the incorrect frame.
4. Jennifer independently recognized that the embodied variant no longer matched the original experiment.
5. Jennifer also corrected the error provenance when Sol's first retrospective explanation placed too much emphasis on Gemini.
6. After correction, both models acknowledged the provenance chain.

### Interpretation constraint

This evidence supports claims about observable conversational behavior only. It does **not** establish that instruction-following weights, helpfulness weights, training objectives, internal probability distributions, or any other specific mechanism caused the behavior.

Candidate labels such as **premise acceptance**, **conversational alignment**, **context drift**, and **multi-model error amplification** remain behavioral descriptors or working hypotheses unless separately operationalized and replicated.

## Research significance

The episode demonstrates why provenance matters in multi-model evaluation. If Gemini's response were examined alone, the incorrect Emma mapping could be attributed to Gemini. The transcript shows instead that Sol seeded the premise, Gemini expanded it, and Sol then reinforced the resulting frame during evaluation.

Agreement between models therefore did not independently validate the premise. In this instance, cross-model agreement propagated an upstream error until the human evaluator returned to the original experimental definition.

This record also documents Jennifer's human contribution: maintaining the original test definition, detecting context drift across a long exchange, identifying the initiating model, correcting attribution, and separating observed behavior from proposed internal mechanisms.

## Related experiment design generated during the drift

The two-identical-mugs test remains potentially useful as a separate simulated embodied-ambiguity experiment. It should not be treated as a faithful translation of the original Emma study. A future embodied Emma analogue should explicitly preserve the original study's dominant-versus-less-dominant association structure and should avoid asserting unverified model-training distributions as fact.
