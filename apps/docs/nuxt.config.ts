const isProd = process.env.PROD === 'true';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['../../../docs/packages/sf-docs-base'],
  runtimeConfig: {
    public: {
      storefrontUi: true,
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
