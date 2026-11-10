# idelfonso.com Constitution

## Core Principles

### I. Truthful Content (NON-NEGOTIABLE)

Every statement on the site MUST be something the owner can defend in an interview.

- Copy MUST come from the owner or from the owner's own source material. Numbers, names, links, dates, testimonials and outcomes MUST NOT be invented, inferred, or rounded up. A blank field stays blank.
- Where site copy and the owner's CV or notes disagree, the work MUST stop and the discrepancy MUST be raised with the owner. It MUST NOT be resolved silently.
- Outcomes or details covered by an NDA or employer confidentiality MUST NOT be published. Employer-internal detail (vendor counts, volumes, system names) MUST be confirmed by the owner before it goes live.
- Private data (phone number, compensation targets, application history, job-search notes) MUST NOT appear in the repository or the site.

### II. Bilingual Parity (English + Spanish)

All user-visible copy MUST exist in both languages.

- Copy lives in `src/content.ts`. Components MUST NOT hard-code user-visible strings.
- The `Content` type MUST require every key in both `en` and `es`; `content.ts` MUST pass a strict type-check before commit, because the build does not type-check.
- Switching language MUST update visible text, `<html lang>`, the page title and the meta description without a reload, and the choice MUST persist.

### III. Accessible by Default (NON-NEGOTIABLE)

Accessibility is a requirement of every change, not a later pass.

- Exactly one `h1`; real heading order; `header`, `nav`, `main` and `footer` landmarks; a working skip link.
- Interactive targets MUST be at least 44px; everything MUST be operable by keyboard with visible focus.
- Text contrast MUST be at least 4.5:1 in both light and dark themes, and MUST be measured, not estimated.
- Overlays and dialogs MUST manage focus (move in, return on close, never lose it when a focused element is removed), close on Escape, and announce new content to screen readers.
- Motion MUST respect `prefers-reduced-motion`.

### IV. Test-Backed Changes

Behavior changes MUST ship with Playwright end-to-end tests.

- A bug fix MUST add a regression test that fails on the old code and passes on the fix.
- All tests and the production build MUST pass on `master` before any deploy.
- Features MUST be exercised through real browser behavior (keyboard, language, theme), not only through unit-level checks.

### V. Both Themes, Every Viewport

UI changes MUST be verified visually, not only by tests.

- Check light and dark themes, desktop width and roughly 390px mobile, in English and Spanish.
- No horizontal overflow and no console errors or warnings are allowed.
- Verification MUST be done in a real browser against the running app; a passing test alone is not sufficient evidence that a layout or color change is correct.

### VI. Simple and Static-First

The site is a static Vue single-page app served by a Cloudflare Worker's static assets.

- A backend, LLM, third-party API key, analytics or tracking MUST NOT be added without explicit owner approval. The Quick answers widget is scripted on purpose and MUST be labelled as pre-written answers.
- New dependencies require a stated reason. Prefer the platform and existing libraries over additions (YAGNI).

## Technology and Constraints

- **Stack:** Vue 3, Vuetify 4, TypeScript (strict), Vite, deployed with Wrangler (`npm run deploy`) to Cloudflare Workers on idelfonso.com. Fonts: DM Sans (body), Space Grotesk (headings).
- **Palette:** primary blue is the Vuetify default (a lighter blue in dark mode); orange `#EF913D` is an accent for icons, borders and fills only and MUST NOT be used for text (insufficient contrast).
- **Vuetify 4 specifics that have caused defects:**
  - Legacy typography classes (`text-h3` and similar) have no effect; set sizes in component CSS.
  - Spacing utilities live in a CSS layer. Global resets MUST be placed in `@layer vuetify-core` or they override `mt-*` and `mb-*`.
  - Scoped CSS drops the descendant part of `:global(.x) .y` selectors; theme-dependent rules that need an ancestor class go in `src/styles/theme.css`.
- **Repository hygiene:** the repository is public, so anything committed MUST be treated as published. Secrets and env files (`.env`, `.dev.vars`) stay ignored. Machine-local settings (for example `.claude/settings.local.json`) MUST NOT be committed. `.DS_Store` MUST NOT be served (`public/.assetsignore`).

## Development Workflow

- Work happens on a branch created from an up-to-date `master`; direct commits to `master` are not allowed.
- Changes ship as small, focused pull requests. Each PR description MUST state what changed and how it was tested, and MUST state whether it is deployed.
- Deploy only from `master`, after pulling the merged change, running the full test suite, and running `npm run deploy`. After deploying, the live site MUST be checked in a browser, including the specific behavior that changed.
- Destructive or hard-to-reverse actions (deleting branches, force-pushing, deleting files outside the task) require explicit owner approval, with the exact scope named.
- The owner decides content, wording of claims and scope. When information is missing or ambiguous, ask; do not guess.

## Governance

This constitution supersedes other project practices. Plans produced by `/speckit-plan` MUST pass the Constitution Check against these principles, and `/speckit-analyze` treats a conflict with them as critical.

- **Amendments** are made by pull request that states the reason, the principle affected, and the new version.
- **Versioning** is semantic: MAJOR for removing or redefining a principle, MINOR for adding a principle or materially expanding guidance, PATCH for clarifications and wording.
- **Compliance** is checked in every PR review. Any complexity or deviation MUST be justified in the PR or in the plan's complexity table.

**Version**: 1.0.0 | **Ratified**: 2026-11-10 | **Last Amended**: 2026-11-10
