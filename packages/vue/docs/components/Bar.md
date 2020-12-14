# Bar

Bar component for mobile components.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-bar--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 4rem"></iframe>
  </div>

```html
<template>
  <SfBar :title="title" :back="back" :close="close" />
</template>
<script>
import { SfBar } from "@storefront-ui/vue";
export default {
  components: {
    SfBar,
  },
  data() {
    return {
      title: "Dresses",
      back: true,
      close: true,
    };
  },
};
</script>
```

## Props

- **`title`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`back`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`close`**
  - **type:** `boolean`
  - **defaultValue:** `false`

## Slots

- **`back`**

- **`title`**
  - **bindings:** `title`

- **`close`**

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--bar-height`**
- **`--bar-padding`**
- **`--bar-background`**
- **`--bar-font`**
- **`--bar-font-weight`**
- **`--bar-font-size`**
- **`--bar-font-line-height`**
- **`--bar-font-family`**
### Overridden other components CSS variables 
- **`--icon-width`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-bar--common">Storybook</a>.
