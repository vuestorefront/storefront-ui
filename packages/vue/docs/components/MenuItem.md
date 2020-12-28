# MenuItem

<!-- No Component description -->

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-menuitem--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;"></iframe>
  </div>

```html
<template>
  <div style="max-width: 300px;">
    <SfMenuItem :label="label" :count="count" :icon="icon" :link="link" />
  </div>
</template>
<script>
import { SfMenuItem } from "@storefront-ui/vue";
import {} from "@storefront-ui/vue";
export default {
  components: {
    SfMenuItem,
  },
  data() {
    return {
      label: "Red",
      count: "30",
      icon: "chevron_right",
      link: "https://www.storefrontui.io/",
    };
  },
};
</script>
```

## Props

- **`label`**
  - _Menu-item label_
  - **type:** `string`
  - **defaultValue:** `""`

- **`icon`**
  - _Menu-item icon (visible on mobile)_
  - **type:** `string|array`
  - **defaultValue:** `"chevron_right"`

- **`count`**
  - _Menu-item count of items_
  - **type:** `string|number`
  - **defaultValue:** `""`

- **`link`**
  - _Menu-item link (if is empty then SfMenuItem is SfButton)_
  - **type:** `string|object`
  - **defaultValue:** `""`

## Slots

- **`icon`**
  - _for menu item icon_

- **`label`**
  - _for menu item label_
  - **bindings:** `label`

- **`count`**
  - _for items count_
  - **bindings:** `count`

- **`mobile-nav-icon`**
  - **bindings:** `icon`

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--menu-item-text-transform`**
- **`--menu-item-font`**
- **`--menu-item-font-weight`**
- **`--menu-item-font-size`**
- **`--menu-item-font-line-height`**
- **`--menu-item-font-family`**
- **`--menu-item-icon-margin`**
- **`--menu-item-count-margin`**
- **`--menu-item-count-color`**
- **`--menu-item-mobile-nav-icon-display`**
- **`--menu-item-mobile-nav-icon-margin`**
- **`--menu-item-label-color`**
### Overridden other components CSS variables 
- **`--link-text-decoration`**
- **`--button-width`**
- **`--icon-color`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-menuitem--common">Storybook</a>.
