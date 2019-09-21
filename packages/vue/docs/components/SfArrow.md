# Arrow

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

None.


## Slots

- **`default`**
  - _Use this slot to replace arrow icon_


## Events

None.


## CSS modifiers

- **`arrow--long`**
- **`arrow--right`**
- **`arrow--rounded`**
- **`arrow--transparent`**
- **`arrow--no-shadow`**


## SCSS variables

```scss
$arrow__button-color: $c-light-primary !default;
$arrow__button-color--hover: $c-dark-primary !default;
$arrow__button-shadow: 0 5px 12px -6px rgba($c-dark-primary, 0) !default;
$arrow__button-shadow--right: 0 -5px 12px -5px rgba($c-dark-primary, 0.6) !default;
$arrow__icon-color: $c-white !default;
$arrow__icon-color--hover: $c-dark-primary !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfArrow.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfArrow.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfArrow.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
