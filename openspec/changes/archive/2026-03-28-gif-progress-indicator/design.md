## Context

gif.js emits two relevant events:
- `progress` — fires repeatedly during encoding with a value `0` to `1`
- `finished` — fires once with the completed `Blob`

The current stop handler calls `gif.render()` then immediately re-enables all controls (lines 95–98). This is a bug: rendering is async, so controls become interactive before the GIF is ready. A user who clicks Start again at this point would start a new capture interval while gif.js workers are still running.

## Goals / Non-Goals

**Goals:**
- Show a `<progress>` bar that fills as GIF encodes
- Show a text status ("Encoding GIF…" → "Done!")
- Lock Start, Stop, and settings controls for the duration of rendering
- Re-enable all controls only inside `finished` callback

**Non-Goals:**
- Cancelling an in-progress render
- Showing a spinner (progress bar is sufficient and semantically correct)
- Changing the GIF quality or worker count settings

## Decisions

**Native `<progress>` element**: Semantic, accessible, no JS needed for the bar itself. `value` attribute updated via `gif.on('progress')`. `max="100"`, value set to `Math.round(val * 100)`.

**Status label as a `<span>`**: Simple text alongside the progress bar. Two states: "Encoding GIF…" (shown on render start) and "Done!" (set in `finished` callback, then hidden after a short 1500ms timeout so user sees confirmation).

**Move re-enable into `finished`**: The four `disabled = false` lines (lines 95–98 of gifylapse.js) move from after `gif.render()` into the `finished` callback. This is the correct async pattern.

**Hide render status on Start**: If the user clicks Start after a completed GIF, the render status div is hidden so it doesn't show stale state.

## Risks / Trade-offs

- If gif.js workers fail silently and `finished` never fires, the UI will be permanently locked. This is an edge case and pre-existing gif.js limitation — no mitigation in scope for this change.
- The 1500ms "Done!" timeout is a simple UX improvement but means the status lingers briefly. Acceptable.
