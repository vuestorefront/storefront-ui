import {
  extractImports,
  changeImports,
  removeCode,
  changeFrameworkPathInImports,
  dynamicImports,
} from "@storefront-ui/tests-shared/index.js";

const isCoverageEnabled = process.env.CYPRESS_COVERAGE === "true";
const isTest = process.env.TEST === 'true';
/** @type {import('next').NextConfig} */
export default {
  env: {
    DOCS_EXAMPLES_REACT_PATH: process.env.DOCS_EXAMPLES_REACT_PATH,
  },
  basePath: process.env.DOCS_EXAMPLES_REACT_PATH
    ? new URL(process.env.DOCS_EXAMPLES_REACT_PATH).pathname
    : '',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
    topLevelAwait: true,
    swcPlugins: isCoverageEnabled ? [
      ["swc-plugin-coverage-instrument", {
        esModules: true,
      }]
    ] : undefined,
  },
  webpack(config) {
    if(isTest) {
      config.experiments = {
        "topLevelAwait": true
      }
      config.module.rules.push({
        test: /\/sfui\/tests\//,
        loader: 'string-replace-loader',
        options: {
          multiple: [
            {
              // Find imports of component and replace it with utils/fake-import.ts empty file
              search: extractImports('vue'),
              replace: (_match, frameworkImport) => {
                return frameworkImport
                  .replace(dynamicImports('vue'), "./fake-import")
                  .replace(changeImports('vue'), (_m, importName) => {
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
              search: changeFrameworkPathInImports('vue'),
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
