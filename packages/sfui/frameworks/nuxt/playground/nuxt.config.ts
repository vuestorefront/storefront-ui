import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['../src/module.ts'],
  imports: {
    transform: {
      // you could also add the path of your built library to prevent this happening
      // for your users, but the issue is probably only replicable in your monorepo
      exclude: [/.*dist\/index\.mjs/],
    },
  },
  tailwindcss: {
    config: {
      content: [],
      theme: {
        extend: {
          colors: {
            primary: {
              700: '#1e1e1e',
            },
          },
        },
      },
    },
  },
  storefrontUi: {
    contentPath: './../../../../node_modules/@storefront-ui/vue/dist/**/*.mjs',
  },
});
