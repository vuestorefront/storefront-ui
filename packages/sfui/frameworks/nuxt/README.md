
### Install all dependencies

With Nuxt 3, the fastest way to get started is to use the `@storefront-ui/nuxt` module. The [Storefront-io Nuxt module](https://www.npmjs.com/package/@storefront-ui/nuxt) will automatically install `@nuxtjs/tailwindcss` and storefront-ui tailwindcss presets.

Additionally, you'll need to install the Storefront UI's Vue library and NuxtJs Tailwindcss Module.

```bash
# npm
npm i -D @storefront-ui/nuxt @storefront-ui/vue @nuxtjs/tailwindcss

# yarn
yarn add -D @storefront-ui/nuxt @storefront-ui/vue @nuxtjs/tailwindcss

# pnpm
pnpm add -D @storefront-ui/nuxt @storefront-ui/vue @nuxtjs/tailwindcss
```

### Add the Nuxt Tailwind module to your `nuxt.config.ts`

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@storefront-ui/nuxt']
})
```

### Tailwind configuration

Since we use `@nuxtjs/tailwindcss` under the hood, there is possibility to use `tailwindcss` property in `nuxt.config.ts` file. Other than that there is default `tailwind` way to create config via `tailwind.config.ts` file.

Priority of reading configuration, in most important from top to bottom:

1. `tailwind.config.ts` file
2. `nuxt.config.ts` file with `tailwindcss` property
3. default configuration inside module

::tip Add a path to your installed package
In order for Tailwind to properly detect the utility classes used in Storefront UI components, you need to add a path to wherever your `node_modules` folder is located to the `content` property. In the example below, we're using the default location for `node_modules`, but this may change if you're working in a monorepo.
::

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default <Config>{
  content: ['./**/*.vue', './node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
};
```

### Custom `tailwind.css` file

If you're going to create your own Tailwind CSS file, make sure to add the @tailwind directives for each of Tailwind’s layer types (base, components, and utilities).

```css
/* ~/assets/css/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### You're ready to go

Now, you can import Storefront UI components in your app and all the Tailwind utilities from the `@storefront-ui/vue` library will be available in your project. Because `storefront-ui` is served as well from module, `@storefront-ui/vue` is available from [nuxt autoimport](https://nuxt.com/docs/guide/concepts/auto-imports).
