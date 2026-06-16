import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { ESLint } from 'eslint';
import backend from '../backend.js';
import frontend from '../frontend.js';

const rootDir = path.resolve(fileURLToPath(new URL('..', import.meta.url)));

const presets = [
    {
        name: 'backend',
        config: backend,
        validFile: 'fixtures/backend/valid.ts',
        invalidFile: 'fixtures/backend/invalid.ts'
    },
    {
        name: 'frontend',
        config: frontend,
        validFile: 'fixtures/frontend/valid.tsx'
    }
];

async function lint(config, relativeFilePath) {
    const eslint = new ESLint({
        overrideConfig: config,
        cwd: rootDir,
        ignore: false
    });
    const filePath = path.join(rootDir, relativeFilePath);

    return eslint.lintFiles([filePath]);
}

for (const preset of presets) {
    test(`${preset.name} preset loads and lints valid fixture`, async () => {
        const results = await lint(preset.config, preset.validFile);
        assert.equal(results.length, 1);
        assert.equal(results[0].errorCount, 0, JSON.stringify(results[0].messages, null, 2));
    });
}

test('backend preset reports errors for invalid fixture', async () => {
    const results = await lint(presets[0].config, presets[0].invalidFile);
    assert.equal(results.length, 1);
    assert.ok(results[0].errorCount > 0);
});
