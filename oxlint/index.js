import { defineConfig as defineConfigBase } from 'oxlint';
import base from './configs/base.js';
import browser from './configs/browser.js';
import esm from './configs/esm.js';
import node from './configs/node.js';
import nodeCommonJs from './configs/nodeCommonJs.js';
import perfectionist from './configs/perfectionist.js';
import react from './configs/react.js';
import reactStrict from './configs/reactStrict.js';
import strict from './configs/strict.js';
import ts from './configs/ts.js';
import tsStrict from './configs/tsStrict.js';
import unicorn from './configs/unicorn.js';
import vitest from './configs/vitest.js';

export function defineConfig(cfg) {
  let overrides = cfg.overrides || [];
  if (Array.isArray(overrides)) {
    overrides = overrides.map((override) => ({
      files: ['**/*'],
      ...override,
    }));
  }
  return defineConfigBase({ ...cfg, overrides });
}

export const configs = {
  base,
  browser,
  esm,
  node,
  nodeCommonJs,
  perfectionist,
  react,
  reactStrict,
  strict,
  ts,
  tsStrict,
  vitest,
  unicorn,
};
