const path = require('path');

module.exports = {
  entry: './source/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'temp/scripts'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
};
