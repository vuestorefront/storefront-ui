# Overlay

Fullscreen overlay, emitting click events.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-overlay--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 5rem"></iframe>
  </div>

```html
<template>
  <SfOverlay :visible="visible" :transition="transition" />
</template>
<script>
import { SfOverlay } from "@storefront-ui/vue";
export default {
  components: {
    SfOverlay,
  },
  data() {
    return {
      transition: "sf-fade",
      visible: true,
    };
  },
};
</script>
```

## Props

- **`transition`**
  - _Transition effect to apply when overlay visibility is changed_
  - **type:** `string`
  - **defaultValue:** `"sf-fade"`

- **`visible`**
  - _Visibility state_
  - **type:** `boolean`
  - **defaultValue:** `false`

## Slots

None.

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--overlay-z-index`**
- **`--overlay-background`**
### Overridden other components CSS variables 
None. 


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-overlay--common">Storybook</a>.
