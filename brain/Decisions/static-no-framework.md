---
title: Stay static, no framework
group: Decisions
created: 2026-11-21
updated: 2026-11-21
---
## Decision
Keep Zentry as plain static files: HTML + CSS + vanilla JS, one small Node script for the notes.

## Why
- The repo is already static and deployed by GitHub Pages ([[zentry]]).
- No dependency installs, nothing to break, opens straight from disk.
- Canvas 2D with additive blending is fast enough for ~6 000 particles at 60 fps.

## Revisit when
Accounts, sync between devices or server-side AI are needed – then add a tiny backend, not a framework.
