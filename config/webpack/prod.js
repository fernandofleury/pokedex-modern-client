const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CompressionPlugin({
      test: /\.js/,
      deleteOriginalAssets: true
    })
  ]
});
