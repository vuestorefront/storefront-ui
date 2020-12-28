# Link




[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-link--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;"></iframe>
  </div>

```html
<template>
  <SfLink target="_blank" :link="link">
    Check this out!
  </SfLink>
</template>
<script>
import { SfLink } from "@storefront-ui/vue";
export default {
  components: {
    SfLink,
  },
  data() {
    return {
      link: "https://www.storefrontui.io/",
    };
  },
};
</script>
```

## Props

- **`link`**
  - _Page route_
  - **type:** `string|object`
  - **defaultValue:** `""`

## Slots

- **`default`**

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--link-color`**
- **`--link-font`**
- **`--link-font-weight`**
- **`--link-font-size`**
- **`--link-font-line-height`**
- **`--link-font-family`**
- **`--link-text-decoration`**
- **`--c-link`**
### Overridden other components CSS variables 
None. 


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-link--common">Storybook</a>.
