# Rating

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`max`**
  - _Maximum score_
  - **type:** `number`
  - **defaultValue:** `5`

- **`score`**
  - _Score (obviously must be less than maximum)_
  - **type:** `number`
  - **defaultValue:** `1`


## Slots

- **`icon-positive`**
  - _custom icon for finalScore. Provide single icon that will be automatically repeated_

- **`icon-negative`**
  - _custom icon for negative (left) finalScore. Provide single icon that will be automatically repeated_


## Events

None.


## CSS modifiers

None.


## SCSS variables

```scss
$rating__icon-positive-fill: $c-green-primary !default;
$rating__icon-negative-fill: $c-dark-primary !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfRating/SfRating.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfRating/SfRating.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfRating.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
