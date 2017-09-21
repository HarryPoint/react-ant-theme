const path = require('path');
const webpack = require('webpack');
const config = require('./basic');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getThemeConfig = require(path.resolve(__dirname, '../src/theme'));
module.exports = {
  entry: {
    app: './src/index.js'
      /*vendor: [
        // 填写公用模块名称（第三方包 如：'lodash'）
      ]*/
  },
  output: {
    filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].js' : '[name].[hash].js',
    chunkFilename: '[name].bundle.js',
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, '../src')
    }, {
      test: /\.html$/,
      use: [
        'html-loader'
      ]
    }, {
      test: /\.less$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "less-loader" // compiles Less to CSS
      }]
    }, {
      test: /\.less$/,
      use: [{
        loader:`less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(getThemeConfig)}}`
      }]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.(csv|tsv)$/,
      use: [
        'csv-loader'
      ]
    }, {
      test: /\.xml$/,
      use: [
        'xml-loader'
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html'
    })
  ]
};