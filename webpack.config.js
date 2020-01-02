const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  output: {
    filename: 'index.min.js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parallel: true
        }
      })
    ]
  }
};
