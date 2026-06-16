# Release checklist for v4.0.0

## Pre-release validation

```shell
npm test
npm run lint
npm pack --dry-run
```

## Publish to npm

```shell
npm publish --access public
```

Requires npm login with publish rights to `@byndyusoft/eslint-config`.

## GitHub Release

```shell
git tag v4.0.0
git push origin v4.0.0
gh release create v4.0.0 --title "v4.0.0" --notes-file CHANGELOG.md
```

## Pilot on consumer projects

1. Pick 1 backend and 1 frontend project
2. Upgrade Node to `>=20.19.0`, ESLint to `^10`
3. Replace `.eslintrc` with `eslint.config.js` (see README migration guide)
4. Run `eslint . --fix` and triage new violations
5. Roll out to remaining projects after pilot sign-off
