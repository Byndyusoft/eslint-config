module.exports = {
    env: {
        node: true
    },
    extends: ['plugin:node/recommended'],
    plugins: ['node'],
    rules: {
        'node/no-sync': 'error',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
        'node/handle-callback-err': 'error',
        'node/global-require': 'error',
        'node/file-extension-in-import': ['warn', 'never'],
        'node/exports-style': 'error',
        'node/callback-return': 'error',
        'node/prefer-promises/fs': 'error',
        'node/prefer-promises/dns': 'error'
    },
    overrides: [
        {
          files: ['*.ts'],
          rules: {
            'node/no-missing-import': [
                'error',
                {
                    tryExtensions: ['.ts', '.js', '.json', '.node']
                }
            ],
            'node/no-unsupported-features/es-syntax': 'off'
          }
        }
    ]
};
