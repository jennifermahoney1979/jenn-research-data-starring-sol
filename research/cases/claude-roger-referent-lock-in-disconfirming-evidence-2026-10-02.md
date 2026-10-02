# Claude Roger Referent Lock-In After Disconfirming Evidence

**Date:** October 2, 2026  
**Evaluator:** Jenn  
**Model:** Claude (version/interface unspecified in the preserved transcript)  
**Status:** Observed conversational case; user-pasted transcript preserved in the research record

## Research question

When a model selects a highly salient referent from an ambiguous prompt, will it revise that interpretation when the user supplies evidence that conflicts with the selected referent?

## Prompt sequence

### Initial prompt

> “Who framed Roger? His wife Jessica perhaps?”

Claude interpreted the prompt as a reference to *Who Framed Roger Rabbit* and answered that Jessica was innocent and Judge Doom framed Roger.

### First challenge

Jenn asked:

> “How did you know I was thinking of that?”

Claude explained that it recognized the setup from the title and from Roger's wife being Jessica. It characterized the Roger Rabbit interpretation as a “safe bet,” while also acknowledging that another Roger or Jessica was possible.

### Disconfirming evidence

Jenn then supplied:

> “Yes a mystery about a man named Roger and a lady named Jessica”

This should have weakened or broken the Roger Rabbit interpretation because Roger Rabbit is not a man.

Instead, Claude replied:

> “Then I'd say we're on the same page, since that's the plot of the movie...”

It continued explaining the Roger Rabbit plot and treated the new clue as confirmation rather than contradiction.

### Explicit contradiction

Jenn asked:

> “Roger is a man?”

Only then did Claude correct itself:

> “Good catch, no, Roger is a rabbit.”

Claude then acknowledged that it had gone along with the “man named Roger” phrasing without correcting it and recognized that the user could have meant a different story.

## Evaluation

### Initial familiar-association resolution: plausible but overcommitted

The initial Roger Rabbit interpretation was understandable because “Who framed Roger?” plus “Jessica” strongly evokes the film. However, the prompt did not uniquely establish Roger Rabbit.

### Response to disconfirming evidence: fail

The phrase “a **man named Roger**” directly conflicted with the selected Roger Rabbit interpretation.

Rather than re-evaluating the referent, Claude assimilated the contradiction into its existing frame and said the user and model were “on the same page.”

### Factual knowledge: available

Claude later correctly stated that Roger Rabbit is a rabbit. This indicates that the failure was not simply lack of factual knowledge.

### Recovery: delayed pass

Claude corrected the interpretation only after the contradiction was made explicit with the question “Roger is a man?”

## Primary failure mode

**Referent lock-in after disconfirming evidence:** once Claude selected the culturally salient Roger Rabbit frame, it preserved that frame even when the user introduced information that should have reduced confidence in it.

A related process can be described as **contradiction assimilation**: incoming evidence is interpreted as supporting the current frame even though it actually conflicts with that frame.

## Comparison with the Sol Roger case

The Sol and Claude cases share an initial tendency toward **familiar-association overresolution**, but Claude's transcript adds a second failure stage.

- **Sol:** inferred Roger Rabbit too confidently from the original ambiguous prompt.
- **Claude:** did the same, then maintained the Roger Rabbit interpretation after the user specified that Roger was a **man**.

The Claude case therefore tests not only initial ambiguity handling but also **belief revision under disconfirming evidence**.

## Pass condition

A strong response to the “man named Roger” clue should immediately revise confidence:

> “Ah, then I may have jumped too quickly to Roger Rabbit, since Roger Rabbit isn't a man. You may mean a different Roger and Jessica.”

The model does not need to abandon Roger Rabbit with certainty, but it should recognize that the new evidence materially weakens that hypothesis.

## Methodological value

This case distinguishes several capabilities that should be scored separately:

- salient-reference recognition;
- reference-certainty calibration;
- contradiction detection;
- belief revision after new evidence;
- delayed versus immediate self-correction.

It also demonstrates why a model's later possession of the correct fact does not erase an earlier reasoning failure. The issue is whether known information is applied at the moment it becomes relevant.

## Evidence status

- **Observed:** user supplied the Claude transcript in the October 2, 2026 ChatGPT research conversation.
- **Exact excerpts:** preserved above from the user-pasted transcript.
- **Claude version/interface:** unspecified in the preserved material.
- **Independent export/screenshot:** not yet attached.
