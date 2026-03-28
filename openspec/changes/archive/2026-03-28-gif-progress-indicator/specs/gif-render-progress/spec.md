## ADDED Requirements

### Requirement: Progress bar is shown during GIF encoding

The app SHALL display a `<progress>` element that becomes visible when `gif.render()` is called and updates as encoding progresses.

#### Scenario: Progress bar appears on render start

- **WHEN** the user clicks Stop with captured frames
- **THEN** a `<progress id="gif-progress">` element becomes visible before `finished` fires

#### Scenario: Progress bar value updates during encoding

- **WHEN** the gif.js `progress` event fires with value `v` (0–1)
- **THEN** the progress element's `value` is set to `Math.round(v * 100)`

### Requirement: Status label shows encoding state

The app SHALL display a text label showing "Encoding GIF…" during rendering and "Done!" when complete.

#### Scenario: Status shows "Encoding GIF…" on render start

- **WHEN** `gif.render()` is called
- **THEN** a status label displays "Encoding GIF…"

#### Scenario: Status shows "Done!" on completion

- **WHEN** the `finished` event fires
- **THEN** the status label text changes to "Done!"

### Requirement: Controls are locked for the full duration of rendering

Start, Stop, interval input, and resolution select SHALL all be disabled from the moment `gif.render()` is called until the `finished` callback completes re-enabling them.

#### Scenario: Controls disabled at render start

- **WHEN** `gif.render()` is called
- **THEN** the Start button, Stop button, interval input, and resolution select are all disabled

#### Scenario: Controls correctly restored in finished callback

- **WHEN** the `finished` event fires
- **THEN** the Start button, interval input, and resolution select are re-enabled
- **THEN** the Stop button remains disabled (capture is not in progress)

### Requirement: Render status is hidden on new capture start

The render status panel SHALL be hidden when the user starts a new capture.

#### Scenario: Status hidden on Start click

- **WHEN** the user clicks Start
- **THEN** the render status panel (`#render-status`) is hidden
