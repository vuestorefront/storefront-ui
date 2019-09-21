# TopBar

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

None.


## Slots

- **`left`**
  - _Custom left content_

- **`default`**
  - _Custom center content_

- **`right`**
  - _Custom right content_


## Events

None.


## CSS modifiers

None.


## SCSS variables

```scss
$top-bar-height: 2.5rem !default;
$top-bar-hidden-max-width: $desktop-min !default;
$top-bar-background-color: $c-light-primary !default;
$top-bar-horizontal-padding: $spacer-extra-big !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.html"></template>
<script src="@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfTopBar.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
