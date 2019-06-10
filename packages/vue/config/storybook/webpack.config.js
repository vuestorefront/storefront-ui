const path = require('path')

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

  config.module.rules.push({
    test: /\.scss$/,
    use: ['sass-loader'],
    include: path.resolve(__dirname, '../../src/css/'),
  });

  return config;
};
