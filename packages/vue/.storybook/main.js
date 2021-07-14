const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const rootPath = path.resolve(__dirname, "../../");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/preset-scss",
    "@storybook/addon-storysource",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      resourceQuery: /blockType=include-source/,
      loader: path.resolve(__dirname, "util/source-loader.js"),
    });

    // eslint-disable-next-line no-param-reassign
    config.resolve.alias["~~"] = rootPath;
    config.resolve.alias["~storybook-util"] = path.resolve(__dirname, "util");

    return config;
  },
};
