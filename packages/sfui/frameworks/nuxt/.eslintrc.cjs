module.exports = {
  extends: ['plugin:nuxt/recommended', '@storefront-ui/eslint-config/vue.js'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
