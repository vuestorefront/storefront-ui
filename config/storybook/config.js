/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator, addParameters } from "@storybook/vue";
import { setDefaults, withInfo } from "storybook-addon-vue-info";
import theme from "./theme";

import "../../src/css/all.scss";

const req = require.context("../../src/", true, /.stories.js$/);

addDecorator(withInfo);

addParameters({
  options: {
    brandTitle: "StorefrontUI",
    showPanel: true,
    theme,
    sortStoriesByKind: true
  }
});
setDefaults({
  summary: `- Check **Knobs** tab on Props story to play with compomnent props and CSS modifiers story to play with CSS modifiers.
  - Check **Notes** tab for documentation`
});

function loadStories() {
  require("../../docs/docs.stories.js");
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
