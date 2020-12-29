# Pagination

Pagination component with indicators.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-pagination--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 5rem"></iframe>
  </div>

```html
<template>
  <SfPagination
    :current="current"
    :visible="visible"
    :total="total"
    :has-arrows="hasArrows"
    @click="(value) => (current = value)"
  />
</template>
<script>
import { SfPagination } from "@storefront-ui/vue";
export default {
  components: {
    SfPagination,
  },
  data() {
    return {
      current: 2,
      visible: 5,
      total: 12,
      hasArrows: true,
    };
  },
};
</script>
```

## Props

- **`total`**
  - _Total number of pages_
  - **type:** `number`
  - **defaultValue:** `0`

- **`visible`**
  - _Maximum visible pagination items_
  - **type:** `number`
  - **defaultValue:** `5`

- **`hasArrows`**
  - _Status of arrows display_
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`current`**
  - _Current page number, for non router_
  - **type:** `number`
  - **defaultValue:** `1`

- **`pageParamName`**
  - _Name of page query param for router_
  - **type:** `string`
  - **defaultValue:** `"page"`

## Slots

- **`prev`**
  - _Custom markup for previous page button_
  - **bindings:** `isDisabled`, `prev`

- **`number`**
  - **bindings:** `page`

- **`points`**

- **`next`**
  - _Custom markup for previous page button_
  - **bindings:** `isDisabled`, `next`

## Events

- **`click`**

## CSS modifiers

- **`.sf-pagination__item--next`**

## CSS custom properties (variables)

- **`--pagination-item-color`**
- **`--pagination-item-width`**
- **`--pagination-item-height`**
- **`--pagination-item-margin`**
- **`--pagination-font`**
- **`--pagination-font-weight`**
- **`--pagination-font-size`**
- **`--pagination-font-line-height`**
- **`--pagination-font-family`**
### Overridden other components CSS variables 
- **`--link-text-decoration`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-pagination--common">Storybook</a>.
