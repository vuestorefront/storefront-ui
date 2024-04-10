// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  extends: ['sf-docs-base'],
  app: {
    baseURL: process.env.VITE_DOCS_BASEPATH ?? '',
    head: {
      link: [
        {
          rel: 'icon',
          href: '/v2/favicon.ico',
        },
      ],
    },
  },
  // fix via https://github.com/nuxt/content/issues/2254
  alias: {
    'micromark/lib/preprocess.js': 'micromark',
    'micromark/lib/postprocess.js': 'micromark',
  },
  runtimeConfig: {
    public: {
      storefrontUi: true,
      DOCS_EXAMPLES_VUE_PATH: process.env.VITE_DOCS_EXAMPLES_VUE_PATH,
      DOCS_EXAMPLES_REACT_PATH: process.env.VITE_DOCS_EXAMPLES_REACT_PATH,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://docs.storefrontui.io',
      siteName: 'Storefront UI',
      siteDescription: 'Fast, accessible, and fully customizable components built for e-commerce.',
    },
  },
  nitro: {
    routeRules: {
      '/figma': { redirect: 'https://www.figma.com/file/Q7Nr1NvjPdcGVhykkfDg2k/Storefront-UI-%7C-Design-Kit-v2.5-(public)?type=design&node-id=22913-91045&mode=design'}
    }
  },
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
  },
});
