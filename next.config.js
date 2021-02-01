const withImages = require("next-images");

const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages([
  { test: /\.(jpe?g|png)$/i, loaders: ["file-loader", "webp-loader"] },
  withImages({
    webpack(config) {
      return config;
    },
  }),
]);
