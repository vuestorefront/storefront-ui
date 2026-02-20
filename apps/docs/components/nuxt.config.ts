// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  extends: ['sf-docs-base'],

  css: ['~/assets/css/fonts.css'],

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          href: '/v2/favicon.ico',
        },
      ],
    },
  },

  robots: {
    enabled: false,
  },

  sitemap: {
    enabled: false,
  },

  // fix via https://github.com/nuxt/content/issues/2254
  alias: {
    'micromark/lib/preprocess.js': 'micromark',
    'micromark/lib/postprocess.js': 'micromark',
  },

  runtimeConfig: {
    public: {
      storefrontUi: true,
      DOCS_EXAMPLES_VUE_PATH: process.env.NUXT_DOCS_EXAMPLES_VUE_PATH,
      DOCS_EXAMPLES_REACT_PATH: process.env.NUXT_DOCS_EXAMPLES_REACT_PATH,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://docs.storefrontui.io',
      siteName: 'Storefront UI',
      siteDescription: 'Fast, accessible, and fully customizable components built for e-commerce.',
    },
  },

  nitro: {
    routeRules: {
      '/figma': {
        redirect:
          'https://www.figma.com/design/ZxaUFeSq1XYvR8v8eqTrJU/SFUI-2-%7C-Design-Kit-v2.7--public-?node-id=22913-91045&p=f&t=Y3eoI5dyw6cRAzVk-0',
      },
    },
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      failOnError: false,
    },
  },

  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
  },
  
  hooks: {
    // informs tailwind about location of SFUI components
    // done this way, because sf-docs-base cannot have those paths hardcoded
    // and with @nuxtjs/tailwindcss module we cannot use `content` property anymore (it got removed)
    // for details, see the source code: https://github.com/nuxt-modules/tailwindcss/blob/main/src/import-css.ts#L26
    'tailwindcss:sources:extend': (sources) => {
      sources.push({ type: 'path', source: './**/*.vue' });
      sources.push({ type: 'path', source: '../../../node_modules/@storefront-ui/vue' });
      return sources;
    },
  },

  compatibilityDate: '2025-10-24',
});