# CallToAction

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`title`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`buttonText`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`description`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`background`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`image`**
  - **type:** `string`
  - **defaultValue:** `""`


## Slots

- **`title`**
  - _Use this slot to replace title_
  - **bindings:** `title`

- **`description`**
  - _Use this slot to replace description_
  - **bindings:** `description`

- **`button`**
  - _Use this slot to replace bottom button_
  - **bindings:** `buttonText`


## Events

None.


## CSS modifiers

- **`action--secondary`**
- **`action--light`**


## SCSS variables

```scss
$call-to-action-padding: $spacer-big $spacer-medium!default;
$call-to-action-padding-desktop: 3.4rem 8.75rem !default;
$call-to-action-background-color: $c-black !default;
$call-to-action-color: $c-text-on-dark !default;
$call-to-action-font-family: $body-font-family-secondary !default;
$call-to-action-line-height: 1.6 !default;
$call-to-action-font-size: $font-size-big-desktop !default;
$call-to-action__title-font-size: $font-size-big-mobile !default;
$call-to-action__title-font-size-desktop: $h1-font-size-desktop !default;
$call-to-action__title-font-weight: $h1-font-weight-desktop;
$call-to-action__title-line-height: 1.4 !default;
$call-to-action--secondary__button-color: $c-text-on-dark !default;
$call-to-action--secondary__button-background-color: $c-dark-primary !default;
$call-to-action--light-color: $c-text-on-light !default;
$call-to-action--light-background-color: $c-light-primary !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfCallToAction.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfCallToAction.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfCallToAction.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
