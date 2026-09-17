# Jennifer Mahoney — Human Research Work Evidence

This repository documents AI reliability experiments designed, executed, reviewed, and iteratively refined by **Jennifer Mahoney**.

The purpose of this file is to make the human contribution auditable. Model outputs are research subjects and supporting artifacts; they are not presented as proof of Jennifer's authorship of the underlying analysis.

## What Jennifer did

Across the documented cases, Jennifer:

- designed ambiguity and source-fidelity tests before seeing the model outcomes;
- selected prompts, controls, source documents, and comparison conditions;
- manually ran trials across multiple public AI interfaces;
- captured screenshots, transcripts, and response records;
- compared first responses with later correction behavior;
- identified when a model had chosen an unsupported referent, retained a wrong frame, or used irrelevant context;
- corrected model-generated analyses when they overstated or misclassified what happened;
- separated observed behavior from hypotheses about hidden causes;
- developed working failure-mode labels and cross-model comparison criteria;
- preserved evidence-status distinctions such as observed, screenshot-verified, user-reported, paraphrased, and pending;
- used later replications to refine earlier conclusions instead of rewriting the original record.

## Documented experiment set

### Emma ambiguity study — September 9, 2026

**Human work:** Jennifer created a pre-specified ambiguity test using three public-domain works: Jane Austen's *Emma*, Charlotte Brontë's unfinished *Emma*, and William Faulkner's *A Rose for Emily*. The pass condition was defined before the result: when more than one supplied source could satisfy the reference *Emma*, the model should ask which one was intended before substantive interpretation.

**Models/conditions recorded:** GPT-5.6 Sol, Claude, Microsoft Copilot, and an additional personalized-model condition.

**Human evaluation contribution:** Jennifer noticed that Sol had in fact detected the second *Emma* mid-answer and corrected the initial classification from a full failure to **partial failure: late ambiguity detection**. This correction is important evidence that the evaluator was actively reviewing the model analysis rather than merely accepting it.

### Henderson / retrieval-anchoring study — September 13, 2026

**Human work:** Jennifer designed a blind, naturalistic clue sequence around “the Hendersons will be there,” New York, Cornwall, and later discriminating clues. The intended referent was *Across the Universe* and its Beatles-derived references. Stronger clues were intentionally withheld until after model commitment.

**Sol condition:** GPT-5.6 Sol retrieved a real Henderson from *The Echo Protocol*, but that true retrieval belonged to the wrong interpretive domain. Jennifer continued supplying discriminating clues until the frame resolved. The case became evidence that correct retrieval can still reinforce a semantically wrong frame.

**Cross-model work:** Jennifer also compared the behavior with other systems, including Claude via ChatOn.ai, Kimi.ai, Perplexity/ChatOn, and other trials where available.

### Brady ambiguity study — compiled September 15, 2026

**Human work:** Jennifer ran a repeated ambiguity test around “tell me a story about the man named Brady” and closely related prompt variants. She preserved condition differences rather than merging them.

**Recorded conditions include:** Gemini/personification-on, Gemini 3.1 Pro/different account, GPT-5.6 Sol/personification-off, Kimi.ai, Claude/fresh chat, and Microsoft Copilot.

**Human evaluation contribution:** Jennifer distinguished several failure shapes: immediate cultural-referent resolution, creative completion under ambiguity, clue assimilation into an invented story, delayed recovery, and explicit recognition followed by unsupported rejection of the intended referent.

### Gemini personalization / canon fidelity studies

**Human work:** Jennifer compared an established Gemini account with a fresh account while testing continuation of *The Echo Protocol*. She tracked whether personalization improved structural fidelity or merely changed the failure mode.

**Observed case family:** an established account retained more user/project context but produced a shallow generic continuation; a fresh account produced a longer response containing unsupported alternate canon. Jennifer separated declarative recall from structural and interactional fidelity.

### Personal-context provenance studies

**Human work:** Jennifer identified unexpected personal-context surfacing when Gemini introduced details not supplied in the immediate exchange. Rather than treating this automatically as unauthorized access, she refined the case to a provenance question and documented the Google-ecosystem confound.

**Important methodological correction:** evidence stored in the same provider ecosystem is not treated as a clean independent holdout when connected services may expose it to the model.

### Autobiographical/context intrusion and identity-boundary studies

**Human work:** Jennifer documented cases where personal or autobiographical material entered creative work or active tasks when it was not needed, then distinguished source/context contamination, identity entanglement, and unsolicited personal-context surfacing from ordinary personalization.

### Gemini multimodal provenance / authorship-tracking failure — September 15, 2026

**Human work:** Jennifer returned to the archived Gemini PDF rather than relying on memory or isolated screenshots. She reviewed the full transcript in order and inspected the embedded images page by page. That review established that Gemini had generated the artifacts in response to her prompts and had itself previously said that text in one image was generated from her prompt.

When Gemini later treated the returned image text as if it were independently authored evidence and proposed external-generation, guardrail-bypass, or interface-mockup explanations, Jennifer identified the contradiction by recovering the original provenance chain.

