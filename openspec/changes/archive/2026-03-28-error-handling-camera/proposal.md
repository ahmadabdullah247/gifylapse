## Why

`gifylapse.js` fails silently in three ways: camera errors are swallowed into the console (users see nothing), two jQuery `.disabled` assignments are no-ops (buttons never actually disable), and rendering with zero frames crashes silently. Users are left staring at a broken interface with no feedback.

## What Changes

- Add a visible UI error message when `getUserMedia` fails (permission denied, device unavailable, etc.)
- Add a visible UI error message when the browser lacks `navigator.mediaDevices` support (HTTP context, very old browser)
- Fix `$('#start').disabled = true/false` → `document.getElementById('start').disabled = true/false` (jQuery objects have no `.disabled` property)
- Fix same jQuery bug in the stop handler for `$('#stop').disabled`
- Guard `gif.render()` against being called with zero frames — show an error message instead

## Capabilities

### New Capabilities

- `camera-error-handling`: The app surfaces visible, actionable error messages when camera access fails or is unsupported, and prevents rendering with zero captured frames

### Modified Capabilities

<!-- None — no existing main specs for camera error handling -->

## Impact

- `public/js/gifylapse.js` — only file changed
- `index.html` — one new `<div id="error-message">` element needed as the error display target
- No CSS changes required (error div can use existing styles or inline visibility)
