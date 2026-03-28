## Context

The workflow file `.github/workflows/master_gifylapse.yml` currently uses:
- `actions/checkout@master` — floating ref, non-deterministic
- `actions/setup-node@v1` — over 3 major versions behind
- `node-version: '12.x'` — EOL April 2022, no security patches

The change is a single-file CI configuration update with no application code changes.

## Goals / Non-Goals

**Goals:**
- Run CI on a supported Node.js LTS version (20.x)
- Pin action versions to stable, modern major versions for reproducibility
- Maintain the existing deploy-to-Azure behaviour unchanged

**Non-Goals:**
- Adding new CI steps (linting, testing — separate changes)
- Changing the deployment target or Azure configuration
- Migrating from Azure App Service

## Decisions

**Node 20.x over 18.x**: Node 20 is the current Active LTS; Node 18 enters maintenance mode in October 2025. Jumping to 20 avoids a near-term repeat of this upgrade.

**`actions/checkout@v4`**: Latest stable major version; v2/v3 are still functional but v4 is the current recommendation and includes performance improvements.

**`actions/setup-node@v3`**: v3 is the current stable major for this action; v4 exists but requires `node-version-file` or explicit version — v3 is simpler for this use case.

**No change to `azure/webapps-deploy@v2`**: Out of scope; the Azure deploy action is separate from the Node runtime setup and works correctly at v2.

## Risks / Trade-offs

- **npm install may surface new peer dependency warnings** under Node 20 → Mitigation: the project has minimal dependencies (only Express); unlikely to break.
- **Azure App Service runtime is independent of CI runtime** → The Node version used to *build* in CI is separate from the Node version Azure uses to *run* the app. No Azure config change needed.
