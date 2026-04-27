# @megahertz/oxconfig

Shared development configuration: oxlint presets, oxfmt config, and a base
`tsconfig`.

## Oxlint

[Oxlint](https://oxc.rs/docs/guide/usage/linter) is the linter used across the
repo. Shared presets live in `oxlint/` and are consumed from each package's
`oxlint.config.js`.

A typical project config looks like this:

```js
import { configs, defineConfig } from 'dev-config/oxlint';

export default defineConfig({
  overrides: [
    configs.base,
    configs.ts,
    configs.react,
    configs.node,

    {
      rules: {
        'no-console': 'off',
      },
    },
  ],
});
```

Configs are passed as items in `overrides`. Each item applies to all JS/TS file
extensions by default. You can also spread a config inline to narrow it to
specific files:

```js
{ files: ['**/*.mjs'], ...configs.node }
```

Available configs:

| Config        | Strict variant | Description                                    |
| ------------- | -------------- | ---------------------------------------------- |
| base          | strict         | Airbnb-based JS rules; lenient defaults        |
| ts            | tsStrict       | TypeScript rules via `@typescript-eslint`      |
| react         | reactStrict    | React + React Hooks rules                      |
| node          | -              | Node.js best practices + globals               |
| nodeCommonJs  | -              | CommonJS `.js`/`.cjs` files (configs, scripts) |
| browser       | -              | Browser globals                                |
| esm           | -              | ESM-specific rules                             |
| unicorn       | -              | Rules from `eslint-plugin-unicorn`             |
| perfectionist | -              | Sorts imports, objects, and types              |
| vitest        | -              | Vitest globals and test-file rules             |

Strict variants tighten rules from their base — for example `tsStrict` turns
`@typescript-eslint/no-explicit-any` into an error and bans non-null assertions.
Include the base config alongside its strict variant, as strict does not inherit
from base automatically.

## Oxfmt

[Oxfmt](https://oxc.rs/docs/guide/usage/formatter) is the formatter. The shared
config is re-exported from this package — a package's `oxfmt.config.js` is
usually a one-liner:

```js
export { default } from 'dev-config/oxfmt';
```

## tsconfig

A shared TypeScript base config is available. Extend it from your package's
`tsconfig.json`:

```json
{
  "extends": "dev-config/tsconfig",
  "include": ["src/**/*.ts"]
}
```
