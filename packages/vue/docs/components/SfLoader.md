# Loader

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`loading`**
  - _Shows the loader on top of the existing content_
  - **type:** `boolean`
  - **defaultValue:** `true`


## Slots

- **`default`**
  - _Use this slot to insert loaded content_

- **`loader`**
  - _Use this slot to replace loader_


## Events

None.


## CSS modifiers

- **`loader--top`**


## SCSS variables

```scss
$loader__spinner-color: $c-accent-primary !default;
$loader__overlay-color: white !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfLoader.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfLoader.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfLoader.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
