# Gallery

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`images`**
  - _Images list_
  - **type:** `array`
  - **defaultValue:** `() => []`

- **`current`**
  - _Initial image number (starting from 1)_
  - **type:** `number`
  - **defaultValue:** `1`

- **`sliderOptions`**
  - _Glide slider options (https://glidejs.com/docs/options/)_
  - **type:** `object`


## Slots

- **`thumbs`**
  - **bindings:** `images`, `active`, `go`


## Events

- **`click`**
  - _Event for current image change (`v-model`)_


## CSS modifiers

- **`glide__slides--dragging`**
- **`glide--rtl`**
- **`gallery__item--selected`**


## SCSS variables

```scss
$gallery-flex-direction: row !default;
$gallery__nav-width: 100px !default;
$gallery__nav-margin: 0 $spacer-extra-big 0 0 !default;
$gallery__item-margin-bottom: $spacer-medium !default;
$gallery__item-opacity: 0.5 !default;
$gallery__item-transition: opacity 0.15s linear !default;
$gallery__item-mobile-size: 10px !default;
$gallery__stage-width: 400px !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfGallery.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfGallery.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfGallery.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
