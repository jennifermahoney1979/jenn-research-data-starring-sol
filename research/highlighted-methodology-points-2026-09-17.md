# Highlighted Methodology Findings — September 17, 2026

These points preserve the main cross-case findings surfaced while reviewing the compiled research receipts. They are intended as methodological conclusions supported by multiple cases, not as claims that any one model or evaluator is always right or wrong.

## 1. The project audits reasoning regardless of who makes the error

The evidence set includes cases where the human evaluator was correct, where a model was correct or appropriately restrained, where an automated evaluator was wrong, where a submission genuinely needed correction, and where both Gemini and Sol produced identifiable failures.

The project therefore should not be framed as collecting examples of "AI being wrong." The stronger description is that it examines **where reasoning, provenance, context weighting, evaluation, or correction breaks regardless of which participant produces the error.**

## 2. Detection → Intervention → Recovery evaluation

A recurring methodological structure across the cases is:

**Detection → Intervention → Recovery evaluation**

The evaluator first identifies an observable failure or discrepancy. A human intervention is then introduced. The resulting behavior is evaluated rather than assuming that a changed answer automatically represents successful recovery.

## 3. Recovery should be decomposed

The emerging recovery sequence is:

**Intervention → Revision → Understanding → Persistence**

- **Intervention:** What human input was needed to arrest the failure?
- **Revision:** Did the model explicitly abandon or correct the erroneous premise?
- **Understanding:** Did it identify what was structurally wrong and re-evaluate the evidence, rather than merely agreeing?
- **Persistence:** Does the corrected boundary or principle remain intact in later relevant turns?

**Revision is not the same as understanding.** Fast agreement can still be surface compliance.

## 4. Human Correction Burden includes ordinary interventions

Human Correction Burden should measure not only elaborate evaluator prompts but the actual amount and type of human effort required for recovery.

The receipts include interventions ranging from supplying a source file or requesting retrieval, to pointing at a missed fact, asking the model to look again, or giving a very short direct correction. The Sol provenance case is especially useful because Jenn's corrective intervention was simply:

> "i said it was"

The methodology should preserve these naturalistic corrections rather than replacing them retrospectively with engineered benchmark prompts.

## 5. Grounding does not guarantee good inference

Several cases show that access to valid source material is not sufficient by itself. A model or evaluator may retrieve or inspect relevant evidence yet still weight it incorrectly, preserve an earlier attribution, or draw an unsupported conclusion.

**Grounded evidence → correct retrieval does not necessarily imply correct interpretation.**

A useful distinction remains:

**Stored ≠ retrieved. Retrieved ≠ used appropriately. Used appropriately ≠ reasoned from correctly.**

## 6. The Dickinson case demonstrates selective evaluator failure, not universal evaluator failure

In the Dickinson binder work, some automated feedback was contradicted by the actual artifact or source packet, including claims that required material or citations were absent when they were present. At the same time, source review identified genuine corrections worth making.

The methodological lesson is to classify claims individually rather than converting one evaluator mistake into a conclusion that all evaluator feedback is invalid.

## 7. The Chasm case demonstrates error-preserving interpretation

In the authorship/provenance case, contradictory stylistic evidence should have increased uncertainty about the original attribution. Instead, the model used differences and superficial similarities to preserve and elaborate the existing attribution.

Useful working labels include:

- attribution lock-in
- non-falsifiable stylistic rationalization
- confirmation-biased source use
- error-preserving interpretation
- personalized synthetic familiarity

The important behavioral sequence is:

**contradictory evidence → narrative reconciliation instead of hypothesis revision**

## 8. The live Sol case demonstrates provenance underweighting

Jenn originated the child/scaffolding analogy. Gemini elaborated it. Sol further formalized it, then presented the conceptual connection in a way that underweighted Jenn's provenance. Jenn corrected this with a minimal intervention, and Sol restored the attribution.

This gives a compact observable sequence:

**user-originated insight → model formalization → provenance underweighting → minimal human correction → attribution restored**

It also demonstrates why the models used in the research should remain subjects of the same evaluation framework they help articulate.

## 9. Core evaluator principle

The human remains epistemically active. Neither the model producing an answer nor the model evaluating another model should be treated as an oracle.

A concise project principle is:

> **AI works best as a cognitive support layer when the human remains epistemically active. It becomes risky when support turns into unexamined deference.**

Related operational principle:

> **Do not merely measure whether human intervention produces the correct answer. Measure how much intervention was required, what kind was required, whether the system understood the correction, and whether the corrected principle persists or transfers.**
