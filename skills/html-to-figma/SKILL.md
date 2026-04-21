---
name: html-to-figma
description: Convert an existing web page into an editable Figma design. Use when the user wants functionality similar to the "html to design" plugin, asks to turn a live URL or localhost page into Figma, or wants to capture a current web page into a new or existing Figma file. Prefer Figma's generate_figma_design capture workflow for first import, then use figma-use only for targeted cleanup or follow-up edits.
disable-model-invocation: false
---

# HTML to Figma

Use this skill when the user wants to send a real web page into Figma with minimal manual rebuilding.

This skill is intentionally thin: it should rely on Figma's page capture workflow instead of recreating the page node-by-node unless the user specifically asks for cleanup or refinement afterward.

## What This Skill Covers

- Live public URLs
- Local development pages such as `http://localhost:3000`
- Import into a new Figma file
- Import into an existing Figma file or specific node when the user provides a target

## Default Strategy

1. Treat the page as a capture/import problem, not a manual design recreation problem.
2. Use `generate_figma_design` first.
3. After capture completes, share the resulting Figma link.
4. Only if the user wants edits or the capture needs polish, load [figma-use](../figma-use/SKILL.md) before any `use_figma` call and make targeted fixes.

## Inputs To Collect

Try to proceed with reasonable assumptions. Only stop if a required value is missing.

- Source page:
  - Public URL
  - Or localhost URL
  - Or enough local app context to discover and run the page
- Output target:
  - New Figma file by default
  - Existing Figma file if the user gives a Figma URL or explicitly says to add into one

## Required Workflow

### 1. Confirm the source type

- If the user gives a public URL, use it directly.
- If the user gives a localhost URL, use it directly.
- If the user references a local app without a running URL, inspect the codebase, identify the dev server command, and start the app if needed.

For local projects, prefer discovering:

- framework/runtime
- dev command
- route or page path
- final local URL to capture

### 2. Start capture with `generate_figma_design`

Call `generate_figma_design` without `outputMode` first so the tool can provide capture instructions and the single-use `captureId`.

Do not skip this first call.

### 3. Choose the output mode

Default behavior:

- Use `newFile` if the user did not specify a target Figma file.
- Use `existingFile` if the user provided a Figma file URL or explicitly wants the design added to an existing file.

For `newFile`:

- Pick a sensible file name based on the page or site.
- If a plan key is needed and not already known, resolve it per the Figma file creation flow.

For `existingFile`:

- Extract `fileKey` from the Figma URL.
- Use `nodeId` only if the user clearly specifies a target node.

### 4. Poll until capture finishes

Poll `generate_figma_design` with the returned `captureId` about every 5 seconds, up to 10 times, until the status is `completed` or a clear failure occurs.

If the capture returns a claim URL or file URL, share it with the user as a Markdown link.

### 5. Post-capture handling

By default, stop after a successful import and give the user:

- the Figma link
- whether it went into a new or existing file
- any obvious limitation noticed during capture

Only continue with cleanup if the user asks or if the result clearly needs a small fix that is safe to do immediately.

## When To Use `figma-use` After Capture

Load [figma-use](../figma-use/SKILL.md) before any `use_figma` call.

Use it only for bounded follow-up tasks such as:

- renaming pages or frames
- tidying obvious layer structure
- adjusting spacing or alignment
- replacing rough captured elements with design-system components
- moving the imported result into a specific page or section

Do not use `use_figma` to recreate the whole page unless the user explicitly wants a rebuilt, design-system-native version.

## Localhost Guidance

For local captures:

- inspect the repo first
- prefer the project's normal dev command
- if the dev server is not running, start it
- use the exact localhost URL you verified

If starting the app requires sandbox escalation or network-dependent installs, request approval in the normal way.

## Success Criteria

A successful run should produce:

- a captured page in Figma
- a shareable Figma URL
- a short note about what was imported and where

## Response Pattern

Keep the user-facing response short. Say:

- what page was captured
- where it was sent in Figma
- the direct link
- whether you also did any cleanup

