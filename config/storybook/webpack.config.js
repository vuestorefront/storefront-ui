module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.vue$/,
    loader: "storybook-addon-vue-info/loader",
    enforce: "post"
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

  return config;
};
