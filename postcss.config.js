module.exports = {
  plugins: [
    require("@fullhuman/postcss-purgecss")({
      content: ["./src/**/*.html"],
      css: ["./src/css/style.css"],
    }),
    require("cssnano"),
    require("postcss-import"),
    require("postcss-preset-env"),
  ],
};
