const mergeTrees = require("broccoli-merge-trees");
const PostCSS = require("broccoli-postcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const HTMLMin = require("broccoli-htmlmin");

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

src = new HTMLMin(src);

module.exports = mergeTrees([src]);
