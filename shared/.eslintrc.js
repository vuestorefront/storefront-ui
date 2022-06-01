module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'comma-dangle': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-trailing-spaces': ['error'],
    'semi': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'space-before-function-paren': ['error', 'never']
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  }
};
