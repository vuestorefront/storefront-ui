/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true
  },
  webpack(config) {
    // mock vue files so they could be loaded without errors
    config.module.rules.push({
      test: /\.vue/,
      type: 'asset/resource',
      generator: {
        publicPath: () => {
          return '';
        }
      }
    });
    return config;
  }
};

module.exports = nextConfig;
