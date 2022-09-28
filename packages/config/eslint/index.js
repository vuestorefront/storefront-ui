module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'eslint-config-airbnb-typescript',
    'eslint-plugin-vue',
    '@builder.io/eslint-plugin-mitosis',
  ],
  plugins: ['prettier'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['/*.*'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  /*rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'comma-dangle': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-trailing-spaces': ['error'],
    'semi': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'indent': [2, 2],
    'no-unneeded-ternary': ['error', { 'defaultAssignment': false }]
  },*/
};
