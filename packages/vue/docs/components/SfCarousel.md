# Carousel

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`settings`**
  - _Carousel options like glide.js (https://glidejs.com/docs/)_
  - **type:** `object`
  - **defaultValue:** `{}`


## Slots

- **`default`**
  - _default slot for SfCarouselItem tags_

- **`prev`**
  - _slot for icon moving to the previous item_
  - **bindings:** `go`

- **`next`**
  - _slot for icon moving to the next item_
  - **bindings:** `go`


## Events

None.


## CSS modifiers

- **`glide__slides--dragging`**
- **`glide--rtl`**


## SCSS variables

```scss
$carousel__controls-size: 240px !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/organisms/SfCarousel.html"></template>
<script src="@storefront-ui/vue/src/components/organisms/SfCarousel.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfCarousel.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
