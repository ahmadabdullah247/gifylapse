## Context

`gifylapse.js` is 70 lines of vanilla JS with jQuery used only for DOM manipulation. The three bug categories:

1. **Silent camera failure** (lines 14–20): The `if (navigator.mediaDevices)` guard has no `else`. The `.catch` only calls `console.log(err)`. Users see an empty video area and functional-looking buttons that do nothing.

2. **jQuery `.disabled` bug** (lines 39–40, 66–67): `$('#start').disabled = true` sets a property on a jQuery wrapper object, not the underlying DOM element. The DOM `disabled` attribute is never set. Buttons remain enabled throughout, allowing double-starts and double-stops.

3. **Zero-frame render** (lines 44–68): If the user clicks Stop immediately without capturing frames, `gif.render()` runs with an empty frame list. gif.js behaviour in this case is undefined/unpredictable.

## Goals / Non-Goals

**Goals:**
- Surface camera errors visibly in the UI
- Make Start/Stop buttons actually disable/enable correctly
- Prevent gif.render() from being called with zero frames

**Non-Goals:**
- Retry logic for camera access
- Changing capture interval or canvas size (separate change)
- Replacing jQuery with vanilla JS throughout (would be a larger refactor)
- Adding a progress indicator (separate change)

## Decisions

**Error display via a dedicated `<div id="error-message">`**: Simpler than using alert(), doesn't block the thread, and is dismissible. Requires one new element in `index.html`. The div starts hidden and is shown only on error.

**Fix `.disabled` with vanilla DOM API** (`document.getElementById(...).disabled`): Consistent with the rest of the file which already uses vanilla `document.getElementById` for `start` and `stop` event listeners. Avoids introducing more jQuery dependency.

**Zero-frame guard**: Check `imgs.length === 0` after `clearInterval` in the stop handler. Show the error message and return early — do not call `gif.render()`.

**Error message text**:
- No MediaDevices: `"Camera not supported. Please use HTTPS or a modern browser."`
- getUserMedia rejected: `"Camera access denied. Please allow camera permission and refresh."`
- Zero frames: `"No frames captured. Press GET STARTED and wait before stopping."`

## Risks / Trade-offs

- Adding `<div id="error-message">` to `index.html` is a two-file change, but it is the cleanest approach — the alternative (creating an element dynamically in JS) is harder to style and test.
- The error div will be empty and invisible by default; only revealed on error. No visual regression in the happy path.
