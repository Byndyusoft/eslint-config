import importPlugin from 'eslint-plugin-import';
import { legacyPluginConfig } from '../utils/plugins.js';

const importErrors = legacyPluginConfig('import', importPlugin, 'errors');
const importWarnings = legacyPluginConfig('import', importPlugin, 'warnings');

export const importRules = {
    'import/extensions': [
        'warn',
        'always',
        {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            json: 'never'
        }
    ],
    'import/first': 'warn',
    'import/no-cycle': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-self-import': 'error',
    'import/no-unused-modules': 'warn',
    'import/no-useless-path-segments': 'warn'
};

export default [
    {
        ...importErrors,
        rules: {
            ...importErrors.rules,
            ...importWarnings.rules,
            ...importRules
        }
    }
];
