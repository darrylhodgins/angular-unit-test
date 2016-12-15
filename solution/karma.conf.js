const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const plugins = require('./webpack/plugins.js');
const loaders = require('./webpack/loaders');

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-firefox-launcher',
      'karma-spec-reporter'
    ],

    files: [
      './src/vendor.test.ts',
      './src/**/*.test.ts'
    ],

    preprocessors: {
      './src/vendor.test.ts': ['webpack'],
      './src/**/*.test.ts': ['webpack']
    },

    webpack: {
      resolve: {
        extensions: ['.ts', '.js']
      },
      module: {
        loaders: loaders
      },
      plugins: plugins,
      performance: {
        hints: false
      }
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['spec'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Firefox'],
    singleRun: true,
    concurrency: Infinity
  })
}
