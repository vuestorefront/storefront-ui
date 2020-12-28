# Modal

Modal component with overlay. Example usage can involve many cases like informative or decision dialogue.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-modal--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 10rem"></iframe>
  </div>

```html
<template>
  <SfModal
    :visible="visible"
    :title="title"
    :overlay="overlay"
    :cross="cross"
    :persistent="persistent"
    @close="visible = false"
  >
    <p>HELLO STOREFRONT UI!</p>
    <form action="">
      <input type="text" />
      <input type="text" />
      <button>hello</button>
    </form>
  </SfModal>
</template>
<script>
import { SfModal } from "@storefront-ui/vue";
export default {
  components: {
    SfModal,
  },
  data() {
    return {
      visible: true,
      title: "My title",
      overlay: true,
      cross: true,
      persistent: false,
    };
  },
};
</script>
```

## Props

- **`title`**
  - _Heading title of the modal_
  - **type:** `string`
  - **defaultValue:** `""`

- **`visible`**
  - _Visibility of the modal_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`cross`**
  - _Cross closing modal button_
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`overlay`**
  - _Whether to show the overlay_
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`persistent`**
  - _If true clicking outside will not dismiss the modal_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`transitionOverlay`**
  - _overlay transition effect_
  - **type:** `string`
  - **defaultValue:** `"sf-fade"`

- **`transitionModal`**
  - _overlay transition effect_
  - **type:** `string`
  - **defaultValue:** `"sf-fade"`

## Slots

- **`modal-bar`**
  - _Use this slot to place content inside the modal bar._

- **`close`**
  - _Use this slot to place content inside the close button._

- **`default`**
  - _Use this slot to place content inside the modal._

## Events

- **`close`**

## CSS modifiers

None.

## CSS custom properties (variables)

### Overridden other components CSS variables 
- **`--modal-width`**
- **`--modal-top`**
- **`--modal-left`**
- **`--modal-bottom`**
- **`--modal-right`**
- **`--modal-transform`**
- **`--modal-height`**
- **`--modal-max-height`**
- **`--modal-content-padding`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-modal--common">Storybook</a>.
