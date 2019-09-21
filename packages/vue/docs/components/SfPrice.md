# Price

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`regular`**
  - _Regular/old price value. Crossed out if `special` is provided_
  - **type:** `string|number`
  - **defaultValue:** `null`

- **`special`**
  - _Special price value_
  - **type:** `string|number`
  - **defaultValue:** `null`


## Slots

- **`special`**
  - _Custom special price_
  - **bindings:** `special`

- **`old`**
  - _Custom old price (value from regular)_
  - **bindings:** `regular`, `special`

- **`regular`**
  - _Custom regular price_
  - **bindings:** `regular`, `special`


## Events

None.


## CSS modifiers

- **`price--big`**


## SCSS variables

```scss
$price-font-family: $body-font-family-primary !default;
$price-font-size: $font-size-big-mobile !default;
$price-font-size-desktop: $font-size-big-desktop !default;
$price-font-weight: $body-font-weight-secondary !default;
$price-line-height: 1.6 !default;
$price__old-font-size: $font-size-small-mobile !default;
$price__old-font-size-desktop: $font-size-small-desktop !default;
$price--big-font-size: $font-size-big-desktop !default;
$price--big-font-size-desktop: $font-size-extra-big-desktop !default;
$price--big__old-font-size: $font-size-regular-mobile !default;
$price--big__old-font-size-desktop: $font-size-regular-desktop !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfPrice.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfPrice.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfPrice.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
