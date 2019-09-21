# SearchBar

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`placeholder`**
  - **type:** `string`
  - **defaultValue:** `"Search for..."`

- **`value`**
  - **type:** `number|string`
  - **defaultValue:** `null`

- **`icon`**
  - **type:** `boolean`
  - **defaultValue:** `true`


## Slots

- **`icon`**

- **`clear-icon`**


## Events

None.


## CSS modifiers

- **`bar--secondary`**
- **`bar--position-right`**
- **`bar--position-right-mobile`**
- **`bar--position-right-desktop`**


## SCSS variables

```scss
$search-bar-background-primary: $c-light-primary !default;
$search-bar-background-secondary: $c-light-secondary !default;
$search-bar-placeholder-color: $c-dark-primary !default;
$search-bar-placeholder-color-focus: $c-gray-primary !default;
$search-bar-width: 20rem !default;
$search-bar-height: 2.25rem !default;
$search-bar-border-radius: 1.6875rem !default;
$search-bar-text-align: center !default;
$search-bar-font-size: 0.875rem !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfSearchBar.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
