/* eslint-disable */

const express = require('express');
const webpack = require('webpack');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

const config = require('../webpack/webpack.dev.server');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler));
app.use(
  webpackHotMiddleware(compiler, {
    publicPath: config.output.publicPath,
    autoConnect: true,
  }),
);

const { PORT = 9000 } = process.env;

app.listen(PORT, () => console.log('App listening on port', PORT, '\n'));
