/* eslint-disable import/no-extraneous-dependencies */
import { configure } from "@storybook/vue";
import { withInfo } from "storybook-addon-vue-info";
import { addDecorator, addParameters } from "@storybook/vue";

import styles from "../../src/css/all.scss";

const req = require.context("../../src/", true, /.stories.js$/);

addParameters({
  options: {
    brandTitle: "StorefrontUI"
  }
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
addDecorator(withInfo);
