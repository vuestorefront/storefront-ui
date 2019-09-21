# Store

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`latlng`**
  - _Name of the store_
  - **type:** `array`
  - **required:** `true`

- **`name`**
  - _Name of the store_
  - **type:** `string`
  - **required:** `true`

- **`picture`**
  - _Url of the picture of the store_
  - **type:** `string`
  - **defaultValue:** `null`

- **`address`**
  - _Address of the store_
  - **type:** `string`
  - **required:** `true`

- **`phone`**
  - _Phone number of the store_
  - **type:** `string`
  - **defaultValue:** `null`

- **`email`**
  - _Email of the store_
  - **type:** `string`
  - **defaultValue:** `null`


## Slots

None.


## Events

None.


## CSS modifiers

None.


## SCSS variables

None.

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/organisms/SfStore.html"></template>
<script src="@storefront-ui/vue/src/components/organisms/SfStore.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfStore.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
