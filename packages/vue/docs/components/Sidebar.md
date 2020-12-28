# Sidebar

Sidebar component disabling on Cancel button click.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-sidebar--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 35rem"></iframe>
  </div>

```html
<template>
  <SfSidebar
    :visible="isSidebarOpen"
    @close="isSidebarOpen = false"
    :title="title"
    :subtitle="subtitle"
    :heading-level="headingLevel"
    :button="button"
    :overlay="overlay"
    :class="customClass"
    :persistent="persistent"
  >
    Total items: 0
  </SfSidebar>
</template>
<script>
import { SfSidebar } from "@storefront-ui/vue";
export default {
  components: {
    SfSidebar,
  },
  data() {
    return {
      isSidebarOpen: true,
      title: "My Cart",
      subtitle: "",
      headingLevel: 3,
      overlay: true,
      button: true,
      persistent: false,
    };
  },
};
</script>
```

## Props

- **`title`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`subtitle`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`headingLevel`**
  - **type:** `number`
  - **defaultValue:** `3`

- **`button`**
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`visible`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`overlay`**
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`persistent`**
  - _If true clicking outside will not dismiss the sidebar_
  - **type:** `boolean`
  - **defaultValue:** `false`

## Slots

- **`bar`**
  - _Use this slot to place content inside the modal bar._

- **`circle-icon`**
  - _Use this slot to replace close icon._
  - **bindings:** `close`, `button`

- **`title`**
  - _Use this slot to replace SfHeading component._
  - **bindings:** `title`, `subtitle`, `headingLevel`

- **`content-top`**
  - _Use this slot to add sticky top content._

- **`default`**
  - _Use this slot to add SfSidebar content._

- **`content-bottom`**

## Events

- **`close`**

## CSS modifiers

- **`.sf-sidebar--right`**

## CSS custom properties (variables)

### Overridden other components CSS variables 
- **`--heading-title-color`**
- **`--heading-title-font`**
- **`--font-size--xl`**
- **`--heading-title-font`**
- **`--font-weight--semibold`**
- **`--heading-description-font`**
- **`--font-size--xl`**
- **`--circle-icon-position`**
- **`--sidebar-width`**
- **`--sidebar-content-padding`**
- **`--sidebar-left`**
- **`--sidebar-right`**
- **`--sidebar-top-padding`**
- **`--sidebar-circle-icon-top`**
- **`--sidebar-circle-icon-transform`**
- **`--button-background`**
- **`--icon-color`**
- **`--button-box-shadow-opacity`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-sidebar--common">Storybook</a>.
