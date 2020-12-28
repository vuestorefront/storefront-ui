# Characteristic

Component with icon and text used for describing product characteristics.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-characteristic--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 5rem"></iframe>
  </div>

```html
<template>
  <SfCharacteristic
    :title="title"
    :description="description"
    :icon="icon"
    :size-icon="sizeIcon"
    :color-icon="colorIcon"
  />
</template>
<script>
import { SfCharacteristic } from "@storefront-ui/vue";
export default {
  components: {
    SfCharacteristic,
  },
  data() {
    return {
      title: "Safety",
      description: "It carefully packaged with a personal touch",
      icon: "safety",
      sizeIcon: "",
      colorIcon: "",
    };
  },
};
</script>
```

## Props

- **`colorIcon`**
  - _One of predefined SfIcon colors, default is black._
  - **type:** `string`
  - **defaultValue:** `""`

- **`sizeIcon`**
  - _One of predefined SfIcon sizes._
  - **type:** `string`
  - **defaultValue:** `""`

- **`icon`**
  - _Svg file iconPath_
  - **type:** `string|array`
  - **defaultValue:** `""`

- **`title`**
  - _Characteristic title_
  - **type:** `string`
  - **defaultValue:** `""`

- **`description`**
  - _Characteristic description_
  - **type:** `string`
  - **defaultValue:** `""`

## Slots

- **`icon`**
  - _Icon. Slot content will replace SfIcon atom component_
  - **bindings:** `colorIcon`, `sizeIcon`, `icon`

- **`text`**
  - _Characteristic text. Slot content will replace default title and description text_
  - **bindings:** `title`, `description`

- **`title`**
  - _Characteristic title. Slot content will replace default title text_
  - **bindings:** `title`

- **`description`**
  - _Characteristic description. Slot content will replace default description text_
  - **bindings:** `description`

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--characteristic-margin`**
- **`--characteristic-title-font`**
- **`--characteristic-title-font-weight`**
- **`--characteristic-title-font-size`**
- **`--characteristic-title-font-line-height`**
- **`--characteristic-title-font-family`**
- **`--characteristic-description-font`**
- **`--characteristic-description-font-weight`**
- **`--characteristic-description-font-size`**
- **`--characteristic-description-font-line-height`**
- **`--characteristic-description-font-family`**
### Overridden other components CSS variables 
- **`--icon-color`**
- **`--icon-size`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-characteristic--common">Storybook</a>.
