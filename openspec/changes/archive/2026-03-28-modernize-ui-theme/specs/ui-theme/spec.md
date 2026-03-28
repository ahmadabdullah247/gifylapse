## ADDED Requirements

### Requirement: Settings panel uses styled CSS layout

The settings panel SHALL be styled via a CSS class with flex layout, replacing inline styles and `<br>` spacing.

#### Scenario: Settings panel has no inline margin style

- **WHEN** the page is inspected
- **THEN** `#settings-panel` has no `style` attribute with `margin-top`
- **THEN** a `.settings-panel` CSS class provides the spacing and layout

#### Scenario: Settings rows use flex layout

- **WHEN** the settings panel is rendered
- **THEN** each setting row displays its label and input aligned horizontally with consistent gap

### Requirement: Range input is visually styled

The capture interval `<input type="range">` SHALL be styled to match the app's colour palette rather than using browser defaults.

#### Scenario: Range thumb matches primary colour

- **WHEN** the interval slider is rendered
- **THEN** the slider thumb uses `--first-color` (purple)
- **THEN** the slider has no inline `style` width attribute

### Requirement: Select input is visually styled

The resolution `<select>` SHALL use a custom border and padding consistent with the app's button aesthetic.

#### Scenario: Select has themed border

- **WHEN** the resolution dropdown is rendered
- **THEN** the select element has a styled border using `--first-color` and rounded corners

### Requirement: Progress bar is themed

The GIF encoding `<progress>` element SHALL use the app's primary colour rather than browser-default styling.

#### Scenario: Progress bar fill matches primary colour

- **WHEN** the progress bar is visible during encoding
- **THEN** the filled portion of the bar uses `--first-color` (purple)

### Requirement: Error message uses a CSS class

The `#error-message` element SHALL have its base styling (colour, padding) defined in the stylesheet, not as an inline `style` attribute.

#### Scenario: Error message styled via CSS

- **WHEN** the HTML is inspected
- **THEN** `#error-message` has no `style="color:red; padding:8px"` inline attribute
- **THEN** a `#error-message` CSS rule provides the equivalent styling

### Requirement: Buttons have cursor and transition

The `.button` class SHALL include `cursor: pointer` and a CSS transition for hover interactions.

#### Scenario: Button cursor is pointer

- **WHEN** a user hovers over a button
- **THEN** the cursor changes to a pointer

#### Scenario: Button hover has transition

- **WHEN** a user hovers over a button
- **THEN** the background-color and box-shadow change with a smooth transition (not instant)

### Requirement: About section does not clip content

The `.about` section SHALL use `min-height` instead of a fixed `height`, preventing content overflow on smaller screens.

#### Scenario: About section allows content overflow

- **WHEN** the page is rendered on a short viewport
- **THEN** the about section content is not clipped; it expands to fit

### Requirement: Lapse thumbnail strip has a sensible default height

The `#lapse` element height SHALL be set to `300px` to better accommodate the dynamic canvas resolution.

#### Scenario: Lapse height is 300px

- **WHEN** the CSS is inspected
- **THEN** `#lapse` has `height: 300px` (not 480px)
