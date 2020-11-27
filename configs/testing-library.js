module.exports = {
    extends: ['plugin:testing-library/react'],
    plugins: ['testing-library'],
    rules: {
        'testing-library/no-await-sync-query': 'error',
        'testing-library/no-debug': 'warn',
        'testing-library/no-dom-import': ['error', 'react'],
        'testing-library/no-manual-cleanup': 'warn',
        'testing-library/no-wait-for-snapshot': 'warn',
        'testing-library/prefer-explicit-assert': 'error',
        'testing-library/prefer-find-by': 'error',
        'testing-library/prefer-presence-queries': 'error',
        'testing-library/prefer-screen-queries': 'warn',
        'testing-library/prefer-wait-for': 'error'
    }
};
