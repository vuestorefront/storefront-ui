import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "#5ECE7B",
  colorSecondary: "#5ECE7B",

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "lightgray",
  appBorderRadius: 2,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "black",
  barBg: "white",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "StorefrontUI",
  brandUrl: "https://github.com/Divanteltd/storefront-ui",
  brandImage: "assets/storybook/logo.png"
});
