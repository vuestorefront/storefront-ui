# Vue

## Installation

Install StorefrontUI by running one of the following commands:


```bash
npm install @storefront-ui/vue
```

```bash
yarn add @storefront-ui/vue
```

```bash
pnpm add @storefront-ui/vue
```

## Usage

Import any component, enum or any other dependency directly from tree-shakeable `@storefront-ui/vue` bundle. In this example we're importing [Alert component](../vue/components/alert.html) together with an enum holding it's variants:

```ts
import { VsfAlert, VsfAlertVariants } from '@storefront-ui/vue';
```

The line above will import styleless version of the component.

To apply default CSS styling, import the CSS file anywhere in your application:

```ts
import '@storefront-ui/css/storefront-ui.css'
```

Congratulation, you're now able to use StrorefrontUI Vue components! :tada:

Now [head to the components page](../vue/components.html) to see more how can they be useful for you!

## Our dependencies

```
@storefront-ui/css @storefront-ui/shared @vueuse/core jw-paginate tabbable
```
