export default {
  env: { builtin: true, es2026: true },
  rules: {
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/arrow-body-style.html
    'arrow-body-style': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/constructor-super.html
    'constructor-super': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/curly.html
    'curly': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/for-direction.html
    'for-direction': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-names.html
    'func-names': 'warn',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/getter-return.html
    'getter-return': ['error', { allowImplicit: true }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/new-cap.html
    'new-cap': [
      'error',
      {
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
        newIsCap: true,
        newIsCapExceptions: [],
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-array-constructor.html
    'no-array-constructor': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-async-promise-executor.html
    'no-async-promise-executor': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-await-in-loop.html
    'no-await-in-loop': 'warn',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-bitwise.html
    'no-bitwise': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-class-assign.html
    'no-class-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-compare-neg-zero.html
    'no-compare-neg-zero': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-cond-assign.html
    'no-cond-assign': ['error', 'always'],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-console.html
    'no-console': [
      'warn',
      {
        allow: [
          'assert',
          'context',
          'createTask',
          'debug',
          'dir',
          'dirxml',
          'error',
          'group',
          'groupCollapsed',
          'groupEnd',
          'info',
          'table',
          'warn',
        ],
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-const-assign.html
    'no-const-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constant-condition.html
    'no-constant-condition': 'warn',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-control-regex.html
    'no-control-regex': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-debugger.html
    'no-debugger': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-delete-var.html
    'no-delete-var': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-class-members.html
    'no-dupe-class-members': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-else-if.html
    'no-dupe-else-if': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-keys.html
    'no-dupe-keys': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-duplicate-case.html
    'no-duplicate-case': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty.html
    'no-empty': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty.html-character-class
    'no-empty-character-class': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-ex-assign.html
    'no-ex-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-boolean-cast.html
    'no-extra-boolean-cast': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-func-assign.html
    'no-func-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-import-assign.html
    'no-import-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-inner-declarations.html
    'no-inner-declarations': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-invalid-regexp.html
    'no-invalid-regexp': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-irregular-whitespace.html
    'no-irregular-whitespace': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-label-var.html
    'no-label-var': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-lonely-if.html
    'no-lonely-if': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-loss-of-precision.html
    'no-loss-of-precision': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-misleading-character-class.html
    'no-misleading-character-class': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-multi-assign.html
    'no-multi-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-nested-ternary.html
    'no-nested-ternary': 'warn',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-native-nonconstructor.html
    'no-new-native-nonconstructor': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-obj-calls.html
    'no-obj-calls': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-plusplus.html
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-prototype-builtins.html
    'no-prototype-builtins': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-regex-spaces.html
    'no-regex-spaces': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-exports.html
    'no-restricted-exports': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-globals.html
    'no-restricted-globals': [
      'error',
      {
        message:
          'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
        name: 'isFinite',
      },
      {
        message:
          'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
        name: 'isNaN',
      },
      {
        message:
          'Use window.addEventListener instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'addEventListener',
      },
      {
        message:
          'Use window.blur instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'blur',
      },
      {
        message:
          'Use window.close instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'close',
      },
      {
        message:
          'Use window.closed instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'closed',
      },
      {
        message:
          'Use window.confirm instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'confirm',
      },
      {
        message:
          'Use window.defaultStatus instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'defaultStatus',
      },
      {
        message:
          'Use window.defaultstatus instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'defaultstatus',
      },
      {
        message:
          'Use window.event instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'event',
      },
      {
        message:
          'Use window.external instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'external',
      },
      {
        message:
          'Use window.find instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'find',
      },
      {
        message:
          'Use window.focus instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'focus',
      },
      {
        message:
          'Use window.frameElement instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'frameElement',
      },
      {
        message:
          'Use window.frames instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'frames',
      },
      {
        message:
          'Use window.history instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'history',
      },
      {
        message:
          'Use window.innerHeight instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'innerHeight',
      },
      {
        message:
          'Use window.innerWidth instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'innerWidth',
      },
      {
        message:
          'Use window.length instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'length',
      },
      {
        message:
          'Use window.location instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'location',
      },
      {
        message:
          'Use window.locationbar instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'locationbar',
      },
      {
        message:
          'Use window.menubar instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'menubar',
      },
      {
        message:
          'Use window.moveBy instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'moveBy',
      },
      {
        message:
          'Use window.moveTo instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'moveTo',
      },
      {
        message:
          'Use window.name instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'name',
      },
      {
        message:
          'Use window.onblur instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'onblur',
      },
      {
        message:
          'Use window.onerror instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'onerror',
      },
      {
        message:
          'Use window.onfocus instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'onfocus',
      },
      {
        message:
          'Use window.onload instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'onload',
      },
      {
        message:
          'Use window.onresize instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'onresize',
      },
      {
        message:
          'Use window.onunload instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'onunload',
      },
      {
        message:
          'Use window.open instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'open',
      },
      {
        message:
          'Use window.opener instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'opener',
      },
      {
        message:
          'Use window.opera instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'opera',
      },
      {
        message:
          'Use window.outerHeight instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'outerHeight',
      },
      {
        message:
          'Use window.outerWidth instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'outerWidth',
      },
      {
        message:
          'Use window.pageXOffset instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'pageXOffset',
      },
      {
        message:
          'Use window.pageYOffset instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'pageYOffset',
      },
      {
        message:
          'Use window.parent instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'parent',
      },
      {
        message:
          'Use window.print instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'print',
      },
      {
        message:
          'Use window.removeEventListener instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'removeEventListener',
      },
      {
        message:
          'Use window.resizeBy instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'resizeBy',
      },
      {
        message:
          'Use window.resizeTo instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'resizeTo',
      },
      {
        message:
          'Use window.screen instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'screen',
      },
      {
        message:
          'Use window.screenLeft instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'screenLeft',
      },
      {
        message:
          'Use window.screenTop instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'screenTop',
      },
      {
        message:
          'Use window.screenX instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'screenX',
      },
      {
        message:
          'Use window.screenY instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'screenY',
      },
      {
        message:
          'Use window.scroll instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'scroll',
      },
      {
        message:
          'Use window.scrollbars instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'scrollbars',
      },
      {
        message:
          'Use window.scrollBy instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'scrollBy',
      },
      {
        message:
          'Use window.scrollTo instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'scrollTo',
      },
      {
        message:
          'Use window.scrollX instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'scrollX',
      },
      {
        message:
          'Use window.scrollY instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'scrollY',
      },
      {
        message:
          'Use window.self instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'self',
      },
      {
        message:
          'Use window.status instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'status',
      },
      {
        message:
          'Use window.statusbar instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'statusbar',
      },
      {
        message:
          'Use window.stop instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'stop',
      },
      {
        message:
          'Use window.toolbar instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'toolbar',
      },
      {
        message:
          'Use window.top instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md',
        name: 'top',
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-setter-return.html
    'no-setter-return': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-shadow.html
    'no-shadow': 'warn',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-shadow.html-restricted-names
    'no-shadow-restricted-names': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-sparse-arrays.html
    'no-sparse-arrays': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-template-curly-in-string.html
    'no-template-curly-in-string': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-this-before-super.html
    'no-this-before-super': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-undef.html
    'no-undef': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unexpected-multiline.html
    'no-unexpected-multiline': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unreachable.html
    'no-unreachable': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unneeded-ternary.html
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-finally.html
    'no-unsafe-finally': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-negation.html
    'no-unsafe-negation': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-optional-chaining.html
    'no-unsafe-optional-chaining': [
      'error',
      { disallowArithmeticOperators: true },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-expressions.html
    'no-unused-expressions': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-vars.html
    'no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-backreference.html
    'no-useless-backreference': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-computed-key.html
    'no-useless-computed-key': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-constructor.html
    'no-useless-constructor': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-rename.html
    'no-useless-rename': [
      'error',
      { ignoreDestructuring: false, ignoreExport: false, ignoreImport: false },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-var.html
    'no-var': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/object-shorthand.html
    'object-shorthand': [
      'error',
      'always',
      { avoidQuotes: true, ignoreConstructors: false },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/operator-assignment.html
    'operator-assignment': ['error', 'always'],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-const.html
    'prefer-const': [
      'error',
      { destructuring: 'any', ignoreReadBeforeAssign: true },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-destructuring.html
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: { array: true, object: false },
        VariableDeclarator: { array: false, object: true },
      },
      { enforceForRenamedProperties: false },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-exponentiation-operator.html
    'prefer-exponentiation-operator': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-numeric-literals.html
    'prefer-numeric-literals': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-object-spread.html
    'prefer-object-spread': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-rest-params.html
    'prefer-rest-params': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-spread.html
    'prefer-spread': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/require-yield.html
    'require-yield': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/symbol-description.html
    'symbol-description': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/unicode-bom.html
    'unicode-bom': ['error', 'never'],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/use-isnan.html
    'use-isnan': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/valid-typeof.html
    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
};
