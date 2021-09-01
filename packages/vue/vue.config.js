module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("vue", "@vue/compat");

    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 3,
            },
          },
        };
      });
  },
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
