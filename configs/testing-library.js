import testingLibrary from 'eslint-plugin-testing-library';
import { legacyPluginConfig } from '../utils/plugins.js';

export const testingLibraryRules = {
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': ['error', 'react'],
    'testing-library/no-manual-cleanup': 'warn',
    'testing-library/no-wait-for-snapshot': 'warn',
    'testing-library/prefer-explicit-assert': 'error',
    'testing-library/prefer-find-by': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-screen-queries': 'warn',
    'testing-library/prefer-wait-for': 'error'
};

export default [
    legacyPluginConfig('testing-library', testingLibrary, 'react', {
        rules: {
            ...testingLibrary.configs.react.rules,
            ...testingLibraryRules
        }
    })
];
