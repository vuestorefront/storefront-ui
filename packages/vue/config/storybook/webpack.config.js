const path = require("path");

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.stories\.js?$/,
    loaders: [require.resolve("@storybook/source-loader")],
    enforce: "pre"
  });

  config.module.rules.push({
    test: /\.md$/,
    use: [
      {
        loader: "html-loader"
      },
      {
        loader: "markdown-loader",
        options: {
          /* your options here */
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.scss$/,
    sideEffects: true,
    loaders: ["sass-loader"],
    include: path.resolve(__dirname, "../../")
  });

  return config;
};
