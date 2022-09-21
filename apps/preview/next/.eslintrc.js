module.exports = {
  extends: ['next/core-web-vitals', '@vsf-react/eslint-config'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
