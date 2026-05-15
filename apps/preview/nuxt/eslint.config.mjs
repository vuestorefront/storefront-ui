import sfuiConfig from '@storefront-ui/eslint-config/vue.js';

export default [
  {
    ignores: ['node_modules/**', '.nuxt/**', 'output/**', '.output/**', 'components/utils/**'],
  },
  ...await sfuiConfig,
  {
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
      'vue/multi-word-component-names': 'off',
      'vuejs-accessibility/label-has-for': 'off',
    },
  },
];
