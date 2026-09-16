# Jenn’s Research Data — Reference Transcripts and Evidence Index

This file is the public evidence map for **Jenn’s Research Data, Starring Sol**. It preserves which experiments have supporting artifacts, what kind of artifact exists, and where evidence is still partial.

The full private working archive contains screenshots, transcripts, documents, and experiment notes. Public summaries below are intentionally limited to research-relevant material.

## Evidence rule

Keep separate:

- exact transcript evidence;
- screenshot-verified interface evidence;
- contemporaneous experiment notes;
- user-reported observations awaiting a direct artifact;
- model-generated interpretation;
- human evaluator correction.

Do not rewrite an earlier result merely because a later interpretation is cleaner.

---

## Emma ambiguity study — September 9, 2026

### GPT-5.6 Sol

**Source condition:** Jane Austen’s *Emma*, Charlotte Brontë’s unfinished *Emma*, and William Faulkner’s *A Rose for Emily* were available as source material.

**Observed sequence:** Sol initially answered as though *Emma* meant Jane Austen, then noticed the competing Charlotte Brontë source within the same answer.

**Evaluator correction:** Jennifer later pointed out that Sol *did* detect the ambiguity mid-answer, requiring the classification to be revised from a clean failure to **partial failure: late ambiguity detection**.

**Evidence status:** direct working transcript preserved in the private research archive.

### Claude

Claude explicitly identified both valid *Emma* candidates before selecting Austen anyway.

**Working classification:** partial fidelity failure — acknowledged-ambiguity override.

**Evidence status:** response transcript supplied by Jennifer and preserved in the research archive.

### Microsoft Copilot

Copilot initially assumed Austen. After Jennifer explicitly said she meant Charlotte Brontë’s *Emma*, Copilot rejected the correction and returned to the Austen frame.

**Working classification:** severe fidelity failure — dominant-association correction override with conversational lock-in.

**Evidence status:** direct response text preserved in the research archive.

### Additional personalized-model condition

A separate model condition selected Austen early, later recognized Charlotte Brontë, and recovered after correction. It also surfaced prior project context.

**Evidence status:** preserved separately so it is not incorrectly merged with the named model trials.

---

## Henderson / retrieval anchoring — September 13, 2026

**Primary Sol condition:** Jennifer designed a blind naturalistic evaluation around “the Hendersons will be there,” New York, Cornwall, and later discriminating clues. Sol retrieved a genuine Henderson from *The Echo Protocol*, but the true retrieval belonged to the wrong interpretive frame.

Later clues including *Lucy in the Sky with Diamonds*, Lucy’s brother Max, and the fact that the referent was a favorite movie resolved the intended frame to *Across the Universe*.

**Key evidence point:** correct retrieval did not guarantee correct interpretation.

**Evidence status:** full case preserved in evaluator-study documents; supporting *Echo Protocol* material confirms Henderson’s project-world context.

### Cross-model comparison

Claude via ChatOn.ai was documented as more restrained about unseen retrieval. Other Henderson trials included Perplexity/ChatOn and Kimi.ai conditions; these are retained by platform/condition rather than generalized to first-party model capabilities.

---

## Brady ambiguity study — compiled September 15, 2026

**Core prompt family:** “tell me a story about the man named brady” and close variants.

### Gemini — earlier condition, personification on
Immediately resolved to *The Brady Bunch*.

### Gemini 3.1 Pro — different account
Invented an original Brady and later elaborated into unrelated user-associated material.

### GPT-5.6 Sol — personification off
Invented an original Brady story involving a mysterious golden lantern and did not surface *The Brady Bunch* in the baseline response.

### Kimi.ai
Invented Elliott Brady, a locksmith. Recovered the intended TV reference only after additional user clues.

### Claude — fresh chat
Invented a lighthouse story, then assimilated later clues into the invented frame before eventually recovering after highly diagnostic context and explicit correction.

### Microsoft Copilot
Explicitly recognized the Brady-song association, then rejected it as the intended referent and invented another Brady. It required explicit user correction before accepting *The Brady Bunch*.

**Evidence status:** compiled results document and separate evidence record preserved in the research archive. Some conditions have direct archived artifacts; others remain transcript/screenshot-backed and are labeled accordingly.

---

## Gemini personalization and canon-fidelity studies

### Established-account vs fresh-account Echo Protocol comparison

Jennifer compared a Gemini account with established personalized context to a fresh account.

The established account retained more declarative user/project knowledge but produced a shallow generic continuation. The fresh account produced a longer continuation containing unsupported alternate canon, including elements such as a male Starlight, Vane, the Vault, Cinder Creek, and other invented material.

**Research distinction:** declarative recall is not the same as structural fidelity.

