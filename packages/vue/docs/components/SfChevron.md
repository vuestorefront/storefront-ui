# Chevron

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`active`**
  - _Is SfChevron active. Direction of chevron depends on it_
  - **type:** `boolean`
  - **defaultValue:** `false`


## Slots

- **`default`**
  - **bindings:** `active`


## Events

None.


## CSS modifiers

- **`bar--active`**


## SCSS variables

```scss
$chevron-duration: 0.5s !default;
$chevron-easing: cubic-bezier(0.25, 1.7, 0.35, 0.8) !default;
$chevron-size: 20px !default;
$chevron__bar-width: calc(#{$chevron-size} / 2) !default;
$chevron__bar-height: calc(#{$chevron__bar-width} / 5) !default;
$chevron__bar-top: calc(calc(#{$chevron-size} / 2) - calc(#{$chevron__bar-height} / 2) ) !default;
$chevron__bar-left-right: calc(#{$chevron-size} / 10) !default;
$chevron__bar-rotate: 45deg !default;
$chevron__bar-color: $c-black !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfChevron.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfChevron.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfChevron.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
