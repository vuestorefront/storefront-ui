# Price

Price information component with optional display of previous price.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-price--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 4rem"></iframe>
  </div>

```html
<template>
  <SfPrice :regular="regular" />
</template>
<script>
import { SfPrice } from "@storefront-ui/vue";
export default {
  components: {
    SfPrice,
  },
  data() {
    return {
      regular: "$200.00",
    };
  },
};
</script>
```

## Props

- **`regular`**
  - _Regular/old price value. Crossed out if `special` is provided_
  - **type:** `string|number`
  - **defaultValue:** `null`

- **`special`**
  - _Special price value_
  - **type:** `string|number`
  - **defaultValue:** `null`

## Slots

- **`regular`**
  - _Custom regular price_
  - **bindings:** `regular`, `special`

- **`old`**
  - _Custom old price (value from regular)_
  - **bindings:** `regular`, `special`

- **`special`**
  - _Custom special price_
  - **bindings:** `special`

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--price-flex-wrap`**
- **`--price-flex-direction`**
- **`--price-align-items`**
- **`--price-justify-content`**
- **`--price-regular-margin`**
- **`--price-regular-color`**
- **`--price-regular-font`**
- **`--price-regular-font-weight`**
- **`--price-regular-font-size`**
- **`--price-regular-font-line-height`**
- **`--price-regular-font-family`**
- **`--price-regular-text-decoration`**
- **`--price-special-margin`**
- **`--price-special-color`**
- **`--price-special-font`**
- **`--price-special-font-weight`**
- **`--price-special-font-size`**
- **`--price-special-font-line-height`**
- **`--price-special-font-family`**
- **`--price-special-text-decoration`**
- **`--price-old-margin`**
- **`--price-old-color`**
- **`--price-old-font`**
- **`--price-old-font-weight`**
- **`--price-old-font-size`**
- **`--price-old-font-line-height`**
- **`--price-old-font-family`**
- **`--price-old-text-decoration`**
### Overridden other components CSS variables 
None. 


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-price--common">Storybook</a>.
