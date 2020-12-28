# Chevron

Chevron component

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-chevron--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 3rem"></iframe>
  </div>

```html
<template>
  <SfChevron :class="customClass" />
</template>
<script>
import { SfChevron } from "@storefront-ui/vue";
export default {
  components: {
    SfChevron,
  },
};
</script>
```

## Props

None.

## Slots

- **`default`**
  - _Custom chevron markup_

## Events

None.

## CSS modifiers

- **`.sf-chevron__bar--left`**
- **`.sf-chevron__bar--right`**
- **`.sf-chevron--top`**
- **`.sf-chevron--left`**
- **`.sf-chevron--right`**

## CSS custom properties (variables)

- **`--chevron-position`**
- **`--chevron-size`**
- **`--chevron-background`**
- **`--chevron-color`**
- **`--chevron-translateX`**
### Overridden other components CSS variables 
- **`--chevron-rotate`**
- **`--chevron-translateY`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-chevron--common">Storybook</a>.
