const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  devServer: {
    port: 3002
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@alpaca-storybook": "alpaca-components"
      }
    },
    plugins: [
      new CopyPlugin([
        {
          from: "src/components",
          to: "components",
          ignore: ["**/*.stories.js", "**/*.spec.ts", "**/*.md"],
          transformPath(targePath) {
            return targePath.split("/").slice(-1)[0];
          },
          transform(content) {
            return content
              .toString()
              .replace(
                "@import '../../../css/variables';",
                "@import './css/variables';"
              );
          }
        },
        {
          from: "src/css",
          to: "css",
          transform(content) {
            return content
              .toString()
              .replace("../../sfui.scss", "../../../../../sfui.scss");
          }
        }
      ])
    ]
  }
};
