
## Installation
:::warning 
To achieve best extendibility and performance we ship Storofront UI as a raw source which means you need webpack in your project to process the library.
Storefront UI is working out of the box  with **Nuxt** and **Vue CLI 2 & 3**!
To use it in custom project you need following webpack loaders to process it's raw source: `css-loader`, `scss-loader`, `sass-loader`, `vue-loader`
:::
To start working with Storefront UI you need to install the package itself containing raw source of the library:
```bash
npm install --save @storefront-ui/vue
```
This command should also generate `sfui.scss` file in a root of your project. You can use this file to override global and component-specific SCSS variables.

Once library is installed you need to import it's root stylesheet. It contains global styles and SCSS variables. Component styles are imported as part of `.vue` files for each component.

Best place to put it is `main.js` or root component of your application.
```bash
import "@storefront-ui/vue/styles.scss";
```

That's all! Now you can import any of Storefront UI components like this:

```js
import { SfComponentName } from "@storefront-ui/vue"
```

## Customization

Storefront UI is very flexible in terms of customization. You can read [here](customization.md) about it's capabilities.

## Play with components on Storybook

You can use our [storybook]((http://storybook.storefrontui.io/)) to play with every component and see it in different states or with different CSS modifiers.

