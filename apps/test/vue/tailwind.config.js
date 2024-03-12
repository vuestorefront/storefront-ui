const sfTypography = require("@storefront-ui/typography");
/** @type {import('tailwindcss').Config} */
const { tailwindConfig } = require("@storefront-ui/tailwind-config");
const tailwindTypography = require('@tailwindcss/typography');
const { join } = require("path");

module.exports = {
  presets: [tailwindConfig],
  content: [
    "./**/*.vue",
    "./**/*.ts",
    "./**/*.tsx",
    "../../../node_modules/@storefront-ui/vue/shared/**/*.ts",
    join(
      __dirname,
      "..",
      "..",
      "..",
      "packages",
      "sfui",
      "frameworks",
      "vue",
      "components",
      "**",
      "*.{ts,vue}"
    ),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [sfTypography, tailwindTypography ],
};
