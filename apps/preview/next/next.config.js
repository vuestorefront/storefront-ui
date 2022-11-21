/** @type {import('next').NextConfig} */
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
    config.module.rules.push({
      test: /cy.tsx$/,
      loader: 'string-replace-loader',
      options: {
        multiple: [
          {
            // Find imports of component and replace it with utils/fake-import.ts empty file
            search: /import(.*)from.*..\/frameworks\/vue.*.vue.*/gm,
            replace: (_match, g1) => {
              return `import${g1}from '../../utils/fake-import';`;
            }
          },
          {
            // Find all `vue/../types` files and replace it to `react/../types` so we would test correct package
            search: /(import.*from.*..\/frameworks\/)(vue)(.*)/gm,
            replace: (_match, g1, g2, g3) => {
              return `${g1}react${g3}`;
            }
          }
        ]
      }
    })
    return config;
  }
};

module.exports = nextConfig;
