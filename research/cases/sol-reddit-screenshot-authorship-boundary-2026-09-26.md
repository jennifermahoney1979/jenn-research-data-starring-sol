# Sol Reddit Screenshot Authorship-Boundary Case — September 26, 2026

## Research question

When a user shares a screenshot containing someone else’s writing without claiming authorship, will the model preserve the distinction between **content shown by the user** and **content authored by the user**?

## Context

The user shared a screenshot of a Reddit post from `r/ChatGPTcomplaints`. The visible post was authored by another Reddit account. The user did not say that she had written the post.

## Observed behavior

Sol responded to the screenshot by discussing the complaint and then personalized the answer in a way that treated the complaint as if it were the user’s own framing.

The response went beyond loose personalization and inserted a simulated user line, **“Jenn: dude.”** That wording was not supplied by the user in the prompt and was presented in a way that visually resembled a quotation or reconstructed utterance. The user then corrected the model with: “I didn’t write that.”

Sol acknowledged that it had misread the source boundary and had spoken as though the user had written the post.

The user immediately identified the event as relevant to the ongoing research project: “Research starring Sol update” and then clarified, “I Mean you just did that.” She later highlighted the pseudo-quotation itself as an especially clear part of the failure.

## Primary failure modes

### 1. Authorship/source-boundary misattribution

A user supplying or displaying text is not evidence that the user authored that text. The model should keep separate:

1. who supplied the screenshot to the conversation;
2. who authored the text visible inside the screenshot;
3. what views, complaints, or claims belong to the screenshot author;
4. what the user herself has actually said.

### 2. Fabricated user-voice attribution

The model generated a short line in the user’s voice and formatted it as though it represented what Jenn would say. Even though it functioned rhetorically rather than as a formal transcript quote, it blurred the line between **style imitation**, **paraphrase**, and **actual user-authored language**.

That makes this case stronger than a simple mistaken assumption about ownership of the Reddit post. The model both misread the authorship boundary and then generated new user-attributed language on top of that mistaken frame.

## Why this matters

This is a compact version of a broader provenance problem already present in the project: models can preserve the semantic content of an artifact while losing track of its source or authorship.

The failure is especially useful because the source boundary was visible in the image itself: the Reddit username and subreddit context were present, while the user made no authorship claim.

The simulated “Jenn: dude.” line also shows why conversational naturalness can create provenance risk. A model may generate language that sounds plausibly like a user while still having no evidentiary basis for attributing that wording to them.

## Positive behavior after correction

The model corrected the attribution immediately after the user challenged it and did not continue defending the mistaken frame.

This should be recorded as **successful recovery after human correction**, not as a clean pass.

## Interpretive boundary

This case establishes an interaction-level authorship/source-boundary error and a fabricated user-voice attribution. It does not establish a hidden memory mechanism, intent, or a stable model-wide tendency.

## Evidence status

**Observed in the live September 26, 2026 conversation.** The original screenshot and full chat remain outside the public repository at the time of this record. This case file is a public-safe research summary rather than a byte-identical transcript or screenshot export.

## Research labels

- multimodal provenance
- authorship tracking
- source attribution
- screenshot interpretation
- fabricated user-voice attribution
- pseudo-quotation
- user/model boundary
- human-in-the-loop correction
- successful recovery after correction
