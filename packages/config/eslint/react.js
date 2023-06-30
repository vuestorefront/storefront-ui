module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ["@vue-storefront/eslint-config/react", "prettier"],
  plugins: ["jsx-a11y"],
  settings: {
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
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    // https://lightrun.com/answers/jsx-eslint-eslint-plugin-jsx-a11y-control-has-associated-label-error-with-labelinput
    'jsx-a11y/control-has-associated-label': [
      'off',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'both',
        depth: 25,
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        components: [],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
    'react/button-has-type': ['error', { reset: true }],
    'import/prefer-default-export': 0,
    'react/display-name': "off"
  },
};
