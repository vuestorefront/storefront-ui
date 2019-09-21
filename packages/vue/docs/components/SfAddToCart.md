# AddToCart

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`canAddToCart`**
  - _Boolean to indicate whether product. can be added to cart_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`stock`**
  - _Stock quantity of product_
  - **type:** `number`
  - **defaultValue:** `1`

- **`qty`**
  - _Selected quantity_
  - **type:** `string`
  - **defaultValue:** `"1"`


## Slots

- **`add-to-cart-btn`**

- **`quantity-select-input`**
  - **bindings:** `qty`, `stock`


## Events

- **`input`**


## CSS modifiers

None.


## SCSS variables

```scss
$add-to-cart__select-quantity-min-width: 4.625rem !default;
$add-to-cart__select-quantity-max-width: 5.625rem !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfAddToCart.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfAddToCart.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfAddToCart.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
