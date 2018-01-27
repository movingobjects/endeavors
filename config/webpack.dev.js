
const { DefinePlugin } = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {

  devtool: 'cheap-inline-source-map',

  plugins: [
    new DefinePlugin({
      IS_ELECTRON: false,
      IS_DEV: true,
      __DEV__: true,
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],

});
