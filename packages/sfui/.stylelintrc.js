module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  plugins: [
    "stylelint-scss",
    "stylelint-no-unsupported-browser-features"
  ],
  rules: {
    'no-empty-source': null,
    'plugin/no-unsupported-browser-features': [true, {
      "ignore": ["@apply"],
    }],
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
