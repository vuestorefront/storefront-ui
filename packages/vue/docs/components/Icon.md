# Icon

Icon with color and size modifiers

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-icon--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 3rem"></iframe>
  </div>

```html
<template>
  <SfIcon
    :icon="icon"
    :size="size"
    :color="color"
    :view-box="viewBox"
    :has-badge="hasBadge"
    :badge-label="badgeLabel"
    :coverage="coverage"
  />
</template>
<script>
import { SfIcon } from "@storefront-ui/vue";
export default {
  components: {
    SfIcon
  },
  data() {
    return {
      icon: "home",
size: "lg",
color: "green-primary",
viewBox: "0 0 24 24",
hasBadge: false,
badgeLabel: "99",
coverage (0-1): 1
    }
  }
};
</script>
```

## Props

- **`icon`**
  - _Icon SVG path(s). It can be single SVG path (string) or array of SVG paths or icon name. from our icons list (such as 'added_to_cart`)_
  - **type:** `string|array`
  - **defaultValue:** `""`

- **`size`**
  - _Custom size of the icon. It can be our standard sizes, or `12px` or `1.2rem` or nothing. Standard sizes: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xl3`, `xl4`._
  - **type:** `string`
  - **defaultValue:** `""`

- **`color`**
  - _Custom color of the icon. It can be according to our standard colors, or legitimate CSS color such as `#fff`, `rgb(255,255,255)`), and `lightgray` or nothing. Standard colors: `white`, `black`, `green-primary`, `green-secondary`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`, `accent`._
  - **type:** `string`
  - **defaultValue:** `""`

- **`viewBox`**
  - _Custom viewBox size of the icon. It should be according to the standard `"min-x min-y width height"`. By default it will be `0 0 24 24`. If you use our icons, you don't need to pass this prop at all. Recommendations: try to get your SVG designed with our default viewBox value and reduce the number of props passed to the component._
  - **type:** `string`
  - **defaultValue:** `"0 0 24 24"`

- **`hasBadge`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`badgeLabel`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`coverage`**
  - _The fraction in which the icon is partially collored with --icon-color value and the rest with --icon-color-negative. To be used in SfRating._
  - **type:** `string|number`
  - **defaultValue:** `1`

## Slots

- **`default`**
  - **bindings:** `viewBox`, `iconPaths`, `icon`

- **`badge`**
  - **bindings:** `badgeLabel`, `hasBadge`

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--icon-position`**
- **`--icon-width`**
- **`--icon-height`**
- **`--icon-color`**
- **`--icon-badge-top`**
- **`--icon-badge-right`**
### Overridden other components CSS variables 
- **`--icon-size`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-icon--common">Storybook</a>.
