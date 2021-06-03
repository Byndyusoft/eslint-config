module.exports = {
    extends: [
        './typescript.js',
        './typescript-style-back.js',
        './node.js',
        './advanced.js',
        './jest.js',
        './jest-style-back.js',
        'plugin:prettier/recommended'
    ],
    overrides: [
        {
            files: ['*.js', '*.ts'],
            rules: {
                // eslint-plugin-unicorn
                'unicorn/prefer-module': 'off', // unnecessary for backend
                'unicorn/prefer-node-protocol': 'off' // TODO: TypeScript don't have types for 'node:*'
            }
        }
    ]
};
