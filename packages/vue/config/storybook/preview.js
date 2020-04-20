import { configure } from "@storybook/vue";

// add storefront-ui root stylesheet
import "@storefront-ui/vue/styles.scss";
const loaderFn = () => {
  // add storefront-ui introduction page
  const home = require("./home/home.stories.js");
  const allExports = [home];

  // get all storefront-ui stories from package
  const req = require.context("../../src/components", true, /\.stories\.js$/);
  req.keys().forEach((fname) => allExports.push(req(fname)));
  return allExports;
};

configure(loaderFn, module);
