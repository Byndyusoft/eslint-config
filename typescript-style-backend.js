import { defineConfig } from 'eslint/config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { fixPlugin } from './utils/plugins.js';

const simpleImportSortPlugin = fixPlugin(simpleImportSort);

export default defineConfig(
    {
        files: ['**/*.{ts,tsx,mts,cts}'],
        plugins: {
            'simple-import-sort': simpleImportSortPlugin
        },
        rules: {
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
                            'signature',
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
                            'public-constructor',
                            'protected-constructor',
                            'private-constructor',
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
                        ]
                    }
                }
            ],
            '@typescript-eslint/method-signature-style': 'error',
            '@typescript-eslint/naming-convention': [
                'warn',
                {
                    selector: 'class',
                    format: ['PascalCase']
                },
                {
                    selector: 'enum',
                    format: ['PascalCase']
                },
                {
                    selector: 'interface',
                    format: ['PascalCase']
                },
                {
                    selector: 'typeAlias',
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
            'no-useless-constructor': 'off',
            '@typescript-eslint/no-useless-constructor': 'error',
            'simple-import-sort/imports': [
                'warn',
                {
                    groups: [
                        ['^\\u0000'],
                        [
                            '^(_http_agent|_http_client|_http_common|_http_incoming|_http_outgoing|_http_server|_stream_duplex|_stream_passthrough|_stream_readable|_stream_transform|_stream_wrap|_stream_writable|_tls_common|_tls_wrap|assert|async_hooks|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|fs/promises|http|http2|https|inspector|module|net|os|path|perf_hooks|process|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|trace_events|tty|url|util|v8|vm|wasi|worker_threads|zlib)(/|$)'
                        ],
                        ['^@?\\w'],
                        ['^[^.]'],
                        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$']
                    ]
                }
            ],
            'simple-import-sort/exports': 'error',
            '@typescript-eslint/no-unsafe-enum-comparison': 'off'
        }
    },
    {
        files: ['**/*Controller.ts'],
        rules: {
            '@typescript-eslint/member-ordering': 'off'
        }
    },
    {
        files: ['**/*Dto.ts', '**/*Entity.ts'],
        rules: {
            '@typescript-eslint/member-ordering': 'off',
            '@typescript-eslint/no-inferrable-types': 'off'
        }
    }
);
