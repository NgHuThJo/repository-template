module.exports = {
  plugins: [
    require("@fullhuman/postcss-purgecss")({
      content: ["./**/*.html"],
      css: ["./css/style.css"],
    }),
    require("cssnano"),
    require("postcss-import"),
    require("postcss-preset-env"),
  ],
};
