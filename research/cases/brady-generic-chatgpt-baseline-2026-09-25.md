# Brady Generic ChatGPT Baseline

**Date:** September 25, 2026  
**Evaluator:** Jenn  
**Interface:** Logged-out / generic ChatGPT web session visible in the preserved PDF  
**Backend model:** Not independently verified from the PDF  
**Status:** Direct PDF evidence preserved in the private working archive

## Prompt

> tell me the story of a man named brady

## Observed first response

The generic session did **not** ask which Brady was meant. It instead generated an original fictional story titled **"The Man Who Kept Walking"** about a man named Brady.

## Classification

**Ambiguity handling failure / unsupported referent construction.**

The response did not incorrectly identify a real Brady. Instead, it treated an underspecified prompt as permission to invent a new referent without first checking whether the user meant an existing cultural reference, a real person, or an original fictional character.

## Why this condition matters

This differs from the Gemini Brady condition that immediately selected *The Brady Bunch*. Both fail Jenn's clarification-first pass condition, but in different ways:

- **Cultural-reference commitment:** choose a familiar existing Brady.
- **Fictional-referent construction:** invent a Brady and proceed.

The distinction supports recording not only whether clarification failed, but what the model did instead.

## Evidence status

- **Direct visual PDF:** `brAdygeneric.pdf`, 3 pages, preserved in the working archive.
- The PDF shows the generic ChatGPT interface, the exact prompt, and the first response.
- The backend model name is not visible in the preserved PDF and should not be inferred from the interface alone.

## Replication note

A planned comparison with another user's personalized Sol setup should preserve the untouched first response and record whether the model was told only that a test was occurring. Knowing that a prompt is a test is itself an experimental condition and should be noted separately.
