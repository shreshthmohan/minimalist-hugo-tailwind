const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    "./layouts/**/*.html",
    "../../layouts/**/*.html",
    "../../content/**/*.md",
    "../../content/**/*.html",
  ],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    // require("cssnano"),
    ...(process.env.NODE_ENV === "production"
      ? [purgecss, require("cssnano")]
      : []),
  ],
};
