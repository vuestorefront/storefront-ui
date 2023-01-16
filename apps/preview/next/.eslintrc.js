module.exports = {
  extends: ['next/core-web-vitals', '@storefront-ui/eslint-config/react.js'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
