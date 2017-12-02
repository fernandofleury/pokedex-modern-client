const merge = require('webpack-merge');
const common = require('./common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  }
});
