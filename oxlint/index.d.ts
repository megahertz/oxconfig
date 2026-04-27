import type { OxlintConfig, OxlintOverride } from 'oxlint';

export type {
  AllowWarnDeny,
  DummyRule,
  DummyRuleMap,
  ExternalPluginEntry,
  ExternalPluginsConfig,
  OxlintConfig,
  OxlintEnv,
  OxlintGlobals,
  OxlintOverride,
  RuleCategories,
} from 'oxlint';

export type OxconfigOverride = {
  files?: OxlintOverride['files'];
} & Omit<OxlintOverride, 'files'>;

export interface OxconfigConfig extends Omit<
  OxlintConfig,
  'extends' | 'overrides'
> {
  extends?: OxconfigConfig[];
  overrides?: OxconfigOverride[];
}

export type OxconfigName =
  | 'base'
  | 'browser'
  | 'esm'
  | 'node'
  | 'nodeCommonJs'
  | 'perfectionist'
  | 'react'
  | 'reactStrict'
  | 'strict'
  | 'ts'
  | 'tsStrict'
  | 'unicorn'
  | 'vitest';

export function defineConfig<T extends OxconfigConfig>(cfg: T): T;

export const configs: Record<OxconfigName, OxconfigOverride>;
