# Button

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

None.


## Slots

- **`default`**
  - _Use this slot to place content inside the button._


## Events

None.


## CSS modifiers

- **`button--full-width`**


## SCSS variables

```scss
$button-padding: 1rem 2.5rem !default;
$button-padding-desktop: 0.9375rem 2.5rem !default;
$button-color: $c-text-on-dark !default;
$button-background-color: $c-green-primary !default;
$button-font-family: $body-font-family-secondary !default;
$button-font-size: $font-size-small-mobile !default;
$button-font-size-desktop: $font-size-small-desktop !default;
$button-font-weight: $body-font-weight-secondary !default;
$button-line-height: 1.6 !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfButton.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfButton.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfButton.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
