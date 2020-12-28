# CircleIcon

Round hover-animated component with an icon, e.g. usable for major navigation/action items.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-circleicon--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 5.5rem"></iframe>
  </div>

```html
<template>
  <SfCircleIcon
    :class="customClass"
    :icon="icon"
    :has-badge="hasBadge"
    :badge-label="badgeLabel"
    aria-label="Go to Home"
    :disabled="disabled"
    :style="{ margin: '.5rem' }"
  />
</template>
<script>
import { SfCircleIcon } from "@storefront-ui/vue";
export default {
  components: {
    SfCircleIcon,
  },
  data() {
    return {
      icon: "home",
      hasBadge: false,
      badgeLabel: "99",
      disabled: false,
    };
  },
};
</script>
```

## Props

- **`icon`**
  - **type:** `string|array`
  - **defaultValue:** `"home"`

- **`iconColor`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`iconSize`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`disabled`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`hasBadge`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`badgeLabel`**
  - **type:** `string`
  - **defaultValue:** `""`

## Slots

- **`default`**
  - _Custom content that will replace default icon. can be used for inlined SVG's_

## Events

None.

## CSS modifiers

- **`.sf-circle-icon--small`**

## CSS custom properties (variables)

- **`--circle-icon-position`**
### Overridden other components CSS variables 
- **`--icon-color`**
- **`--button-padding`**
- **`--icon-size`**
- **`--button-size`**
- **`--button-background`**
- **`--button-border-radius`**
- **`--button-box-shadow`**
- **`--button-box-shadow-opacity`**
- **`--icon-position`**
- **`--button-transition`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-circleicon--common">Storybook</a>.
