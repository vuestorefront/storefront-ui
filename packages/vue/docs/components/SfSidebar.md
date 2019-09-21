# Sidebar

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`button`**
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`visible`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`overlay`**
  - **type:** `boolean`
  - **defaultValue:** `true`


## Slots

- **`default`**


## Events

- **`close`**


## CSS modifiers

- **`sidebar--right`**
- **`sidebar--mobile-only__button`**


## SCSS variables

```scss
$sidebar-background : $c-white !default;
$sidebar-padding    : 3rem !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.html"></template>
<script src="@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfSidebar.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
