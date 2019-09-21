# Banner

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`title`**
  - _Banner title_
  - **type:** `string`
  - **defaultValue:** `""`

- **`subtitle`**
  - _Banner subtitle (at the top)_
  - **type:** `string`
  - **defaultValue:** `""`

- **`description`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`buttonText`**
  - _text that will be displayed inside the button. You can replace the button  with "call-to-action" slot_
  - **type:** `string`
  - **defaultValue:** `""`

- **`background`**
  - _Background color in HEX (eg #FFFFFF)_
  - **type:** `string`
  - **defaultValue:** `""`

- **`image`**
  - _Background image. Influenced by $banner-background-size, $banner-background-position CSS props._
  - **type:** `string`
  - **defaultValue:** `""`


## Slots

- **`subtitle`**
  - _Banner subtitle. Slot content will replace default &lt;h2&gt; tag_
  - **bindings:** `subtitle`

- **`title`**
  - _Banner title. Slot content will replace default &lt;h1&gt; tag_
  - **bindings:** `title`

- **`description`**
  - _Banner description. Slot content will replace default &lt;p&gt; tag_
  - **bindings:** `description`

- **`call-to-action`**
  - _Call to action section. Slot content will replace default SfButton component_
  - **bindings:** `buttonText`

- **`default`**


## Events

None.


## CSS modifiers

- **`banner--left`**
- **`banner--slim`**


## SCSS variables

```scss
$banner-min-height: 9rem !default;
$banner-min-height-desktop: 20rem !default;
$banner-padding-x: 1.25rem !default;
$banner-padding-y: 1.25rem !default;
$banner-padding-y-desktop: 4rem !default;
$banner-padding-x-desktop: 5rem !default;
$banner-color: $c-text-primary !default;
$banner-font-family: $body-font-family-secondary !default;
$banner-font-weight: $body-font-weight-primary !default;
$banner-line-height: 1.6 !default;
$banner-font-size: $font-size-big-desktop !default;
$banner__subtitle-color: $c-dark-secondary !default;
$banner__subtitle-font-family: $body-font-family-primary !default;
$banner__subtitle-font-size: $font-size-regular-mobile !default;
$banner__subtitle-font-size-desktop: $font-size-extra-big-desktop !default;
$banner__subtitle-font-weight: $body-font-weight-primary !default;
$banner__subtitle-line-height: 1.16 !default;
$banner__title-font-size: $font-size-extra-big-mobile !default;
$banner__title-font-size-desktop: 3rem !default;
$banner__title-font-weight: $body-font-weight-primary !default;
$banner__description-line-height: 1.6 !default;
$banner__description-margin: 1.875rem 0 0 0 !default;
$banner--slim-padding: 5rem 2.5rem !default;
$banner--slim__title-font-size: $h1-font-size-desktop !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfBanner/SfBanner.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfBanner/SfBanner.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfBanner.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
