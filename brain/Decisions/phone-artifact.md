---
title: Phone version as a claude.ai artifact
group: Decisions
created: 2026-11-21
updated: 2026-11-21
tags: [second-brain, mobile]
---
## Decision
Publish the same Second Brain as a private claude.ai artifact for the phone, next to the GitHub Pages PWA.

## Why
- The artifact can keep data Claude can read: notes logged on the phone go to its database, and the next session files them into `brain/` as Markdown.
- It can ask Claude directly (*Ask Claude*) and use dictation – things a static site cannot do without a backend.
- One codebase: `tools/build-artifact.mjs` turns `brain.html` + the notes into `artifact/second-brain.html`.

## Limits
- Notes in the artifact are a snapshot: after Claude changes `brain/`, the artifact must be republished.
- No offline mode or install there; that is what the PWA is for ([[pwa-instead-of-electron]]).

## Workflow
Each session: read the artifact's `captures` and `edits` collections, file new captures into the right pages, mark them `status: filed`, rebuild and republish. Details in `CLAUDE.md`. Related: [[second-brain-app]].
