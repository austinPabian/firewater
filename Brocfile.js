const mergeTrees = require("broccoli-merge-trees");
const PostCSS = require("broccoli-postcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

let src = "src";

src = new PostCSS(src, {
  plugins: [
    purgecss({
      content: ["./src/**/*.html"],
    }),
    cssnano({
      preset: "default",
    }),
  ],
});

module.exports = mergeTrees([src]);
