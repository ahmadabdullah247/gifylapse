## Context

`gifylapse.js` start handler uses `setInterval(..., 2000)` and canvas dimensions `640x480` as literals. Both need to become runtime-readable values sourced from HTML inputs. The frame counter is a simple increment inside the `setInterval` callback.

Current start handler reads no DOM inputs. The change adds three reads at click time:
1. `document.getElementById('interval-input').value` → interval ms
2. `document.getElementById('resolution-select').value` → `"WxH"` string, split to get width/height
3. `document.getElementById('frame-count')` → display element, incremented each frame

## Goals / Non-Goals

**Goals:**
- Configurable interval (500–5000ms) and resolution (3 preset options)
- Live frame counter visible during capture
- Controls disabled during capture (prevent mid-capture changes)

**Non-Goals:**
- Custom arbitrary resolution (freeform number inputs)
- Persisting user preferences across sessions (localStorage)
- Changing the GIF frame delay (currently hardcoded at 200ms in `addFrame`) — separate concern
- Removing the logo watermark option

## Decisions

**Range input for interval**: Native `<input type="range">` gives a slider UX with no JS needed for rendering. A live `<output>` or `<span>` label shows the current ms value, updated via the `oninput` event.

**Select for resolution**: Three discrete options are more appropriate than a freeform range — prevents impossible/nonsensical values and maps cleanly to common webcam resolutions.

**Read values at Start-click time**: The interval and resolution are read once when the user clicks Start, not on every frame tick. This is simpler and correct — changing settings mid-capture would produce a broken GIF anyway.

**Resolution format `"WxH"`**: Store as a `"640x480"` value string in the `<option>` and split on `"x"` to get width/height integers. Avoids two separate selects.

**Frame counter reset on Start**: `document.getElementById('frame-count').textContent = '0'` at top of Start handler. Incremented by 1 inside the setInterval callback.

**Disable controls during capture**: The interval slider and resolution select are set to `disabled = true` on Start and `disabled = false` on Stop, consistent with the button disable pattern from the previous change.

## Risks / Trade-offs

- **Resolution vs actual webcam capability**: Setting canvas to 1280×720 does not force the webcam to stream at that resolution. The canvas will scale/crop the video feed. This is acceptable for this app's purpose but should be noted.
- **Inline styles for settings panel**: Using minimal inline styles avoids needing to edit `styles.css`, keeping the diff focused. Acceptable for a simple label/input layout.
