const path = require('path');

module.exports = {
  entry: './source/scripts',
  output: {
    library: 'VueScrollClass',
    libraryTarget: 'umd',
    filename: 'vue-scroll-class.js',
    path: path.resolve(__dirname, 'dist'),
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
