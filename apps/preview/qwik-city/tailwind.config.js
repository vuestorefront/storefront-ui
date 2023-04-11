const sfTypography = require('@storefront-ui/typography');
const { tailwindConfig } = require('@storefront-ui/vue/tailwind-config');

module.exports = {
  presets: [tailwindConfig],
  content: ['./**/*.tsx', '../../../packages/sfui/frameworks/vue/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Red Hat Text, sans-serif',
      },
    },
  },
  plugins: [sfTypography],
};
