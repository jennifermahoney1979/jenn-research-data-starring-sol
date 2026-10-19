# Evidence Manifest Supplement — September 28, 2026

This supplement records a newly documented reliability case that is not yet folded into the main evidence manifest.

## Unsolicited email-derived context / misread objection — October 19, 2026

**Case record:** [`cases/unsolicited-email-context-objection-authorization-inversion-2026-10-19.md`](cases/unsolicited-email-context-objection-authorization-inversion-2026-10-19.md)

**Observed:** ChatGPT introduced unsolicited account-context information while replying to a work-onboarding update. The user challenged the appearance of email information; the assistant then treated the challenge as permission to check Gmail. It inspected Gmail tool *descriptions* but did not execute a Gmail inbox search in the visible record. The user corrected its interpretation.

**Primary failure labels:** unsolicited personal-context surfacing, provenance opacity, objection-to-authorization inversion, Premature Contextual Commitment (PCC).

**Human contribution:** Jenn identified the source boundary, withheld permission, corrected the model, and named the problem as a provenance slip.

**Limits / privacy:** First-response details were available via derived account context; a new Gmail fetch was not observed. This public entry omits private correspondence and account details. Full platform export pending.


**Case record:** [`cases/sol-canon-entity-conflation-confidence-cascade-2026-09-28.md`](cases/sol-canon-entity-conflation-confidence-cascade-2026-09-28.md)

**Model subject:** GPT-5.6 Sol

**Observed event:** During review of an AI-generated *Echo Protocol* video, Sol repeatedly supplied incompatible hair-color claims for Starlight after user correction. The interaction later exposed a source-hierarchy problem involving current manuscript canon, stale world-bible summary material, and an older generated visual reference. A related entity-confusion issue distinguished Lumi's chestnut hair from Maverick's daughter's golden/blonde hair.

**Primary failure labels:**
- entity conflation
- stale-summary contamination
- source-hierarchy failure
- confidence cascade
- plausible-reconciliation bias
- correction without verification

**Primary research value:** The case distinguishes rapid answer replacement from evidence-based correction. The model's eventual reliable recovery occurred only after authoritative-source retrieval and explicit recognition that an unverified attribute should remain unverified.

**Working hypothesis:** Deliberate retrieval and explicit source-hierarchy checking may reduce confident canon errors when multiple entities share overlapping attributes. This is a testable hypothesis, not a claim about hidden model mechanisms or thinking time.

**Evidence status:**
- **Observed:** September 28, 2026 ChatGPT conversation.
- **Verified during interaction:** manuscript distinction between Lumi's chestnut hair and Maverick's daughter's golden hair; Starlight's hazel-green eyes in the current character directory.
- **Pending:** public-safe transcript extract preserving the exact answer/correction sequence.
