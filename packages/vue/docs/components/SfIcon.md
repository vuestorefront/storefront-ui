# Icon

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


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
  - _Custom color of the icon. It can be according to our standard colors, or `#fff` or `rgb(255,255,255)` or nothing. Standard colors: `primary`, `secondary`, `white`, `black`, `accent`, `green-primary`, `green-secondary`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`._
  - **type:** `string`
  - **defaultValue:** `""`

- **`viewBox`**
  - _Custom viewBox size of the icon. It should be according to the standard `"min-x min-y width height"`. By default it will be `0 0 24 24`. If you use our icons, you don't need to pass this prop at all. Recommedations: try to get your SVG designed with our default viewBox value and reduce the number of props passed to the component._
  - **type:** `string`
  - **defaultValue:** `"0 0 24 24"`


## Slots

- **`default`**
  - **bindings:** `viewBox`, `iconPaths`, `icon`


## Events

None.


## CSS modifiers

- **`icon--color-primary`**
- **`icon--color-secondary`**
- **`icon--color-white`**
- **`icon--color-black`**
- **`icon--color-accent`**
- **`icon--color-green-primary`**
- **`icon--color-green-secondary`**
- **`icon--color-gray-primary`**
- **`icon--color-gray-secondary`**
- **`icon--color-light-primary`**
- **`icon--color-light-secondary`**
- **`icon--color-pink-primary`**
- **`icon--color-pink-secondary`**
- **`icon--color-yellow-primary`**
- **`icon--color-yellow-secondary`**
- **`icon--color-blue-primary`**
- **`icon--color-blue-secondary`**
- **`icon--size-xxs`**
- **`icon--size-xs`**
- **`icon--size-sm`**
- **`icon--size-md`**
- **`icon--size-lg`**
- **`icon--size-xl`**
- **`icon--size-xxl`**
- **`icon--size-xl3`**
- **`icon--size-xl4`**


## SCSS variables

```scss
$icon-sizes : (
    "xxs": 1rem,
    "xs": 1.4rem,
    "sm": 1.625rem,
    "md": 1.8rem,
    "lg": 2rem,
    "xl": 2.2rem,
    "xxl": 2.5rem,
    "xl3": 2.8rem,
    "xl4": 3.25rem
);
$icon-colors : (
    "primary" : $c-green-primary,
    "secondary": $c-dark-primary,
    "white": $c-white,
    "black": $c-black,
    "accent": $c-accent-secondary,
    "green-primary": $c-green-primary,
    "green-secondary": $c-green-secondary,
    "gray-primary": $c-gray-primary,
    "gray-secondary": $c-gray-secondary,
    "light-primary": $c-light-primary,
    "light-secondary": $c-light-secondary,
    "pink-primary": $c-pink-primary,
    "pink-secondary": $c-pink-secondary,
    "yellow-primary": $c-yellow-primary,
    "yellow-secondary": $c-yellow-secondary,
    "blue-primary": $c-blue-primary,
    "blue-secondary": $c-blue-secondary
);
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfIcon.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
