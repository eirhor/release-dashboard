const withTM = require("next-transpile-modules")(["ui"]);

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**/*",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};
