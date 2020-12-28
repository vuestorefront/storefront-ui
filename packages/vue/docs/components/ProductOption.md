# ProductOption

Component with label used as part of product description.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-productoption--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 5rem"></iframe>
  </div>

```html
<template>
  <div style="max-width: 300px;">
    <SfProductOption :color="color" :label="label" />
  </div>
</template>
<script>
import { SfProductOption } from "@storefront-ui/vue";
export default {
  components: {
    SfProductOption,
  },
  data() {
    return {
      color: "red",
      label: "Red",
    };
  },
};
</script>
```

## Props

- **`label`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`color`**
  - **type:** `string`
  - **defaultValue:** `""`

## Slots

- **`color`**
  - **bindings:** `color`

- **`label`**
  - **bindings:** `label`

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--product-option-font`**
- **`--product-option-font-weight`**
- **`--product-option-font-size`**
- **`--product-option-font-line-height`**
- **`--product-option-font-family`**
- **`--product-option-size`**
- **`--product-option-color-margin`**
- **`--product-option-border`**
- **`--product-option-border-width`**
- **`--product-option-border-radius`**
### Overridden other components CSS variables 
None. 


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-productoption--common">Storybook</a>.
