---
title: Markdown is the source of truth
group: Decisions
created: 2026-11-21
updated: 2026-11-21
---
## Decision
Notes live as `.md` files in `brain/`. The app never owns the data – it only reads a compiled bundle (`brain/brain-data.js`).

## Why
- Claude can write, update and rewrite notes with normal file edits and commit them.
- Readable on GitHub, diffable, portable to Obsidian or any editor.
- Nothing is locked in a browser's localStorage (the problem with v1, see [[first-prototype-review]]).

## How
Format rules: [[markdown-format]]. After editing run `node tools/build-brain.mjs`; the Pages workflow also runs it on deploy.
