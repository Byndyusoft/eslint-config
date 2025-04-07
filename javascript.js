import js from '@eslint/js';
import bestPractices from './configs/best-practices.js';
import ecmascript6 from './configs/ecmascript-6.js';
import errors from './configs/errors.js';
import variables from './configs/variables.js';
import importJS from './configs/import.js';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';

export default [
    {
        ...js.configs.recommended
    },
    {
        plugins: {
            '@stylistic': stylistic
        }
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
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        }
    }
];
