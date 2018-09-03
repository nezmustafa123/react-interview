const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {resolve} = require('path');

module.exports = merge(common, {

  output: {
    path: resolve(__dirname, 'build')
  },

  mode: 'production',
  devtool: 'source-map',

  plugins: [
    new CleanWebpackPlugin(['build']),
    new UglifyJSPlugin({sourceMap: true}),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})
  ]
})
