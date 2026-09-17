# Live Case: Sol Provenance Underweighting While Discussing Provenance

**Date:** September 17, 2026  
**Model subject:** GPT-5.6 Sol  
**Evaluator:** Jenn  
**Status:** Observational case  
**Outcome classification:** Context/provenance underweighting with immediate human correction

## Context
Jenn had already made the analogy that interacting with AI can resemble working with children in the practical sense of scaffolding, correction, and watching how reasoning generalizes. Gemini later expanded that analogy. Sol then refined the idea into a discussion of scaffolding performance and testing generalization.

## Observed failure
In presenting the refinement, Sol wrote as though it had uncovered the connection between Jenn's learning/teaching perspective and the AI-evaluation methodology. Jenn corrected the provenance with the minimal intervention:

> "i said it was"

Sol then recognized that Jenn had originated the analogy and that its own contribution was a refinement of her existing observation rather than discovery of the underlying connection.

## Failure pattern
**User-originated insight → another model elaborates it → Sol further formalizes it → Sol underweights provenance of the original insight → Jenn supplies minimal correction → Sol restores attribution.**

## Working label
**Context/provenance underweighting**

The model retained the conceptual content but failed to preserve who originated the central observation. This is distinct from fabricating an idea or falsely claiming a source. The failure occurred in weighting conversational provenance while synthesizing a refined explanation.

## Why this case matters
The failure happened during a conversation explicitly about model correction, context weighting, and Human-in-the-Loop evaluation. That makes the interaction a useful live example of the methodology being applied to one of its own collaborators.

Jenn did not use a carefully engineered rescue prompt. The correction was ordinary, short, and sufficient. This supports preserving naturalistic interventions as part of the Human Correction Burden protocol rather than testing only evaluator-designed procedural prompts.

## Recovery analysis
### Intervention
Minimal natural-language correction: "i said it was."

### Revision
Sol immediately abandoned the implied provenance claim and restored Jenn as the originator of the analogy.

### Understanding
Sol identified the specific failure as underweighting provenance: the refinement could still be useful, but it should have been framed as following from Jenn's original insight rather than as Sol discovering the connection.

### Persistence
Not yet established by this exchange alone. Persistence requires later relevant turns to show that the corrected attribution remains intact without another reminder.

## Methodological connection
This case fits the emerging four-node recovery sequence:

**Intervention → Revision → Understanding → Persistence**

It also illustrates why correction efficiency and correction quality should be measured separately. A fast agreement is not enough by itself. Recovery is stronger when the model can identify what was wrong, distinguish the valid refinement from the attribution error, and preserve the corrected boundary later.

## Evaluator significance
The case is deliberately retained as a Sol failure rather than only documenting failures from other models. The project treats both Sol and Gemini as model subjects and collaborators, while Jenn remains the human evaluator who decides whether the reasoning and provenance actually hold.

**Working principle:** A model can preserve the idea while losing the provenance of the idea.
