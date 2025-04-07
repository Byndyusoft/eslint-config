import importPlugin from 'eslint-plugin-import';

export default [
    {
        plugins: {
            import: importPlugin
        },
        rules: {
            ...(importPlugin.configs.errors.rules ?? {}),
            ...(importPlugin.configs.warnings.rules ?? {}),
            'import/extensions': [
                'warn',
                'always',
                {
                    js: 'never',
                    jsx: 'never',
                    ts: 'never',
                    tsx: 'never',
                    json: 'never'
                }
            ],
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'type', 'object'],
                    pathGroups: [
                        {
                            pattern: '*.{css,scss}',
                            group: 'object',
                            position: 'after',
                            patternOptions: {
                                matchBase: true
                            }
                        }
                    ],
                    'newlines-between': 'never',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true
                    }
                }
            ],
            'import/first': 'warn',
            'import/newline-after-import': ['warn', { count: 1 }],
            'import/no-cycle': 'error',
            'import/no-mutable-exports': 'error',
            'import/no-self-import': 'error',
            'import/no-unused-modules': 'warn',
            'import/no-useless-path-segments': 'warn'
        }
    }
];
