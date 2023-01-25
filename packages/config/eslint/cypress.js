module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'plugin:cypress/recommended'],
  plugins: ['prettier', 'cypress', 'import'],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  ignorePatterns: ['/*.*'],
  rules: {
    'import/order': ['warn', { groups: [['builtin', 'external', 'internal']] }],
    'import/no-extraneous-dependencies': 0,
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "cypress/no-async-tests": "error",
    "cypress/no-pause": "error",
    "@typescript-eslint/triple-slash-reference": "off",
    'prettier/prettier': 'error',
  },
  env: {
    "cypress/globals": true
  }
};
