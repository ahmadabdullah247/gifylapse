## Context

The current CSS uses a solid CSS-variable foundation (`--first-color`, `--second-color`, `--body-font`) that makes theming straightforward. The main visual gaps are:

1. **Settings panel** (lines 49–61 of `index.html`): Raw `<br><br>` spacing, inline `style="margin-top:12px"`, unstyled `<select>` and `<input type="range">`. Needs a `.settings-panel` CSS class with flex layout.
2. **Error and render status** (lines 66–70): `color:red; padding:8px` inline on the error div; no styling on the render status div. Should move to `.error-message` and `.render-status` CSS classes.
3. **`<progress>` element**: completely browser-default. Browsers style this inconsistently. A thin custom progress bar matching `--first-color` looks sharp.
4. **`.about` section**: `height: 100vh` causes the section to be exactly one viewport tall regardless of content — on mobile with settings panel and progress bar, content overflows. Change to `min-height`.
5. **`#lapse` height**: hardcoded `480px` — this dates from when the canvas was always 480px tall. With dynamic resolution, 300px is a better thumbnail strip height.
6. **Button**: missing `cursor: pointer` and transition. Adding `transition: background-color 0.2s, box-shadow 0.2s` gives a crisp hover feel.
7. **Materialize CSS**: loaded from CDN at line 106, used only for `.modal()` init. No modals exist. Removing it saves a network request and removes a potential conflict.

## Goals / Non-Goals

**Goals:**
- Visual polish: styled inputs, progress bar, error states
- Structural consistency: no more inline styles for persistent UI elements
- Remove dead dependency (Materialize)
- Fix layout overflow (`.about` height)

**Non-Goals:**
- Changing the colour palette (purple #745efe + dark navy #0E2431 stays)
- Replacing jQuery (separate concern)
- Adding animations beyond existing ScrollReveal
- Dark mode

## Decisions

**CSS classes not inline styles for persistent elements**: `#error-message` and `#render-status` are persistent DOM elements — they belong in the stylesheet. Inline styles stay only for JS-toggled `display:none/block`.

**Custom `<progress>` via CSS pseudo-elements**: Use `-webkit-progress-value` + `::moz-range-track` patterns for cross-browser styled progress. Keep it simple: thin bar (8px), `--first-color` fill, grey track.

**Range input styling**: Use `appearance: none` + thumb/track pseudo-elements. Thumb matches `--first-color`, track is light grey. Width controlled by CSS class, not inline `style="width:200px"`.

**Select styling**: `appearance: none` + `border: 1px solid --first-color`, `border-radius: 0.5rem`, padding to match button aesthetic.

**Settings panel layout**: Replace `<br>` tags with a `.settings-panel` div containing `.settings-row` children (flex, `align-items: center`, `gap: 0.5rem`). The `<br><br>` between rows becomes `margin-bottom: 0.75rem` on `.settings-row`.

**BoxIcons 2.1.4**: Minor version bump. Same API, adds icon fixes. No breaking changes.

## Risks / Trade-offs

- Custom range input/progress styling requires vendor prefixes (`-webkit-`, `::-moz-`). Standard in 2026, no compatibility risk for modern browsers.
- Removing Materialize removes the `.modal()` jQuery plugin. Since no modals exist, this is zero-risk but worth noting for future modal work.
- Changing `height: 100vh` to `min-height: 100vh` on `.about` may expose layout issues on very tall screens — unlikely and easily tweaked.
