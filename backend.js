import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import dirs from 'eslint-plugin-dirs';
import { fixPlugin } from './utils/plugins.js';
import jestFormatting from './configs/jest-formatting.js';
import typescript from './typescript.js';
import typescriptStyleBackend from './typescript-style-backend.js';
import node from './node.js';
import advanced from './advanced.js';
import jest from './jest.js';

const dirsPlugin = fixPlugin(dirs);

export default defineConfig(
    ...jestFormatting,
    ...typescript,
    ...typescriptStyleBackend,
    ...node,
    ...advanced,
    ...jest,
    eslintPluginPrettierRecommended,
    eslintConfigPrettier,
    {
        plugins: {
            dirs: dirsPlugin
        }
    },
    {
        files: ['**/*.{js,ts,tsx,mjs,cjs,mts,cts}'],
        rules: {
            'prefer-destructuring': 'off',
            'unicorn/filename-case': [
                'warn',
                {
                    case: 'camelCase'
                }
            ],
            'unicorn/prefer-module': 'off',
            'unicorn/prefer-node-protocol': 'off',
            'unicorn/prevent-abbreviations': [
                'error',
                {
                    replacements: {
                        acc: false,
                        args: false,
                        doc: false,
                        docs: false,
                        env: false,
                        err: false,
                        i: false,
                        param: false,
                        params: false,
                        prod: false,
                        temp: false
                    }
                }
            ],
            'unicorn/prefer-top-level-await': 'off',
            'dirs/dirnames': [
                'warn',
                {
                    pattern: '^(__)?([a-z0-9]+)([A-Z][a-z0-9]+)*(__)?$'
                }
            ],
            'prettier/prettier': 'off'
        }
    }
);
