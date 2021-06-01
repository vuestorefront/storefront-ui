/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator, addParameters } from "@storybook/vue";
import { withA11y } from "@storybook/addon-a11y";

import theme from "./theme";

import "../../vue/src/css/_all.scss";

const req = require.context("../../vue/src/", true, /.stories.js$/);

addDecorator(withA11y);

addParameters({
  options: {
    brandTitle: "StorefrontUI",
    showPanel: true,
    isToolshown: true,
    theme,
    sortStoriesByKind: true,
  },
});

function loadStories() {
  require("./home/home.js");
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
