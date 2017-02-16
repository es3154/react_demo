var path = require('path');

module.exports = {
  entry: {
    main : './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'bulider'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx|.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};