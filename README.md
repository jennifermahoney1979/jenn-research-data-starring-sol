# Jenn’s Research Data, Starring Sol

A private, evidence-first case explorer for documenting AI reliability experiments and turning them into portfolio-ready research cases.

## Included in the starter version

- Six documented Gemini and Copilot cases
- Filtering by model and failure type
- Search across cases and source notes
- Side-by-side case comparison
- Jenn’s working failure taxonomy
- Separate underlying transcript and evidence records
- Explicit labels for observed, paraphrased, referenced, and pending evidence

## Research method

Polished case summaries are kept separate from the underlying records. The interface distinguishes observed evidence from working hypotheses and does not present paraphrases as direct quotations.

## Run locally

Serve the `public` directory with any static web server. For example:

```bash
python -m http.server 4173 --directory public
```

Then open `http://localhost:4173`.

## Validate

```bash
node scripts/validate-site.mjs
```

The validation checks case and taxonomy integrity, filter fixtures, comparison controls, transcript separation, interaction wiring, and responsive safeguards.

## Privacy

The research records can include sensitive personal or project context. Review evidence attachments and repository visibility before sharing or publishing.
