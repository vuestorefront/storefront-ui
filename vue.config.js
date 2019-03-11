const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer: {
    port: 3002
  },
  runtimeCompiler: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(html|htm)$/,
          loader: "html-loader"
        }
      ]
    },
    plugins: [
      new CopyPlugin([
        { 
          from: 'src/components', 
          to: 'components' ,
          transformPath(targePath) {
            return targePath.split('/').slice(-1)[0];
          },
        },
        { from: 'src/css', to: 'css' },
      ])
    ]
  }
};
