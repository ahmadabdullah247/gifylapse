## Why

The capture interval (2000ms) and canvas resolution (640x480) are hardcoded constants in `gifylapse.js`. Users have no way to control GIF speed, frame density, or output size, and no feedback on how many frames they've captured. Exposing these as simple controls makes the tool significantly more useful without adding complexity.

## What Changes

- Add a settings panel to `index.html` with two controls:
  - Capture interval slider (500ms – 5000ms, default 2000ms) with a live label showing the current value
  - Resolution selector (320×240 / 640×480 / 1280×720, default 640×480)
- Add a live frame counter display that increments as frames are captured
- Update `gifylapse.js` to read interval and resolution from the controls at Start-click time (not hardcoded)
- Reset the frame counter to 0 when Start is clicked

## Capabilities

### New Capabilities

- `capture-settings`: Users can configure capture interval and output resolution before starting, and see a live frame count during capture

### Modified Capabilities

<!-- None — no existing main specs for capture settings -->

## Impact

- `index.html` — settings panel and frame counter added
- `public/js/gifylapse.js` — reads interval/resolution from DOM at click time instead of constants
- `public/css/styles.css` — minor label/input styling may be needed (inline styles acceptable to avoid CSS scope creep)
