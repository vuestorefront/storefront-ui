import sfuiConfig from '@storefront-ui/eslint-config/vue.js';

export default [
  {
    ignores: ['node_modules/**', 'output/**', '.output/**', 'playground/**', 'dist/**'],
  },
  ...await sfuiConfig,
];
