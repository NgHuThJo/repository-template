const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    watchFiles: ["./src/**/*"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    assetModuleFilename: "[name][ext]",
  },
});
