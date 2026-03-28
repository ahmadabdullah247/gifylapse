## ADDED Requirements

### Requirement: About section uses a two-column layout

The about section SHALL display two side-by-side columns at all viewport sizes. The left column contains only the video element. The right column contains all controls and output.

#### Scenario: Two columns always visible

- **WHEN** the page is rendered at any viewport width
- **THEN** the about section shows two side-by-side columns (not stacked)

#### Scenario: Left column contains only video

- **WHEN** the about section is inspected
- **THEN** the left column `.about__col-left` contains only the `#videoElement`

#### Scenario: Right column contains three sections

- **WHEN** the about section is inspected
- **THEN** the right column `.about__col-right` contains three `div.about__section` children: intro, settings, and recent GIFs

### Requirement: Video is centered with a border and not stretched

The video element in the left column SHALL be centered within its column, have a visible themed border, and SHALL NOT stretch to fill the column width.

#### Scenario: Video has themed border

- **WHEN** the video element is rendered
- **THEN** it has a `2px solid` border using `--first-color`

#### Scenario: Video is not full-width

- **WHEN** the video element is rendered
- **THEN** its width is a fixed value (300px), not `100%` of the column

#### Scenario: Video is centered in left column

- **WHEN** the left column is rendered
- **THEN** the video is horizontally and vertically centered using flex layout

### Requirement: Settings section has a heading

The settings panel SHALL be grouped under a visible "Settings" heading in the right column.

#### Scenario: Settings heading present

- **WHEN** the page is rendered
- **THEN** an `h2` with class `about__section-title` containing "Settings" appears directly above `#settings-panel`

#### Scenario: Settings heading uses primary color

- **WHEN** the Settings heading is rendered
- **THEN** its color is `var(--first-color)`

### Requirement: GIF output section has a heading

The GIF result and frame preview areas SHALL be grouped under a visible "Recent GIFs" heading in the right column.

#### Scenario: Recent GIFs heading present

- **WHEN** the page is rendered
- **THEN** an `h2` with class `about__section-title` containing "Recent GIFs" appears above `#result` and `#lapse`

#### Scenario: Error and render status are in the output section

- **WHEN** the page is rendered
- **THEN** `#error-message` and `#render-status` are inside the Recent GIFs section
