const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      filename: "privacy_policy.html",
      template: "./src/privacy_policy.html",
      chunks: ["privacy_policy"],
    }),
  ],
});
