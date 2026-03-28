## ADDED Requirements

### Requirement: CI runs on supported Node.js LTS

The GitHub Actions workflow SHALL use Node.js 20.x (Active LTS) for all CI steps.

#### Scenario: Workflow uses Node 20.x

- **WHEN** a push is made to the master branch
- **THEN** the `setup-node` step configures the runner with `node-version: '20.x'`

### Requirement: CI actions use pinned stable versions

The workflow SHALL pin all GitHub Actions to a specific stable major version tag rather than floating refs.

#### Scenario: checkout action is pinned

- **WHEN** the workflow runs
- **THEN** `actions/checkout` is referenced as `@v4` (not `@master` or unversioned)

#### Scenario: setup-node action is pinned

- **WHEN** the workflow runs
- **THEN** `actions/setup-node` is referenced as `@v3` (not `@v1`)
