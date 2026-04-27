import base from './base.js';

export default {
  plugins: ['import'],
  rules: {
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/array-callback-return.html
    'array-callback-return': ['error', { allowImplicit: true }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/block-scoped-var.html
    'block-scoped-var': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/class-methods-use-this.html
    'class-methods-use-this': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/consistent-return.html
    'consistent-return': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/curly.html
    'curly': ['error', 'multi-line'],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-case.html
    'default-case': ['error', { commentPattern: '^no default$' }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-case.html-last
    'default-case-last': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-param-last.html
    'default-param-last': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/dot-notation.html
    'dot-notation': ['error', { allowKeywords: true }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/eqeqeq.html
    'eqeqeq': ['error', 'always', { null: 'ignore' }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/grouped-accessor-pairs.html
    'grouped-accessor-pairs': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/guard-for-in.html
    'guard-for-in': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/default.html
    'import-x/default': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/export.html
    'import-x/export': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/first.html
    'import-x/first': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/named.html
    'import-x/named': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/namespace.html
    'import-x/namespace': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-absolute-path.html
    'import-x/no-absolute-path': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-amd.html
    'import-x/no-amd': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-anonymous-default-export.html
    'import-x/no-anonymous-default-export': [
      'error',
      { allowArray: true, allowObject: true },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-cycle.html
    'import-x/no-cycle': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-duplicates.html
    'import-x/no-duplicates': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-dynamic-require.html
    'import-x/no-dynamic-require': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-empty-named-blocks.html
    'import-x/no-empty-named-blocks': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-mutable-exports.html
    'import-x/no-mutable-exports': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-as-default.html
    'import-x/no-named-as-default': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-as-default-member.html
    'import-x/no-named-as-default-member': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-default.html
    'import-x/no-named-default': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-self-import.html
    'import-x/no-self-import': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-webpack-loader-syntax.html
    'import-x/no-webpack-loader-syntax': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-classes-per-file.html
    'max-classes-per-file': ['error', 1],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-alert.html
    'no-alert': 'warn',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-await-in-loop.html
    'no-await-in-loop': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-caller.html
    'no-caller': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-case-declarations.html
    'no-case-declarations': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-console.html
    // Upgrade from base: error in strict context
    'no-console': ['error', base.rules['no-console'].at(1)],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constructor-return.html
    'no-constructor-return': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-else-return.html
    'no-else-return': ['error', { allowElseIf: false }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-function.html
    'no-empty-function': [
      'error',
      { allow: ['arrowFunctions', 'functions', 'methods'] },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-pattern.html
    'no-empty-pattern': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-eval.html
    'no-eval': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extend-native.html
    'no-extend-native': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-bind.html
    'no-extra-bind': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-label.html
    'no-extra-label': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-fallthrough.html
    'no-fallthrough': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-global-assign.html
    'no-global-assign': ['error', { exceptions: [] }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implied-eval.html
    'no-implied-eval': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-iterator.html
    'no-iterator': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-labels.html
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-lone-blocks.html
    'no-lone-blocks': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-loop-func.html
    'no-loop-func': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-multi-str.html
    'no-multi-str': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-nested-ternary.html
    // Upgrade from base warn to strict error
    'no-nested-ternary': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new.html
    'no-new': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new.html-func
    'no-new-func': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new.html-wrappers
    'no-new-wrappers': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-nonoctal-decimal-escape.html
    'no-nonoctal-decimal-escape': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-param-reassign.html
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'context',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',
        ],
        props: true,
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-promise-executor-return.html
    'no-promise-executor-return': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-proto.html
    'no-proto': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-redeclare.html
    'no-redeclare': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-return-assign.html
    'no-return-assign': ['error', 'always'],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-script-url.html
    'no-script-url': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-self-assign.html
    'no-self-assign': ['error', { props: true }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-self-compare.html
    'no-self-compare': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-sequences.html
    'no-sequences': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-shadow.html
    'no-shadow': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-throw-literal.html
    'no-throw-literal': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-expressions.html
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTaggedTemplates: false,
        allowTernary: false,
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-labels.html
    'no-unused-labels': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-catch.html
    'no-useless-catch': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-concat.html
    'no-useless-concat': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-escape.html
    'no-useless-escape': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-return.html
    'no-useless-return': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-void.html
    'no-void': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-with.html
    'no-with': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-object-has-own.html
    'prefer-object-has-own': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-promise-reject-errors.html
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/radix.html
    'radix': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/vars-on-top.html
    'vars-on-top': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/yoda.html
    'yoda': 'error',
  },
};
