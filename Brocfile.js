const mergeTrees = require("broccoli-merge-trees");
const PostCSS = require("broccoli-postcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const HTMLMin = require("broccoli-htmlmin");
const Terser = require("broccoli-terser-sourcemap");
const Imagemin = require("broccoli-image-min");
const SVGO = require("broccoli-svgo");

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

src = new Terser(src);

src = new Imagemin(src, {
  include: [".jpg$"],
});

src = new SVGO(src);

module.exports = mergeTrees([src]);
