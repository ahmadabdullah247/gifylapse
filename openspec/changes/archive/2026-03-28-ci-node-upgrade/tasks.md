## 1. Update GitHub Actions Workflow

- [x] 1.1 Change `actions/checkout@master` to `actions/checkout@v4`
- [x] 1.2 Change `actions/setup-node@v1` to `actions/setup-node@v3`
- [x] 1.3 Change `node-version: '12.x'` to `node-version: '20.x'`

## 2. Verify

- [x] 2.1 Confirm no other references to Node 12.x remain in the workflow file
- [x] 2.2 Confirm `azure/webapps-deploy@v2` is unchanged
