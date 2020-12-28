# Color

Color picker component button

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-color--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 10rem"></iframe>
  </div>

```html
<template>
  <SfColor
    :color="color"
    :selected="selected"
    :has-badge="hasBadge"
    :aria-label="color"
    style="margin: 10px;"
    :class="customClass"
    @click="selected = !selected"
  />
</template>
<script>
import { SfColor } from "@storefront-ui/vue";
export default {
  components: {
    SfColor,
  },
  data() {
    return {
      selected: true,
      color: "red",
      hasBadge: true,
    };
  },
};
</script>
```

## Props

- **`color`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`selected`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`hasBadge`**
  - **type:** `boolean`
  - **defaultValue:** `true`

## Slots

- **`badge`**
  - _Use it to replace badge to custom element_
  - **bindings:** `selected`, `hasBadge`

## Events

None.

## CSS modifiers

- **`.sf-color--rounded`**

## CSS custom properties (variables)

- **`--color-width`**
- **`--color-height`**
- **`--color-background`**
- **`--color-border-radius`**
- **`--color-box-shadow-transition`**
- **`--color-box-shadow-opacity`**
- **`--color-box-shadow`**
### Overridden other components CSS variables 
- **`--color-box-shadow-transition-duration`**
- **`--badge-padding`**
- **`--badge-border-radius`**
- **`--color-size`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-color--common">Storybook</a>.
