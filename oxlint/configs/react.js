export default {
  plugins: ['react'],

  rules: {
    // https://oxc.rs/docs/guide/usage/linter/rules/react/exhaustive-deps.html
    'react-hooks/exhaustive-deps': 'warn',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/rules-of-hooks.html
    'react-hooks/rules-of-hooks': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/button-has-type.html
    'react/button-has-type': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/forward-ref-uses-ref.html
    'react/forward-ref-uses-ref': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-boolean-value.html
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-curly-brace-presence.html
    'react/jsx-curly-brace-presence': [
      'error',
      { children: 'never', props: 'never' },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-filename-extension.html
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-fragments.html
    'react/jsx-fragments': ['error', 'syntax'],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-comment-textnodes.html
    'react/jsx-no-comment-textnodes': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-constructed-context-values.html
    'react/jsx-no-constructed-context-values': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-duplicate-props.html
    'react/jsx-no-duplicate-props': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-script-url.html
    'react/jsx-no-script-url': [
      'error',
      [
        { name: 'Link', props: ['to', 'href'] },
        { name: 'NavLink', props: ['to'] },
        { name: 'NextLink', props: ['to', 'href'] },
      ],
      { includeFromSettings: true },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-target-blank.html
    'react/jsx-no-target-blank': [
      'error',
      {
        allowReferrer: false,
        enforceDynamicLinks: 'always',
        forms: false,
        links: true,
        warnOnSpreadAttributes: false,
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-undef.html
    'react/jsx-no-undef': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-useless-fragment.html
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-pascal-case.html
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        allowLeadingUnderscore: false,
        allowNamespace: true,
        ignore: [],
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-props-no-spread-multi.html
    'react/jsx-props-no-spread-multi': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-array-index-key.html
    'react/no-array-index-key': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-children-prop.html
    'react/no-children-prop': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-danger.html
    'react/no-danger': 'warn',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-danger-with-children.html
    'react/no-danger-with-children': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-direct-mutation-state.html
    'react/no-direct-mutation-state': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-find-dom-node.html
    'react/no-find-dom-node': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-is-mounted.html
    'react/no-is-mounted': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-namespace.html
    'react/no-namespace': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-redundant-should-component-update.html
    'react/no-redundant-should-component-update': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-render-return-value.html
    'react/no-render-return-value': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-string-refs.html
    'react/no-string-refs': ['error', { noTemplateLiterals: true }],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-this-in-sfc.html
    'react/no-this-in-sfc': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-unescaped-entities.html
    'react/no-unescaped-entities': 'warn',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-unknown-property.html
    'react/no-unknown-property': [
      'error',
      { ignore: [], requireDataLowercase: false },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-will-update-set-state.html
    'react/no-will-update-set-state': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/prefer-es6-class.html
    'react/prefer-es6-class': ['error', 'always'],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/self-closing-comp.html
    'react/self-closing-comp': ['error', { component: true, html: true }],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/state-in-constructor.html
    'react/state-in-constructor': ['error', 'always'],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/style-prop-object.html
    'react/style-prop-object': ['error', { allow: [] }],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/require-render-return.html
    'react/require-render-return': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/void-dom-elements-no-children.html
    'react/void-dom-elements-no-children': 'error',
  },
};
