import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('..', import.meta.url));
const installArchive = process.argv.includes('--install');
const tempRoot = installArchive ? tmpdir() : path.join(rootDir, 'node_modules');
const tempDir = mkdtempSync(path.join(tempRoot, '.package-consumer-'));

try {
    execFileSync('npm', ['pack', '--pack-destination', tempDir], {
        cwd: rootDir,
        env: {
            ...process.env,
            HUSKY: '0',
            npm_config_cache: path.join(tempDir, 'npm-cache')
        }
    });

    const archives = readdirSync(tempDir).filter(fileName => fileName.endsWith('.tgz'));
    assert.equal(archives.length, 1, 'Expected exactly one package archive');

    const consumerDir = path.join(tempDir, 'consumer');
    const packageDir = path.join(consumerDir, 'node_modules', '@byndyusoft', 'eslint-config');
    const sourceDir = path.join(consumerDir, 'src');
    mkdirSync(consumerDir, { recursive: true });
    mkdirSync(sourceDir, { recursive: true });
    writeFileSync(path.join(consumerDir, 'package.json'), '{"name":"eslint-config-consumer","type":"module"}\n');

    const archivePath = path.join(tempDir, archives[0]);
    if (installArchive) {
        execFileSync('npm', [
            'install',
            '--ignore-scripts',
            '--legacy-peer-deps=false',
            '--no-audit',
            '--no-fund',
            archivePath,
            'eslint@^10.4.0',
            'typescript@^5.9.0',
            'react@^19',
            '@types/react@^19',
            'jest@^30',
            '@types/jest@^30'
        ], { cwd: consumerDir });
    } else {
        mkdirSync(packageDir, { recursive: true });
        execFileSync('tar', ['-xzf', archivePath, '-C', packageDir, '--strip-components=1']);
    }

    cpSync(path.join(rootDir, 'fixtures', 'tsconfig.json'), path.join(consumerDir, 'tsconfig.json'));
    cpSync(path.join(rootDir, 'fixtures', 'backend', 'valid.ts'), path.join(sourceDir, 'backend.ts'));
    cpSync(path.join(rootDir, 'fixtures', 'frontend', 'valid.tsx'), path.join(sourceDir, 'frontend.tsx'));
    cpSync(path.join(rootDir, 'fixtures', 'frontend', 'valid.test.tsx'), path.join(sourceDir, 'frontend.test.tsx'));
    cpSync(fileURLToPath(new URL('./packed-consumer-check.js', import.meta.url)), path.join(consumerDir, 'check.js'));

    execFileSync(process.execPath, ['check.js'], { cwd: consumerDir, stdio: 'inherit' });
} finally {
    rmSync(tempDir, { recursive: true, force: true });
}
