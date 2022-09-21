/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true
  },
  webpack: (config) => {
    config.watchOptions.ignored = [
      ...config.watchOptions.ignored,
      /node_modules\/(?!@sfui\/.+)/,
    ];
    return config;
  }
};

module.exports = nextConfig;
