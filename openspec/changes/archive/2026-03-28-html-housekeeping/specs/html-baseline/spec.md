## ADDED Requirements

### Requirement: Document declares language

The `<html>` element SHALL include `lang="en"` to satisfy WCAG 2.1 SC 3.1.1 and enable correct screen reader pronunciation.

#### Scenario: lang attribute present

- **WHEN** the HTML document is parsed
- **THEN** the root `<html>` element has `lang="en"`

### Requirement: Meta description is populated

The `<meta name="description">` tag SHALL have a non-empty `content` attribute describing the application.

#### Scenario: Description is not empty

- **WHEN** the page head is inspected
- **THEN** `<meta name="description">` has content that describes the app's purpose

### Requirement: No broken local-path favicon links

The document SHALL NOT contain `<link rel="icon">` tags that reference absolute local filesystem paths.

#### Scenario: No local-path favicons

- **WHEN** the HTML source is inspected
- **THEN** no `<link>` tag has an `href` beginning with `/Users/`

### Requirement: Copyright year is current

The footer copyright notice SHALL display the current year (2026), not a stale past year.

#### Scenario: Footer shows 2026

- **WHEN** the page footer is rendered
- **THEN** the copyright text contains `2026`

### Requirement: Video element has fallback text

The `<video>` element SHALL contain fallback text for browsers that do not support the video tag.

#### Scenario: Fallback text present

- **WHEN** the `<video>` element is inspected
- **THEN** it contains text content describing that the browser does not support video
