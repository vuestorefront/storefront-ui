module.exports = {
  devServer: {
    port: 3002,
  },
  css: {
    loaderOptions: {
      postcss: {
        path: "./postcss.config.js",
      },
    },
  },
};
