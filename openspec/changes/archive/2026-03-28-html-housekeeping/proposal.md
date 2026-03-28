## Why

`index.html` contains several broken and stale issues that affect production correctness and accessibility: favicon links point to an absolute local filesystem path (broken in every deployed environment), copyright is hardcoded to 2021, the `<html>` tag lacks a `lang` attribute (accessibility/SEO requirement), and the meta description is empty.

## What Changes

- Remove the two broken `<link rel="icon">` tags that reference `/Users/ahmadabdullahtariq/Documents/...` local paths
- Update copyright year from `2021` to `2026`
- Add `lang="en"` to the `<html>` element
- Add meaningful content to `<meta name="description">`
- Add fallback text content inside `<video>` element for browsers that don't support it

## Capabilities

### New Capabilities

- `html-baseline`: The HTML document meets baseline correctness requirements — valid lang attribute, meaningful meta description, no broken asset links, current copyright, and video fallback text

### Modified Capabilities

<!-- None — no existing main specs for html yet -->

## Impact

- `index.html` — only file changed
- No JavaScript, CSS, or server code affected
- Favicons will simply be absent (browser default) after removing the broken links — acceptable until proper favicon assets are added in a future change
