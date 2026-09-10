import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const html = fs.readFileSync("public/index.html", "utf8");
const css = fs.readFileSync("public/styles.css", "utf8");
const app = fs.readFileSync("public/app.js", "utf8");
const dataSource = fs.readFileSync("public/data.js", "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(dataSource, context);

const { cases, taxonomy, transcripts } = context.window.RESEARCH_DATA;
const taxonomyIds = new Set(taxonomy.map(item => item.id));

assert.equal(cases.length, 6, "Starter case count changed unexpectedly");
assert.deepEqual([...new Set(cases.map(item => item.model))].sort(), ["Copilot", "Gemini"]);
assert.equal(Object.keys(transcripts).length, cases.length, "Every polished case needs a separate underlying record");
assert.ok(cases.every(item => transcripts[item.transcriptId]), "A case points to a missing transcript record");
assert.ok(cases.every(item => item.failures.every(id => taxonomyIds.has(id))), "A case points to an undefined taxonomy term");
assert.ok(cases.every(item => item.expected && item.actual && item.finding && item.evidence.length), "Cases require expected, actual, finding, and evidence fields");
assert.ok(cases.every(item => !item.actual.includes("—")), "User-facing research text must not contain em dashes");

const byModel = model => cases.filter(item => item.model === model);
const byFailure = id => cases.filter(item => item.failures.includes(id));
const bySearch = query => cases.filter(item => JSON.stringify(item).toLowerCase().includes(query.toLowerCase()));
assert.equal(byModel("Copilot").length, 1, "Model filter fixture failed");
assert.equal(byFailure("ambiguity-collapse").length, 1, "Failure filter fixture failed");
assert.ok(bySearch("notebook").some(item => item.id === "GEM-03"), "Search fixture failed");

for (const id of ["casesView", "compareView", "taxonomyView", "caseList", "caseDetail", "leftCompare", "rightCompare", "transcriptDialog"]) {
  assert.ok(html.includes(`id="${id}"`), `Missing interactive surface: ${id}`);
}
for (const binding of ["searchInput", "modelFilter", "failureFilter", "swapCompare", "openTranscript", "closeDialog"]) {
  assert.ok(app.includes(binding), `Missing interaction binding: ${binding}`);
}
assert.ok(css.includes("@media (max-width: 760px)"), "Mobile layout breakpoint missing");
assert.ok(css.includes("prefers-reduced-motion"), "Reduced-motion support missing");

console.log("Site validation passed: data integrity, filter fixtures, comparison controls, transcript separation, interaction wiring, and responsive safeguards.");
