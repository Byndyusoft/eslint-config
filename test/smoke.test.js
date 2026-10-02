import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { ESLint } from 'eslint';
import backend from '@byndyusoft/eslint-config/backend';
import frontend from '@byndyusoft/eslint-config/frontend';
import header from '@byndyusoft/eslint-config/header-apache-2.0';

const rootDir = path.resolve(fileURLToPath(new URL('..', import.meta.url)));

const publicEntryPoints = [
    '',
    '/advanced',
    '/backend',
    '/frontend',
    '/header-apache-2.0',
    '/javascript',
    '/jest',
    '/jest-style-frontend',
    '/node',
    '/react',
    '/react-testing',
    '/typescript',
    '/typescript-style-backend',
    '/typescript-style-frontend'
];

const presets = [
    {
        name: 'backend',
        config: backend,
        validFile: 'fixtures/backend/valid.ts',
        testFile: 'fixtures/backend/valid.test.ts',
        invalidFile: 'fixtures/backend/invalid.ts'
    },
    {
        name: 'frontend',
        config: frontend,
        validFile: 'fixtures/frontend/valid.tsx',
        testFile: 'fixtures/frontend/valid.test.tsx'
    }
];

async function lint(config, relativeFilePath) {
    const eslint = new ESLint({
        overrideConfig: config,
        overrideConfigFile: true,
        cwd: rootDir,
        ignore: false
    });
    const filePath = path.join(rootDir, relativeFilePath);

    return eslint.lintFiles([filePath]);
}

test('all public entry points resolve to flat config arrays', async () => {
    for (const entryPoint of publicEntryPoints) {
        const imported = await import(`@byndyusoft/eslint-config${entryPoint}`);
        assert.ok(Array.isArray(imported.default), `Expected ${entryPoint || 'package root'} to export a config array`);
    }
});

test('removed and internal entry points are not exported', async () => {
    for (const entryPoint of ['/flow', '/stylistic', '/backend.js', '/configs/react', '/utils/plugins']) {
        await assert.rejects(import(`@byndyusoft/eslint-config${entryPoint}`), {
            code: 'ERR_PACKAGE_PATH_NOT_EXPORTED'
        });
    }
});

test('frontend public import activates TypeScript, Jest, React, and testing rules', async () => {
    const eslint = new ESLint({
        overrideConfig: frontend,
        overrideConfigFile: true,
        cwd: rootDir
    });
    const config = await eslint.calculateConfigForFile(path.join(rootDir, 'fixtures/frontend/valid.test.tsx'));

    for (const rule of [
        '@typescript-eslint/no-explicit-any',
        'jest/no-duplicate-hooks',
        '@eslint-react/dom-no-missing-button-type',
        'react-hooks/rules-of-hooks',
        'testing-library/prefer-find-by',
        'jest-dom/prefer-empty'
    ]) {
        assert.ok(config.rules[rule], `Expected ${rule} to be active`);
    }
});

for (const preset of presets) {
    test(`${preset.name} preset loads and lints valid fixture`, async () => {
        const results = await lint(preset.config, preset.validFile);
        assert.equal(results.length, 1);
        assert.equal(results[0].errorCount, 0, JSON.stringify(results[0].messages, null, 2));
    });

    test(`${preset.name} preset loads test-file rules`, async () => {
        const results = await lint(preset.config, preset.testFile);
        assert.equal(results.length, 1);
        assert.equal(results[0].errorCount, 0, JSON.stringify(results[0].messages, null, 2));
    });
}

test('backend preset reports errors for invalid fixture', async () => {
    const results = await lint(presets[0].config, presets[0].invalidFile);
    assert.equal(results.length, 1);
    assert.ok(results[0].errorCount > 0);
});

test('header preset reports a missing header', async () => {
    const eslint = new ESLint({
        overrideConfig: header,
        overrideConfigFile: true,
        cwd: rootDir
    });
    const results = await eslint.lintText('export const value = 1;', {
        filePath: path.join(rootDir, 'header.js')
    });

    assert.ok(results[0].messages.some(message => message.ruleId === 'header/header'));
});
