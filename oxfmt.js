import { defineConfig } from 'oxfmt';

export default defineConfig({
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'consistent',
  singleQuote: true,
  sortImports: {
    groups: [
      ['builtin', 'external', 'internal', 'subpath', 'unknown'],
      ['parent', 'sibling', 'index'],
    ],
    newlinesBetween: false,
  },
  sortPackageJson: false,

  ignorePatterns: [],
});
