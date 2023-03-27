const mergeTrees = require("broccoli-merge-trees");
const PostCSS = require("broccoli-postcss");
const purgecss = require("@fullhuman/postcss-purgecss");

let src = "src";

src = new PostCSS(src, {
  plugins: [
    purgecss({
      content: ["./src/**/*.html"],
    }),
  ],
});

module.exports = mergeTrees([src]);
