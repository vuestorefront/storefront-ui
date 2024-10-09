// How to test? check if variable is overwritten with current priority table
// 1. `tailwind.config.ts` file
// 2. `nuxt.config.ts` file with `tailwindcss` property
// 3. default configuration inside module
export default {
  content: ['../../../../node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
  theme: {
    extend: {
      colors: {
        brand: 'yellow',
        secondary: {
          200: 'blue',
        },
      },
    },
  },
};
