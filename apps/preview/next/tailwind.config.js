const sfTypography = require('@storefront-ui/typography');
/** @type {import('tailwindcss').Config} */
const { tailwindConfig } = require('@storefront-ui/tailwind-config');
const tailwindTypography = require('@tailwindcss/typography');

module.exports = {
  presets: [tailwindConfig],
  content: ['./**/*.ts', './**/*.tsx', '../../../node_modules/@storefront-ui/react/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [sfTypography, tailwindTypography],
};
