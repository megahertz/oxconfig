import getGlobals from '../utils/getGlobals.js';

export default {
  globals: getGlobals('node'),
  plugins: ['node', 'unicorn'],
  rules: {
    // https://oxc.rs/docs/guide/usage/linter/rules/node/global-require.html
    'node/global-require': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-exports-assign.html
    'node/no-exports-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-new-require.html
    'node/no-new-require': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-path-concat.html
    'node/no-path-concat': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-process-env.html
    'node/no-process-env': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-process-exit.html
    // Equivalent to n/no-process-exit — use unicorn plugin in oxlint
    'unicorn/no-process-exit': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-node-protocol.html
    // Equivalent to n/prefer-node-protocol — use unicorn plugin in oxlint
    'unicorn/prefer-node-protocol': 'error',
  },
};
