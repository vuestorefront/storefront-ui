# Header

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

None.


## Slots

- **`left`**

- **`middle`**

- **`right`**

- **`default`**


## Events

None.


## CSS modifiers

- **`header__column--left`**
- **`header__column--middle`**
- **`header__column--right`**


## SCSS variables

```scss
$header-mobile-background: $c-bg-primary !default;
$header-mobile-height: 50px !default;
$header-mobile-justify-content: space-between !default;
$header-mobile-align-items: center !default;
$header-mobile-padding-x: 1rem !default;
$header-tablet-justify-content: flex-start !default;
$header__logo-width: 21px !default;
$header__logo-height: auto !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/organisms/SfHeader.html"></template>
<script src="@storefront-ui/vue/src/components/organisms/SfHeader.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfHeader.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
