---
layout: DefaultLayout
hideBreadcrumbs: true
tabOptions: [nuxt,vite,astro]
---
# Installation

Since Storefront UI is designed to fit seamlessly into your Tailwind CSS workflow, there will be different installation steps depending on your environment.

## Playground

You can try out Storefront UI in your browser with our online playground.

<div class="custom-block mt-8">
<a href="http://play-vue.vuestorefront.io/" target="_blank" rel="noopener noreferrer" class="custom-block dark:text-white font-medium px-4 py-2 border-green border-2 rounded-lg hover:bg-green transition-colors hover:text-white">Stackblitz playground</a>
</div>



:::::: slot vite

## Vite + Vue 3

### Create Your Vite Project

If you are creating a new project with Vite, you can use the `create-vite` command to get started.

```bash
# npm 6.x
npm create vite@latest my-vue-app --template vue-ts

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue-ts

# yarn
yarn create vite my-vue-app --template vue-ts

# pnpm
pnpm create vite my-vue-app --template vue-ts
```

### Install Tailwind and Storefront UI Dependencies

Next, you'll need to install Tailwind CSS and PostCSS, as well as the Storefront UI's Vue library and Tailwind preset.

```bash
# npm
npm i -D tailwindcss postcss autoprefixer @storefront-ui/vue

# yarn
yarn add -D tailwindcss postcss autoprefixer @storefront-ui/vue

# pnpm
pnpm add -D tailwindcss postcss autoprefixer @storefront-ui/vue
```

### Initialize Tailwind

Running Tailwind's `init` command will generate a `tailwind.config.cjs` and `postcss.config.cjs` file in your project's root directory.

```bash
npx tailwindcss init -p
```

### Modify Your Tailwind Configuration File

Storefront UI plugs into your Tailwind configuration to add any base styles and CSS variables. To do this, you need to import the Storefront UI Tailwind preset and add it to your `tailwind.config.cjs` file.

::: tip Add a path to your installed package

In order for Tailwind to properly detect the utility classes used in Storefront UI components, you need to add a path to wherever your `node_modules` folder is located to the `content` property. In the example below, we're using the default location for `node_modules`, but this may change if you're working in a monorepo.
:::

```ts
// tailwind.config.cjs
const { tailwindConfig } = require('@storefront-ui/vue/tailwind-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindConfig],
  content: ['./index.html', './**/*.vue', './node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

### Add Tailwind to Your CSS

Finally, you'll need to add CSS directives to add each Tailwind layer to `src/style.css`. Since Storefront UI fits into your Tailwind workflow, you'll need to add Tailwind's base, components, and utilities layers to your CSS.


```css
/* src/style.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### You're Ready to Go!

Now, you can import Storefront UI components in your app and all the Tailwind utilities from the `@storefront-ui/vue` library will be available in your project.

<SourceCode>

<<<../../preview/nuxt/pages/showcases/Button/ButtonBlock.vue

</SourceCode>

<Showcase showcase-name="Button/ButtonBlock" :show-source="false"/>

::::::

:::::: slot nuxt
## Nuxt 3

If you prefer video guides, we have a quick video that can help you set up Storefront UI in your Nuxt 3 project.

<iframe src="https://www.youtube-nocookie.com/embed/YamdPmZexto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" class="w-full max-w-lg mx-auto rounded aspect-video relative mt-8 custom-block"></iframe>

### Install all dependencies

With Nuxt 3, the fastest way to get started is to use the `@nuxtjs/tailwindcss` module. The [Nuxt Tailwind module](https://tailwindcss.nuxtjs.org/) will automatically install Tailwind CSS and PostCSS for you.

Additionally, you'll need to install the Storefront UI's Vue library and Tailwind preset.

```bash
# npm
npm i -D @nuxtjs/tailwindcss @storefront-ui/vue

# yarn
yarn add -D @nuxtjs/tailwindcss @storefront-ui/vue

# pnpm
pnpm add -D @nuxtjs/tailwindcss @storefront-ui/vue
```

### Add the Nuxt Tailwind module to your `nuxt.config.ts`

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss']
})
```

### Modify your `tailwind.config.ts`

Storefront UI plugs into your Tailwind configuration to add any base styles and CSS variables. To do this, you need to import the Storefront UI Tailwind preset and add it to your `tailwind.config.ts` file.

::: tip Add a path to your installed package

In order for Tailwind to properly detect the utility classes used in Storefront UI components, you need to add a path to wherever your `node_modules` folder is located to the `content` property. In the example below, we're using the default location for `node_modules`, but this may change if you're working in a monorepo.
:::

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';

export default <Config>{
  presets: [tailwindConfig],
  content: ['./**/*.vue', './node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
};
```

### You're ready to go

Now, you can import Storefront UI components in your app and all the Tailwind utilities from the `@storefront-ui/vue` library will be available in your project.

<SourceCode>

<<<../../preview/nuxt/pages/showcases/Button/ButtonBlock.vue

</SourceCode>

<Showcase showcase-name="Button/ButtonBlock" :show-source="false"/>

:::::::

:::::: slot astro

## Astro + Vue

### Add Vue and Tailwind to Your Astro Project

When working with Astro, you'll first need to configure your project to use Astro's Vue and Tailwind integrations.

The simplest way to do this is use the `astro add` command, but you can manually configure these two integrations using the [Astro Vue](https://docs.astro.build/en/guides/integrations-guide/vue/) and [Astro Tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/) guides.

```bash
# npm
npx astro add vue tailwind

# yarn
yarn astro add vue tailwind

# pnpm
pnpm astro add vue tailwind
```

The `astro add` command will automatically install the necessary dependencies and add the necessary configuration to your project. Also, it will add a `tailwind.config.cjs` file to your project's root directory.

### Install Storefront UI Dependencies

Now that your Astro project is configured to use Vue and Tailwind, you'll need to install the Storefront UI Vue library and Tailwind preset.

```bash
# npm
npm i -D @storefront-ui/vue

# yarn
yarn add -D @storefront-ui/vue

# pnpm
pnpm add -D @storefront-ui/vue
```

### Modify Your Tailwind Configuration File

Storefront UI plugs into your Tailwind configuration to add any base styles and CSS variables. To do this, you need to import the Storefront UI Tailwind preset and add it to your `tailwind.config.cjs` file.

::: tip Add a path to your installed package

In order for Tailwind to properly detect the utility classes used in Storefront UI components, you need to add a path to wherever your `node_modules` folder is located to the `content` property. In the example below, we're using the default location for `node_modules`, but this may change if you're working in a monorepo.
:::

```js
// tailwind.config.cjs
const { tailwindConfig } = require('@storefront-ui/vue/tailwind-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindConfig],
  content: ['./index.html', './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### You're Ready to Go!

You can now import Storefront UI components inside your Astro project! You can either use them directly in your Astro components or import them into your Vue components.

<SourceCode>

<<<../../preview/nuxt/pages/showcases/Button/ButtonBlock.vue

</SourceCode>

<SourceCode>

```md
---
import { SfButton } from '@storefront-ui/vue';
---

<SfButton> Hello </SfButton>
```

</SourceCode>

::: tip Need interaction?
If you need interaction, you can create your own Vue components that use Storefront UI components under the hood. You can then import these components into your Astro components and use them as you would any other Vue component. Read more about Vue components in Astro in Astro's [Framework Components guide](https://docs.astro.build/en/core-concepts/framework-components/).
:::

::::::
