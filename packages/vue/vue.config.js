const FallbackDirectoryResolverPlugin = require('webpack-fallback-directory-resolver-plugin');

module.exports = {
  devServer: {
    port: 3002
  },
  configureWebpack: {
    plugins: [
      new FallbackDirectoryResolverPlugin
    ]
  }
};
