import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['../../../../docs/packages/sf-docs-base'],
  // fix via https://github.com/nuxt/content/issues/2254
  alias: {
    'micromark/lib/preprocess.js': 'micromark',
    'micromark/lib/postprocess.js': 'micromark',
  },
  runtimeConfig: {
    public: {
      storefrontUi: true,
      DOCS_EXAMPLES_VUE_PATH: process.env.DOCS_EXAMPLES_VUE_PATH,
      DOCS_EXAMPLES_REACT_PATH: process.env.DOCS_EXAMPLES_REACT_PATH,
    },
  },
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
  },
});
