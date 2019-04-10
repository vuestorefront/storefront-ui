/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator, addParameters } from "@storybook/vue";
import { withInfo } from "storybook-addon-vue-info";

import "../../src/css/all.scss";

const req = require.context("../../src/", true, /.stories.js$/);

addDecorator(withInfo);

addParameters({
  options: {
    brandTitle: "StorefrontUI"
  }
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
