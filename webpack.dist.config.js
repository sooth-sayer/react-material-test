const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      './app/index.jsx',
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
      { test: /\.jsx$/, loader: 'babel-loader' },
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin([
        "ENV",
    ]),
  ],
};
