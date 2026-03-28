## Why

The app's visual layer is showing its age: the settings panel added in a prior change uses raw `<br>` tags and inline styles, Materialize CSS is loaded but unused (dead dependency, no modals exist), the `<progress>` bar and error messages have no styling, and several small inconsistencies (hardcoded `#lapse` height, unstyled range/select inputs) make the UI feel unpolished. The core purple + dark navy identity is solid — this change polishes the execution without a full redesign.

## What Changes

- **Remove Materialize CSS** and its `$(document).ready` modal init from `index.html` — it is unused and adds ~50KB
- **Update BoxIcons** from `2.0.7` to `2.1.4` in `index.html`
- **Replace `<br>` layout** in `#settings-panel` with a proper `<div>` flex structure in `index.html`
- **Add CSS** for settings panel, error message, render status, and progress bar to `styles.css` (removing reliance on inline styles)
- **Improve button styles**: add `cursor:pointer`, smooth `transition`, and `gap` between icon and text
- **Style the `<progress>` element**: themed to match the primary purple colour
- **Style `<select>` and `<input type="range">`**: consistent with the existing button/colour palette
- **Fix `.about` height**: remove `height: 100vh` (causes overflow on short screens) in favour of `min-height`
- **Fix `#lapse` height**: change the hardcoded `480px` to `300px` (a sensible default for thumbnail strip) since canvas size is now dynamic

## Capabilities

### New Capabilities

- `ui-theme`: The visual presentation of the app — colours, typography, input styling, layout consistency — meets a modern baseline appropriate for a 2026 web app

### Modified Capabilities

- `html-baseline`: Minor structural change (remove Materialize, update BoxIcons, replace `<br>` in settings panel) — existing requirements still hold, structural improvement only

## Impact

- `public/css/styles.css` — primary file changed (styling additions and fixes)
- `index.html` — remove Materialize script tags + modal init, update BoxIcons CDN URL, replace `<br>` tags in settings panel
- No JavaScript logic changes
