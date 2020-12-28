# QuantitySelector

Component with input to choose numeric values and describe quantity.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-quantityselector--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 3rem"></iframe>
  </div>

```html
<template>
  <div style="max-width: 375px;">
    <SfQuantitySelector
      v-model="value"
      aria-label="Quantity"
      :class="customClass"
    />
  </div>
</template>
<script>
import { SfQuantitySelector } from "@storefront-ui/vue";
export default {
  components: {
    SfQuantitySelector,
  },
  data() {
    return {
      value: 1,
    };
  },
};
</script>
```

## Props

- **`qty`**
  - _Quantity_
  - **type:** `number|string`
  - **defaultValue:** `1`

- **`disabled`**
  - **type:** `boolean`
  - **defaultValue:** `false`

## Slots

None.

## Events

- **`input`**

## CSS modifiers

- **`.sf-quantity-selector--secondary`**
- **`.sf-quantity-selector--transparent`**

## CSS custom properties (variables)

- **`--quantity-selector-justify-content`**
- **`--quantity-selector-height`**
- **`--quantity-selector-width`**
- **`--quantity-selector-background`**
- **`--quantity-selector-font`**
- **`--quantity-selector-font-weight`**
- **`--quantity-selector-font-size`**
- **`--quantity-selector-font-line-height`**
- **`--quantity-selector-font-family`**
- **`--quantity-selector-border`**
- **`--quantity-selector-border-width`**
- **`--quantity-selector-text-shadow`**
### Overridden other components CSS variables 
- **`--button-height`**
- **`--button-padding`**
- **`--button-background`**
- **`--button-color`**
- **`--button-box-shadow`**
- **`--input-bar-display`**
- **`--input-height`**
- **`--input-padding`**
- **`--input-margin`**
- **`--input-border`**
- **`--input-text-align`**
- **`--button-border-radius`**
- **`--button-size`**
- **`--input-width`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-quantityselector--common">Storybook</a>.
