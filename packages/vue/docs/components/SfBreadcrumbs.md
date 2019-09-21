# Breadcrumbs

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`breadcrumbs`**
  - _List of breadcrumbs (array of nested objects: `[ { text, route } ]`)_
  - **type:** `array`
  - **required:** `true`


## Slots

- **`link`**
  - _Custom markup for previous pages (binds `breadcrumb` object)_
  - **bindings:** `breadcrumb`, `go`

- **`current`**
  - _Custom markup for current page (binds `breadcrumb` object)_
  - **bindings:** `breadcrumb`


## Events

- **`click`**
  - _Event for breadcrumb click, passes `breadcrumb.route` as value_


## CSS modifiers

None.


## SCSS variables

```scss
$breadcrumbs-font-family: $body-font-family-secondary !default;
$breadcrumbs-font-size: $font-size-small-desktop !default;
$breadcrumbs-font-weight: $body-font-weight-secondary !default;
$breadcrumbs-line-height: 1.6 !default;
$breadcrumbs__link-color: $c-dark-primary !default;
$breadcrumbs__item-padding: 0.75rem !default;
$breadcrumbs__item-color: $c-gray-primary !default;
$breadcrumbs__item-separator-color: $breadcrumbs__link-color !default;
$breadcrumbs__item-separator: "|" !default;
$breadcrumbs__current-color: $c-gray-secondary!default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfBreadcrumbs.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfBreadcrumbs.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfBreadcrumbs.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
