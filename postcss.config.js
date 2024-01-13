module.exports = {
  plugins: [
    require("@fullhuman/postcss-purgecss")({}),
    require("autoprefixer"),
    require("cssnano"),
    require("postcss-import"),
    require("postcss-preset-env"),
  ],
};
