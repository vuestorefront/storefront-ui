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
            const patternForComponents = new RegExp(
              "@/components/(.*?)/(.*?)/"
            );
            const patternForInternalComponents = new RegExp(
              "@/components/(.*?)/(.*?)/_internal/"
            );
            return content
              .toString()
              .replace(
                "@import '../../../css/variables';",
                "@import './css/variables';"
              )
              .replace("@/utilities", "./utilities")
              .replace(patternForInternalComponents, "./")
              .replace(patternForComponents, "./");
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
        },
        {
          from: "src/utilities",
          to: "utilities",
          ignore: ["**/*.stories.js"]
        },
        {
          from: "public/assets",
          to: "assets",
          transform(content) {
            //TODO: filter images to ones that are really used, it's a huge folder... you don't wanna do this.
            return content.toString().replace("/assets", "./assets");
          }
        }
      ])
    ]
  }
};
