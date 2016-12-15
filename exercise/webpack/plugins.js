const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const basePlugins = [
  new webpack.ContextReplacementPlugin(
    /angular\/core\/(esm\/src|src)\/linker/, __dirname
  ),
  new CheckerPlugin()
];

const nonTestPlugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: ['vendor'],
  }),
  new HTMLWebpackPlugin({
    template: './index.html'
  })
];

const plugins = (process.env.NODE_ENV === 'test') ? 
  basePlugins : basePlugins.concat(nonTestPlugins);

module.exports = plugins;
