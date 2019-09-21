# Tabs

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`openTab`**
  - _Which tab should be open at the beginning_
  - **type:** `number`


## Slots

- **`default`**
  - _Default. Here you should pass your tabs_


## Events

None.


## CSS modifiers

- **`tabs__title--active`**


## SCSS variables

```scss
$tabs-border-color: $c-light-primary !default;
$tabs-font-family: $body-font-family-secondary !default;
$tabs-font-size: $font-size-regular-mobile !default;
$tabs-font-size-desktop: $font-size-regular-desktop !default;
$tabs-font-weight: $body-font-weight-secondary !default;
$tabs-line-height: 1.6 !default;
$tabs__title-padding-y: $spacer-big !default;
$tabs__title-color: $c-gray-secondary !default;
$tabs__title-color--active: $c-dark-primary !default;
$tabs__title-color--hover: $c-dark-primary !default;
$tabs__title-font-size: $font-size-big-mobile !default;
$tabs__title-font-size-desktop: $font-size-big-desktop !default;
$tabs__content-padding-y: 3 * $spacer-big !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/organisms/SfTabs.html"></template>
<script src="@storefront-ui/vue/src/components/organisms/SfTabs.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfTabs.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
