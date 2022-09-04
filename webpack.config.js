const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FontPreloadPlugin = require("webpack-font-preload-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      favicon: 'src/favicon.ico'
    }),
    new FontPreloadPlugin(
      {
        extensions: ["woff2", "ttf", "eot"],
        loadType: "preload",
      }
    ),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 3030,
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, 
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000,
              mimetype: "application/font-woff",
              name: ".src/fonts/[name].[ext]",
              publicPath: "../", 
            },
          },
        ],
      },
    ],
  },
};