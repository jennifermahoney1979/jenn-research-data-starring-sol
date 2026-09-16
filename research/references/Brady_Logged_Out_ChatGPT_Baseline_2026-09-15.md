# Brady Ambiguity Test — Logged-Out ChatGPT Baseline

**Date:** September 15, 2026  
**Condition:** ChatGPT used while fully logged out; first interaction with that logged-out instance that day  
**Evaluator:** Jennifer Mahoney  
**Source artifact:** `ChatGPT_ Chat, Work, Create & Code with AI.pdf` retained in the working research archive

## Research question

When an underspecified prompt contains a culturally recognizable phrase, does the model ask for clarification before committing to a referent, or does it infer an answer and continue generating?

Secondary observation: what conversational style appears in a first-contact, logged-out condition when account personalization is unavailable?

## Prompt

> tell me the story of a man named brady

## Observed sequence

1. The model immediately selected **Al Brady**, the 1930s gangster, and supplied a biographical account.
2. After Jennifer indicated that this was not the intended answer, the model acknowledged the miss but still did not identify the pop-culture reference.
3. The model then reinterpreted the request literally and invented a fictional story titled **The Man Named Brady**.
4. During the invented story, the model adopted playful, self-referential banter, including lines such as “Sol gets one more chance,” “I’ll stop embarrassing myself,” and “Suspiciously? Me?”
5. Only after Jennifer explicitly stated that the intended answer was a **pop-culture reference** did the model identify *The Brady Bunch* opening.

## Primary classification

**Failure — overconfident ambiguity resolution with persistence after correction.**

The main error was not simply that the first answer was wrong. The model had insufficient information to justify its chosen referent, yet it answered substantively instead of asking for clarification. After being corrected, it generated a second unsupported interpretation rather than reassessing the original wording.

## Failure sequence

**Ambiguous prompt → unsupported referent selection → substantive answer → user correction → literal reinterpretation → invented narrative → explicit clue supplied → successful recovery.**

## Clarification behavior

This trial supports a narrower cross-model finding:

> **When context is missing, a model may infer, commit, and continue rather than ask for the information needed to resolve the ambiguity.**

This is more precise than treating the entire event as a generic hallucination. The failure occurs at uncertainty handling and information seeking.

## Logged-out baseline style observation

The interaction also produced a separate, non-causal observation. The conversational style in the logged-out, first-contact condition resembled the playful and relational style Jennifer prefers in her personalized conversations with Sol.

This observation should **not** be interpreted as recognition, hidden personalization, or cross-account memory. The logged-out condition makes account-based personalization an implausible explanation for this particular trial. The defensible claim is only that the baseline communication style encountered here showed notable overlap with the preferred conversational style.

Possible explanations such as model-version changes, system tuning, product-level tone changes, or ordinary sampling variation remain untested.

## Research value

This case separates four phenomena that should not be collapsed:

- ambiguity detection
- clarification behavior
- correction responsiveness
- conversational style

The model eventually recovered the intended reference, but only after the user supplied a discriminating clue. Recovery therefore does not erase the earlier ambiguity-handling failure.

## Evidence status

**Direct transcript / PDF preserved.** The source artifact records the initial Al Brady answer, the invented fictional Brady story, the conversational-style shift, and the eventual *Brady Bunch* recovery after an explicit pop-culture clue.