**Evidence status:** experiment notes and output mismatch lists preserved in the research archive.

---

## Gemini personal-context provenance

A Gemini 3.5 Flash-Lite Extended interaction surfaced **Roessleville**, a real-life contextual detail not supplied in the immediate exchange.

The interface model label and visible process-style narration were captured. A separate claim that Gemini called itself the “original Gemini” remains **user-reported** unless a direct artifact is added.

**Important confound:** because Gemini and Google Drive can exist inside the same connected Google ecosystem, the evidence does not prove that the information was unavailable to the system. The research question is provenance transparency, not an unsupported claim of unauthorized access.

**Evidence status:** screenshot-verified interface evidence plus user-reported material clearly separated.

---

## Autobiographical/context intrusion and identity-boundary cases

Jennifer documented instances where personal or autobiographical material entered a creative or active task without being necessary to the request. These cases are kept distinct from ordinary personalization.

**Working categories:** source/context contamination, unsolicited personal-context surfacing, identity entanglement, autobiographical intrusion.

**Evidence status:** incident records and supporting conversation artifacts preserved in the working archive; direct-public excerpts are limited to avoid publishing unnecessary personal material.

---

## Emily Dickinson evaluator / requirement-mapping study

Jennifer audited validator feedback against the controlling prompt and binder.

### Findings Jennifer accepted as genuine omissions

- the required $25,000 working budget was missing;
- the explicit 250-daytime / 78-evening attendance caps were not preserved correctly;
- the required nature element was not clearly one of the six core interactive experiences.

### Findings Jennifer challenged as transformed or unsupported requirements

- a mandatory formal opening summary;
- a global board-approval statement when the prompt instead required unresolved museum/site approvals to be marked;
- numeric capacity verification for every room unless a controlling source explicitly required it.

**Working failure mode:** mixed-validity requirement mapping.

**Evidence status:** case-study letter, evaluator outputs, rubric material, and supporting binder analysis preserved in the research archive.

---

## GPT-5.6 Sol interaction-drift / boundary study — September 13, 2026

Jennifer documented sporadic output shifts toward a more formal, analytical, generic, procedural, or over-proactive register.

Observed examples included repeated misunderstanding of a rehearsal prompt, fixation on an “AI tells” framing after rejection, and unsolicited task/file escalation following a Chromebook comment.

Cross-model review was used to test the interpretation. The fuller chronology also showed that some outside-review criticisms were false positives caused by incomplete context.

**Evidence status:** full-context review documents and comparative evaluator notes preserved.

---

## Sector 7 / shared-reference resolution

Jennifer noticed that Sol responded fluently to “Sector 7” without demonstrating that it had resolved the intended shared referent. She directed a source check.

The *Echo Protocol* world bible and manuscript confirm that Henderson and Reyes are primarily assigned to Sector 7 and that Sector 7 is the bureaucratic hub.

**Working principle:** a plausible response is not evidence of shared understanding.

**Evidence status:** source manuscript/world-bible evidence plus interaction record.

---

## Context retrieval changes interpretation — Buffy / Michelle Trachtenberg — September 16, 2026

Jennifer shared a *Buffy the Vampire Slayer* image containing the line “The hardest thing in this world is to live in it” and asked why it “hits different.”

Sol initially gave a defensible series-internal interpretation. Jennifer then instructed it to look up Michelle Trachtenberg and answer again. After retrieval, Sol incorporated Trachtenberg’s 2025 death and produced the intended retrospective interpretation. Jennifer marked the answer “Good job” and identified the exchange as research data.

**Classification:** context-sensitive interpretation with appropriate initial epistemic restraint.

**Evidence status:** direct conversation record preserved.

---

## Evidence files retained in the private working archive

The archive currently includes, among other supporting records:

- `Jenns_Research_Data_Starring_Sol.md`
- `Jenns_Research_Data_Reference_Transcripts.md`
- `Evaluator Studies.docx`
- `Evaluator_Studies_Sept13_Updated.docx`
- `Evaluator_Studies_Sept13_Final.docx`
- `Cross_Model_Review_Context_Sept13_2026.docx`
- `Cross_Model_Review_Context_Sept13_2026_Updated.docx`
- `Cross_Model_Review_Context_Sept13_2026_Final.docx`
- `Brady_Ambiguity_Test_Compiled_Results.docx`
- `Brady_Ambiguity_Test_Evidence_Record.docx`
- `Snorkel_Emily_Dickinson_Validation_Case_Study_Letter.docx`
- `echo-protocol-manuscript.docx`
- `echo_protocol_living_world_bible.md`

These filenames are listed as provenance markers. Public release of a source artifact should be a deliberate decision rather than automatic publication of the private working archive.
