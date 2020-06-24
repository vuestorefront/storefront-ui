import { configure, addDecorator, addParameters } from "@storybook/vue";
import { withA11y } from "@storybook/addon-a11y";

// add storefront-ui root stylesheet to storybook
import "@storefront-ui/vue/styles.scss";
// get storefront-ui stories
function loadStories() {
  // get storefront-ui introduction page
  const stories = [require("./home/home.stories.js")];

  //get all storefront-ui stories
  const req = require.context("../../src/", true, /.stories.(js|mdx)$/);
  req.keys().forEach((fname) => stories.push(req(fname)));

  return stories;
}

// Storybook customization
import theme from "./theme.js";
addParameters({
  options: {
    brandTitle: "StorefrontUI",
    showPanel: true,
    isToolshown: true,
    theme,
    sortStoriesByKind: true,
  },
});
// add a11y addon for all stories
addDecorator(withA11y);
// use Storefront UI stories
configure(loadStories, module);
