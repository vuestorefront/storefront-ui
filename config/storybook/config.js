/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator, addParameters } from "@storybook/vue";
import { setDefaults, withInfo } from "storybook-addon-vue-info";

import "../../src/css/all.scss";

const req = require.context("../../src/", true, /.stories.js$/);

addDecorator(withInfo);

addParameters({
  options: {
    brandTitle: "StorefrontUI"
  }
});

setDefaults({
  summary: "Check **Knobs** tab on Props story to play with compomnent props"
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
