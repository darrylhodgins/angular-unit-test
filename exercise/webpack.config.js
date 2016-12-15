const plugins = require('./webpack/plugins');
const loaders = require('./webpack/loaders');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './main.ts',
    vendor: './vendor.ts'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: loaders
  },
  plugins: plugins,
  devServer: {
    historyApiFallback: {
      index: '/'
    }
  },
  performance: {
    hints: false
  }
}
