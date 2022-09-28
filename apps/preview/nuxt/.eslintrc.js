module.exports = {
  extends: ['@sfui/eslint-config', 'plugin:vue/vue3-recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 0,
  },
};
