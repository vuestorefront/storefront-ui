# Scrollable

Scrollable wrapper with styled bar and toggle button.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-scrollable--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 15rem"></iframe>
  </div>

```html
<template>
  <SfScrollable
    :show-text="showText"
    :hide-text="hideText"
    :max-content-height="maxContentHeight"
    style="max-width: 13.75rem;"
  >
    <SfProductOption
      v-for="(option, key) in options"
      :key="option.color"
      :color="option.color"
      :label="option.label"
      :style="{ marginBottom: key < options.length - 1 ? '8px' : undefined }"
    />
  </SfScrollable>
</template>
<script>
import { SfScrollable } from "@storefront-ui/vue";
import { SfProductOption } from "@storefront-ui/vue";
export default {
  components: {
    SfScrollable,
    SfProductOption,
  },
  data() {
    return {
      options: [
        { color: "red", label: "Red" },
        { color: "blue", label: "Blue" },
        { color: "green", label: "Green" },
        { color: "black", label: "Black" },
        { color: "navy", label: "Navy" },
        { color: "pink", label: "Pink" },
      ],
      showText: "View all colors",
      hideText: "Hide colors",
      maxContentHeight: "6.875rem",
    };
  },
};
</script>
```

## Props

- **`maxContentHeight`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`showText`**
  - **type:** `string`
  - **defaultValue:** `"Show"`

- **`hideText`**
  - **type:** `string`
  - **defaultValue:** `"Hide"`

## Slots

- **`default`**

- **`view-all`**
  - **bindings:** `hasScroll`, `showText`, `hideText`

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

### Overridden other components CSS variables 
- **`--scrollable-max-height`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-scrollable--common">Storybook</a>.
