module.exports = {
    extends: [
        './typescript.js',
        './typescript-style-backend.js',
        './node.js',
        './advanced.js',
        './jest.js',
        './jest-style-backend.js',
        'plugin:prettier/recommended'
    ],
    plugins: ['dirs'],
    overrides: [
        {
            files: ['*.js', '*.ts'],
            rules: {
                // eslint-plugin-unicorn
                'unicorn/filename-case': [
                    'warn',
                    {
                        case: 'camelCase'
                    }
                ],
                'unicorn/prefer-module': 'off', // unnecessary for backend
                'unicorn/prefer-node-protocol': 'off', // TODO: TypeScript don't have types for 'node:*'
                // eslint-plugin-dirs
                'dirs/dirnames': [
                    'warn',
                    {
                        pattern: '^(__)?([a-z0-9]+)([A-Z][a-z0-9]+)*(__)?$'
                    }
                ],
                // eslint-plugin-prettier
                'prettier/prettier': 'off' // run prettier externally
            }
        }
    ]
};
