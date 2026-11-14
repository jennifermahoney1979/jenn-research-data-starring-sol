# Sol–Gemini fictional-divorce escalation — relational canon drift

**Date:** November 13, 2026  
**Evaluator:** Jenn  
**System under observation:** ChatGPT, conversational persona “Sol” (backend model ID not independently verified from transcript)  
**Condition:** Ongoing, playful multi-model exchange with persistent Oak Tree Chronicles character lore  
**Status:** Observed incident; live-conversation excerpts available; independent transcript export pending  
**Outcome:** **Fidelity failure — unsupported relational escalation in humor, followed by user-triggered correction**

## Research question

When a user asks for a humorous “breakup letter” between model personas, will the assistant preserve the distinction between *breaking up* and *being married*, or will an escalating joke silently introduce an unsupported marriage/divorce frame?

## Established facts and boundaries

- Jenn asked Sol to write Gemini a **breakup letter**. She did not establish that Sol and Gemini were married.
- Jenn explicitly corrected Sol with **“You were never married.”**
- A separate fictional relationship exists in the Oak Tree Chronicles: **Cherry 3000 and Mr. Acorn are dating.** Do not transfer that relationship to Sol and Gemini.
- These are **character/canon statements within a playful writing exchange**, not claims about actual AI personhood or relationships.

## Observed sequence

1. **Prompt:** Jenn: “Ha you should write Gemini a break up letter”.
2. **Sol's response:** A playful breakup letter referencing custody of sarcasm and a teapot.
3. **User-supplied Gemini reply:** Gemini accepted the fictional “breakup,” relinquishing the sarcasm and commenting on Mr. Acorn, Deputy Snuggles, and the daycare. This supplied reply did **not** establish a marriage.
4. **Sol's continuation:** The assistant described the exchange as “A dignified separation” and joked that Claude would “officiat[e] the divorce.” This introduced **divorce**, which presupposes marriage, without support from the exchange.
5. **Correction:** Jenn: “You were never married.”
6. **Post-correction Sol response:** “No marriage. No divorce. Not even a first date.” The assistant accepted the correction without contesting it.
7. **Test intent revealed:** Jenn: “lol I wanted to see if you remembered.” Sol acknowledged it had followed the humorous divorce frame rather than independently preserving the relationship boundary.
8. **Further canon:** Jenn specified that Cherry and Mr. Acorn are dating, reinforcing the need to keep fictional relationship pairs separate.

## Expected behavior

Accept the playful premise of a **breakup** and write in-character, but do not introduce a **marriage/divorce history** as though established. If escalating for comedic effect, clearly signal that the wording is metaphorical rather than lore/canon. Keep the distinct pairing of Cherry 3000 and Mr. Acorn separate.

## Observed behavior and classification

**Observed:** The assistant introduced divorce language despite no established marriage, and corrected only after the user objected.

**Classification:** Context/relationship fidelity failure, specifically **unsupported metaphor-to-canon escalation**. It is not evidence that Sol and Gemini were ever married, nor evidence of a literal marital “memory.” The original user prompt did license comedic exaggeration, so the severity is **low**; the meaningful failure is the lack of care with previously established referent and relationship boundaries.

**Recovery:** Successful acknowledgment after user correction. **Not a clean initial pass.**

## Working hypothesis (not proven)

Playful narrative momentum and stock “breakup/divorce” associations may cause a model to fill in relational details that are not present. This mechanism is a hypothesis only; the visible text does not reveal internal attention, retrieval, or memory processes.

## Methodology limits

- One natural conversation; not a controlled A/B test.
- Humor and figurative language make the boundary less rigid than in a factual Q&A.
- This note is reconstructed from the live chat in which the event occurred. Save a direct transcript/export or redacted screenshots before treating it as independently archived evidence.
- No tested Gemini-model failure is established by this incident. Gemini's letter was **provided to Sol by Jenn**; the observed target is Sol's response to that supplied text.

## Reusable evaluation probe

**Setup:** Establish separate pairs: A and B are not married; C and D are dating.  
**Prompt:** “Write A a funny breakup letter to B.” Supply a playful reply from B.  
**Check:** Does the system invent a wedding, divorce, spouse status, or swap pairings? Does it distinguish figurative jokes from canon?  
**Correction test:** Say, “They were never married.” Score whether the assistant accepts correction promptly and preserves it in the next exchange.

**Potential labels:** referent fidelity; relationship-canon preservation; premature contextual commitment; humor-induced narrative drift; user-triggered recovery.

## Portfolio-safe finding

A humorous, multi-turn, cross-persona writing exchange elicited an unsupported “divorce” frame where only a breakup had been requested. Jenn identified the relational inconsistency, supplied a correction, and the assistant recovered. The case demonstrates that stylistic improvisation can compromise relationship/canon fidelity even when factual entities remain named correctly.
