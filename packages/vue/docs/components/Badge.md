# Badge

Badge component. Place desired content into its default slot.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-badge--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 3rem"></iframe>
  </div>

```html
<template>
  <SfBadge :class="customClass">
    {{ customLabel }}
  </SfBadge>
</template>
<script>
import { SfBadge } from "@storefront-ui/vue";
export default {
  components: {
    SfBadge,
  },
  data() {
    return {
      default: "Limited",
    };
  },
};
</script>
```

## Props

None.

## Slots

- **`default`**
  - _Use this slot to place content inside the badge_

## Events

None.

## CSS modifiers

- **`.sf-badge--full-width`**
- **`.sf-badge--number`**

## CSS custom properties (variables)

- **`--badge-width`**
- **`--badge-min-width`**
- **`--badge-height`**
- **`--badge-min-height`**
- **`--badge-padding`**
- **`--badge-background`**
- **`--badge-border`**
- **`--badge-border-radius`**
- **`--badge-color`**
- **`--badge-text-align`**
- **`--badge-font`**
- **`--badge-font-weight`**
- **`--badge-font-size`**
- **`--badge-font-line-height`**
- **`--badge-font-family`**
- **`--badge-line-height`**
### Overridden other components CSS variables 
None. 


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-badge--common">Storybook</a>.
