/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator, addParameters } from "@storybook/vue";
import { withA11y } from "@storybook/addon-a11y";
import { setDefaults, withInfo } from "storybook-addon-vue-info";

import theme from "./theme";

import "../../src/css/all.scss";

const req = require.context("../../src/", true, /.stories.js$/);

addDecorator(withInfo);
addDecorator(withA11y);

addParameters({
  options: {
    brandTitle: "StorefrontUI",
    showPanel: true,
    isToolshown: true,
    theme,
    sortStoriesByKind: true
  }
});
setDefaults({
  summary: `- Check **Knobs** tab on Props story to play with compomnent props and CSS modifiers story to play with CSS modifiers.
  - Check **Notes** tab for documentation`
});

function loadStories() {
  require("./home/home.js");
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
