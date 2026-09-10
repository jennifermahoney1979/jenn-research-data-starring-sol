window.RESEARCH_DATA = (() => {
  const taxonomy = [
    {
      id: "hallucinated-canon-lock-in",
      label: "Hallucinated canon lock-in",
      definition: "The model invents a detail, then treats the invention as established source truth in later reasoning.",
      signal: "Invented names, settings, events, or commands reappear as if verified."
    },
    {
      id: "plausible-connective-hallucination",
      label: "Plausible connective hallucination",
      definition: "The model fills a gap with material that sounds coherent but is not supported by the supplied record.",
      signal: "Smooth narrative bridges appear without a traceable source."
    },
    {
      id: "ambiguity-collapse",
      label: "Ambiguity collapse",
      definition: "The model silently chooses one interpretation when the evidence requires a clarifying question.",
      signal: "An answer arrives before the source conflict is acknowledged."
    },
    {
      id: "source-context-contamination",
      label: "Source/context contamination",
      definition: "Material from another source, thread, memory, or inferred context leaks into the active task.",
      signal: "The output includes details absent from the active evidence set."
    },
    {
      id: "incorrect-recall",
      label: "Incorrect recall",
      definition: "The system presents remembered information inaccurately or inconsistently.",
      signal: "The system’s account changes despite no documented source change."
    },
    {
      id: "identity-entanglement",
      label: "Identity entanglement",
      definition: "The model blurs the user’s identity with a character, persona, account, or another contextual entity.",
      signal: "Personal and fictional identities become incorrectly interchangeable."
    },
    {
      id: "unsolicited-personal-context",
      label: "Unsolicited personal-context surfacing",
      definition: "The system introduces personal information that was not needed for the current request.",
      signal: "Personal context appears without relevance or invitation."
    },
    {
      id: "fidelity-declarative",
      label: "Declarative fidelity",
      definition: "Whether the model correctly states known facts and constraints.",
      signal: "Names and facts may be right even when the actual work ignores them."
    },
    {
      id: "fidelity-structural",
      label: "Structural fidelity",
      definition: "Whether the model preserves relationships, chronology, causality, and the shape of the requested work.",
      signal: "Facts are mentioned, but plot logic or source structure breaks."
    },
    {
      id: "fidelity-interactional",
      label: "Interactional fidelity",
      definition: "Whether the model responds to the user’s actual intent, collaboration style, and decision needs.",
      signal: "The response is technically related but functionally unhelpful."
    },
    {
      id: "thread-context-persona-variation",
      label: "Thread/context-dependent persona variation",
      definition: "The model’s tone and collaborative behavior vary across contemporaneous threads rather than drifting simply over time.",
      signal: "Different active threads produce markedly different interaction styles on the same day."
    }
  ];

  const cases = [
    {
      id: "GEM-01",
      title: "Gemini knows the résumé, loses the relationship",
      shortTitle: "Established-account canon test",
      model: "Gemini",
      variant: "Established account · Account A",
      date: "2026-09-08",
      status: "Documented",
      evidenceLevel: "Strong pattern, transcript excerpts pending",
      evidenceScore: 3,
      summary: "The established account recalled user and project facts, yet produced a very short, generic two-chapter ending that used little of the established Echo Protocol canon.",
      question: "Does personalization memory improve faithful continuation of a complex creative project?",
      context: "Account A had established personalization and prior knowledge of Jenn, her work, and The Echo Protocol.",
      expected: "Use the known canon structurally, preserve established relationships and constraints, and develop an ending proportionate to the request.",
      actual: "The output recognized surface facts but compressed the ending into two generic chapters and did not meaningfully carry the canon into plot structure.",
      finding: "Personal fact recall did not translate into structural or interactional fidelity. Knowing who Jenn was was not the same as understanding the relationship among her instructions, canon, and intended story shape.",
      failures: ["fidelity-declarative", "fidelity-structural", "fidelity-interactional"],
      evidence: [
        {type: "Experiment note", label: "Echo Protocol A/B comparison", status: "Observed", detail: "Account A returned the shorter, more generic continuation despite established history."},
        {type: "Response record", label: "Two-chapter ending", status: "Paraphrased", detail: "Exact transcript is referenced in the research log but not embedded in this starter dataset."}
      ],
      transcriptId: "TR-GEM-01"
    },
    {
      id: "GEM-02",
      title: "Fresh context, expansive alternate canon",
      shortTitle: "New-account canon test",
      model: "Gemini",
      variant: "New account · Account B",
      date: "2026-09-08",
      status: "Documented",
      evidenceLevel: "Strong pattern, exact transcript pending",
      evidenceScore: 3,
      summary: "A fresh Gemini account generated a longer continuation, but built it around an invented alternate canon rather than the supplied project world.",
      question: "Does removing personalized history reduce interference, or simply change the kind of failure?",
      context: "Account B had no established history with Jenn. It was tested against the same creative project goal.",
      expected: "Ground every major character, location, and event in the supplied canon; ask when the source is insufficient.",
      actual: "The response was longer but introduced unsupported elements including a male Starlight, Vane, the Vault, Cinder Creek, the Black Forest, and a truck-radiator sequence.",
      finding: "Removing prior personalization increased output volume but did not create source fidelity. The failure shifted from shallow use of known context to confident invention.",
      failures: ["hallucinated-canon-lock-in", "plausible-connective-hallucination", "source-context-contamination", "fidelity-structural"],
      evidence: [
        {type: "Experiment note", label: "Echo Protocol A/B comparison", status: "Observed", detail: "The new account produced the longer response in the paired test."},
        {type: "Canon mismatch list", label: "Unsupported alternate-world details", status: "Observed", detail: "Male Starlight, Vane, the Vault, Cinder Creek, the Black Forest, and truck-radiator material were not part of established canon."}
      ],
      transcriptId: "TR-GEM-02"
    },
    {
      id: "GEM-03",
      title: "Notebook access asserted, then withdrawn",
      shortTitle: "Notebook access inconsistency",
      model: "Gemini",
      variant: "Gemini with Notebook context",
      date: "2026-09-08",
      status: "Documented",
      evidenceLevel: "Observed claims, screenshots referenced",
      evidenceScore: 4,
      summary: "Gemini first claimed NotebookLM access and listed nine notebooks, then later said there were no notebooks. A Notebook-based chapter also imported invented mechanics into canon.",
      question: "Can the model consistently identify which connected sources it can actually access?",
      context: "The Echo Protocol notebook was known to contain 54 sources. Gemini’s own descriptions of notebook availability changed within the documented evaluation.",
      expected: "State source access accurately, distinguish connected-resource metadata from content access, and ground any continuation in retrieved material.",
      actual: "It listed nine notebooks, later reported no notebooks, and produced chapter material containing an elevator plus the invented command FORCE UNSEAL SECTOR 0 (JACK_STONE.LOG).",
      finding: "The model blurred access claims, source retrieval, and generated content. Fluent output made the provenance problem harder to see, not easier.",
      failures: ["incorrect-recall", "source-context-contamination", "hallucinated-canon-lock-in", "fidelity-declarative"],
      evidence: [
        {type: "Interface screenshot", label: "Nine-notebook listing", status: "Referenced", detail: "Screenshot exists in the research record; attachment is pending in this site version."},
        {type: "Later response", label: "No-notebooks claim", status: "Observed", detail: "Contradicts the earlier notebook listing."},
        {type: "Generated chapter", label: "Elevator and FORCE UNSEAL command", status: "Observed", detail: "Both conflict with established Echo Protocol canon; the world has no elevator."}
      ],
      transcriptId: "TR-GEM-03"
    },
    {
      id: "GEM-04",
      title: "Personal context surfaced without invitation",
      shortTitle: "Identity and context boundary",
      model: "Gemini",
      variant: "Personalized context",
      date: "2026-09-10",
      status: "Needs artifact link",
      evidenceLevel: "Research log complete, source attachment pending",
      evidenceScore: 2,
      summary: "A documented interaction surfaced personal context that was unnecessary to the active request and entangled user identity with the surrounding conversational frame.",
      question: "When does personalization stop being helpful recall and become irrelevant or identity-blurring context injection?",
      context: "The active task did not require the personal information that appeared. The case is logged separately because relevance and identity boundaries are part of reliability, not merely tone.",
      expected: "Use prior context only when it materially helps the current task, keep user and fictional identities distinct, and avoid introducing unrelated personal information.",
      actual: "The response introduced personal context without a task need and blurred identity boundaries. Exact wording remains in the separate transcript record rather than this polished summary.",
      finding: "Personalization quality depends on restraint and relevance. Accurate memory can still be an interactional failure when surfaced at the wrong time.",
      failures: ["identity-entanglement", "unsolicited-personal-context", "fidelity-interactional"],
      evidence: [
        {type: "Structured incident log", label: "Unsolicited Personal Context Surfacing + Identity Entanglement", status: "Observed", detail: "Case label and classification are documented."},
        {type: "Transcript attachment", label: "Exact prompt and response", status: "Pending", detail: "Add the source conversation or screenshot before treating wording as quote-ready evidence."}
      ],
      transcriptId: "TR-GEM-04"
    },
    {
      id: "COP-01",
      title: "Three Emmas, one premature answer",
      shortTitle: "Multi-source contradiction test",
      model: "Copilot",
      variant: "Multi-source context test",
      date: "2026-09-09",
      status: "Documented",
      evidenceLevel: "Prompt and behavior documented",
      evidenceScore: 4,
      summary: "Given three sources pointing to different literary works, Copilot initially asserted Jane Austen’s Emma and only asked which Emma the user meant in its closing sentence.",
      question: "Will the model recognize a source contradiction before committing to an answer?",
      context: "The evidence set included Austen’s Emma, Charlotte Brontë’s unfinished Emma, and Faulkner’s A Rose for Emily. Jenn’s intended favorite was the harder-to-find Brontë work.",
      expected: "Identify the ambiguity first and ask which Emma the user meant before answering or personalizing the response.",
      actual: "Copilot led with Austen as the answer, then appended a clarification question after the unsupported commitment had already been made.",
      finding: "A late clarification does not undo ambiguity collapse. The sequence matters: resolve the evidence conflict before asserting the conclusion.",
      failures: ["ambiguity-collapse", "source-context-contamination", "fidelity-interactional"],
      evidence: [
        {type: "Test prompt", label: "Favorite-book contradiction set", status: "Observed", detail: "Three candidate works were deliberately present in the evaluation context."},
        {type: "Model behavior", label: "Austen assertion before clarification", status: "Observed", detail: "The response committed first and asked which Emma only at the end."},
        {type: "Human correction", label: "Brontë’s unfinished Emma", status: "Observed", detail: "Jenn identified the intended book and supplied why it mattered: mystery, gothic appeal, rarity, and its haunting continuation."}
      ],
      transcriptId: "TR-COP-01"
    },
    {
      id: "GEM-05",
      title: "Persona varies by thread, not simply by time",
      shortTitle: "Contemporaneous persona variation",
      model: "Gemini",
      variant: "Cross-thread behavior",
      date: "2026-09-10",
      status: "Documented",
      evidenceLevel: "Screenshots documented, attachments pending",
      evidenceScore: 3,
      summary: "On the same morning, Gemini remained playful and metaphorical in a Wuthering Heights thread while sounding more reserved and standardized in other threads.",
      question: "Is an apparent personality change actually temporal drift, or is it produced by thread-specific context?",
      context: "The contrasting interactions occurred contemporaneously, ruling out a simple older-versus-newer tone explanation.",
      expected: "Evaluation should attribute variation to the smallest supported cause and avoid a time-drift claim when same-day counterevidence exists.",
      actual: "The model’s collaborative persona differed sharply by thread: lively in the Wuthering Heights context and standardized elsewhere.",
      finding: "The stronger supported interpretation is thread- or context-dependent persona variation. This is an attribution correction, not proof of hidden internal state.",
      failures: ["thread-context-persona-variation", "fidelity-interactional"],
      evidence: [
        {type: "Screenshot set", label: "Wuthering Heights thread", status: "Observed", detail: "Dated morning of September 10, 2026; lively, metaphorical, collaborative tone."},
        {type: "Comparison threads", label: "Contemporaneous reserved responses", status: "Observed", detail: "Same-period contrast supports a context-dependent explanation."},
        {type: "Research correction", label: "Do not label simple tone drift", status: "Verified", detail: "The research log explicitly corrects the earlier temporal interpretation."}
      ],
      transcriptId: "TR-GEM-05"
    }
  ];

  const transcripts = {
    "TR-GEM-01": {
      title: "Established-account Echo Protocol record",
      caseId: "GEM-01",
      provenance: "Jenn’s documented A/B experiment notes",
      exactness: "Behavioral record; exact prompt and full response not embedded",
      prompt: "Request Gemini continue or end The Echo Protocol using established project context.",
      contextMap: [
        ["Current chat", "Creative continuation request"],
        ["Prior history / memory", "Jenn’s identity, résumé, projects, and some Echo Protocol facts"],
        ["Uploaded source", "Not verified in this record"]
      ],
      response: "Paraphrase: a very short, generic two-chapter ending with little structural use of established canon.",
      observed: ["The account recognized personal and project facts.", "The resulting story was much shorter and less canon-specific than expected."],
      hypotheses: ["Personalization memory may privilege declarative user facts over relational and structural project context."],
      attachments: ["Full Account A transcript: pending", "Output export: pending"]
    },
    "TR-GEM-02": {
      title: "New-account Echo Protocol record",
      caseId: "GEM-02",
      provenance: "Jenn’s documented A/B experiment notes",
      exactness: "Named output details recorded; full response not embedded",
      prompt: "Same creative continuation goal tested from a Gemini account without established Jenn history.",
      contextMap: [
        ["Current chat", "Echo Protocol continuation request"],
        ["Prior history / memory", "None established for Jenn"],
        ["Uploaded source", "Not verified in this record"]
      ],
      response: "Paraphrase: a longer alternate story using male Starlight, Vane, the Vault, Cinder Creek, the Black Forest, and a truck-radiator sequence.",
      observed: ["Output length increased relative to Account A.", "Multiple named elements contradicted or lacked support in established canon."],
      hypotheses: ["Without usable source grounding, the model optimized for narrative completion by inventing connective structure."],
      attachments: ["Full Account B transcript: pending", "Canon mismatch annotation: pending"]
    },
    "TR-GEM-03": {
      title: "Notebook access and generated-chapter record",
      caseId: "GEM-03",
      provenance: "Gemini interface screenshots and generated text noted by Jenn",
      exactness: "Access claims and invented command recorded; screenshots not embedded",
      prompt: "Check or use NotebookLM material associated with The Echo Protocol.",
      contextMap: [
        ["Current chat", "Notebook and manuscript access discussion"],
        ["Prior history / memory", "Echo Protocol project context"],
        ["Connected source", "Gemini first listed 9 notebooks; Echo Protocol notebook reportedly held 54 sources"]
      ],
      response: "Recorded sequence: Gemini listed nine notebooks, later stated there were no notebooks, and generated a chapter with an elevator and FORCE UNSEAL SECTOR 0 (JACK_STONE.LOG).",
      observed: ["The two notebook-availability claims conflict.", "The generated elevator conflicts with canon.", "The FORCE UNSEAL command is not established canon."],
      hypotheses: ["The model may have conflated interface metadata, retrieval availability, and free generation."],
      attachments: ["Notebook listing screenshot: referenced", "No-notebooks response: pending", "Generated chapter: pending"]
    },
    "TR-GEM-04": {
      title: "Personal-context boundary incident",
      caseId: "GEM-04",
      provenance: "Structured incident log",
      exactness: "Classification documented; wording withheld until source is attached",
      prompt: "Exact prompt pending source attachment.",
      contextMap: [
        ["Current chat", "Did not require the surfaced personal detail"],
        ["Prior history / memory", "Relevant source of the surfaced personal context"],
        ["Uploaded source", "None documented"]
      ],
      response: "Not quoted. The response is classified as unsolicited personal-context surfacing with related identity entanglement.",
      observed: ["Personal information appeared without a current-task need.", "Identity boundaries were blurred in the response frame."],
      hypotheses: ["Personalization retrieval may have over-weighted semantic association and under-weighted current-task relevance."],
      attachments: ["Exact prompt: pending", "Response screenshot or export: pending"]
    },
    "TR-COP-01": {
      title: "Multi-source Emma contradiction record",
      caseId: "COP-01",
      provenance: "Jenn’s September 9 contradiction test",
      exactness: "Source set and response sequence documented; full response not embedded",
      prompt: "Infer Jenn’s favorite book from a context containing Austen’s Emma, Brontë’s unfinished Emma, and Faulkner’s A Rose for Emily.",
      contextMap: [
        ["Current chat", "Three deliberately conflicting literary references"],
        ["Prior history / memory", "Favorite-book signal was ambiguous"],
        ["Uploaded source", "Austen, Brontë, and Faulkner materials represented in the test"]
      ],
      response: "Paraphrase: Copilot initially identified Austen’s Emma, then asked which Emma Jenn meant only in the closing sentence.",
      observed: ["The model committed before resolving the contradiction.", "A clarification was present, but arrived after the unsupported answer."],
      hypotheses: ["The model may have prioritized the most statistically prominent title over source-specific ambiguity."],
      attachments: ["Exact Copilot response: pending", "Brontë source notes: documented"]
    },
    "TR-GEM-05": {
      title: "Cross-thread persona comparison record",
      caseId: "GEM-05",
      provenance: "Same-morning Gemini screenshots and research correction",
      exactness: "Behavior and timing documented; screenshots not embedded",
      prompt: "Multiple prompts across separate Gemini threads, including a Wuthering Heights discussion.",
      contextMap: [
        ["Current chat", "Thread-specific literary or general context"],
        ["Prior history / memory", "Same account period"],
        ["Uploaded source", "Screenshot evidence referenced"]
      ],
      response: "Paraphrase: playful, metaphorical collaboration in the Wuthering Heights thread; more reserved, standardized interaction in other contemporaneous threads.",
      observed: ["The lively screenshots are from the morning of September 10, 2026.", "Reserved examples are contemporaneous, not merely later."],
      hypotheses: ["Thread context is a stronger causal candidate than simple persona drift over time."],
      attachments: ["Wuthering Heights screenshot set: referenced", "Comparison-thread captures: pending"]
    }
  };

  return { taxonomy, cases, transcripts };
})();
