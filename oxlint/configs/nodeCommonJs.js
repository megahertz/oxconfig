import getGlobals from '../utils/getGlobals.js';

export default {
  env: { commonjs: true, es2022: true },
  files: ['**/*.js', '**/*.cjs'],
  globals: getGlobals('node'),
  rules: {
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-require-imports.html
    '@typescript-eslint/no-require-imports': 'off',
  },
};
