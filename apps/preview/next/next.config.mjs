/** @type {import('next').NextConfig} */
import {
  extractImports,
  changeImports,
  removeCode,
  changeFrameworkPathInImports,
} from "@storefront-ui/tests-shared/index.js";

const isTest = process.env.TEST === 'true';
export default {
  basePath: process.env.VITE_DOCS_EXAMPLES_REACT
    ? new URL(process.env.VITE_DOCS_EXAMPLES_REACT).pathname
    : '',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true
  },
  webpack(config) {
    if(isTest) {
      config.module.rules.push({
        test: /cy.tsx$|PageObject.ts$/,
        loader: 'string-replace-loader',
        options: {
          multiple: [
            {
              // Find imports of component and replace it with utils/fake-import.ts empty file
              search: extractImports('vue'),
              replace: (_match, frameworkImport) => {
                return frameworkImport.replace(changeImports('vue'), (_m, importName) => {
                  return `import${importName}from '../../utils/fake-import';`;
                });
              },
            },
            {
              // Remove part of code from other frameworks
              search: removeCode("vue"),
              replace: ''
            },
            {
              // Find all imports with `/vue/` files and replace it to `/react/` so we would test correct package
              search: changeFrameworkPathInImports("vue"),
              replace: (_match, g1, g2, g3) => {
                return `${g1}/react/${g3}`;
              }
            }
          ]
        }
      });
    }

    return config;
  }
};