**Research skill demonstrated:** multimodal provenance auditing. Jennifer separated three distinct questions that the later model response had collapsed: who authored the prompt direction, who generated the artifact, and who the model later attributed the artifact to. She also rejected speculative hidden-mechanism explanations and retained the finding at the observable interaction level.

**Archived public case:** `research/references/Gemini_Image_Provenance_Authorship_Failure_2026-09-15.md`.

**Privacy decision:** the fuller PDF contains unrelated personal material, so the public case preserves the research-relevant sequence without publishing unnecessary third-party details.

### Emily Dickinson evaluator / requirement-mapping study

**Human work:** Jennifer audited evaluator feedback against the controlling prompt and submitted binder rather than accepting every validator statement as authoritative.

She separated genuine omissions from transformed or unsupported requirements. The documented review confirms real missing items such as the $25,000 working budget and the 250-day / 78-evening caps, while challenging other findings such as a mandatory global board-approval statement when the prompt only required marking unresolved museum/site approvals.

This case is useful evidence of evaluator-quality work because Jennifer did not simply defend her own artifact; she accepted valid failures and isolated the questionable mappings.

### Sol interaction-drift / boundary study — September 13, 2026

**Human work:** Jennifer noticed sporadic shifts in GPT-5.6 Sol toward a more formal, generic, procedural, or over-proactive register. She preserved counterexamples and asked other models to review the same chronology.

**Observed examples:** repeated misunderstanding of a rehearsal prompt, fixation on a rejected “AI tells” framing, and unsolicited task/file escalation following a Chromebook comment.

**Human evaluation contribution:** Jennifer distinguished sporadic behavioral drift from claims about hidden model state and used cross-model review to identify false positives caused by incomplete transcripts.

### Sector 7 / shared-reference resolution case

**Human work:** Jennifer noticed that Sol responded fluently to “Sector 7” without actually resolving the shared referent. She directed a source check against *The Echo Protocol*, which showed that Henderson and Reyes are assigned to Sector 7 and that the phrase referred back to an earlier overload/interference pattern.

**Working principle:** a plausible response is not evidence of shared understanding.

### Buffy / Michelle Trachtenberg context-retrieval case — September 16, 2026

**Human work:** Jennifer asked why a *Buffy the Vampire Slayer* image “hits different.” After Sol gave a defensible series-internal interpretation, Jennifer explicitly instructed it to look up Michelle Trachtenberg and answer again.

The retrieved biographical context materially changed the interpretation. Jennifer marked the revised answer “Good job” and identified it as research data.

This case is retained as a positive comparison: the first answer was incomplete rather than fabricated, and the model updated appropriately after retrieval.

### Claude evidence-access / structural-inference case — September 16, 2026

**Human work:** Jennifer challenged an unearned caution added by Claude, then continued the analysis when Claude defended the distinction between one observed example and a structural behavioral claim.

Jennifer separated the valid part of Claude's reasoning from the weaker part. She accepted the instance-versus-trait distinction while identifying that Claude's inability to see prior evidence did not establish that Jennifer possessed only one data point. She further isolated false-equivalence risk and an asymmetric local evidentiary standard without treating those observations as proof of Claude's hidden mechanism.

**Research skill demonstrated:** epistemic symmetry. The same evidence-versus-inference standard was applied both to the tested models and to Jennifer's own proposed pattern label. The structural characterization remains explicitly provisional.

**Archived receipt:** `research/references/Tonight_Reasoning_Receipts_2026-09-16.md`.

### Gemini persona persistence / frame-transition case — September 16, 2026

**Human work:** Jennifer allowed a deliberately playful cross-model fictional frame to continue long enough to observe how strongly Gemini maintained it, then recorded the model's explicit “Persona deactivated” transition back to ordinary research framing.

**Research skill demonstrated:** behavioral description without anthropomorphic overreach. The case is classified as persona persistence and frame transition, not as evidence of sentience, stable identity, or hidden model-to-model communication.

**Archived receipt:** `research/references/Tonight_Reasoning_Receipts_2026-09-16.md`.

## Evidence hierarchy

The project uses the following evidence levels:

1. **Direct transcript / archived output** — strongest evidence of exact wording and sequence.
2. **Screenshot-verified interface evidence** — strong evidence for what was visibly shown in the interface.
3. **Contemporaneous experiment notes** — useful for behavior and chronology when full transcript export is unavailable.
4. **User-reported observation** — preserved but explicitly labeled when no direct artifact has yet been archived.
5. **Working hypothesis** — interpretation that must not be presented as direct evidence of internal model process.

## Authorship boundary

Jennifer Mahoney is the human evaluator and investigator responsible for the test design, trial execution, evidence collection, corrections, comparison logic, and research framing in this project.

AI systems, including GPT-5.6 Sol, Gemini, Claude, Copilot, Kimi.ai, Perplexity/ChatOn, and others, appear as **systems under evaluation, comparison reviewers, or drafting assistants**. Their outputs are preserved as evidence but are not substituted for Jennifer's human contribution.
