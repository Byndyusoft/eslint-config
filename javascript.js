import js from '@eslint/js';
import bestPractices from './configs/best-practices.js';
import ecmascript6 from './configs/ecmascript-6.js';
import errors from './configs/errors.js';
import variables from './configs/variables.js';
import importJS from './configs/import.js';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
    {
        ...js.configs.recommended
    },
    ...bestPractices,
    ...ecmascript6,
    ...errors,
    ...variables,
    ...importJS,
    {
        languageOptions: {
            globals: {
                ...globals.node
            }
        },
        linterOptions: {
            reportUnusedDisableDirectives: true
        }
    },
    {
        files: ['*.js', '*.jsx'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2020,
            sourceType: 'module'
        }
    }
];
