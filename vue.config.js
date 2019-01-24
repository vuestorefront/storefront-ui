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
          loader: 'html-loader'
        }
      ]
    }
  }
}
