# Arrow

Arrow component for sliders and navigation.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-arrow--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 5rem"></iframe>
  </div>

```html
<template>
  <SfArrow :class="customClass" :disabled="disabled" aria-label="Arrow label" />
</template>
<script>
import { SfArrow } from "@storefront-ui/vue";
import {} from "@storefront-ui/vue";
export default {
  components: {
    SfArrow,
  },
  data() {
    return {
      disabled: false,
    };
  },
};
</script>
```

## Props

None.

## Slots

- **`default`**
  - _Use this slot to replace arrow icon_

## Events

None.

## CSS modifiers

- **`.sf-arrow--long`**
- **`.sf-arrow--transparent`**
- **`.sf-arrow--rounded`**
- **`.sf-arrow--no-shadow`**
- **`.sf-arrow--right`**
- **`.sf-arrow--top`**
- **`.sf-arrow--down`**

## CSS custom properties (variables)

- **`--arrow-justify-content`**
- **`--arrow-icon-transform`**
### Overridden other components CSS variables 
- **`--button-width`**
- **`--button-height`**
- **`--button-padding`**
- **`--button-background`**
- **`--button-transition`**
- **`--icon-color`**
- **`--button-box-shadow`**
- **`--box-shadow-transition-opacity-duration`**
- **`--button-box-shadow-opacity`**
- **`--button-border-radius`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-arrow--common">Storybook</a>.
