# Release checklist for v4.0.0-alpha.0

## Pre-release validation

```shell
npm test
npm run test:package -- --install
npm run lint
HUSKY=0 npm pack --dry-run
```

The Node.js 22/24 CI workflow also installs the archive into a clean consumer with strict peer dependency checks. Review its result before any release.

Local validation on 2026-10-02 passed on Node.js 22.23.1 and 24.18.0: smoke tests, lint, archive imports, and strict installation into a separate consumer. The GitHub workflow will run after these changes are pushed.

## Local consumer pilots

On 2026-10-02, the unpublished archive was applied without changing the consumer repositories:

| Project | Sample | Result |
|---------|--------|--------|
| `xpm-generator` (Node.js/TypeScript) | 3 source files | Config loaded and linted; 40 errors and 54 warnings; no fatal configuration errors |
| `byndyusoft-ui` (React/TypeScript) | 3 component, hook, and test files | Config loaded and linted; 2 errors and 1 warning; no fatal configuration errors |

The backend sample uses explicit `.ts` imports under NodeNext. The preset warns through `import-x/extensions`; this project needs an override if it keeps that import style. Its nested `src/package.json` declares only `"type": "module"`, so `n/no-extraneous-import` reports dependencies declared in the parent package. The frontend sample's two errors are from `react-hooks/immutability` on a hook that mutates a DOM element received as an argument. These findings need consumer-side review during migration; the pilot did not lint either entire project.

`byndyusoft-ui` currently uses ESLint 8 and the v2 config, and its project instructions specify Node.js 20. It must update those requirements before adopting this alpha.

## Future publication (requires separate approval)

```shell
npm publish --access public --tag alpha
```

Requires npm login with publish rights to `@byndyusoft/eslint-config`.

## GitHub Release

```shell
git tag v4.0.0-alpha.0
git push origin v4.0.0-alpha.0
gh release create v4.0.0-alpha.0 --prerelease --title "v4.0.0-alpha.0" --notes-file CHANGELOG.md
```

## Consumer rollout after release

1. Upgrade Node to `^22.13.0 || >=24` and ESLint to `^10.4.0` in the selected projects
2. Replace `.eslintrc` with `eslint.config.js` or `eslint.config.mjs` (see README migration guide)
3. Run `eslint . --fix` and triage new violations
4. Roll out to remaining projects after the first migrations pass
