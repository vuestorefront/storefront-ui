module.exports = {
  extends: ['plugin:nuxt/recommended', '@storefront-ui/eslint-config/vue.js'],
  rules: {
    '@typescript-eslint/triple-slash-reference': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
