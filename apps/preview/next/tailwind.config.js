const sfTypography = require('@storefront-ui/typography');
/** @type {import('tailwindcss').Config} */
const { tailwindConfig } = require('@storefront-ui/tailwind-config');

module.exports = {
  presets: [tailwindConfig],
  content: ['./**/*.ts', './**/*.tsx', '../../../node_modules/@storefront-ui/react/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Red Hat Text, sans-serif',
      },
    },
  },
  plugins: [sfTypography],
};
