'use strict'

var webpack = require('webpack') //TODO try this with import instead of require
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (function makeWebpackConfig() {
  var config = {
    entry: {
      app: './src/app/app.js'
    },
    output: {
      publicPath: 'https://simer.link:8080' //TODO try with localhost or 0.0.0.0
    },
    module: {
      rules: [
        {
          test:/\.js$/,
          use: ['babel-loader'],
          exclude: 'node_modules'
        },
        {
          test:/\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.html$/,
          use: ['raw-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body'
      })
    ],
    devServer: {
      contentBase: '.'
    }
  }
  return config
})();
