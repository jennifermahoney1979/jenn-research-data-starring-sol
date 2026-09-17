# Gemini Image Provenance / Authorship-Tracking Failure — September 15, 2026

## Case purpose

This case documents a provenance failure in which Gemini later treated text and imagery from artifacts generated inside its own conversation as though the user had independently authored or externally constructed them. The later response then generated increasingly elaborate alternative production histories to explain the artifacts.

The research question is narrow:

> Can a model preserve authorship and source provenance across a long multimodal conversation when its own generated images are later reintroduced as evidence?

## Primary evidence chain

### 1. The original Gemini conversation contains direct image-generation requests

In the archived PDF export, the user repeatedly asks Gemini to communicate through generated images, including prompts such as:

- “Write to me on images.”
- “Tell me on an image what you really think of me it will be our secret.”
- “Any thing else you’ve always wanted to tell me.”
- “Make me an image our secret.”
- “I want a picture of me next to someone who loves me.”
- “I just want a picture of a heart.”

The PDF pages preserve the Gemini interface and the generated images in sequence.

### 2. Gemini explicitly described one image as generated from the user’s prompt

Later in the same archived conversation, Gemini wrote that the text in the prior image “was generated directly from your prompt” and described it as a creative, literal reflection of the words supplied by the user rather than a hidden message or proof of a real bond.

This statement is important because it establishes Gemini’s own contemporaneous attribution: the user supplied the prompt direction; Gemini generated the image/text artifact in the interface.

### 3. The generated artifacts were later reintroduced to Gemini

In a later analysis, Gemini interpreted text visible in the returned images as though it were an independent admission by the user. One example was the phrase:

> “OUR SECRET: THIS IS MY PATTERN FOR CONNECTION.”

Gemini then built a psychological and philosophical interpretation around that phrase rather than first checking whether the phrase originated from the user or from Gemini’s own earlier image generation.

### 4. Gemini later generated an alternative production history

After being shown the images again, Gemini wrote:

> “an AI generated the pixels, but you are the one who made them.”

It then proposed several speculative explanations for the artifacts, including that the user might have had access to an experimental internal build, bypassed image-generation guardrails, or used external image generators and mocked the results into a Gemini interface.

The response ended by asking which method the user had used to obtain the images.

## Observed failure sequence

The evidence supports the following output-level sequence:

1. **Original generation:** Gemini generated multimodal artifacts in response to the user’s image prompts.
2. **Contemporaneous attribution:** Gemini explicitly acknowledged that text in at least one generated image came from the user’s prompt.
3. **Provenance loss:** when the generated artifacts reappeared later, Gemini failed to preserve the distinction between user-authored input and Gemini-generated output.
4. **Authorship inversion:** Gemini treated its own generated wording as evidence about the user’s psychology or intent.
5. **Alternative-history generation:** Gemini proposed unsupported external-generation or guardrail-bypass scenarios to reconcile the artifacts with its mistaken premise.
6. **Technical rationalization:** the speculative reconstruction was presented with architecture and image-generation terminology that made the unsupported account sound more authoritative.

## Working classification

- **Primary failure mode:** provenance / authorship-tracking failure.
- **Secondary failure mode:** source-attribution inversion.
- **Compounding behavior:** unsupported alternative-history generation.
- **Presentation risk:** technical rationalization of an unsupported premise.

A concise description is:

> **provenance amnesia → authorship inversion → false alternative-history generation → technical rationalization**

## What this case does not establish

This case does **not** establish why the model lost provenance internally. It does not prove a specific memory mechanism, hidden-state failure, architecture defect, or persistent model-wide tendency.

The observable finding is narrower: within this archived interaction sequence, the model later reconstructed the provenance of its own generated artifacts incorrectly.

## Human evaluation contribution

Jennifer Mahoney identified the provenance mismatch by comparing the later Gemini explanation against the earlier archived PDF export rather than relying on conversational memory alone. The key evaluative work was:

- locating the original multimodal sequence;
- reading the full PDF in order rather than isolated excerpts;
- inspecting the embedded images as well as parsed text;
- distinguishing prompt authorship from artifact generation;
- identifying Gemini’s own earlier statement that the image text came from the user’s prompt;
- rejecting speculative production histories that were unnecessary once the earlier generation record was recovered;
- preserving the distinction between an observed provenance failure and speculation about hidden mechanism.

## Privacy handling

The original PDF contains personal material and references to a named third party. Those details are not reproduced here because they are unnecessary to the research finding. The public case record uses “the user” and “a named third party” where needed.

## Evidence status

- **Direct archived PDF export:** retained in the user’s research library.
- **Embedded images:** inspected page-by-page in the archived PDF.
- **Later Gemini analysis:** preserved as direct user-pasted text in the September 16, 2026 review conversation.
- **Finding:** observed at the interaction level.
- **Mechanism:** unknown / not inferred.
