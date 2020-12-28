# BottomModal

Bottom Modal component

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-bottommodal--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 20rem"></iframe>
  </div>

```html
<template>
  <div>
    <div style="position: relative;">
      <SfButton @click="isOpen = !isOpen">
        Open bottom modal
      </SfButton>
      <SfBottomModal
        :transition="transition"
        :is-open="isOpen"
        :title="title"
        @click:close="isOpen = !isOpen"
      >
        YOUR CONTENT
      </SfBottomModal>
    </div>
  </div>
</template>
<script>
import { SfBottomModal } from "@storefront-ui/vue";
import { SfButton } from "@storefront-ui/vue";
import {} from "@storefront-ui/vue";
export default {
  components: {
    SfBottomModal,
    SfButton,
  },
  data() {
    return {
      isOpen: false,
      title: "Title",
      transition: "sf-bottom-modal",
    };
  },
};
</script>
```

## Props

- **`isOpen`**
  - _Bottom Modal is open_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`title`**
  - _Bottom Modal title_
  - **type:** `string`
  - **defaultValue:** `""`

- **`transition`**
  - **type:** `string|boolean`
  - **defaultValue:** `""`

## Slots

- **`title`**
  - _Use this slot to replace title._

- **`close-desktop`**
  - _Use this slot to replace close button for desktop._

- **`default`**
  - _Use this slot to replace content._

- **`close-mobile`**
  - _Use this slot to replace close button for mobile._

## Events

- **`click:close`**

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--bottom-modal-position`**
- **`--bottom-modal-width`**
- **`--bottom-modal-top`**
- **`--bottom-modal-bottom`**
- **`--bottom-modal-right`**
- **`--bottom-modal-transform`**
- **`--bottom-modal-container-padding`**
- **`--bottom-modal-background`**
- **`--bottom-modal-container-font`**
- **`--bottom-modal-container-font-weight`**
- **`--bottom-modal-container-font-size`**
- **`--bottom-modal-container-font-line-height`**
- **`--bottom-modal-container-font-family`**
- **`--bottom-modal-height`**
- **`--bottom-modal-title-padding`**
- **`--bottom-modal-title-color`**
- **`--bottom-modal-title-text-align`**
### Overridden other components CSS variables 
- **`--characteristic-description-font`**
- **`--font-size--base`**
- **`--characteristic-description-font`**
- **`--font-weight--semibold`**
- **`--list-item-margin`**
- **`--button-text-transform`**
- **`--characteristic-description-font`**
- **`--font-size--sm`**
- **`--heading-title-font`**
- **`--font-weight--normal`**
- **`--heading-title-font`**
- **`--font-size--xs`**
- **`--heading-title-font`**
- **`--font-weight--bold`**
- **`--button-display`**
- **`--button-background`**
- **`--button-color`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-bottommodal--common">Storybook</a>.
