// import { configure, addDecorator, addParameters } from "@storybook/vue";
// import { withA11y } from "@storybook/addon-a11y";
//
// import theme from "./theme";
//
// import "../../src/css/_all.scss";
//
// const req = require.context("../../src/", true, /.stories.js$/);
//
// addDecorator(withA11y);
//
// addParameters({
//   options: {
//     brandTitle: "StorefrontUI",
//     showPanel: true,
//     isToolshown: true,
//     theme,
//     sortStoriesByKind: true,
//   },
// });
//
// function loadStories() {
//   require("./home/home.js");
//   req.keys().forEach((filename) => {console.log(filename); return req(filename)});
// }
//
// configure(loadStories, module);
