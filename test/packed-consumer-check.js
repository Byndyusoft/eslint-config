import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { ESLint } from 'eslint';

const packageName = '@byndyusoft/eslint-config';
const manifest = JSON.parse(
    readFileSync(new URL('./node_modules/@byndyusoft/eslint-config/package.json', import.meta.url))
);

for (const entryPoint of Object.keys(manifest.exports)) {
    const specifier = `${packageName}${entryPoint === '.' ? '' : entryPoint.slice(1)}`;
    const imported = await import(specifier);
    assert.ok(Array.isArray(imported.default), `${specifier} must export a config array`);
}

for (const subpath of ['/flow', '/stylistic', '/backend.js', '/configs/react', '/utils/plugins']) {
    await assert.rejects(import(`${packageName}${subpath}`), { code: 'ERR_PACKAGE_PATH_NOT_EXPORTED' });
}

const backend = (await import(`${packageName}/backend`)).default;
const frontend = (await import(`${packageName}/frontend`)).default;
const vitest = (await import(`${packageName}/vitest`)).default;
const options = { cwd: process.cwd(), overrideConfigFile: true };

for (const [name, config, fileName] of [
    ['backend', backend, 'backend.ts'],
    ['frontend', frontend, 'frontend.tsx'],
    ['frontend test', frontend, 'frontend.test.tsx']
]) {
    const eslint = new ESLint({ ...options, overrideConfig: config });
    const results = await eslint.lintFiles(path.join('src', fileName));
    assert.equal(results.length, 1, `Expected one ${name} lint result`);
    assert.equal(results[0].errorCount, 0, `${name}: ${JSON.stringify(results[0].messages)}`);
}

const frontendEslint = new ESLint({ ...options, overrideConfig: frontend });
const frontendConfig = await frontendEslint.calculateConfigForFile(path.join('src', 'frontend.test.tsx'));

for (const rule of [
    '@typescript-eslint/no-explicit-any',
    '@eslint-react/dom-no-missing-button-type',
    'react-hooks/rules-of-hooks',
    'testing-library/prefer-find-by',
    'jest-dom/prefer-empty'
]) {
    assert.ok(frontendConfig.rules[rule], `Expected active rule ${rule}`);
}

const vitestEslint = new ESLint({ ...options, overrideConfig: vitest });
const [vitestResult] = await vitestEslint.lintText(
    `
    describe('example', () => {
        test('compares values', () => {
            expect(1).toBe(1);
        });
    });
`,
    { filePath: path.join('src', 'vitest.test.js') }
);
assert.equal(vitestResult.errorCount, 0, JSON.stringify(vitestResult.messages));
assert.equal(vitestResult.warningCount, 0, JSON.stringify(vitestResult.messages));

process.stdout.write(
    `Checked ${Object.keys(manifest.exports).length} public imports and backend/frontend/vitest linting from ${manifest.version} archive\n`
);
