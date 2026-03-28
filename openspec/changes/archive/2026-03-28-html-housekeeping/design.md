## Context

`index.html` is a single-file SPA with 100 lines. All issues are cosmetic/markup corrections with zero JavaScript risk. The broken favicon `<link>` tags silently 404 in production — no error is shown to users but it wastes two network requests. The `lang` attribute is required by WCAG 2.1 Success Criterion 3.1.1.

## Goals / Non-Goals

**Goals:**
- Fix all broken/stale markup identified in the proposal
- Meet WCAG 2.1 SC 3.1.1 (Language of Page)
- Remove wasted favicon network requests

**Non-Goals:**
- Adding actual favicon assets (separate future change: `readme-and-favicon`)
- Fixing CSS class naming or layout
- Removing or replacing jQuery/Materialize
- Any JavaScript changes

## Decisions

**Remove favicons entirely (not replace with placeholder)**: No favicon assets exist in `public/img/` that match the expected sizes. Adding a `<link>` to a non-existent file would still 404. Removing the tags is cleaner than pointing to a wrong asset. The `readme-and-favicon` change will address this properly.

**Copyright year as static `2026`**: A dynamic `new Date().getFullYear()` via JS would require an inline script. Given the app already loads multiple scripts, a static year is simpler and sufficient — it can be updated annually or made dynamic in a future change.

**Meta description content**: Use a concise description of what the app does, consistent with the existing hero copy.

## Risks / Trade-offs

- No functional risk — all changes are pure markup
- Removing favicons: browsers will show their default icon tab — acceptable tradeoff vs broken 404 requests
