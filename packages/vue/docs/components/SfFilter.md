# Filter

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`label`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`count`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`color`**
  - **type:** `string`

- **`selected`**
  - **type:** `boolean`
  - **defaultValue:** `false`


## Slots

- **`color`**
  - **bindings:** `color`

- **`label`**
  - **bindings:** `label`

- **`count`**
  - **bindings:** `count`


## Events

None.


## CSS modifiers

- **`filter--active`**


## SCSS variables

```scss
$filter-font-family: $body-font-family-secondary !default;
$filter-font-size: $font-size-big-mobile !default;
$filter-font-size-desktop: $font-size-small-desktop !default;
$filter-font-weight: $body-font-weight-secondary !default;
$filter-line-height: 1.6 !default;
$filter__color-size: 1.125rem !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfFilter/SfFilter.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfFilter/SfFilter.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfFilter.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
