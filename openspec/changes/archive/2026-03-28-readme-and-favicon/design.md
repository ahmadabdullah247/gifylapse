## Context

No README exists. The project is a simple Express static server (`index.js`) serving `index.html` from the repo root, with static assets under `public/` served at the `/static/` path. The app runs on `process.env.PORT || 3000`. Deployed to Azure App Service as `gifylapse`.

The `getUserMedia` API requires a secure context (HTTPS) or `localhost`. This is a common gotcha — without documentation, a developer running on a non-localhost IP (e.g., LAN IP) will see the "Camera not supported" error silently.

## Goals / Non-Goals

**Goals:**
- Document local setup in under 5 steps
- Call out the HTTPS/localhost requirement explicitly
- Accurately reflect the features added across all 5 prior changes
- Keep the README concise — a developer should be productive in under 2 minutes of reading

**Non-Goals:**
- API documentation (no API)
- Deployment documentation beyond noting the Azure workflow exists
- Architecture deep-dive

## Decisions

**Single README.md at repo root**: Standard location, picked up automatically by GitHub.

**Markdown format**: Standard GitHub-flavored markdown. No badges, no images — keep it minimal and accurate.

**Features section reflects current state**: Documents the settings UI, progress indicator, error handling, and CI improvements added in this improvement cycle.
