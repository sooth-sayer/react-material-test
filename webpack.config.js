const path = require('path');
module.exports = {
  entry: {
    app: ['./app/index.jsx'],
  },
  output: {
    publicPath: '/assets/',
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    contentBase: 'build/',
    host: '0.0.0.0',
    port: '8080',
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx$/, loader: 'babel-loader' },
    ],
  },
};
