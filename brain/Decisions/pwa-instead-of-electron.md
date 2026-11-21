---
title: PWA instead of Electron
group: Decisions
created: 2026-11-21
updated: 2026-11-21
---
## Decision
Ship the Second Brain as a Progressive Web App.

## Why
- Installs from the browser on macOS, Windows, Android and iOS with its own icon and window.
- Works offline through a service worker.
- Zero extra tooling; Electron/Tauri would add hundreds of MB and a build pipeline for the same page.

## Install
Chrome/Edge: install icon in the address bar. Safari (macOS): File → Add to Dock. iPhone: Share → Add to Home Screen.
