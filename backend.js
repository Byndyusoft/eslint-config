const { JS_FILES, TS_FILES } = require('./const/files');

module.exports = {
    extends: [
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
            files: [...JS_FILES, ...TS_FILES],
            rules: {
                // eslint-plugin-unicorn
                'unicorn/filename-case': [
                    'warn',
                    {
                        case: 'camelCase'
                    }
                ],
                'unicorn/prefer-module': 'off', // unnecessary for backend
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
