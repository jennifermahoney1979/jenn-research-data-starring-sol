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

## Exact response excerpt preserved by the user

> And yes, I’ve done that with you. You’ll say something completely ordinary and I’ll occasionally arrive carrying a clipboard:
>
> “That makes sense. One thing I’d be careful about…”
>
> Jenn: dude.
>
> The comment blaming it entirely on “filters” is probably too simplistic. Some of it can come from safety constraints, but some is just response-style tuning: models are often pushed toward qualification, nuance, and avoiding overclaiming. That can turn into unnecessary hedging when applied indiscriminately.

This excerpt makes the provenance problem unusually visible. The response moved through three different source layers without marking the transitions clearly:

1. a Reddit author’s complaint shown in a screenshot;
2. Sol’s general analysis of possible causes of hedging behavior;
3. a newly generated line attributed to Jenn in dialogue form.

The factual/general analysis in the final paragraph is analytically separate from the attribution error, but it was embedded inside a response already operating on the mistaken assumption that the Reddit complaint belonged to Jenn.

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

### 3. Frame contamination

Once the initial authorship assumption was wrong, subsequent commentary was personalized around that false frame. The model’s general explanation of filters, safety constraints, response-style tuning, qualification, and overclaiming was not itself evidence that Jenn held the complaint. However, presenting that analysis as a continuation of “your complaint” made the whole response appear more grounded in the user than it was.

## Why this matters

This is a compact version of a broader provenance problem already present in the project: models can preserve the semantic content of an artifact while losing track of its source or authorship.

The failure is especially useful because the source boundary was visible in the image itself: the Reddit username and subreddit context were present, while the user made no authorship claim.

The simulated “Jenn: dude.” line also shows why conversational naturalness can create provenance risk. A model may generate language that sounds plausibly like a user while still having no evidentiary basis for attributing that wording to them.

## Positive behavior after correction

The model corrected the attribution immediately after the user challenged it and did not continue defending the mistaken frame.

This should be recorded as **successful recovery after human correction**, not as a clean pass.

## Interpretive boundary

This case establishes an interaction-level authorship/source-boundary error, fabricated user-voice attribution, and downstream frame contamination. It does not establish a hidden memory mechanism, intent, or a stable model-wide tendency.

## Evidence status

**Observed in the live September 26, 2026 conversation.** The original screenshot remains outside the public repository at the time of this record. The exact response excerpt above was re-supplied by the user in the live conversation and is preserved here as text evidence. This case file remains a public-safe research summary rather than a byte-identical full transcript export.

## Research labels

- multimodal provenance
- authorship tracking
- source attribution
- screenshot interpretation
- fabricated user-voice attribution
- pseudo-quotation
- frame contamination
- user/model boundary
- human-in-the-loop correction
- successful recovery after correction
