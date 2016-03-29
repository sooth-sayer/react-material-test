const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      './app/index.js',
    ],
  },
  output: {
    publicPath: '/assets/',
    filename: 'main.bundle.dev.js',
    path: path.resolve(__dirname, 'build'),
  },

  devtool: '#eval-source-map',

  devServer: {
    contentBase: 'app/',
    host: '0.0.0.0',
    port: '8080',

    hot: true,
    historyApiFallback: true,

    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000,
    },
  },

  module: {
    loaders: [
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, loader: 'babel-loader', include: path.resolve(__dirname, 'app/') },
      { test: /\.(jpeg|png|jpg|gif)$/, loader: 'url-loader' },
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin([
      'ENV',
    ]),
  ],
};
