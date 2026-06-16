import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import { fixPlugin } from './utils/plugins.js';
import javascript from './javascript.js';

const importTypescriptPlugin = fixPlugin(importPlugin);

export default defineConfig(
    ...javascript,
    {
        files: ['**/*.{ts,tsx,mts,cts}'],
        extends: [...tseslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
        languageOptions: {
            parserOptions: {
                projectService: true
            }
        },
        plugins: {
            import: importTypescriptPlugin
        },
        settings: {
            'import/resolver': {
                typescript: true
            }
        },
        rules: {
            // ESLint Best Practices
            'class-methods-use-this': 'off', // TODO: https://github.com/typescript-eslint/typescript-eslint/issues/1103
            'consistent-return': 'off', // TODO: https://github.com/typescript-eslint/typescript-eslint/issues/1277
            'default-case': 'off', // unnecessary for TypeScript
            // eslint-plugin-import Static analysis
            'import/default': 'off', // TODO: https://github.com/benmosher/eslint-plugin-import/issues/1908
            // eslint-plugin-import Helpful warnings
            'import/no-named-as-default-member': 'off', // TODO: don't work with esModuleInterop
            '@typescript-eslint/ban-ts-comment': 'warn',
            '@typescript-eslint/consistent-type-assertions': [
                'error',
                {
                    assertionStyle: 'as',
                    objectLiteralTypeAssertions: 'allow-as-parameter'
                }
            ],
            '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
            '@typescript-eslint/explicit-function-return-type': [
                'warn',
                {
                    allowExpressions: true,
                    allowTypedFunctionExpressions: true,
                    allowHigherOrderFunctions: true,
                    allowConciseArrowFunctionExpressionsStartingWithVoid: true
                }
            ],
            '@typescript-eslint/explicit-module-boundary-types': 'error',
            '@typescript-eslint/no-confusing-non-null-assertion': 'error',
            '@typescript-eslint/no-empty-object-type': [
                'warn',
                {
                    allowInterfaces: 'with-single-extends'
                }
            ],
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-floating-promises': 'warn',
            '@typescript-eslint/no-invalid-void-type': 'error',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
            '@typescript-eslint/no-unnecessary-condition': 'warn',
            '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
            '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
            '@typescript-eslint/prefer-enum-initializers': 'warn',
            '@typescript-eslint/prefer-includes': 'warn',
            '@typescript-eslint/prefer-literal-enum-member': 'error',
            '@typescript-eslint/prefer-nullish-coalescing': 'warn',
            '@typescript-eslint/prefer-optional-chain': 'warn',
            '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
            '@typescript-eslint/prefer-regexp-exec': 'warn',
            '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
            '@typescript-eslint/prefer-ts-expect-error': 'error',
            '@typescript-eslint/require-array-sort-compare': 'error',
            '@typescript-eslint/switch-exhaustiveness-check': 'error',
            '@typescript-eslint/unified-signatures': 'error',
            'no-dupe-class-members': 'off',
            '@typescript-eslint/no-dupe-class-members': 'error',
            '@typescript-eslint/no-empty-function': 'warn',
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'error',
            'no-throw-literal': 'off',
            '@typescript-eslint/only-throw-error': 'error',
            'no-return-await': 'off',
            '@typescript-eslint/return-await': 'error'
        }
    },
    {
        files: ['**/*.{spec,test,tests,stories}.*', '**/__tests__/**', '**/__stories__/**'],
        rules: {
            '@typescript-eslint/unbound-method': 'off'
        }
    }
);
