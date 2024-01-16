module.exports = {
  plugins: [
    require("@fullhuman/postcss-purgecss")({
      content: ["./src/**/*.html"],
    }),
    require("autoprefixer"),
    require("cssnano"),
    require("postcss-import"),
    require("postcss-preset-env"),
  ],
};
