import { configs, defineConfig } from './oxlint/index.js';

export default defineConfig({
  ignorePatterns: ['**/node_modules'],

  overrides: [
    configs.base,
    configs.strict,
    configs.perfectionist,
    configs.ts,
    configs.tsStrict,
    configs.node,
    configs.unicorn,
  ],
});
