## ADDED Requirements

### Requirement: Unsupported browser shows error message

When the browser does not support `navigator.mediaDevices`, the app SHALL display a visible error message informing the user that camera access is not supported.

#### Scenario: No MediaDevices API

- **WHEN** the page loads in a browser without `navigator.mediaDevices`
- **THEN** a visible error message is shown stating the browser or connection does not support camera access

### Requirement: Camera permission denial shows error message

When `getUserMedia` is rejected (permission denied, device unavailable, or any error), the app SHALL display a visible error message and disable the Start button.

#### Scenario: getUserMedia rejected

- **WHEN** the user denies camera permission or no camera is available
- **THEN** a visible error message is shown explaining camera access was denied
- **THEN** the Start button is disabled so the user cannot attempt to capture frames

### Requirement: Start and Stop buttons disable correctly

The Start button SHALL be disabled while capture is in progress, and the Stop button SHALL be disabled while capture is not in progress.

#### Scenario: Start clicked — Start disables, Stop enables

- **WHEN** the user clicks the Start button
- **THEN** the Start button's DOM `disabled` property is set to `true`
- **THEN** the Stop button's DOM `disabled` property is set to `false`

#### Scenario: Stop clicked — Stop disables, Start enables

- **WHEN** the user clicks the Stop button
- **THEN** the Stop button's DOM `disabled` property is set to `true`
- **THEN** the Start button's DOM `disabled` property is set to `false`

### Requirement: Zero-frame render is prevented

If the user clicks Stop before any frames have been captured, the app SHALL NOT call `gif.render()` and SHALL display an error message instead.

#### Scenario: Stop with no frames captured

- **WHEN** the user clicks Stop without having captured any frames
- **THEN** `gif.render()` is NOT called
- **THEN** a visible error message is shown asking the user to capture frames before stopping
