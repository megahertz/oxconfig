export default {
  jsPlugins: ['eslint-plugin-perfectionist'],

  rules: {
    // https://perfectionist.dev/rules/sort-array-includes
    'perfectionist/sort-array-includes': [
      'error',
      { order: 'asc', type: 'alphabetical' },
    ],

    // https://perfectionist.dev/rules/sort-enums
    'perfectionist/sort-enums': [
      'error',
      { order: 'asc', type: 'alphabetical' },
    ],

    // https://perfectionist.dev/rules/sort-exports
    'perfectionist/sort-exports': [
      'error',
      { order: 'asc', type: 'alphabetical' },
    ],

    // https://perfectionist.dev/rules/sort-imports
    // oxfmt is used instead
    'perfectionist/sort-imports': 'off',

    // https://perfectionist.dev/rules/sort-interfaces
    'perfectionist/sort-interfaces': [
      'error',
      { order: 'asc', type: 'alphabetical' },
    ],

    // https://perfectionist.dev/rules/sort-intersection-types
    'perfectionist/sort-intersection-types': [
      'error',
      { order: 'asc', type: 'alphabetical' },
    ],

    // https://perfectionist.dev/rules/sort-jsx-props
    'perfectionist/sort-jsx-props': [
      'error',
      { order: 'asc', type: 'alphabetical' },
    ],

    // https://perfectionist.dev/rules/sort-named-exports
    'perfectionist/sort-named-exports': [
      'error',
      { order: 'asc', type: 'alphabetical' },
    ],

    // https://perfectionist.dev/rules/sort-named-imports
    'perfectionist/sort-named-imports': [
      'error',
      { order: 'asc', type: 'alphabetical' },
    ],

    // https://perfectionist.dev/rules/sort-object-types
    'perfectionist/sort-object-types': [
      'error',
      { order: 'asc', type: 'alphabetical' },
    ],

    // so it is disabled entirely.
    'perfectionist/sort-objects': 'off',

    // https://perfectionist.dev/rules/sort-switch-case
    'perfectionist/sort-switch-case': [
      'error',
      { order: 'asc', type: 'alphabetical' },
    ],

    // https://perfectionist.dev/rules/sort-union-types
    'perfectionist/sort-union-types': [
      'error',
      { order: 'asc', type: 'alphabetical' },
    ],
  },
};
