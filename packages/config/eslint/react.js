module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'eslint-config-airbnb-typescript', 'prettier'],
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
    'import/no-extraneous-dependencies': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-bind': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    // https://lightrun.com/answers/jsx-eslint-eslint-plugin-jsx-a11y-control-has-associated-label-error-with-labelinput
    "jsx-a11y/control-has-associated-label": ["off", {
      "labelComponents": [],
      "labelAttributes": [],
      "controlComponents": [],
      "assert": "both",
      "depth": 25
    }],
    "jsx-a11y/label-has-associated-control": ["error", {
      "components": [],
      "required": {
        "some": ["nesting", "id"]
      },
      "allowChildren": false
    }],
    'prettier/prettier': 'error',
    'react/button-has-type': ['error', { reset: true }],
  },
};
