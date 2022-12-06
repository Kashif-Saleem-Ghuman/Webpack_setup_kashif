const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
  mode: 'development',
   entry: {
     bundle: './src/index.js',
     print: './src/print.js',
   },
   devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
   output: {
     filename: '[name].js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   optimization: {
    runtimeChunk: 'single',
  },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
 };