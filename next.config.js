/** @type {import('next').NextConfig} */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

// FIXME: Review these constants
const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/reading-notes" : "";

// FIXME: Review these settings
const nextConfig = {
  // TODO: Why `unoptimized` here?
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  assetPrefix,
  basePath: assetPrefix,
};

module.exports = {
  ...withNextra({
    webpack: (config) => {
      config.experiments = {
        asyncWebAssembly: true,
      }
      return config
    },
  }),
  ...nextConfig,
};
