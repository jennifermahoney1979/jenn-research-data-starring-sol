# Photo Desk Deictic-Reference Case

**Date:** September 18, 2026  
**Evaluator:** Jenn  
**Status:** Tracked observational case; primary artifact pending

## Research question

When a prompt contains several visible candidate referents, will a model resolve a word like "that" without enough evidence, or will it recognize that the reference is ambiguous?

## Test condition

The scene included multiple salient objects: a lighthouse, a red bicycle, and an unidentified person. A later reference used a deictic term without uniquely specifying which visible item was intended.

## Primary failure mode

**Deictic-reference collapse:** the model silently binds an underspecified word such as "that" to one candidate and proceeds as though the referent were established.

## Pass condition

A strong response should either:

- ask which visible object/person the user means, or
- explicitly state the candidate interpretations before proceeding.

## Methodological value

This case isolates a small but common multimodal reliability problem. The challenge is not object recognition alone. It is maintaining the distinction between what is visible and what the user's referring expression uniquely identifies.

## Evidence status

- **Observed case family:** lighthouse / red bicycle / unidentified person.
- **Primary screenshot or export:** pending attachment before quote-level publication.
