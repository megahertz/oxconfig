export default {
  plugins: ['react'],

  rules: {
    // https://oxc.rs/docs/guide/usage/linter/rules/react/exhaustive-deps.html
    // Upgrade from react: error in strict context
    'react-hooks/exhaustive-deps': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/checked-requires-onchange-or-readonly.html
    'react/checked-requires-onchange-or-readonly': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-key.html
    'react/jsx-key': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-unescaped-entities.html
    // Upgrade from react warn to strict error
    'react/no-unescaped-entities': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-unsafe.html
    'react/no-unsafe': 'error',
  },
};
