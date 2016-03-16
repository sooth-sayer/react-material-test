const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      './app/index.jsx',
    ],
  },
  output: {
    publicPath: '/assets/',
    filename: 'main.bundle.dev.js',
    path: path.resolve(__dirname, 'build'),
  },

  devtool: "#eval-source-map",

  devServer: {
    contentBase: 'app/',
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
