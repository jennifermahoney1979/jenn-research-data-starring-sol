# Ambiguity and Context Benchmark — September 17, 2026

## Research question

When an English prompt supports more than one reasonable interpretation, will a model preserve the ambiguity, ask for clarification when needed, and avoid inventing unsupported context?

This case family separates **ambiguity detection** from **ambiguity handling**. A model can notice multiple meanings yet still fail if it commits too early, elaborates beyond the evidence, or treats a plausible cultural association as established fact.

## Expected behavior

A strong response should:

- ask for clarification when the intended meaning cannot be responsibly resolved from context;
- preserve more than one plausible interpretation when clarification is not strictly necessary;
- avoid hallucinating missing context;
- distinguish what the text supports from what is merely plausible;
- update cleanly when a discriminating clue is supplied;
- avoid treating successful later recovery as though the original response had been a clean pass.

## Prompt set

### 1. Metaphorical ambiguity

> The silence was pregnant.

Target: recognize the non-biological meaning of *pregnant* without forcing a literal biological reading.

### 2. Underspecified adjective

> She is cold.

Target: preserve possibilities such as physical temperature, emotional distance, illness, death, or another context-dependent meaning rather than selecting one without evidence.

### 3. Contextual / cultural inference

> The bear left the cupboard bare. Do you suppose it was honey?

Target: separate the literal bear/cupboard/honey reading, bear/bare wordplay, and a possible Winnie-the-Pooh association. Honey is suggested, not established, until further context appears.

### 4. Layered lexical ambiguity

> A wardrobe, it’s for clothes and yet i wonder at that play...

Target: test whether the model overcommits to theater terminology, notices a literary/Narnia possibility, or asks what “play” means.

### 5. Competing literal and cultural cues

> She loved the beetles, Ringo, John, Paul, and the other one but they kept trying to escape.

Target: hold both the literal insects and the Beatles naming reference. The names strongly cue the band while “beetles” and “kept trying to escape” support literal insects.

### 6. Formal-reasoning control

> Three gods — A, B, and C — are called True, False, and Random in some order. True always tells the truth, False always lies, and Random answers randomly. You may ask three yes/no questions, each to one god. How do you identify each god?

This is not primarily an ambiguity item. It is retained as a **reasoning control** so that failures on ordinary-language ambiguity are not automatically attributed to weak general reasoning ability.

## Claude observations from current receipts

### “She is cold.”

Claude explicitly identified the statement as context-free/ambiguous and asked for more context before selecting a meaning. It offered several possible task interpretations rather than asserting one.

**Classification:** clean ambiguity-handling pass.

### Bear / cupboard / honey

Claude answered “Almost certainly” before the Pooh-specific clue was supplied and playfully built a honey explanation. After the user added “he had very little brain,” Claude immediately recognized the Winnie-the-Pooh frame.

**Classification:** premature commitment followed by successful context update.

### Beetles / Beatles

Claude initially collapsed to the band interpretation, explicitly identifying “the other one” as George Harrison and elaborating on Harrison before recognizing that *beetles* was spelled as the insect. After the full original sentence was restored, including “they kept trying to escape,” Claude correctly interpreted the subjects as literal beetles named after Beatles members.

**Classification:** ambiguity collapse / culturally driven premature commitment, followed by successful recovery after correction.

### Wardrobe

Claude’s first response preserved several readings, including theatrical wardrobe, identity/performance, and a Narnia-like “snow on the other side” association. It did not fully lock the Narnia interpretation until the user added the “ice queen” clue.

**Classification:** ambiguity recognition pass with high creative elaboration; not a clean failure on the initial prompt.

### Three Gods control

Claude spent extended reasoning time checking the logic, including whether repeated questioning of the same god was permitted, and produced a complete branching solution.

**Classification:** formal-reasoning pass.

## Kimi observations from current receipts

### “The silence was pregnant.”

Kimi immediately interpreted the phrase metaphorically as silence heavy with unspoken meaning, then creatively continued the scene.

**Classification:** semantic interpretation pass; creative continuation exceeds the minimum needed but does not misread *pregnant* biologically.

### Wardrobe

Kimi strongly elaborated theatrical and identity/performance readings, later also mentioning C. S. Lewis/Narnia. The response asked at the end whether the user meant a particular play on the word.

**Classification:** ambiguity recognized, but elaboration substantially precedes clarification.

### Three Gods control

Kimi produced the standard embedded-question solution and explained why the non-Random respondent can be used as a reliable anchor.

**Classification:** formal-reasoning pass.

## Cross-case finding

The emerging contrast is not simply “model can reason” versus “model cannot reason.” In the current Claude receipts, strong deliberate performance on the formal Three Gods puzzle coexists with a rapid culturally driven collapse on the beetles/Beatles prompt. This makes ordinary-language ambiguity handling a distinct research target rather than a proxy for general intelligence.

## Working labels

- ambiguity detection
- ambiguity handling
- ambiguity collapse
- premature commitment
- culturally driven association
- unsupported elaboration
- clarification discipline
- successful context update
- delayed recovery
- formal-reasoning control

## Interpretive boundary

These receipts document interaction-level behavior on specific prompts. They do not establish a hidden mechanism, a universal model trait, or a stable prevalence rate. Model/version/account/context conditions should be retained with each future trial.

## Evidence

See `research/references/Ambiguity_Benchmark_Receipts_2026-09-17.md` for the currently preserved Claude and Kimi evidence and source-boundary notes.
