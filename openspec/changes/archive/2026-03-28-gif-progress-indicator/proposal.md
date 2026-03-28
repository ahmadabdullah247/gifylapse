## Why

After clicking Stop, `gif.render()` runs asynchronously but the UI provides no feedback — the user sees nothing happening and has no way to know the GIF is encoding. Worse, the Start/Stop buttons and settings controls are re-enabled immediately after `gif.render()` is called (lines 95–98), not after rendering finishes. This means a user could click Start again mid-encode, causing a broken state.

## What Changes

- Add a `<progress>` element to `index.html` that appears during GIF rendering and shows percent completion
- Add a status label ("Encoding GIF…" / "Done!") alongside the progress bar
- Hook `gif.on('progress', ...)` to update the progress bar value
- Move button/settings re-enable logic from after `gif.render()` into the `gif.on('finished', ...)` callback — fixing the premature re-enable bug
- Show progress bar on render start; hide it once `finished` fires

## Capabilities

### New Capabilities

- `gif-render-progress`: The app displays a progress bar and status label during GIF encoding, and correctly gates UI re-enable on render completion rather than render start

### Modified Capabilities

<!-- None — no existing main spec for this -->

## Impact

- `index.html` — one new `<div id="render-status">` block with a `<progress>` and `<span>` label
- `public/js/gifylapse.js` — add progress event hook; move re-enable logic into `finished` callback
