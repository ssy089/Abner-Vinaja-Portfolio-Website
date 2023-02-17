const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: './src/client/index.js',
  mode: 'production',
  output: {
    library: {
      name: 'Client',
      type: 'var'
    },
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    assetModuleFilename: 'images/[name][ext]'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
	exclude: /node_modules/,
	use: {
	  loader: "babel-loader",
          options: {
	    presets: ['@babel/preset-env']
	  }
	}
      },
      {
        test: /\.scss$/,
	use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({filename: '[name].css'})
  ]
};
