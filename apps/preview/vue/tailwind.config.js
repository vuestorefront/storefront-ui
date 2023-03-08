/** @type {import('tailwindcss').Config} */

const { tailwindConfig } = require("@storefront-ui/tailwind-config");
module.exports = {
  presets: [tailwindConfig],
  content: [
    "../../../node_modules/@storefront-ui/vue/shared/**/*.ts",
    "../../../node_modules/@storefront-ui/vue/components/**/*.{ts,vue}",
  ],
};
