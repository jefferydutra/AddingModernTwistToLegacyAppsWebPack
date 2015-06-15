var webpack = require('webpack');
var WebPackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: './js/library/src/numberGreaterThanOrEqualTo.js',
  output: {
    filename: 'bundle.js'
  },
  module:{
    preLoaders: [
      {
        test: /\.js$/, // include .js files
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        loader: "jshint-loader"
      },
      {
        test: /\.js$/, // include .js files
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        loader: "jscs-loader"
      }
    ]
  },
  plugins: [
    new WebPackNotifierPlugin({title: 'Build'})
  ],
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json']
  }
};