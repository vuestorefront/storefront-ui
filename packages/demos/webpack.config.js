const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
// Where we should talk about 
const { scssConfig } = require("paht/to/utilities/build/sfui.webpack.config")
const { vueConfig } = require("paht/to/utilities/build/sfui.webpack.config")


module.exports =  merge(
  {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/dist/',
      filename: 'build.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
      historyApiFallback: true,
      noInfo: true,
      overlay: true
    },
    performance: {
      hints: false
    },
    devtool: '#eval-source-map'
  },
  scssConfig,
  vueConfig
)
