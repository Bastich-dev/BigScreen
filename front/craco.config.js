const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@public": path.resolve(__dirname, "public"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@providers": path.resolve(__dirname, "src/providers"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@customTypes ": path.resolve(__dirname, "src/types "),
    },
  },
};
