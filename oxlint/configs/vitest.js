import getGlobals from '../utils/getGlobals.js';

export default {
  files: ['**/*.{test,spec}.{cjs,cts,js,jsx,mjs,mts,ts,tsx}'],
  globals: getGlobals('vitest'),
};
