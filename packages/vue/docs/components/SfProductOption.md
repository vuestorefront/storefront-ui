# ProductOption

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`label`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`value`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`color`**
  - **type:** `string`


## Slots

- **`color`**
  - **bindings:** `color`

- **`label`**
  - **bindings:** `label`


## Events

None.


## CSS modifiers

None.


## SCSS variables

```scss
$product-option-font-family: $body-font-family-secondary !default;
$product-option-font-size: $font-size-regular-mobile  !default;
$product-option-font-size-desktop: $font-size-regular-desktop !default;
$product-option-font-weight: $body-font-weight-secondary !default;
$product-option-line-height: 1.6 !default;
$product-option__color-size: 1.125rem !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfProductOption.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfProductOption.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfProductOption.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
