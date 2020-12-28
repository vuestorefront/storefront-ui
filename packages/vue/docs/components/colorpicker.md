# ColorPicker

ColorPicker [button](Button.html) and [color](SfColor.html)

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-colorpicker--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 10rem"></iframe>
  </div>

```html
<template>
  <div style="position: relative; min-height: 250px;">
    <SfColorPicker
      style="max-width: 11rem;"
      :class="customClass"
      :label="label"
      :has-close="hasClose"
      :isOpen="isOpen || !isMobile"
      @click:toggle="isOpen = !isOpen"
    >
      <SfColor
        style="margin: 0.4375rem;"
        v-for="color in colors"
        :key="color.value"
        :color="color.color"
        :selected="color.selected"
        @click="color.selected = !color.selected"
      />
    </SfColorPicker>
  </div>
</template>
<script>
import { SfColorPicker } from "@storefront-ui/vue";
import { SfColor } from "@storefront-ui/vue";
export default {
  components: {
    SfColorPicker,
    SfColor,
  },
  data() {
    return {
      isOpen: false,
      isMobile: false,
      colors: [
        { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
        { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
        {
          label: "Light Gray",
          value: "light gray",
          color: "#F1F2F3",
          selected: false,
        },
        {
          label: "Vivid rose",
          value: "vivid rose",
          color: "#DB5593",
          selected: false,
        },
        { label: "Peach", value: "peach", color: "#F59F93", selected: false },
        { label: "Citrus", value: "citrus", color: "#FFEE97", selected: false },
      ],
      label: "Choose color",
      hasClose: false,
    };
  },
};
</script>
```

## Props

- **`isOpen`**
  - _ColorPicker is open_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`label`**
  - _Label for ColorPicker_
  - **type:** `string`
  - **defaultValue:** `""`

- **`hasClose`**
  - _Close button state whether show it or not_
  - **type:** `boolean`
  - **defaultValue:** `false`

## Slots

- **`open`**
  - _Use this slot to replace open button._
  - **bindings:** `toggle`

- **`label`**
  - _Use this slot to replace label._
  - **bindings:** `label`

- **`default`**
  - _Use this slot to place content inside the color picker._

- **`close`**
  - _Use this slot to replace close button._
  - **bindings:** `hasClose`, `toggle`, `isOpen`

## Events

- **`click:toggle`**

## CSS modifiers

- **`.sf-color-picker--active`**
- **`.sf-color-picker--vertical`**
- **`.sf-color-picker--left`**

## CSS custom properties (variables)

- **`--color-picker-position`**
- **`--color-picker-top`**
- **`--color-picker-right`**
- **`--color-picker-bottom`**
- **`--color-picker-align-items`**
- **`--color-picker-width`**
- **`--color-picker-overflow`**
- **`--color-picker-transform`**
- **`--color-picker-colors-height`**
- **`--color-picker-flex-direction`**
- **`--color-picker-justify-content`**
- **`--color-picker-padding`**
- **`--color-picker-background`**
- **`--color-picker-label-margin`**
- **`--color-picker-label-color`**
- **`--color-picker-label-font`**
- **`--color-picker-label-font-weight`**
- **`--color-picker-label-font-size`**
- **`--color-picker-label-font-line-height`**
- **`--color-picker-label-font-family`**
- **`--color-picker-opacity`**
- **`--color-picker-open-padding`**
- **`--color-picker-open-button-transform-origin`**
- **`--color-picker-open-button-transform`**
- **`--color-picker-close-margin`**
- **`--color-picker-height`**
- **`--color-picker-animation-transform`**
### Overridden other components CSS variables 
- **`--button-width`**
- **`--button-padding`**
- **`--button-font`**
- **`--font-weight--light`**
- **`--button-text-transform`**
- **`--icon-color`**
- **`--icon-size`**
- **`--button-background`**
- **`--color-picker-left`**
- **`--open-button-x`**
- **`--open-button-y`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-colorpicker--common">Storybook</a>.
