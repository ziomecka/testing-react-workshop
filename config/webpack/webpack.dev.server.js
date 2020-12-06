/* eslint-disable */

const webpack = require('webpack');
const developement = require('./webpack.development');

module.exports = {
  ...developement,
  entry: [...developement.entry, 'webpack-hot-middleware/client'],
  plugins: [...developement.plugins, new webpack.HotModuleReplacementPlugin()],
};
