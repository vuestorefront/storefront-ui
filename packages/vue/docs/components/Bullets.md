# Bullets

Bullet-style indicator for paginated view containers.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-bullets--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 3.5rem"></iframe>
  </div>

```html
<template>
  <SfBullets
    :total="total"
    :current="current"
    @click="(value) => (current = value)"
  />
</template>
<script>
import { SfBullets } from "@storefront-ui/vue";
export default {
  components: {
    SfBullets,
  },
  data() {
    return {
      current: 1,
      total: 3,
    };
  },
};
</script>
```

## Props

- **`total`**
  - _Number of bullets in total (active + inactive)_
  - **type:** `number`
  - **defaultValue:** `0`

- **`current`**
  - _Index of the currently active bullet (0-indexed)_
  - **type:** `number`
  - **defaultValue:** `0`

## Slots

- **`inactive`**
  - _custom icon for inactive bullet_
  - **bindings:** `class`, `index`, `go`

- **`active`**
  - _custom icon for active bullet_

## Events

- **`click`**

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--bullet-width`**
- **`--bullet-height`**
- **`--bullet-margin`**
- **`--bullet-border-radius`**
- **`--bullet-background`**
- **`--bullet-box-shadow-transition`**
- **`--bullet-box-shadow-opacity`**
- **`--bullet-box-shadow`**
### Overridden other components CSS variables 
None. 


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-bullets--common">Storybook</a>.
