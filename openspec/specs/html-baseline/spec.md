## MODIFIED Requirements

### Requirement: No broken local-path favicon links

The document SHALL NOT contain `<link rel="icon">` tags that reference absolute local filesystem paths.

#### Scenario: No local-path favicons

- **WHEN** the HTML source is inspected
- **THEN** no `<link>` tag has an `href` beginning with `/Users/`

### Requirement: Materialize CSS is not loaded

The document SHALL NOT load Materialize CSS or its JavaScript bundle, as no Materialize components are used.

#### Scenario: No Materialize script tag

- **WHEN** the HTML source is inspected
- **THEN** no `<script>` tag references `materialize`
- **THEN** no `$(document).ready` block initialising `.modal()` exists

### Requirement: BoxIcons uses version 2.1.4 or later

The BoxIcons CDN link SHALL reference version `2.1.4` or later.

#### Scenario: BoxIcons version is current

- **WHEN** the HTML `<head>` is inspected
- **THEN** the BoxIcons `<link>` href contains `2.1.4` (or a later version)

### Requirement: Settings panel uses semantic HTML structure

The settings panel SHALL use `<div>` rows with CSS classes for layout, not `<br>` tags for spacing.

#### Scenario: No br tags in settings panel

- **WHEN** the `#settings-panel` HTML is inspected
- **THEN** no `<br>` tags exist inside `#settings-panel`
