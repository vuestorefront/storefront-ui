# Filter

Filter component with color, name and counter of items.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-filter--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 3rem"></iframe>
  </div>

```html
<template>
  <SfFilter
    :label="label"
    :count="count"
    :selected="selected"
    :color="color"
    @change="selected = !selected"
    style="max-width: 22.875rem;"
  />
</template>
<script>
import { SfFilter } from "@storefront-ui/vue";
export default {
  components: {
    SfFilter,
  },
  data() {
    return {
      selected: true,
      label: "Red",
      count: 30,
      color: "",
    };
  },
};
</script>
```

## Props

- **`label`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`count`**
  - **type:** `string|number`
  - **defaultValue:** `""`

- **`selected`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`color`**
  - **type:** `string`
  - **defaultValue:** `""`

## Slots

- **`color`**
  - **bindings:** `color`, `selected`

- **`label`**
  - **bindings:** `label`

- **`count`**
  - **bindings:** `count`

## Events

None.

## CSS modifiers

- **`.sf-filter--active`**

## CSS custom properties (variables)

- **`--filter-color-margin`**
- **`--filter-label-display`**
- **`--filter-label-align-items`**
- **`--filter-label-margin`**
- **`--filter-label-color`**
- **`--filter-label-font`**
- **`--filter-label-font-weight`**
- **`--filter-label-font-size`**
- **`--filter-label-font-line-height`**
- **`--filter-label-font-family`**
- **`--filter-label-text-decoration`**
- **`--filter-label-transform`**
- **`--filter-count-display`**
- **`--filter-count-margin`**
- **`--filter-count-color`**
- **`--filter-count-font`**
- **`--filter-count-font-weight`**
- **`--filter-count-font-size`**
- **`--filter-count-font-line-height`**
- **`--filter-count-font-family`**
### Overridden other components CSS variables 
- **`--checkbox-order`**
- **`--checkbox-border-radius`**
- **`--color-size`**
- **`--checkbox-border-color`**
- **`--checkbox-display`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-filter--common">Storybook</a>.
