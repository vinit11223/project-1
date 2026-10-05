# Accessibility Audit Report

## Scope

**Target:** One public-facing public-service website selected by the student.

> Important: Replace the placeholders in this document with the exact target URL and the actual Lighthouse/keyboard evidence before submission. The repository provides the reporting structure and remediation plan; it does not claim that a live Lighthouse scan was executed from this repository.

### Audit methods

1. Chrome Lighthouse accessibility audit.
2. Keyboard-only navigation using `Tab`, `Shift + Tab`, `Enter`, `Space` and `Escape`.
3. Manual review of headings, landmarks, form labels, focus visibility, link/button names and error/status communication.

## Executive summary

| # | Finding | Severity | Priority | Evidence |
|---|---|---|---|---|
| 1 | Keyboard focus is not consistently visible on interactive controls | High | P1 | `screenshots/01-focus.png` |
| 2 | One or more form controls lack an explicit accessible label | High | P1 | `screenshots/02-form-label.png` |
| 3 | Heading hierarchy skips levels on a content page | Medium | P2 | `screenshots/03-headings.png` |
| 4 | Navigation/interactive regions lack sufficiently descriptive accessible names | Medium | P2 | `screenshots/04-landmarks.png` |
| 5 | Dynamic success/error feedback is not reliably announced to assistive technology | Medium | P2 | `screenshots/05-status.png` |

## Finding 1 — Keyboard focus visibility

**Severity:** High  
**Priority:** P1

### Observation

During a keyboard-only pass, move through every interactive control with `Tab`. Any control that receives focus without a clearly visible focus indicator should be recorded here.

### Evidence

- Page: `[INSERT EXACT PAGE URL]`
- Screenshot: `screenshots/01-focus.png`
- Steps: `Tab` repeatedly from the address bar through the main navigation and primary form controls.

### Remediation

Use a high-contrast `:focus-visible` style with sufficient outline thickness and offset. Never remove the browser focus indicator without replacing it with an equally clear indicator.

---

## Finding 2 — Form labels

**Severity:** High  
**Priority:** P1

### Observation

Check every input, select and textarea. Each control should have a programmatically associated label or an equivalent accessible name.

### Evidence

- Page: `[INSERT EXACT PAGE URL]`
- Screenshot: `screenshots/02-form-label.png`
- Lighthouse audit: `[PASTE RESULT / SCORE]`

### Remediation

Associate visible `<label>` elements with controls using matching `for`/`id` values. Use `aria-describedby` for supporting instructions and errors where appropriate.

---

## Finding 3 — Heading hierarchy

**Severity:** Medium  
**Priority:** P2

### Observation

Inspect the page heading structure. A page should have a logical heading hierarchy that communicates content structure to screen-reader users.

### Evidence

- Page: `[INSERT EXACT PAGE URL]`
- Screenshot: `screenshots/03-headings.png`
- Heading tree: `[PASTE HEADING TREE]`

### Remediation

Use one clear page-level `<h1>` and descend through `<h2>`, `<h3>`, etc. based on structure rather than visual appearance.

---

## Finding 4 — Landmarks and accessible names

**Severity:** Medium  
**Priority:** P2

### Observation

Review `header`, `nav`, `main`, `aside` and `footer` landmarks. Repeated landmarks should have meaningful accessible names where needed.

### Evidence

- Page: `[INSERT EXACT PAGE URL]`
- Screenshot: `screenshots/04-landmarks.png`

### Remediation

Use semantic HTML first. Add `aria-label`/`aria-labelledby` only when a landmark needs disambiguation.

---

## Finding 5 — Dynamic status/error communication

**Severity:** Medium  
**Priority:** P2

### Observation

Submit a form or trigger an asynchronous action and verify that success, loading and error information is available to keyboard and assistive-technology users.

### Evidence

- Page: `[INSERT EXACT PAGE URL]`
- Screenshot: `screenshots/05-status.png`
- Test scenario: `[DESCRIBE ACTION]`

### Remediation

Use an appropriate live region such as `role="status"` for non-critical updates and `role="alert"` for urgent errors. Ensure the message is concise and does not repeatedly announce unchanged content.

## Lighthouse evidence

Record the actual result from Chrome DevTools:

- Accessibility score: `[XX/100]`
- Best Practices: `[XX/100]`
- Performance: `[XX/100]`
- SEO: `[XX/100]`
- Date/time tested: `[DATE + TIME]`
- Browser: `[BROWSER VERSION]`

## Remediation priority

**P1:** Fix before release because the issue can block or significantly hinder access.

**P2:** Fix in the next accessibility iteration because the issue creates a meaningful usability barrier but is less likely to block the complete task.

**P3:** Improve as part of normal maintenance.

## Verification checklist

- [ ] All functionality works using keyboard only.
- [ ] Focus order follows a logical reading/order sequence.
- [ ] Focus indicator remains visible.
- [ ] All form controls have accessible names.
- [ ] Heading hierarchy is logical.
- [ ] Landmarks are present and meaningful.
- [ ] Dynamic feedback is announced appropriately.
- [ ] Lighthouse screenshot is attached.
- [ ] Five findings have exact evidence.
