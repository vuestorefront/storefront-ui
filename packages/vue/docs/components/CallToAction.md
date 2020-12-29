# CallToAction

CTA component with button and text

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-calltoaction--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 5rem"></iframe>
  </div>

```html
<template>
  <div style="max-width: 1240px;">
    <SfCallToAction
      :title="title"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background"
    />
  </div>
</template>
<script>
import { SfCallToAction } from "@storefront-ui/vue";
export default {
  components: {
    SfCallToAction,
  },
  data() {
    return {
      title: "Subscribe to Newsletters",
      description:
        "Be aware of upcoming sales and events. Receive gifts and special offers!",
      buttonText: "Subscribe",
      image: "assets/storybook/Home/newsletter.jpg",
      background: "#e1e3e2",
    };
  },
};
</script>
```

## Props

- **`title`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`buttonText`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`description`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`background`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`image`**
  - **type:** `string|object`
  - **defaultValue:** `""`

## Slots

- **`title`**
  - _Use this slot to replace title_
  - **bindings:** `title`

- **`description`**
  - _Use this slot to replace description_
  - **bindings:** `description`

- **`button`**
  - _Use this slot to replace bottom button_
  - **bindings:** `buttonText`

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--call-to-action-flex-direction`**
- **`--call-to-action-align-items`**
- **`--call-to-action-justify-content`**
- **`--call-to-action-height`**
- **`--call-to-action-padding`**
- **`--call-to-action-background`**
- **`--call-to-action-background-size`**
- **`--call-to-action-text-container-justify-content`**
- **`--call-to-action-text-container-flex-direction`**
- **`--call-to-action-text-container-width`**
- **`--call-to-action-text-container-margin`**
- **`--call-to-action-title-margin`**
- **`--call-to-action-color`**
- **`--call-to-action-title-font`**
- **`--call-to-action-title-font-weight`**
- **`--call-to-action-title-font-size`**
- **`--call-to-action-title-font-line-height`**
- **`--call-to-action-title-font-family`**
- **`--call-to-action-title-text-transform`**
- **`--call-to-action-description-margin`**
- **`--call-to-action-description-font`**
- **`--call-to-action-description-font-weight`**
- **`--call-to-action-description-font-size`**
- **`--call-to-action-description-font-line-height`**
- **`--call-to-action-description-font-family`**
### Overridden other components CSS variables 
- **`--call-to-action-background-position`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-calltoaction--common">Storybook</a>.
