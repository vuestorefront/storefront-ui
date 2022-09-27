module.exports = {
  extends: ['next/core-web-vitals', '@sfui/eslint-config'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
