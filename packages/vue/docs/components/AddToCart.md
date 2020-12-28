# AddToCart

Add-to-cart [button](button.html) and quantity input field with maximum stock validation.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-addtocart--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 5rem"></iframe>
  </div>

```html
<template>
  <div style="max-width: 21.25rem;">
    <SfAddToCart v-model="qty" :disabled="disabled" @click="() => {}" />
  </div>
</template>
<script>
import { SfAddToCart } from "@storefront-ui/vue";
export default {
  components: {
    SfAddToCart,
  },
  data() {
    return {
      qty: 1,
      disabled: false,
    };
  },
};
</script>
```

## Props

- **`disabled`**
  - _Boolean to indicate whether product. can be added to cart_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`qty`**
  - _Selected quantity_
  - **type:** `number|string`
  - **defaultValue:** `1`

## Slots

- **`quantity-select-input`**
  - **bindings:** `qty`

- **`add-to-cart-btn`**

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--add-to-cart-select-quantity-margin`**
### Overridden other components CSS variables 
- **`--button-font`**
- **`--font-weight--semibold`**
- **`--button-width`**
- **`--add-to-cart-select-quantity-display`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-addtocart--common">Storybook</a>.
