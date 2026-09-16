# Jenn’s Research Data, Starring Sol

An evidence-first case explorer documenting AI reliability experiments, ambiguity handling, contextual reasoning, retrieval correction, and human-in-the-loop evaluation.

This repository turns model interactions into portfolio-ready AI quality-assurance case studies while keeping analysis separate from supporting evidence.

## Current research areas

### Ambiguity and epistemic restraint

- **Emma ambiguity study** — tests whether models clarify which *Emma* is meant when more than one plausible work is available instead of confidently choosing the most familiar answer.
- **Henderson attribution test** — examines confident source attribution under ambiguity and how targeted retrieval can correct an initially confident error.
- **Brady test** — compares how models respond to an underspecified reference to “a man named Brady,” including whether they clarify or immediately choose a familiar cultural reference.

### Context reliability

- **Context-boundary cases** — examines when a model uses context that is unnecessary for the current request.
- **Sticky framing and correction behavior** — studies whether a model can release an incorrect interpretation after correction.
- **Cross-model comparison** — compares how different systems handle the same ambiguous or underspecified prompt.

### Evaluation and requirement mapping

- **Requirement-mapping recognition case** — examines evaluator failures where requirements were present in the prompt but were incorrectly reported as missing.
- **Human-in-the-loop correction** — separates errors a model catches independently from errors corrected only after a user supplies an alternative interpretation or retrieval cue.

## Research method

Each case distinguishes among observed model behavior, direct evidence, paraphrased evidence, working hypotheses, and incomplete evidence.

Polished case summaries are kept separate from transcripts, screenshots, and source notes. The goal is to preserve what happened while making the analysis easy to inspect and compare across models.

The working case ledger is in [`research/case-index.md`](research/case-index.md).

## Models represented

Current trials include OpenAI models, Gemini, Copilot, Claude accessed through third-party interfaces, Perplexity/ChatOn, Kimi.ai, DeepSeek, and other public AI systems used in comparative testing.

Interface and provider differences are recorded where they matter because access method, available context, retrieval tools, and model version can affect behavior.

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
