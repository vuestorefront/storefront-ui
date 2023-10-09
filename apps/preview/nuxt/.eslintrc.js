module.exports = {
  extends: ['plugin:nuxt/recommended', '@storefront-ui/eslint-config/vue.js'],
  rules: {
    '@typescript-eslint/triple-slash-reference': 'off',
    'vue/multi-word-component-names': 'off',
    // option controlComponents and defining component names does not work
    'vuejs-accessibility/label-has-for': 'off',
  },
};
