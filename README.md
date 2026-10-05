# Accessibility Baseline & Repository Architecture Audit

A GitHub-ready monorepo created for the **Accessibility Baseline & Repository Architecture Audit** assignment.

## What this repository contains

- `client/` — React + Vite frontend
- `server/` — Express API server
- `docs/accessibility-audit.md` — five-issue accessibility audit report template with severity and remediation priority
- `docs/architecture.md` — architecture boundaries, data flow and first vertical feature slice
- `tests/` — accessibility-oriented unit tests
- `screenshots/` — placeholder location for Lighthouse and keyboard-navigation evidence

## Quick start

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

This starts:
- Client: http://localhost:5173
- API: http://localhost:3001

Run tests:

```bash
npm test
```

Build:

```bash
npm run build
```

## Audit evidence

The audit document is deliberately structured so that real Lighthouse screenshots and keyboard-navigation observations can be added without changing the architecture. Replace the evidence placeholders with screenshots from the audited public-service website before final submission.

## Suggested GitHub submission

1. Run Lighthouse in Chrome DevTools.
2. Perform a keyboard-only pass using Tab, Shift+Tab, Enter and Escape.
3. Save screenshots into `screenshots/`.
4. Update `docs/accessibility-audit.md` with exact page URLs, screenshot names and measured Lighthouse results.
5. Push the repository to GitHub.
