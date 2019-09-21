# MenuItem

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`label`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`icon`**
  - **type:** `string`
  - **defaultValue:** `"chevron_right"`

- **`count`**
  - **type:** `string`
  - **defaultValue:** `""`


## Slots

- **`icon`**

- **`label`**

- **`count`**

- **`mobile-nav-icon`**
  - **bindings:** `icon`


## Events

None.


## CSS modifiers

None.


## SCSS variables

```scss
$menu-item-color: $c-gray-primary !default;
$menu-item-font-family: $body-font-family-secondary !default;
$menu-item-font-size: $font-size-big-mobile !default;
$menu-item-font-size-desktop: $font-size-small-desktop !default;
$menu-item-font-weight: $body-font-weight-secondary !default;
$menu-item-line-height: 1.6 !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfMenuItem.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
