export default {
  plugins: ['unicorn'],

  rules: {
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-assert.html
    'unicorn/consistent-assert': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-date-clone.html
    'unicorn/consistent-date-clone': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-empty-array-spread.html
    'unicorn/consistent-empty-array-spread': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-existence-index-check.html
    'unicorn/consistent-existence-index-check': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/empty-brace-spaces.html
    'unicorn/empty-brace-spaces': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/error-message.html
    'unicorn/error-message': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/escape-case.html
    'unicorn/escape-case': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/explicit-length-check.html
    'unicorn/explicit-length-check': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/new-for-builtins.html
    'unicorn/new-for-builtins': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-abusive-eslint-disable.html
    'unicorn/no-abusive-eslint-disable': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-accessor-recursion.html
    'unicorn/no-accessor-recursion': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-anonymous-default-export.html
    'unicorn/no-anonymous-default-export': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-callback-reference.html
    'unicorn/no-array-callback-reference': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-for-each.html
    'unicorn/no-array-for-each': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-method-this-argument.html
    'unicorn/no-array-method-this-argument': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-reduce.html
    'unicorn/no-array-reduce': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-reverse.html
    'unicorn/no-array-reverse': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-sort.html
    'unicorn/no-array-sort': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-await-expression-member.html
    'unicorn/no-await-expression-member': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-await-in-promise-methods.html
    'unicorn/no-await-in-promise-methods': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-console-spaces.html
    'unicorn/no-console-spaces': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-document-cookie.html
    'unicorn/no-document-cookie': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-empty-file.html
    'unicorn/no-empty-file': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-hex-escape.html
    'unicorn/no-hex-escape': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-instanceof-builtins.html
    'unicorn/no-instanceof-builtins': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-invalid-fetch-options.html
    'unicorn/no-invalid-fetch-options': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-invalid-remove-event-listener.html
    'unicorn/no-invalid-remove-event-listener': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-lonely-if.html
    'unicorn/no-lonely-if': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-magic-array-flat-depth.html
    'unicorn/no-magic-array-flat-depth': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md
    'unicorn/no-negated-condition': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-negation-in-equality-check.html
    'unicorn/no-negation-in-equality-check': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-nested-ternary.html
    'unicorn/no-nested-ternary': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-new-array.html
    'unicorn/no-new-array': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-new-buffer.html
    'unicorn/no-new-buffer': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-null.html
    'unicorn/no-null': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-object-as-default-parameter.html
    'unicorn/no-object-as-default-parameter': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-single-promise-in-promise-methods.html
    'unicorn/no-single-promise-in-promise-methods': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-static-only-class.html
    'unicorn/no-static-only-class': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-thenable.html
    'unicorn/no-thenable': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-this-assignment.html
    'unicorn/no-this-assignment': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-typeof-undefined.html
    'unicorn/no-typeof-undefined': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-array-flat-depth.html
    'unicorn/no-unnecessary-array-flat-depth': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-array-splice-count.html
    'unicorn/no-unnecessary-array-splice-count': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-await.html
    'unicorn/no-unnecessary-await': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-slice-end.html
    'unicorn/no-unnecessary-slice-end': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unreadable-array-destructuring.html
    'unicorn/no-unreadable-array-destructuring': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unreadable-iife.html
    'unicorn/no-unreadable-iife': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-error-capture-stack-trace.html
    'unicorn/no-useless-error-capture-stack-trace': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-fallback-in-spread.html
    'unicorn/no-useless-fallback-in-spread': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-length-check.html
    'unicorn/no-useless-length-check': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-promise-resolve-reject.html
    'unicorn/no-useless-promise-resolve-reject': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-spread.html
    'unicorn/no-useless-spread': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-switch-case.html
    'unicorn/no-useless-switch-case': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-zero-fractions.html
    'unicorn/no-zero-fractions': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/number-literal-case.html
    'unicorn/number-literal-case': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/numeric-separators-style.html
    'unicorn/numeric-separators-style': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-add-event-listener.html
    'unicorn/prefer-add-event-listener': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-find.html
    'unicorn/prefer-array-find': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-flat.html
    'unicorn/prefer-array-flat': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-flat-map.html
    'unicorn/prefer-array-flat-map': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-index-of.html
    'unicorn/prefer-array-index-of': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-some.html
    'unicorn/prefer-array-some': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-at.html
    'unicorn/prefer-at': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-bigint-literals.html
    'unicorn/prefer-bigint-literals': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-blob-reading-methods.html
    'unicorn/prefer-blob-reading-methods': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-class-fields.html
    'unicorn/prefer-class-fields': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-classlist-toggle.html
    'unicorn/prefer-classlist-toggle': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-code-point.html
    'unicorn/prefer-code-point': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-date-now.html
    'unicorn/prefer-date-now': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-default-parameters.html
    'unicorn/prefer-default-parameters': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-append.html
    'unicorn/prefer-dom-node-append': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-dataset.html
    'unicorn/prefer-dom-node-dataset': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-remove.html
    'unicorn/prefer-dom-node-remove': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-text-content.html
    'unicorn/prefer-dom-node-text-content': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-event-target.html
    'unicorn/prefer-event-target': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-includes.html
    'unicorn/prefer-includes': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-keyboard-event-key.html
    'unicorn/prefer-keyboard-event-key': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-logical-operator-over-ternary.html
    'unicorn/prefer-logical-operator-over-ternary': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-math-min-max.html
    'unicorn/prefer-math-min-max': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-math-trunc.html
    'unicorn/prefer-math-trunc': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-modern-dom-apis.html
    'unicorn/prefer-modern-dom-apis': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-modern-math-apis.html
    'unicorn/prefer-modern-math-apis': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-native-coercion-functions.html
    'unicorn/prefer-native-coercion-functions': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-negative-index.html
    'unicorn/prefer-negative-index': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-number-properties.html
    'unicorn/prefer-number-properties': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-object-from-entries.html
    'unicorn/prefer-object-from-entries': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-optional-catch-binding.html
    'unicorn/prefer-optional-catch-binding': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-prototype-methods.html
    'unicorn/prefer-prototype-methods': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-reflect-apply.html
    'unicorn/prefer-reflect-apply': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-regexp-test.html
    'unicorn/prefer-regexp-test': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-set-has.html
    'unicorn/prefer-set-has': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-set-size.html
    'unicorn/prefer-set-size': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-spread.html
    'unicorn/prefer-spread': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-raw.html
    'unicorn/prefer-string-raw': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-replace-all.html
    'unicorn/prefer-string-replace-all': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-slice.html
    'unicorn/prefer-string-slice': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-starts-ends-with.html
    'unicorn/prefer-string-starts-ends-with': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.html
    'unicorn/prefer-string-trim-start-end': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-structured-clone.html
    'unicorn/prefer-structured-clone': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-ternary.html
    // Often, simple if/else is better, especially when no value is returned
    'unicorn/prefer-ternary': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-type-error.html
    'unicorn/prefer-type-error': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/relative-url-style.html
    'unicorn/relative-url-style': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-array-join-separator.html
    'unicorn/require-array-join-separator': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-module-attributes.html
    'unicorn/require-module-attributes': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-module-specifiers.html
    'unicorn/require-module-specifiers': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-number-to-fixed-digits-argument.html
    'unicorn/require-number-to-fixed-digits-argument': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/text-encoding-identifier-case.html
    'unicorn/text-encoding-identifier-case': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/throw-new-error.html
    'unicorn/throw-new-error': 'error',
  },
};
