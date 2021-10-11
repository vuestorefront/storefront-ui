import { create } from "@storybook/theming/create";
import logo from "../public/assets/storybook/logo.png";

export default create({
  base: "light",

  colorPrimary: "#5ECE7B",
  colorSecondary: "#5ECE7B",

  appBg: "white",
  appContentBg: "white",
  appBorderColor: "lightgray",
  appBorderRadius: 2,

  fontBase: '"Roboto", sans-serif',
  fontCode: "monospace",

  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  barTextColor: "silver",
  barSelectedColor: "black",
  barBg: "white",

  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "StorefrontUI",
  brandUrl: "https://github.com/vuestorefront/storefront-ui",
  brandImage:
    process.env.NODE_ENV === "production" ? logo : "/assets/storybook/logo.png",
});
