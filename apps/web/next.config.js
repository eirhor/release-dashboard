const withTM = require("next-transpile-modules")(["ui"]);

module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};
