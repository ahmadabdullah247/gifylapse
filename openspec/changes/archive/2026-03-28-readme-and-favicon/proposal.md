## Why

The project has no README, making it difficult for anyone (including the author) to understand how to set up, run, or contribute to GifyLapse. The broken favicon `<link>` tags that referenced local filesystem paths were already removed in the `html-housekeeping` change — no favicon work remains. This change is documentation only.

## What Changes

- Create `README.md` covering:
  - What GifyLapse does
  - How to run locally (`npm install && node index.js` → `localhost:3000`)
  - Browser requirements (getUserMedia requires HTTPS or localhost)
  - Summary of current features (settings UI, progress indicator, error handling)
  - Link to the live Azure deployment and GitHub repo

## Capabilities

### New Capabilities

- `project-readme`: The project has a README documenting setup, browser requirements, features, and contribution info

### Modified Capabilities

<!-- None -->

## Impact

- `README.md` — new file only
- No code changes
