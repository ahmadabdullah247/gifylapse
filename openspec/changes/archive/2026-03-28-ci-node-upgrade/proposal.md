## Why

The GitHub Actions workflow pins Node.js 12.x, which reached end-of-life in April 2022 and is no longer receiving security patches. Running CI on an EOL runtime is a security and compatibility risk that also blocks adoption of modern tooling (ESLint, Prettier, Vitest) in future changes.

## What Changes

- Update `node-version` from `'12.x'` to `'20.x'` in the deployment workflow
- Pin `actions/checkout` from `@v2` (or unversioned) to `@v4`
- Pin `actions/setup-node` to `@v3`

## Capabilities

### New Capabilities

- `ci-runtime`: GitHub Actions workflow configured to run on a supported, modern Node.js LTS runtime with pinned action versions

### Modified Capabilities

<!-- None — no existing specs exist yet -->

## Impact

- `.github/workflows/master_gifylapse.yml` — only file changed
- No application code, UI, or behaviour is affected
- Azure App Service deployment continues unchanged; only the CI runner Node version changes
