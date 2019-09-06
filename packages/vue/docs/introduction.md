# About

Storefront UI is developer-friendly, customization-first and performance oriented component library that ships raw source.
Designs are based on [Google Retail UX Playbook](https://services.google.com/fh/files/events/pdf_retail_ux_playbook.pdf).

**StorefrontUI key characteristics**

We are building Storefront UI based on the following 5 fundamentals:

- **Performance**: You’re importing ONLY what you need, and in a raw format which means you can benefit from all build-time optimizations like tree shaking or grouping common chunks.
- **Customization**: Along with standard prop-based customization, every component has a set of slots that let you replace any part of it with your own images, icons or even custom HTML markup. In addition, every component is divided into separate HTML, CSS and JS files so you can compose your own components from only Storefront UI partials.
- **Best practices**: Storefront UI components follow best practices in terms of design and core. Every component is based on the Google Retail UX Playbook and is accessibility-friendly.
- **E-commerce**: As a UI library dedicated to eCommerce, Storefront UI along with standard UI components has all the elements necessary for building modern online stores.
- **Open Source**: Storefront UI is a community effort to deliver the best possible experience to modern web applications and e-commerce shops, with carefully crafted components following best practices. Our team consists of agencies and volunteer contributors from all over the world.

## Current state of the project

StorefrontUI is currently in ALPHA which means
it is not suitable for production!
Expect things to be broken and APIs to possibly change. 


## How to test StorefrontUI standalone

- checkout the repository and branch you want to test from https://github.com/DivanteLtd/storefront-ui
- install dependencies
```bash
yarn install
```
- change into directory
```bash
cd ./packages/vue/
```
- start Storybook Server

```bash
yarn storybook:serve
```


## How to test StorefrontUI on your own Application?

**Right now StorefrontUI is working only with Nuxt and Vue CLI!**

- Add the package:

```bash
npm install --save @storefront-ui/vue
```

- Import stylesheets in App.vue or main.js:

```scss
import "@storefront-ui/vue/styles.scss";
```

- It's done! Now you can import and use any of the components:

```js
import { SfComponentName } from "@storefront-ui/vue"
```

- You can find detailed information about every component inside each components
[stories](http://storybook.storefrontui.io/)



## How to customize?

StorefrontUI components can be customized in many ways:

- Global customization through SCSS variables
- Standard component customization with filling the props
- Replacement of default HTML with slots
- Heavy customization with usage of HTML, CSS and JS partials

You can find [detailed customization info here](customization.md).

## Join us!

StorefrontUI is a completely new approach for component libraries oriented
around customization possibilities instead of out of the box possibilities.
It's a great goal but it will take a lot of time to achieve it only by ourselves.
The project is open source and free to use.

If you'd like to support us and join the team please write to me:
[**filip@vuestorefront.io**](mailto:filip@vuestorefront.io) ;)

## Useful links

- [StorefrontUI Github](https://github.com/Divanteltd/storefront-ui)
- [Contribution guide](contributing/getting-started.md)
- [Storybook docs](https://storybook.js.org/docs/basics/introduction/)
