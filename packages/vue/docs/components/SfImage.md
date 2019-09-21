# Image

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`src`**
  - _Image url_
  - **type:** `string`
  - **defaultValue:** `""`

- **`alt`**
  - _Alt attribute value_
  - **type:** `string`
  - **defaultValue:** `""`

- **`transition`**
  - _Overlay transition type_
  - **type:** `string`
  - **defaultValue:** `"fade"`


## Slots

- **`default`**
  - _slot for overlay content, if is empty the overlay is off_


## Events

None.


## CSS modifiers

None.


## SCSS variables

```scss
$image__overlay-justify-content: center !default;
$image__overlay-align-items: center !default;
$image__overlay-background-color: rgba(29, 31, 34, 0.8) !default;
$image__overlay-color: $c-white !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfImage/SfImage.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfImage/SfImage.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfImage.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
