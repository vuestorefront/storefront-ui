module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.vue$/,
    loader: "storybook-addon-vue-info/loader",
    enforce: "post"
  });
  return config;
};
