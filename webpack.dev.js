const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {resolve} = require('path');

module.exports = merge(common, {

  output: {
    path: resolve(__dirname, 'public')
  },

  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolve(__dirname, 'public'),
    historyApiFallback: true
  }
})
