# Bullets

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`total`**
  - _Number of bullets in total (active + inactive)_
  - **type:** `number`
  - **defaultValue:** `0`

- **`current`**
  - _Index of the curretly active bullet_
  - **type:** `number`
  - **defaultValue:** `0`


## Slots

- **`inactive`**
  - _custom icon for inactive bullet_
  - **bindings:** `class`, `index`, `go`

- **`active`**
  - _custom icon for active bullet_


## Events

- **`click`**


## CSS modifiers

- **`bullet--active`**


## SCSS variables

```scss
$bullet-border-radius: 50% !default;
$bullet-size: 8px !default;
$bullet-margin: 6px !default;
$bullet-color: $c-gray-primary !default;
$bullet-size--active: 10px !default;
$bullet-margin--active: 5px !default;
$bullet-color--active: $c-green-secondary !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfBullets.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfBullets.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfBullets.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
