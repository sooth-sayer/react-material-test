const path = require('path');
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
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx$/, loader: 'babel-loader' },
    ],
  },
};
