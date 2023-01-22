const { TS_FILES } = require('./const/files');

module.exports = {
    overrides: [
        {
            files: [...TS_FILES],
            rules: {
                // @typescript-eslint/eslint-plugin Supported rules
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/naming-convention': [
                    'warn',
                    {
                        selector: 'interface',
                        format: ['PascalCase'],
                        prefix: ['I']
                    },
                    {
                        selector: 'typeAlias',
                        format: ['PascalCase'],
                        prefix: ['T']
                    },
                    {
                        selector: 'enum',
                        format: ['PascalCase']
                    },
                    {
                        selector: 'enumMember',
                        format: ['PascalCase']
                    }
                ]
            }
        }
    ]
};
