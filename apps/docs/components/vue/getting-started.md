---
layout: DefaultLayout
hideBreadcrumbs: true
tabOptions: [nuxt,vite]
---
# Installation

Since Storefront UI is designed to fit seamlessly into your Tailwind CSS workflow, there will be different installation steps depending on which framework you're using. We've provided instructions for Vue 3, Nuxt 3, and Vite.

:::::: slot vite
## Vite + Vue 3
::::::

:::::: slot nuxt
## Nuxt 3

### Install all dependencies

With Nuxt 3, the fastest way to get started is to use the `@nuxtjs/tailwindcss` module. The [Nuxt Tailwind module](https://tailwindcss.nuxtjs.org/) will automatically install Tailwind CSS and PostCSS for you.

Additionally, you'll need to install the Storefront UI's Vue library and Tailwind preset.

```bash
npm i -D @nuxtjs/tailwindcss @storefront-ui/vue @storefront-ui/tailwind-config
# yarn add -D @nuxtjs/tailwindcss @storefront-ui/vue @storefront-ui/tailwind-config
# pnpm add -D @nuxtjs/tailwindcss @storefront-ui/vue @storefront-ui/tailwind-config
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
import { tailwindConfig } from '@storefront-ui/tailwind-config';

export default <Config>{
  presets: [tailwindConfig],
  content: ['./**/*.vue', './node_modules/@storefront-ui/vue/**/*.js'],
};

```

### You're ready to go

Now, thanks to the Nuxt Tailwind module, you can import Storefront UI components in your Nuxt 3 app that all come with the necessary styles.

```vue
<template>
  <VsfButton type="button" class="w-full"> Hello </VsfButton>
</template>

<script lang="ts" setup>
import { VsfButton } from '@storefront-ui/vue';
</script>
```

<Showcase showcase-name="Button/ButtonBlock" :show-source="false"/>


:::::::
<!-- ## Our dependencies

```
@storefront-ui/css @storefront-ui/shared @vueuse/core jw-paginate tabbable
``` -->
