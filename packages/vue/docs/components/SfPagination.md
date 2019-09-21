# Pagination

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`current`**
  - _Current page number_
  - **type:** `number`
  - **defaultValue:** `1`

- **`total`**
  - _Total number of pages_
  - **type:** `number`
  - **defaultValue:** `5`

- **`visible`**
  - _Maximum visible pagination items_
  - **type:** `number`
  - **defaultValue:** `5`


## Slots

- **`prev`**
  - _Custom markup for previous page button_
  - **bindings:** `isDisabled`, `go`

- **`number`**
  - **bindings:** `go`, `number`

- **`points`**

- **`default`**
  - **bindings:** `go`

- **`next`**
  - _Custom markup for previous page button_
  - **bindings:** `isDisabled`, `go`


## Events

- **`click`**


## CSS modifiers

- **`pagination__button--prev`**
- **`pagination__button--next`**
- **`pagination__button--current`**


## SCSS variables

```scss
$pagination-font-family: $body-font-family-secondary !default;
$pagination-font-size: $font-size-big-mobile !default;
$pagination-font-size-desktop: $font-size-big-desktop !default;
$pagination-font-weight: $body-font-weight-secondary !default;
$pagination-line-height: 1.6;
$pagination__item-margin: 0 ($spacer-big / 4) !default;
$pagination__item-margin-desktop: 0 ($spacer-big / 2) !default;
$pagination__item-color: $c-text-secondary !default;
$pagination__button--current-color: $c-text-primary !default;
$pagination__button--navigation-margin: 3rem;
$pagination__button-transition: color 150ms ease-in-out,
  border-color 150ms ease-in-out !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfPagination.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfPagination.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfPagination.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
