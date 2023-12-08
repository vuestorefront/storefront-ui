module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'plugin:cypress/recommended'],
  plugins: ['cypress', 'import', "@typescript-eslint"],
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
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  env: {
    "cypress/globals": true
  }
};
