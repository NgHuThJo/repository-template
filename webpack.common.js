const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(avif|gif|jpe?g|png|svg|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(eot|[ot]tf|woff2?)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        type: "asset/inline",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "head",
      scriptLoading: "defer",
    }),
  ],
};
