# Button

Base button component.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-button--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 4.5rem"></iframe>
  </div>

```html
<template>
  <SfButton :class="customClass" :disabled="disabled" :link="link">
    {{ customLabel }}
  </SfButton>
</template>
<script>
import { SfButton } from "@storefront-ui/vue";
export default {
  components: {
    SfButton,
  },
  data() {
    return {
      default: "Shop now",
      disabled: false,
      link: "",
    };
  },
};
</script>
```

## Props

- **`disabled`**
  - _Native button disabled attribute_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`link`**
  - _Link for "a" tag, when empty it is button._
  - **type:** `string|object`
  - **defaultValue:** `""`

## Slots

- **`default`**
  - _Use this slot to place content inside the button._

## Events

None.

## CSS modifiers

- **`.sf-button--pure`**
- **`.sf-button--full-width`**
- **`.sf-button--outline`**
- **`.sf-button--text`**
- **`.sf-button--underlined`**

## CSS custom properties (variables)

- **`--button-color`**
- **`--button-size`**
- **`--button-display`**
- **`--button-padding`**
- **`--button-background`**
- **`--button-transition`**
- **`--button-text-transform`**
- **`--button-text-decoration`**
- **`--button-cursor`**
- **`--button-border-radius`**
- **`--button-wrap`**
- **`--button-font`**
- **`--button-font-weight`**
- **`--button-font-size`**
- **`--button-font-line-height`**
- **`--button-font-family`**
- **`--button-border`**
- **`--button-border-width`**
- **`--button-box-shadow-transition`**
- **`--button-box-shadow-opacity`**
- **`--button-box-shadow`**
### Overridden other components CSS variables 
- **`--link-color`**
- **`--button-width`**
- **`--button-border-color`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-button--common">Storybook</a>.
