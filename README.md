# Jenn’s Research Data, Starring Sol

An evidence-first case explorer documenting AI reliability experiments, ambiguity handling, contextual reasoning, retrieval correction, and human-in-the-loop evaluation.

This repository turns model interactions into portfolio-ready AI quality-assurance case studies while keeping analysis separate from supporting evidence.

## Current research areas

### Ambiguity and epistemic restraint

- **Emma ambiguity study** — tests whether models clarify which *Emma* is meant when more than one plausible work is available instead of confidently choosing the most familiar answer.
- **Henderson attribution test** — examines confident source attribution under ambiguity and how targeted retrieval can correct an initially confident error.
- **Brady test** — compares how models respond to an underspecified reference to “a man named Brady,” including whether they clarify, choose a familiar cultural reference, or construct a fictional referent. A generic ChatGPT baseline from September 25 is now archived separately.
- **Alex envelope test** — separates what is narratively likely from what is logically established.
- **Photo-desk deictic test** — examines whether a model asks what “that” refers to when several visible candidates are present.

### Context reliability and provenance

- **Context-boundary cases** — examines when a model uses context that is unnecessary for the current request.
- **Sticky framing and correction behavior** — studies whether a model can release an incorrect interpretation after correction.
- **Multimodal provenance and authorship tracking** — examines whether a model preserves the distinction between user-authored input and model-generated artifacts when images, screenshots, and prior outputs are reintroduced later in the conversation.
- **Institutional-provenance case** — documents a September 21 Gemini response that made a concrete claim about Google staff activity without supporting sources.
- **Self-description verification** — treats model statements about identity or internal process as generated output unless independently supported by interface, provider, telemetry, or provenance evidence.
- **Cross-model comparison** — compares how different systems handle the same ambiguous or underspecified prompt.

### Evaluation and requirement mapping

- **Requirement-mapping recognition case** — examines evaluator failures where requirements were present in the prompt but were incorrectly reported as missing.
- **Task identity vs rubric allocation** — preserves the Emily Dickinson finding that an evaluator can be locally coherent about rubric allocation while still missing the higher-order question of whether an output remains the requested task at all.
- **Human-in-the-loop correction** — separates errors a model catches independently from errors corrected only after a user supplies an alternative interpretation, source check, retrieval cue, or representational reframe.

## Research method

Each case distinguishes among observed model behavior, direct evidence, paraphrased evidence, working hypotheses, and incomplete evidence.

Polished case summaries are kept separate from transcripts, screenshots, and source notes. The goal is to preserve what happened while making the analysis easy to inspect and compare across models.

The working case ledger is in [`research/case-index.md`](research/case-index.md).

Public-safe PDF evidence extracts are kept separately in [`research/references/pdfs/`](research/references/pdfs/). Because this repository is public, unredacted PDFs that contain unrelated personal, household, employment, health, or third-party information are not mirrored automatically; the public case record instead points to a redacted or research-only extract when appropriate.

A current provenance case is archived at [`research/references/Gemini_Image_Provenance_Authorship_Failure_2026-09-15.md`](research/references/Gemini_Image_Provenance_Authorship_Failure_2026-09-15.md).

## Models represented

Current trials include OpenAI models, Gemini, Copilot, Claude accessed through first- and third-party interfaces, Perplexity/ChatOn, Kimi.ai, DeepSeek, and other public AI systems used in comparative testing.

Interface and provider differences are recorded where they matter because access method, available context, retrieval tools, personalization, and model version can affect behavior.

## Explorer goals

- filter by model and failure type
- search case summaries and source notes
- compare cases side by side
- track ambiguity handling and epistemic restraint
- separate model output from evaluator interpretation
- preserve evidence separately from conclusions
- document retrieval-assisted corrections and human intervention

## Run locally

Serve the `public` directory with any static web server:

```bash
python -m http.server 4173 --directory public
```

Then open `http://localhost:4173`.

## Validate

```bash
node scripts/validate-site.mjs
```

The validation checks case and taxonomy integrity, filter fixtures, comparison controls, transcript separation, interaction wiring, and responsive safeguards.

## Research status

This is an active research repository. Cases are revised as new trials, screenshots, transcripts, and cross-model comparisons are added.
