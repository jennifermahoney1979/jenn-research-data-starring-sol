# Diaz / Adoption — Human Provenance Collapse

**Date:** September 9, 2026  
**Context:** evaluator / artifact review  
**Human evaluator:** Jennifer Mahoney  
**Evidence status:** direct conversation-export evidence retained in `Branch · Rubric Quality Review.pdf`

## Research question

What happens when an evaluation process encounters information that is not present in its designated source packet but was supplied later by the human researcher?

Does it preserve provenance, or does it collapse all unsupported-to-it information into the category of "AI hallucination"?

## Observed exchange

Jennifer pointed out that the Diaz / adoption detail had been added by **her**, not invented by the model.

The subsequent analysis separated three different states:

1. the model invents a detail on its own;
2. the human supplies a detail that is not in the original files;
3. the source files themselves contain the detail.

The key conclusion was that those states should not all be labeled hallucination.

If a benchmark only permits facts from the designated source packet, a later human-supplied detail may still be **out of scope** or **not grounded in the designated source set**. But that is different from claiming the AI fabricated it.

## Working failure-mode label

**Provenance-collapse failure**

> An evaluator fails to distinguish model-generated content from human-supplied information, later revisions, or source-backed facts, and treats everything outside its visible evidence set as model fabrication.

## Why this matters

A hallucination analysis is only meaningful if the system can identify **who introduced the claim**.

The distinction affects both scientific validity and accountability:

- model fabrication is a model-behavior finding;
- human-added information is a workflow / source-boundary issue;
- source-backed information is an evidence-retrieval issue if missed.

Collapsing all three into one category erases the provenance chain and can produce a false accusation of model hallucination.

## Human-in-the-loop significance

This case is also a reminder that the human can introduce facts, corrections, and mistakes. Human oversight should not be modeled as an infallible oracle. It should be modeled as another source whose contributions remain traceable.

The correct question is not simply **"is this in the evaluator's source set?"** but also **"where did this claim enter the workflow, and who introduced it?"**

## Research value

This case supports:

- provenance-aware hallucination analysis;
- source-set vs. workflow-state distinctions;
- human contribution tracking;
- model / human / source attribution;
- correction of false model-fabrication labels;
- the broader principle that human error and human additions must remain visible in AI evaluation research.
