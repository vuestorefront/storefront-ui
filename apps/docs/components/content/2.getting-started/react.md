---
navigation: false
---

# Installation

Since Storefront UI is designed to fit seamlessly into your Tailwind CSS workflow, there will be different installation steps depending on your environment.

## Playground

You can try out Storefront UI in your browser with our online playground.

<div class="custom-block mt-8">
<a href="http://play-react.vuestorefront.io/" target="_blank" rel="noopener noreferrer" class="custom-block dark:text-white font-medium px-4 py-2 border-green border-2 rounded-lg hover:bg-green transition-colors hover:text-white">Stackblitz playground</a>
</div>

::tabs{:titles='["Next.js", "Vite"]' class="mt-8"}

#tab-1

If you prefer video guides, we have a quick video that can help you set up Storefront UI in your Next.js project.

<iframe src="https://www.youtube-nocookie.com/embed/6xOnCOXU8H4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" class="w-full max-w-lg mx-auto rounded aspect-video relative mt-8 custom-block"></iframe>

### Create Your Next Project

If you don't already have a Next app, you can use the `create-next-app` command from [Create Next App](https://nextjs.org/docs/api-reference/create-next-app) to get started.

```bash
# npm
npx create-next-app@latest

# yarn
yarn create next-app

# pnpm
pnpm create next-app
```

### Install Tailwind and Storefront UI Dependencies

Next, you'll need to install Tailwind CSS and PostCSS, as well as the Storefront UI's React library and Tailwind preset.

```bash
# npm
npm i @storefront-ui/react
npm i -D tailwindcss postcss autoprefixer

# yarn
yarn add @storefront-ui/react
yarn add -D tailwindcss postcss autoprefixer

# pnpm
pnpm add @storefront-ui/react
pnpm add -D tailwindcss postcss autoprefixer
```

::tip
In Next.js 13 environments that are not using [App Router](https://beta.nextjs.org/docs/api-reference/next-config#appdir) there is an issue with [Next.js not detecting ESM modules of subdependencies correctly.](https://github.com/vercel/next.js/issues/39375)

As a workaround, you can add `transpilePackages: ['@storefront-ui/react']` to your `next.config.js` configuration file:

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@storefront-ui/react'],
};

module.exports = nextConfig;
```

::

### Initialize Tailwind

Running Tailwind's `init` command will generate a `tailwind.config.js` and `postcss.config.js` file in your project's root directory.

```bash
npx tailwindcss init -p
```

### Modify Your Tailwind Configuration File

Storefront UI plugs into your Tailwind configuration to add any base styles and CSS variables. To do this, you need to import the Storefront UI Tailwind preset and add it to your `tailwind.config.js` file.

::tip Add a path to your installed package

In order for Tailwind to properly detect the utility classes used in Storefront UI components, you need to add a path to wherever your `node_modules` folder is located to the `content` property. In the example below, we're using the default location for `node_modules`, but this may change if you're working in a monorepo.
::



```js
// tailwind.config.js
const { tailwindConfig } = require('@storefront-ui/react/tailwind-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindConfig],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@storefront-ui/react/**/*.{js,mjs}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```



### Add Tailwind to Your CSS

Finally, you'll need to add CSS directives to add each Tailwind layer to `src/app/globals.css`. Since Storefront UI fits into your Tailwind workflow, you'll need to add Tailwind's base, components, and utilities layers to your CSS.



```css
/* src/styles/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```



### You're Ready to Go!



<<<../../../../preview/next/pages/showcases/Button/ButtonBlock.tsx#source



#tab-2

## Vite + React

### Create Your Vite Project

If you are creating a new project with Vite, you can use the `create-vite` command to get started.

```bash
# npm 6.x
npm create vite@latest my-sfui-app --template react-ts

# npm 7+, extra double-dash is needed:
npm create vite@latest my-sfui-app -- --template react-ts

# yarn
yarn create vite my-sfui-app --template react-ts

# pnpm
pnpm create vite my-sfui-app --template react-ts
```

### Install Tailwind and Storefront UI Dependencies

Next, you'll need to install Tailwind CSS and PostCSS, as well as the Storefront UI's React library and Tailwind preset.

```bash
# npm
npm i -D tailwindcss postcss autoprefixer @storefront-ui/react

# yarn
yarn add -D tailwindcss postcss autoprefixer @storefront-ui/react

# pnpm
pnpm add -D tailwindcss postcss autoprefixer @storefront-ui/react
```

### Initialize Tailwind

Running Tailwind's `init` command will generate a `tailwind.config.js` and `postcss.config.js` file in your project's root directory.

```bash
npx tailwindcss init -p
```

### Modify Your Tailwind Configuration File

Storefront UI plugs into your Tailwind configuration to add any base styles and CSS variables. To do this, you need to import the Storefront UI Tailwind preset and add it to your `tailwind.config.js` file.

::tip Add a path to your installed package

In order for Tailwind to properly detect the utility classes used in Storefront UI components, you need to add a path to wherever your `node_modules` folder is located to the `content` property. In the example below, we're using the default location for `node_modules`, but this may change if you're working in a monorepo.
::



```ts
// tailwind.config.js
import { tailwindConfig } from '@storefront-ui/react/tailwind-config';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindConfig],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@storefront-ui/react/**/*.{js,mjs}'],
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

Now, you can import Storefront UI components in your app and all the Tailwind utilities from the `@storefront-ui/react` library will be available in your project.



<<<../../../../preview/next/pages/showcases/Button/ButtonBlock.tsx#source



<Showcase showcase-name="Button/ButtonBlock" :show-source="false"/>
::
