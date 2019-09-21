# Property

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`name`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`value`**
  - **type:** `string`
  - **defaultValue:** `""`


## Slots

- **`name`**
  - _Use this slot to replace property name_
  - **bindings:** `name`

- **`value`**
  - _Use this slot to replace property value_
  - **bindings:** `value`


## Events

None.


## CSS modifiers

- **`property--full-width`**


## SCSS variables

```scss
$property-font-family: $body-font-family-secondary !default;
$property-font-size: $font-size-regular-mobile !default;
$property-font-size-desktop: $font-size-regular-desktop !default;
$property-font-weight: $body-font-weight-secondary !default;
$property-line-height: 1.6 !default;
$property__name-color: #a3a5ad !default;
$property__value-font-weight: 500 !default;
$property__value-font-weight-desktop: $body-font-weight-secondary !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfProperty.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
