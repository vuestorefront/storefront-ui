module.exports = {
  root: true,
  extends: ["stylelint-config-standard-scss", "stylelint-config-prettier-scss"],
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme'],
      },
    ],
    'no-empty-source': null,
    "selector-class-pattern": "^([a-z][a-z0-9]*)((-|__|--)[a-z0-9]+)*$",
    "no-descending-specificity": null,
    "number-leading-zero": "always",
    "property-no-vendor-prefix": null,
    "value-keyword-case": [
      "lower",
      {
        "camelCaseSvgKeywords": true
      }
    ],
    "import-notation": "string"
  },
  overrides: [
    {
      files: ['**/*.(scss|css|html|vue)'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ],
};
