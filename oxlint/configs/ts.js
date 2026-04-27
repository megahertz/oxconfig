export default {
  plugins: ['typescript'],

  rules: {
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-ts-comment.html
    '@typescript-eslint/ban-ts-comment': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-array-constructor.html
    '@typescript-eslint/no-array-constructor': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-duplicate-enum-values.html
    '@typescript-eslint/no-duplicate-enum-values': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-explicit-any.html
    '@typescript-eslint/no-explicit-any': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-extra-non-null-assertion.html
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-misused-new.html
    '@typescript-eslint/no-misused-new': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-namespace.html
    '@typescript-eslint/no-namespace': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-asserted-optional-chain.html
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-require-imports.html
    '@typescript-eslint/no-require-imports': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-this-alias.html
    '@typescript-eslint/no-this-alias': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-constraint.html
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-declaration-merging.html
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-function-type.html
    '@typescript-eslint/no-unsafe-function-type': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unused-vars.html
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-wrapper-object-types.html
    '@typescript-eslint/no-wrapper-object-types': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-as-const.html
    '@typescript-eslint/prefer-as-const': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-namespace-keyword.html
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/triple-slash-reference.html
    '@typescript-eslint/triple-slash-reference': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/constructor-super.html
    'constructor-super': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-class-assign.html
    'no-class-assign': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-const-assign.html
    'no-const-assign': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-class-members.html
    'no-dupe-class-members': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-keys.html
    'no-dupe-keys': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-func-assign.html
    'no-func-assign': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-import-assign.html
    'no-import-assign': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-native-nonconstructor.html
    'no-new-native-nonconstructor': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-obj-calls.html
    'no-obj-calls': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-redeclare.html
    'no-redeclare': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-setter-return.html
    'no-setter-return': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-this-before-super.html
    'no-this-before-super': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-negation.html
    'no-unsafe-negation': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-vars.html
    'no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-var.html
    'no-var': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-with.html
    'no-with': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-rest-params.html
    'prefer-rest-params': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-spread.html
    'prefer-spread': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-const.html
    'prefer-const': [
      'error',
      { destructuring: 'any', ignoreReadBeforeAssign: true },
    ],
  },
};
