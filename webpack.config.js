const path = require('path');

module.exports = {
  'mode': 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        test: /\.(png|jpe?g|gif)$/i,
        use: ["style-loader", "css-loader", { loader: 'file-loader',},],
      },
    ],
  },
};
