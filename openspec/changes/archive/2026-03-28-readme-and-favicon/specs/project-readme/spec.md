## ADDED Requirements

### Requirement: README documents local setup

The `README.md` SHALL include instructions to install dependencies and start the server locally.

#### Scenario: Setup steps are present

- **WHEN** a developer reads the README
- **THEN** they can find `npm install` and `node index.js` (or `npm start`) as setup commands
- **THEN** they can find that the app runs on `http://localhost:3000`

### Requirement: README documents browser requirements

The `README.md` SHALL document that camera access requires HTTPS or localhost.

#### Scenario: HTTPS requirement is documented

- **WHEN** a developer reads the README
- **THEN** they can find a note that `getUserMedia` requires HTTPS or localhost
- **THEN** they understand why the camera error appears on non-secure origins

### Requirement: README describes what the app does

The `README.md` SHALL include a brief description of GifyLapse's purpose and current features.

#### Scenario: Description and features are present

- **WHEN** anyone reads the README
- **THEN** they understand the app creates animated GIFs from a webcam
- **THEN** they can find a list of current features (configurable settings, progress indicator, error handling)

### Requirement: README links to GitHub and live deployment

The `README.md` SHALL include a link to the GitHub repository and the live Azure deployment URL.

#### Scenario: Links are present

- **WHEN** a reader scans the README
- **THEN** a link to `https://github.com/ahmadabdullah247/gifylapse` is present
- **THEN** a link to the live Azure App Service URL is present
