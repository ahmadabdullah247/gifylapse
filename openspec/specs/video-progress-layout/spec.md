## ADDED Requirements

### Requirement: Progress indicator appears below the video

The `#render-status` element SHALL be a direct child of `.about__col-left`, positioned after the `<video>` element.

#### Scenario: Render status is inside left column

- **WHEN** the page HTML is inspected
- **THEN** `#render-status` is a child of `.about__col-left`, not of `.about__col-right` or any `.about__section`

#### Scenario: Progress stacks below video vertically

- **WHEN** the left column is rendered
- **THEN** `.about__col-left` has `flex-direction: column` causing the video and progress bar to stack vertically

### Requirement: Video is 380px wide

The video element SHALL have a width of 380px.

#### Scenario: Video width is 380px

- **WHEN** the CSS for `.about__col-left video` is inspected
- **THEN** `width` is `380px`

### Requirement: Progress bar spans the video width

The `<progress>` element SHALL have `width: 100%` so it fills the same horizontal space as the video.

#### Scenario: Progress width is 100%

- **WHEN** the CSS `progress` rule is inspected
- **THEN** `width` is `100%`
