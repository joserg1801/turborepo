const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  experimental: {
    // this includes files from the monorepo base two directories up
    outputStandalone: true,
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
