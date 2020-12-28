# Banner

Banner component which features various text levels, a background and a [button](button.html).

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-banner--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 10rem"></iframe>
  </div>

```html
<template>
  <div style="max-width: 77.5rem;">
    <SfBanner
      :class="customClass"
      :title="title"
      :subtitle="subtitle"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background"
    />
  </div>
</template>
<script>
import { SfBanner } from "@storefront-ui/vue";
export default {
  components: {
    SfBanner,
  },
  data() {
    return {
      title: "Eco Sandals",
      subtitle: "Summer shoes",
      description:
        "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort.",
      buttonText: "Shop Now",
      image: {
        mobile: "/assets/storybook/SfBanner/Banner2.jpg",
        desktop: "/assets/storybook/SfBanner/Banner2.jpg",
      },
      background: "#e1e3e2",
    };
  },
};
</script>
```

## Props

- **`title`**
  - _Banner title_
  - **type:** `string`
  - **defaultValue:** `""`

- **`subtitle`**
  - _Banner subtitle (at the top)_
  - **type:** `string`
  - **defaultValue:** `""`

- **`description`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`buttonText`**
  - _text that will be displayed inside the button. You can replace the button  with "call-to-action" slot_
  - **type:** `string`
  - **defaultValue:** `""`

- **`background`**
  - _Background color in HEX (eg #FFFFFF)_
  - **type:** `string`
  - **defaultValue:** `""`

- **`image`**
  - _Background image. Influenced by $banner-background-size, $banner-background-position CSS props._
  - **type:** `string|object`
  - **defaultValue:** `""`

## Slots

- **`subtitle`**
  - **bindings:** `subtitle`

- **`title`**
  - **bindings:** `title`

- **`description`**
  - **bindings:** `description`

- **`call-to-action`**
  - **bindings:** `buttonText`

## Events

None.

## CSS modifiers

- **`.sf-banner--right`**

## CSS custom properties (variables)

- **`--banner-display`**
- **`--banner-align-items`**
- **`--banner-justify-content`**
- **`--banner-height`**
- **`--banner-width`**
- **`--banner-padding`**
- **`--banner-background`**
- **`--banner-background-size`**
- **`--banner-container-width`**
- **`--banner-container-justify-content`**
- **`--banner-container-align-items`**
- **`--banner-container-flex-direction`**
- **`--banner-subtitle-margin`**
- **`--banner-color`**
- **`--banner-subtitle-font`**
- **`--banner-subtitle-font-weight`**
- **`--banner-subtitle-font-size`**
- **`--banner-subtitle-font-line-height`**
- **`--banner-subtitle-font-family`**
- **`--banner-subtitle-text-transform`**
- **`--banner-title-margin`**
- **`--banner-title-font`**
- **`--banner-title-font-weight`**
- **`--banner-title-font-size`**
- **`--banner-title-font-line-height`**
- **`--banner-title-font-family`**
- **`--banner-title-text-transform`**
- **`--banner-display-description`**
- **`--banner-description-margin`**
- **`--banner-description-font`**
- **`--banner-description-font-weight`**
- **`--banner-description-font-size`**
- **`--banner-description-font-line-height`**
- **`--banner-description-font-family`**
- **`--banner-display-call-to-action`**
- **`--_banner-background-image`**
### Overridden other components CSS variables 
- **`--banner-background-position`**
- **`--banner-subtitle-color`**
- **`--button-padding`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-banner--common">Storybook</a>.
