# Breadcrumbs

Component which renders a breadcrumb with router links for indicating the level of navigation the user is currently in.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-breadcrumbs--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 3.5rem"></iframe>
  </div>

```html
<template>
  <SfBreadcrumbs :breadcrumbs="breadcrumbs" />
</template>
<script>
import { SfBreadcrumbs } from "@storefront-ui/vue";
export default {
  components: {
    SfBreadcrumbs,
  },
  data() {
    return {
      breadcrumbs: [
        { text: "Home", link: "#" },
        { text: "Category", link: "#" },
        { text: "Pants", link: "#" },
      ],
    };
  },
};
</script>
```

## Props

- **`breadcrumbs`**
  - _List of breadcrumbs (array of nested objects: `[ { text, route } ]`)_
  - **type:** `array`
  - **defaultValue:** `() => []`

## Slots

- **`link`**
  - _Custom markup for previous pages (binds `breadcrumb` object)_
  - **bindings:** `breadcrumb`

- **`current`**
  - _Custom markup for current page (binds `breadcrumb` object)_
  - **bindings:** `breadcrumb`

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

### Overridden other components CSS variables 
- **`--link-color`**
- **`--link-text-decoration`**
- **`--breadcrumbs-font`**
- **`--font-size--sm`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-breadcrumbs--common">Storybook</a>.
