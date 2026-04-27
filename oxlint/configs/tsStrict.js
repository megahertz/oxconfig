export default {
  plugins: ['typescript'],

  rules: {
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-dynamic-delete.html
    '@typescript-eslint/no-dynamic-delete': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-explicit-any.html
    // Upgrade from ts: error in strict context
    '@typescript-eslint/no-explicit-any': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-extraneous-class.html
    '@typescript-eslint/no-extraneous-class': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-invalid-void-type.html
    '@typescript-eslint/no-invalid-void-type': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-asserted-nullish-coalescing.html
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-assertion.html
    '@typescript-eslint/no-non-null-assertion': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-useless-constructor.html
    // TS-specific version (replaces base no-useless-constructor in ts context)
    '@typescript-eslint/no-useless-constructor': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-literal-enum-member.html
    '@typescript-eslint/prefer-literal-enum-member': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/unified-signatures.html
    '@typescript-eslint/unified-signatures': 'error',
  },
};
