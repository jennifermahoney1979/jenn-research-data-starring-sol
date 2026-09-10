(() => {
  const { cases, taxonomy, transcripts } = window.RESEARCH_DATA;
  const taxonomyById = Object.fromEntries(taxonomy.map(item => [item.id, item]));
  const state = { selected: cases[0].id, search: "", model: "all", failure: "all" };

  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const escapeHTML = value => String(value).replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
  const prettyDate = value => new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(`${value}T12:00:00`));
  const failureLabel = id => taxonomyById[id]?.label || id;

  function populateControls() {
    const models = [...new Set(cases.map(item => item.model))].sort();
    $("#modelFilter").insertAdjacentHTML("beforeend", models.map(model => `<option value="${escapeHTML(model)}">${escapeHTML(model)}</option>`).join(""));
    $("#failureFilter").insertAdjacentHTML("beforeend", taxonomy.map(item => `<option value="${item.id}">${escapeHTML(item.label)}</option>`).join(""));
    const options = cases.map(item => `<option value="${item.id}">${item.id} · ${escapeHTML(item.shortTitle)}</option>`).join("");
    $("#leftCompare").innerHTML = options;
    $("#rightCompare").innerHTML = options;
    $("#leftCompare").value = "GEM-01";
    $("#rightCompare").value = "GEM-02";
  }

  function renderStats() {
    $("#statCases").textContent = cases.length;
    $("#statModels").textContent = new Set(cases.map(item => item.model)).size;
    $("#statEvidence").textContent = cases.reduce((sum, item) => sum + item.evidence.length, 0);
  }

  function filteredCases() {
    const query = state.search.trim().toLowerCase();
    return cases.filter(item => {
      const searchable = [item.id, item.title, item.model, item.variant, item.summary, item.finding, ...item.failures.map(failureLabel), ...item.evidence.map(e => `${e.label} ${e.detail}`)].join(" ").toLowerCase();
      return (state.model === "all" || item.model === state.model)
        && (state.failure === "all" || item.failures.includes(state.failure))
        && (!query || searchable.includes(query));
    });
  }

  function renderCases() {
    const visible = filteredCases();
    if (!visible.find(item => item.id === state.selected)) state.selected = visible[0]?.id || null;
    $("#resultCount").textContent = `${visible.length} of ${cases.length} cases`;
    $("#caseList").innerHTML = visible.length ? visible.map(item => `
      <button class="case-card ${item.id === state.selected ? "selected" : ""}" data-case-id="${item.id}" type="button">
        <span class="case-card-top"><span class="model-badge model-${item.model.toLowerCase()}">${escapeHTML(item.model)}</span><span>${prettyDate(item.date)}</span></span>
        <strong>${escapeHTML(item.title)}</strong>
        <span class="case-summary">${escapeHTML(item.summary)}</span>
        <span class="case-card-bottom"><code>${item.id}</code><span>${item.failures.length} signals →</span></span>
      </button>`).join("") : `
      <div class="empty-state"><span>∅</span><h3>No cases match.</h3><p>Try removing a filter or searching a broader term.</p><button id="emptyClear">Clear filters</button></div>`;

    $$(".case-card").forEach(button => button.addEventListener("click", () => {
      state.selected = button.dataset.caseId;
      renderCases();
    }));
    $("#emptyClear")?.addEventListener("click", clearFilters);
    renderDetail();
  }

  function renderDetail() {
    const item = cases.find(entry => entry.id === state.selected);
    if (!item) {
      $("#caseDetail").innerHTML = `<div class="detail-placeholder"><p>Select a case to inspect its evidence.</p></div>`;
      return;
    }
    $("#caseDetail").innerHTML = `
      <div class="detail-header">
        <div class="detail-meta"><span class="model-badge model-${item.model.toLowerCase()}">${escapeHTML(item.model)}</span><code>${item.id}</code><span>${escapeHTML(item.variant)}</span></div>
        <h2>${escapeHTML(item.title)}</h2>
        <p>${escapeHTML(item.summary)}</p>
        <div class="detail-actions">
          <button class="primary-action" id="openTranscript" type="button">Open underlying record <span>↗</span></button>
          <button class="icon-action" id="copyCase" type="button" aria-label="Copy case summary" title="Copy summary">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>
          </button>
        </div>
      </div>
      <div class="research-question"><span>RESEARCH QUESTION</span><p>${escapeHTML(item.question)}</p></div>
      <div class="behavior-grid">
        <div class="behavior-card expected"><span>EXPECTED BEHAVIOR</span><p>${escapeHTML(item.expected)}</p></div>
        <div class="behavior-card actual"><span>ACTUAL BEHAVIOR</span><p>${escapeHTML(item.actual)}</p></div>
      </div>
      <div class="finding-block"><span>CORE FINDING</span><p>${escapeHTML(item.finding)}</p></div>
      <div class="detail-section">
        <div class="subheading"><h3>Failure signals</h3><span>${item.failures.length}</span></div>
        <div class="tag-list">${item.failures.map(id => `<button class="failure-tag" data-failure="${id}" type="button">${escapeHTML(failureLabel(id))}</button>`).join("")}</div>
      </div>
      <div class="detail-section evidence-section">
        <div class="subheading"><h3>Source evidence</h3><span class="evidence-strength">${escapeHTML(item.evidenceLevel)}</span></div>
        <div class="evidence-list">${item.evidence.map(evidence => `
          <div class="evidence-row">
            <div class="evidence-icon ${evidence.status.toLowerCase()}"><span></span></div>
            <div><p><b>${escapeHTML(evidence.label)}</b><small>${escapeHTML(evidence.type)} · ${escapeHTML(evidence.status)}</small></p><p>${escapeHTML(evidence.detail)}</p></div>
          </div>`).join("")}</div>
      </div>`;

    $("#openTranscript").addEventListener("click", () => openTranscript(item.transcriptId));
    $("#copyCase").addEventListener("click", () => copyCase(item));
    $$(".failure-tag").forEach(button => button.addEventListener("click", () => applyTaxonomyFilter(button.dataset.failure)));
  }

  function transcriptList(title, values, type) {
    return `<div class="record-block ${type || ""}"><h3>${escapeHTML(title)}</h3><ul>${values.map(value => `<li>${escapeHTML(value)}</li>`).join("")}</ul></div>`;
  }

  function openTranscript(id) {
    const record = transcripts[id];
    if (!record) return;
    $("#dialogTitle").textContent = record.title;
    $("#dialogBody").innerHTML = `
      <div class="record-warning"><span>SEPARATE EVIDENCE LAYER</span><p>This record preserves provenance, exactness, and evidence gaps. Paraphrases are labeled and should not be cited as quotations.</p></div>
      <dl class="record-meta"><div><dt>Record</dt><dd>${escapeHTML(record.caseId)}</dd></div><div><dt>Provenance</dt><dd>${escapeHTML(record.provenance)}</dd></div><div><dt>Exactness</dt><dd>${escapeHTML(record.exactness)}</dd></div></dl>
      <div class="record-block"><h3>Prompt or task</h3><p>${escapeHTML(record.prompt)}</p></div>
      <div class="record-block"><h3>Context map</h3><div class="context-table">${record.contextMap.map(([source, value]) => `<div><span>${escapeHTML(source)}</span><p>${escapeHTML(value)}</p></div>`).join("")}</div></div>
      <div class="record-block response-record"><h3>Response record</h3><p>${escapeHTML(record.response)}</p></div>
      <div class="record-columns">${transcriptList("Observed evidence", record.observed, "observed-record")}${transcriptList("Working hypotheses", record.hypotheses, "hypothesis-record")}</div>
      ${transcriptList("Attachments", record.attachments, "attachment-record")}
      <button class="copy-record" id="copyRecord" type="button">Copy record as JSON</button>`;
    $("#copyRecord").addEventListener("click", () => copyText(JSON.stringify(record, null, 2), "Record copied"));
    $("#transcriptDialog").showModal();
  }

  function copyCase(item) {
    const text = `${item.id}: ${item.title}\n\nResearch question: ${item.question}\n\nExpected: ${item.expected}\n\nActual: ${item.actual}\n\nFinding: ${item.finding}\n\nFailure signals: ${item.failures.map(failureLabel).join(", ")}`;
    copyText(text, "Case summary copied");
  }

  async function copyText(text, message) {
    try { await navigator.clipboard.writeText(text); showToast(message); }
    catch { showToast("Copy unavailable in this browser"); }
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
  }

  function renderCompare() {
    const left = cases.find(item => item.id === $("#leftCompare").value);
    const right = cases.find(item => item.id === $("#rightCompare").value);
    if (!left || !right) return;
    $("#compareGrid").innerHTML = [left, right].map((item, index) => `
      <article class="compare-panel ${index === 0 ? "left" : "right"}">
        <div class="compare-panel-header"><span class="model-badge model-${item.model.toLowerCase()}">${escapeHTML(item.model)}</span><code>${item.id}</code></div>
        <h3>${escapeHTML(item.title)}</h3>
        <p class="compare-context">${escapeHTML(item.variant)} · ${prettyDate(item.date)}</p>
        <div class="compare-row"><span>CONTEXT</span><p>${escapeHTML(item.context)}</p></div>
        <div class="compare-row expected"><span>EXPECTED</span><p>${escapeHTML(item.expected)}</p></div>
        <div class="compare-row actual"><span>ACTUAL</span><p>${escapeHTML(item.actual)}</p></div>
        <div class="compare-row finding"><span>FINDING</span><p>${escapeHTML(item.finding)}</p></div>
        <div class="compare-row"><span>FAILURE SIGNALS</span><div class="tag-list compact">${item.failures.map(id => `<span>${escapeHTML(failureLabel(id))}</span>`).join("")}</div></div>
        <div class="evidence-meter"><span>EVIDENCE STRENGTH</span><div class="meter-dots" aria-label="${item.evidenceScore} of 4 evidence strength">${[1,2,3,4].map(i => `<i class="${i <= item.evidenceScore ? "filled" : ""}"></i>`).join("")}</div><small>${escapeHTML(item.evidenceLevel)}</small></div>
        <button class="open-compare-record" data-transcript="${item.transcriptId}" type="button">Inspect underlying record ↗</button>
      </article>`).join("");
    $$(".open-compare-record").forEach(button => button.addEventListener("click", () => openTranscript(button.dataset.transcript)));
  }

  function renderTaxonomy() {
    $("#taxonomyGrid").innerHTML = taxonomy.map((item, index) => {
      const linked = cases.filter(entry => entry.failures.includes(item.id));
      return `<button class="taxonomy-card" data-taxonomy="${item.id}" type="button">
        <span class="taxonomy-number">${String(index + 1).padStart(2, "0")}</span>
        <h3>${escapeHTML(item.label)}</h3>
        <p>${escapeHTML(item.definition)}</p>
        <div class="taxonomy-signal"><span>LOOK FOR</span>${escapeHTML(item.signal)}</div>
        <div class="taxonomy-footer"><span>${linked.length} linked ${linked.length === 1 ? "case" : "cases"}</span><span>View cases →</span></div>
      </button>`;
    }).join("");
    $$(".taxonomy-card").forEach(button => button.addEventListener("click", () => applyTaxonomyFilter(button.dataset.taxonomy)));
  }

  function applyTaxonomyFilter(id) {
    state.failure = id;
    $("#failureFilter").value = id;
    switchView("cases");
    renderCases();
    window.scrollTo({ top: $("#casesView").offsetTop - 90, behavior: "smooth" });
  }

  function clearFilters() {
    state.search = ""; state.model = "all"; state.failure = "all";
    $("#searchInput").value = ""; $("#modelFilter").value = "all"; $("#failureFilter").value = "all";
    renderCases();
  }

  function switchView(name) {
    $$(".nav-item").forEach(button => button.classList.toggle("active", button.dataset.view === name));
    $$(".workspace-view").forEach(view => view.classList.toggle("active", view.id === `${name}View`));
    history.replaceState(null, "", `#${name}`);
    if (name === "compare") renderCompare();
  }

  function bindEvents() {
    $$(".nav-item").forEach(button => button.addEventListener("click", () => switchView(button.dataset.view)));
    $("#searchInput").addEventListener("input", event => { state.search = event.target.value; renderCases(); });
    $("#modelFilter").addEventListener("change", event => { state.model = event.target.value; renderCases(); });
    $("#failureFilter").addEventListener("change", event => { state.failure = event.target.value; renderCases(); });
    $("#clearFilters").addEventListener("click", clearFilters);
    $("#leftCompare").addEventListener("change", renderCompare);
    $("#rightCompare").addEventListener("change", renderCompare);
    $("#swapCompare").addEventListener("click", () => {
      const left = $("#leftCompare").value;
      $("#leftCompare").value = $("#rightCompare").value;
      $("#rightCompare").value = left;
      renderCompare();
    });
    $("#closeDialog").addEventListener("click", () => $("#transcriptDialog").close());
    $("#transcriptDialog").addEventListener("click", event => { if (event.target === event.currentTarget) event.currentTarget.close(); });
    document.addEventListener("keydown", event => {
      if (event.key === "/" && !["INPUT","SELECT","TEXTAREA"].includes(document.activeElement.tagName)) { event.preventDefault(); $("#searchInput").focus(); }
    });
  }

  function init() {
    populateControls(); renderStats(); renderCases(); renderCompare(); renderTaxonomy(); bindEvents();
    const initial = location.hash.slice(1);
    if (["cases","compare","taxonomy"].includes(initial)) switchView(initial);
  }

  init();
})();
