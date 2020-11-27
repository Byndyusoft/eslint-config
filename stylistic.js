/* https://eslint.org/docs/rules/#stylistic-issues */
module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        'array-bracket-newline': ['warn', 'consistent'],
        'array-bracket-spacing': ['warn', 'never'],
        'array-element-newline': ['warn', 'consistent'],
        'block-spacing': ['warn', 'always'],
        'brace-style': ['warn', '1tbs'],
        camelcase: 'warn',
        'comma-dangle': ['warn', 'never'],
        'comma-spacing': [
            'warn',
            {
                before: false,
                after: true
            }
        ],
        'comma-style': ['warn', 'last'],
        'computed-property-spacing': ['warn', 'never'],
        'consistent-this': ['warn', 'that'],
        'eol-last': ['warn', 'always'],
        'func-call-spacing': ['warn', 'never'],
        'function-call-argument-newline': ['warn', 'consistent'],
        'function-paren-newline': ['warn', 'consistent'],
        'jsx-quotes': ['warn', 'prefer-double'],
        'key-spacing': [
            'warn',
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        'keyword-spacing': [
            // enforce consistent spacing before and after keywords
            'warn',
            {
                before: true,
                after: true
            }
        ],
        'lines-between-class-members': ['warn', 'always'],
        'new-cap': 'warn',
        'newline-per-chained-call': [
            'warn',
            {
                ignoreChainWithDepth: 2
            }
        ],
        'new-parens': 'warn',
        'no-array-constructor': 'warn',
        'no-bitwise': 'warn',
        'no-lonely-if': 'warn',
        'no-mixed-operators': [
            'warn',
            {
                groups: [
                    ['+', '-', '*', '/', '%', '**'],
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof']
                ],
                allowSamePrecedence: true
            }
        ],
        'no-mixed-spaces-and-tabs': 'warn',
        'no-multi-assign': 'warn',
        'no-multiple-empty-lines': [
            'warn',
            {
                max: 1,
                maxEOF: 1
            }
        ],
        'no-nested-ternary': 'warn',
        'no-new-object': 'warn',
        'no-plusplus': [
            'warn',
            {
                allowForLoopAfterthoughts: true
            }
        ],
        'no-trailing-spaces': 'warn',
        'no-underscore-dangle': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-whitespace-before-property': 'warn',
        'object-curly-newline': [
            'warn',
            {
                consistent: true
            }
        ],
        'object-curly-spacing': ['warn', 'always'],
        'object-property-newline': [
            'warn',
            {
                allowAllPropertiesOnSameLine: true
            }
        ],
        'one-var': ['warn', 'never'],
        'one-var-declaration-per-line': ['warn', 'always'],
        'operator-assignment': 'warn',
        'padded-blocks': ['warn', 'never'],
        'padding-line-between-statements': [
            'warn',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return'
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*'
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var']
            }
        ],
        'prefer-object-spread': 'warn',
        'quote-props': ['warn', 'as-needed'],
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
        'semi-spacing': [
            'warn',
            {
                before: false,
                after: true
            }
        ],
        'semi-style': ['warn', 'last'],
        'space-before-blocks': ['warn', 'always'],
        'space-before-function-paren': [
            'warn',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-in-parens': ['warn', 'never'],
        'space-infix-ops': 'warn',
        'space-unary-ops': [
            'warn',
            {
                words: true,
                nonwords: false
            }
        ],
        'switch-colon-spacing': 'warn',
        'template-tag-spacing': ['warn', 'never'],
        'unicode-bom': 'error'
    }
};
