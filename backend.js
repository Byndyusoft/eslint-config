module.exports = {
    extends: [
        './configs/jest-formatting.js',
        './typescript.js',
        './typescript-style-backend.js',
        './node.js',
        './advanced.js',
        './jest.js',
        'plugin:prettier/recommended'
    ],
    plugins: ['dirs'],
    overrides: [
        {
            files: ['*.js', '*.ts', '*.tsx'],
            rules: {
                // eslint general
                'prefer-destructuring': 'off',
                // eslint-plugin-unicorn
                'unicorn/filename-case': [
                    'warn',
                    {
                        case: 'camelCase'
                    }
                ],
                'unicorn/prefer-module': 'off', // unnecessary for backend
                'unicorn/prefer-node-protocol': 'off', // TODO: TypeScript don't have types for 'node:*'
                'unicorn/prevent-abbreviations': [
                    'error',
                    {
                        replacements: {
                            acc: false,
                            args: false,
                            doc: false,
                            docs: false,
                            env: false,
                            err: false,
                            i: false,
                            param: false,
                            params: false,
                            prod: false,
                            temp: false
                        }
                    }
                ],
                'unicorn/prefer-top-level-await': 'off',
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
