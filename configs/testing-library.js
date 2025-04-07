import testingLibraryPlugin from 'eslint-plugin-testing-library';

export default [
    {
        plugins: {
            'testing-library': testingLibraryPlugin
        },
        rules: {
            ...(testingLibraryPlugin.configs.react?.rules ?? {}),
            'testing-library/no-await-sync-queries': 'error',
            'testing-library/no-debugging-utils': 'warn',
            'testing-library/no-dom-import': ['error', 'react'],
            'testing-library/no-manual-cleanup': 'warn',
            'testing-library/no-wait-for-snapshot': 'warn',
            'testing-library/prefer-explicit-assert': 'error',
            'testing-library/prefer-find-by': 'error',
            'testing-library/prefer-presence-queries': 'error',
            'testing-library/prefer-screen-queries': 'warn'
        }
    }
];
