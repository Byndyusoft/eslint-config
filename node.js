module.exports = {
    env: {
        node: true
    },
    extends: ['plugin:node/recommended'],
    rules: {
        // eslint-plugin-node Possible Errors
        'node/handle-callback-err': 'error',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
        // eslint-plugin-node Stylistic Issues
        'node/callback-return': 'error',
        'node/exports-style': 'error',
        'node/file-extension-in-import': ['warn', 'never'],
        'node/global-require': 'error',
        'node/no-sync': 'error',
        'node/prefer-promises/dns': 'error',
        'node/prefer-promises/fs': 'error'
    },
    overrides: [
        {
            files: ['*.ts'],
            rules: {
                // eslint-plugin-node Possible Errors
                'node/no-missing-import': 'off', // unnecessary for TypeScript
                'node/no-unpublished-import': 'off', // doesn't support import types from devDependencies
                'node/no-unsupported-features/es-syntax': 'off', // unnecessary for TypeScript
                // eslint-plugin-node Stylistic Issues
                'node/file-extension-in-import': 'off' // unnecessary for TypeScript
            }
        },
        {
            files: ['*{spec, test, tests}.*', '**/__tests__/**', '**/test/**'],
            rules: {
                // eslint-plugin-node Stylistic Issues
                'node/no-sync': 'off' // allow sync methods in tests, e.g. when use factory.ts
            }
        }
    ]
};
