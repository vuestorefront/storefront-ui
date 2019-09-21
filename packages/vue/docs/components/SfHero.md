# Hero

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`sliderOptions`**
  - _Slider options like glide.js (https://glidejs.com/docs/)_
  - **type:** `object`
  - **defaultValue:** `{}`


## Slots

- **`default`**
  - _default slot for SfHeroItem tags_

- **`prev`**
  - _slot for icon moving to the previous item_
  - **bindings:** `go`

- **`next`**
  - _slot for icon moving to the next item_
  - **bindings:** `go`

- **`bullets`**
  - _custom markup for pagination bullets_
  - **bindings:** `numberOfPages`, `page`, `go`


## Events

None.


## CSS modifiers

- **`glide__slides--dragging`**
- **`glide--rtl`**
- **`item--position-bg-top-right`**
- **`item--position-bg-bottom-right`**
- **`item--position-bg-bottom-left`**
- **`item--align-right`**


## SCSS variables

```scss
$hero__controls-top: 50% !default;
$hero__controls-padding-h: 1rem !default;
$hero__controls-width: calc(100% - 2 * #{$hero__controls-padding-h}) !default;
$hero__bullets-position-offset: 0.5rem !default;
$hero__bullets-position-offset-desktop: 2.5rem !default;
$hero-item-width: 100% !default;
$hero-item-padding: $spacer-extra-big !default;
$hero-item-padding-desktop: 5rem !default;
$hero-item-bg-size: cover !default;
$hero-item-bg-position: top left !default;
$hero-item-bg-repeat: no-repeat !default;
$hero-item-font-weight: 500 !default;
$hero-item-line-height: 1.6 !default;
$hero-item__container-width-desktop: 50% !default;
$hero-item__container-width: 60% !default;
$hero-item__container-height: 100% !default;
$hero-item__container-padding-desktop: 0 2rem !default;
$hero-item__container-padding: 0 !default;
$hero-item__subtitle-width: 100% !default;
$hero-item__subtitle-width-desktop: min-content !default;
$hero-item__subtitle-color: $c-gray-secondary !default;
$hero-item__subtitle-border-left: $hero-item__subtitle-color solid 1px !default;
$hero-item__subtitle-border: 0 !default;
$hero-item__subtitle-font-family: $body-font-family-primary !default;
$hero-item__subtitle-font-size: $font-size-extra-small-mobile !default;
$hero-item__subtitle-font-size-desktop: $font-size-extra-small-desktop !default;
$hero-item__subtitle-padding-left-desktop: 36px !default;
$hero-item__subtitle-padding-left: 18px !default;
$hero-item__title-font-desktop: 36px !default;
$hero-item__title-color: $c-dark-primary !default;
$hero-item__title-font-family: $body-font-family-primary !default;
$hero-item__title-font-size: $font-size-extra-big-mobile !default;
$hero-item__title-font-size-desktop: $h1-font-size-desktop !default;
$hero-item__title-line-height: 1.38 !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/organisms/SfHero/SfHero.html"></template>
<script src="@storefront-ui/vue/src/components/organisms/SfHero/SfHero.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfHero.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
