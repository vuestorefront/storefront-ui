import sfuiConfig from '@storefront-ui/eslint-config/react.js';

export default [
  {
    ignores: ['node_modules/**', '.next/**', 'output/**', 'components/utils/**'],
  },
  ...await sfuiConfig,
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/no-img-element': 'off',
      'no-restricted-properties': 'off',
    },
  },
  {
    files: ['postcss.config.js'],
    rules: {
      'unicorn/prefer-module': 'off',
    }
  },
  {
    files: ['next-env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
];
