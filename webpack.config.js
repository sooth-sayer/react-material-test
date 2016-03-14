const path = require('path');
module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      './app/index.jsx',
    ],
  },
  output: {
    publicPath: '/assets/',
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  devtool: "#eval-source-map",

  devServer: {
    contentBase: 'build/',
    host: '0.0.0.0',
    port: '8080',

    hot: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx$/, loader: 'babel-loader' },
    ],
  },
};
