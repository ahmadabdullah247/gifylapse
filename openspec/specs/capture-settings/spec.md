## ADDED Requirements

### Requirement: User can configure capture interval

The app SHALL provide a range input allowing users to set the capture interval between 500ms and 5000ms (default 2000ms), with a live label showing the currently selected value in milliseconds.

#### Scenario: Interval slider present with default value

- **WHEN** the page loads
- **THEN** a range input with `id="interval-input"` is present with `min="500"`, `max="5000"`, `value="2000"`, and `step="500"`
- **THEN** a label displays the current value as `"2000ms"`

#### Scenario: Interval label updates on slider change

- **WHEN** the user moves the interval slider
- **THEN** the label text updates to show the new value in milliseconds

#### Scenario: Capture uses selected interval

- **WHEN** the user sets the interval to X ms and clicks Start
- **THEN** frames are captured every X milliseconds (the setInterval uses the slider value, not a hardcoded constant)

### Requirement: User can select output resolution

The app SHALL provide a select input allowing users to choose from three preset resolutions: 320×240, 640×480 (default), and 1280×720.

#### Scenario: Resolution select present with default

- **WHEN** the page loads
- **THEN** a select input with `id="resolution-select"` is present with options `"320x240"`, `"640x480"` (selected), and `"1280x720"`

#### Scenario: Capture uses selected resolution

- **WHEN** the user selects resolution W×H and clicks Start
- **THEN** each captured canvas is drawn at width W and height H (not hardcoded 640×480)

### Requirement: Live frame counter is shown during capture

The app SHALL display a live counter showing the number of frames captured so far, incrementing with each frame.

#### Scenario: Counter resets on Start

- **WHEN** the user clicks Start
- **THEN** the frame counter resets to 0

#### Scenario: Counter increments each frame

- **WHEN** a frame is captured by the setInterval callback
- **THEN** the frame counter increments by 1

### Requirement: Settings controls are disabled during capture

The interval slider and resolution selector SHALL be disabled while capture is in progress to prevent mid-capture configuration changes.

#### Scenario: Controls disable on Start

- **WHEN** the user clicks Start
- **THEN** the interval input and resolution select have `disabled = true`

#### Scenario: Controls re-enable on Stop

- **WHEN** the user clicks Stop
- **THEN** the interval input and resolution select have `disabled = false`
