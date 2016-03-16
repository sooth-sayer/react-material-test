const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      './app/index.js',
    ],
  },

  output: {
    publicPath: '/assets/',
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    loaders: [
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, loader: 'babel-loader', include: path.resolve(__dirname, 'app/') },
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin([
      'ENV',
    ]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
