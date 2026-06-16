import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import bestPractices from './configs/best-practices.js';
import ecmascript6 from './configs/ecmascript-6.js';
import errors from './configs/errors.js';
import variables from './configs/variables.js';
import importConfig from './configs/import.js';

export default defineConfig(
    {
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                ...globals.es2021
            }
        },
        linterOptions: {
            reportUnusedDisableDirectives: 'error'
        }
    },
    js.configs.recommended,
    ...bestPractices,
    ...ecmascript6,
    ...errors,
    ...variables,
    ...importConfig,
    {
        files: ['**/*.{js,jsx,mjs,cjs}']
    }
);
