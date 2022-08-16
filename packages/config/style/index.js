module.exports = {
  root: true,
  extends: [
    'stylelint-config-recommended',
  ],
  rules: {
    'no-empty-source': null,
    'plugin/no-unsupported-browser-features': true,
    'no-descending-specificity': null,
    'number-leading-zero': 'never',
    'property-no-vendor-prefix': null,
    'value-keyword-case': [
      'lower',
      {
        camelCaseSvgKeywords: true,
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.(scss|css|html|vue)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  plugins: ['stylelint-no-unsupported-browser-features'],
};
