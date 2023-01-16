module.exports = {
  parser: 'vue-eslint-parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['prettier', 'import'],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  ignorePatterns: ['/*.*'],
  rules: {
    'import/order': ['warn', { groups: [['builtin', 'external', 'internal']] }],
    'vue/no-v-html': 0,
    'import/no-extraneous-dependencies': 0,
    'vue/multi-word-component-names': 0,
    'prettier/prettier': 'error',
  },
};
