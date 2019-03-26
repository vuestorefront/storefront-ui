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
          transformPath(targePath) {
            return targePath.split("/").slice(-1)[0];
          },
          transform(content, path) {
            return content
              .toString()
              .replace(
                "@import '../../../css/variables';",
                "@import './css/variables';"
              );
          }
        },
        { from: "src/css", to: "css" }
      ])
    ]
  }
};
