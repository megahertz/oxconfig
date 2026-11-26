import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export default {
  // A bare name is resolved from the oxlint binary or the project, where pnpm
  // doesn't expose this package's dependencies (e.g. in the IDE integration)
  jsPlugins: [require.resolve('eslint-plugin-perfectionist')],

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

    // https://perfectionist.dev/rules/sort-modules
    // Interfaces and type aliases go to the end of a module. Declarations
    // are not sorted otherwise; statements like `const x = …` split groups.
    'perfectionist/sort-modules': [
      'error',
      {
        groups: [
          'unknown',
          ['interface', 'export-interface', 'type', 'export-type'],
        ],
        type: 'unsorted',
      },
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
