/* eslint-disable */

const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const APP_ID = 'app-id';

module.exports = {
  entry: [path.resolve(__dirname, '../../src/index')],
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      api: path.resolve(__dirname, '../../src/api'),
      components: path.resolve(__dirname, '../../src/components'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Testing Library React',
      templateContent: () =>
        `<h1>React Testing Workshop</h1><div id="${APP_ID}"></div>`,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        APP_ID: JSON.stringify(APP_ID),
      },
    }),
  ],
};
