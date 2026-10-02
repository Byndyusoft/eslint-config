import { importX } from 'eslint-plugin-import-x';

const importErrors = importX.flatConfigs.errors;
const importWarnings = importX.flatConfigs.warnings;

export const importRules = {
    'import-x/extensions': [
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
    'import-x/first': 'warn',
    'import-x/no-cycle': 'error',
    'import-x/no-mutable-exports': 'error',
    'import-x/no-self-import': 'error',
    'import-x/no-useless-path-segments': 'warn'
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
