const { TS_FILES } = require('./const/files');

module.exports = {
    overrides: [
        {
            files: [...TS_FILES],
            plugins: ['simple-import-sort'],
            rules: {
                // @typescript-eslint/eslint-plugin Supported rules
                '@typescript-eslint/array-type': [
                    'error',
                    {
                        default: 'array-simple'
                    }
                ],
                '@typescript-eslint/explicit-member-accessibility': 'error',
                '@typescript-eslint/member-ordering': [
                    'error',
                    {
                        default: {
                            memberTypes: [
                                // Index signature
                                'signature',

                                // Fields
                                'public-static-field',
                                'protected-static-field',
                                'private-static-field',

                                'public-decorated-field',
                                'protected-decorated-field',
                                'private-decorated-field',

                                'public-instance-field',
                                'protected-instance-field',
                                'private-instance-field',

                                'public-abstract-field',
                                'protected-abstract-field',

                                // Constructors
                                'public-constructor',
                                'protected-constructor',
                                'private-constructor',

                                // public-static-{getter,setter}
                                // protected-static-{getter,setter}
                                // private-static-{getter,setter}

                                // public-{getter,setter}
                                // protected-{getter,setter}
                                // private-{getter,setter}

                                // Methods
                                'public-static-method',
                                'protected-static-method',
                                'private-static-method',

                                'public-decorated-method',
                                'protected-decorated-method',
                                'private-decorated-method',

                                'public-instance-method',
                                'protected-instance-method',
                                'private-instance-method',

                                'public-abstract-method',
                                'protected-abstract-method'
                            ],
                            order: 'alphabetically'
                        }
                    }
                ], // TODO: https://github.com/typescript-eslint/typescript-eslint/issues/929
                '@typescript-eslint/method-signature-style': 'error',
                '@typescript-eslint/naming-convention': [
                    'warn',
                    {
                        selector: 'class',
                        format: ['PascalCase']
                    },
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
                        format: ['camelCase']
                    },
                    {
                        selector: ['classProperty', 'parameterProperty', 'classMethod'],
                        leadingUnderscore: 'forbid',
                        trailingUnderscore: 'forbid',
                        format: ['camelCase']
                    }
                ],
                // @typescript-eslint/eslint-plugin Extension Rules
                'no-useless-constructor': 'off', // fix configs/ecmascript-6.js
                '@typescript-eslint/no-useless-constructor': 'error', // fix configs/ecmascript-6.js
                // eslint-plugin-simple-import-sort
                'simple-import-sort/imports': [
                    'warn', // style
                    {
                        groups: [
                            // Side effect imports
                            ['^\\u0000'],

                            // Node.js builtins. You could also generate this regex if you use a `.js` config.
                            // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
                            [
                                '^(_http_agent|_http_client|_http_common|_http_incoming|_http_outgoing|_http_server|_stream_duplex|_stream_passthrough|_stream_readable|_stream_transform|_stream_wrap|_stream_writable|_tls_common|_tls_wrap|assert|async_hooks|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|fs/promises|http|http2|https|inspector|module|net|os|path|perf_hooks|process|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|trace_events|tty|url|util|v8|vm|wasi|worker_threads|zlib)(/|$)'
                            ],

                            // Packages.
                            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                            ['^@?\\w'],

                            // Absolute imports and other imports such as Vue-style `@/foo`.
                            // Anything that does not start with a dot.
                            ['^[^.]'],

                            // Parent imports. Put `..` last.
                            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

                            // Other relative imports. Put same-folder imports and `.` last.
                            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$']
                        ]
                    }
                ],
                'simple-import-sort/exports': 'error'
            }
        },
        {
            files: [...TS_FILES.map((file) => file.replace('*', '*Controller'))],
            rules: {
                // @typescript-eslint/eslint-plugin Supported rules
                '@typescript-eslint/member-ordering': 'off'
            }
        },
        {
            files: [...TS_FILES.flatMap((file) => ['*Dto', '*Entity'].map((value) => file.replace('*', value)))],
            rules: {
                // @typescript-eslint/eslint-plugin Supported rules
                '@typescript-eslint/member-ordering': 'off',
                '@typescript-eslint/no-inferrable-types': 'off' // for @nestjs/swagger
            }
        }
    ]
};
