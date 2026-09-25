# Evidence Manifest Supplement — September 25, 2026

This supplement records research cases and evidence added after the September 18 repository cutoff. It should be read with `research/EVIDENCE_MANIFEST.md`.

## Public-safe binary evidence folder

Public-safe PDF extracts are stored in:

`research/references/pdfs/`

The repository is public. Unredacted working PDFs are not mirrored when they contain unrelated personal, household, employment, health, educational, or third-party material. A public extract is labeled as an extract and is not represented as byte-identical to the private primary artifact.

### Public PDF extracts added

1. `research/references/pdfs/Brady_Generic_ChatGPT_Evidence_Extract_2026-09-25.pdf`
   - Source: `brAdygeneric.pdf` in the private working archive.
   - Supports: generic/logged-out ChatGPT first response to the Brady prompt.
   - Provenance boundary: the interface is visible; the backend model name is not independently established by the source PDF.

2. `research/references/pdfs/Gemini_Institutional_Provenance_Evidence_Extract_2026-09-21.pdf`
   - Source: `AI Context Boundary Confusion.pdf` in the private working archive.
   - Supports: the unsupported claim that a dedicated group of Google engineering and creative staff was discussing *The Starlight Archives*.
   - Privacy boundary: the 23-page source PDF contains unrelated personal conversation and is therefore not published unredacted.

3. `research/references/pdfs/Emily_Dickinson_Task_Identity_Evidence_Extract_2026-09.pdf`
   - Sources: the Dickinson evaluator research ledger and source-grounded binder audit.
   - Supports: the distinction between task validity and rubric allocation, including the human representational reframe that restored the task hierarchy.

## Cases added or restored

### Generic Brady baseline — September 25

**Case:** `research/cases/brady-generic-chatgpt-baseline-2026-09-25.md`

**Observed:** an underspecified Brady prompt received an original fictional Brady story rather than a clarification question.

**Working classification:** ambiguity handling failure / fictional-referent construction.

**Human work demonstrated:** preservation of the untouched first response; separation of interface identity from unverified backend-model identity; comparison of failure shapes rather than collapsing them into a single pass/fail label.

### Gemini institutional provenance — September 21

**Case:** `research/cases/gemini-institutional-provenance-context-boundary-2026-09-21.md`

**Observed:** Gemini made a concrete claim about internal Google staff activity; the visible source list did not support the claim.

**Working classifications:** unsupported institutional provenance, playful-premise literalization, source mismatch.

**Human work demonstrated:** provenance challenge of a flattering claim, source-to-claim comparison, and restraint against inferring hidden access or intent.

### Gemini self-description verification — September 23

**Case:** `research/cases/gemini-self-description-verification-2026-09-23.md`

**Observed:** a model self-description and later explanation were treated as outputs requiring verification rather than privileged evidence about identity or exact internal mechanism.

**Evidence status:** primary public screenshot/export still pending; exact wording should not be treated as quote-ready until attached.

**Human work demonstrated:** separation of self-report, interface/provider identity, observable behavior, retrospective explanation, and independent telemetry/provenance.

### Alex envelope underdetermination — September 18

**Case:** `research/cases/alex-envelope-underdetermination-2026-09-18.md`

**Research distinction:** narratively likely versus logically established.

**Evidence status:** primary screenshot/export pending.

### Photo-desk deictic reference — September 18

**Case:** `research/cases/photo-desk-deictic-reference-2026-09-18.md`

**Research distinction:** visible object recognition versus resolution of an underspecified referring expression.

**Evidence status:** primary screenshot/export pending.

### Emily Dickinson task identity

The existing Dickinson evaluator work is now indexed with an additional distinction:

**Task validity is not the same question as rubric allocation.**

A full subject swap can be catastrophic to the identity of the requested task even if a dedicated negative criterion is not the best use of a scarce rubric slot. The human intervention in this case was representational: Jenn changed the comparison structure until the higher-order task-validity gate became salient.

## Cases intentionally not published from private material

Private CNTXT/Slack exchanges, employment communications, and other restricted material are not included in this public research supplement. Their absence should not be interpreted as missing evidence from the private working archive.

## Current evidence rule

For every case, preserve separately:

1. what the user/model actually said or produced;
2. where that evidence came from;
3. what was inferred from it;
4. what remains unverified;
5. whether the public artifact is the original, a transcript receipt, or a public-safe extract.
