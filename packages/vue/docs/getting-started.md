## Installation

:::warning
For best extendability and performance we ship Storefront UI as (unpackaged) source code which requires **webpack** in your project to use the library.

Storefront UI is working out of the box with **Nuxt** and **Vue CLI 2 & 3**!
In order to use it in custom projects you need the following webpack loaders: `css-loader`, `scss-loader`, `sass-loader`, `vue-loader`
:::

Storefront UI is installed as a dependency to your project:

```bash
npm install --save @storefront-ui/vue
```

It contains the library's source code and generates a `sfui.scss` file in your project's root directory upon installation. You can use this file to override global and component-specific SCSS variables.

Once the library is installed, you need to import its **root stylesheet**. It contains _global_ styles and SCSS variables. **Component styles** are automatically imported as part of `.vue` files for each component.

We recommend putting it in your `main.js` or the root component of your application.

```js
import "@storefront-ui/vue/styles.scss";
```

That's all! Now you can import any of Storefront UI components like this:

```js
import { SfComponentName } from "@storefront-ui/vue";
```

## Customization

Storefront UI is very flexible in terms of customization. You can read [here](customization.md) about its capabilities.

## Play with components on Storybook

You can use our [Storybook](http://storybook.storefrontui.io/) to play with the components and see them in various states and with CSS modifiers applied.
