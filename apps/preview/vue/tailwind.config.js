const vsfTypography = require("@storefront-ui/typography");
/** @type {import('tailwindcss').Config} */
const { tailwindConfig } = require("@storefront-ui/tailwind-config");
module.exports = {
  presets: [tailwindConfig],
  content: [
    "./**/*.vue",
    "./**/*.ts",
    "./**/*.tsx",
    "../../../node_modules/@storefront-ui/vue/shared/**/*.ts",
    "../../../node_modules/@storefront-ui/vue/components/**/*.{ts,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Red Hat Text, sans-serif",
      },
    },
  },
  plugins: [vsfTypography],
};
