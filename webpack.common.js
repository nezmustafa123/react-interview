const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },

  output: {
    filename: '[name].js'
  },

  resolve: {
    extensions: [
      '.js', '.jsx', '.css', '.less'
    ],
    modules: ['./app', './node_modules']
  },

  plugins: [
    new HtmlWebpackPlugin({title: 'App', appMountId: 'app', template: './src/template.html'})
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader?modules', 'less-loader']
      },{
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  }
};
