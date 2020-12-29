# SearchBar

Search bar component with placeholder text and icon.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-searchbar--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 6rem"></iframe>
  </div>

```html
<template>
  <SfSearchBar
    :icon="icon"
    :class="customClass"
    :placeholder="placeholder"
    @click="alert(value)"
    @enter="alert(value)"
    aria-label="Search"
    v-model="value"
  />
</template>
<script>
import { SfSearchBar } from "@storefront-ui/vue";
export default {
  components: {
    SfSearchBar,
  },
  data() {
    return {
      value: "",
      placeholder: "Search for items",
      icon: { color: "#43464E", size: "1.25rem" },
    };
  },
};
</script>
```

## Props

- **`placeholder`**
  - _Text for placeholder_
  - **type:** `string`
  - **defaultValue:** `""`

- **`value`**
  - _Value that will be displayed in search bar_
  - **type:** `number|string`
  - **defaultValue:** `null`

- **`icon`**
  - _Object to define icon look. Should have values for color and size_
  - **type:** `object`
  - **defaultValue:** `() => {}`

## Slots

- **`icon`**

## Events

None.

## CSS modifiers

- **`.sf-search-bar--position-center`**
- **`.sf-search-bar--no-icon`**

## CSS custom properties (variables)

- **`--search-bar-display`**
- **`--search-bar-background`**
- **`--search-bar-padding`**
- **`--search-bar-width`**
- **`--search-bar-height`**
- **`--search-bar-button-right`**
- **`--search-bar-icon-display`**
- **`--search-bar-input-text-align`**
- **`--search-bar-font`**
- **`--search-bar-font-weight`**
- **`--search-bar-font-size`**
- **`--search-bar-font-line-height`**
- **`--search-bar-font-family`**
- **`--search-bar-border`**
- **`--search-bar-border-width`**
- **`--search-bar-placeholder-color`**
- **`--search-bar-placeholder-transition`**
- **`--search-bar-placeholder-color-focus`**
- **`--search-bar-icon-flex-direction`**
### Overridden other components CSS variables 
- **`--icon-size`**
- **`--search-bar-border-color`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-searchbar--common">Storybook</a>.
