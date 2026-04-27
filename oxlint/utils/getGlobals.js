import globals from 'globals';

export default function getGlobals(globalScope, value = 'readonly') {
  return mapValues(globals[globalScope], value);
}

function mapValues(object, value) {
  return Object.fromEntries(Object.keys(object).map((key) => [key, value]));
}
