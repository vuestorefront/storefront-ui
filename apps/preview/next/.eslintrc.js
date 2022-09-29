module.exports = {
  extends: ['next/core-web-vitals', '@sfui/eslint-config/react.js'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
