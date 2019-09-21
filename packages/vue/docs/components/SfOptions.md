# Options

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`options`**
  - **type:** `array`
  - **required:** `true`

- **`type`**
  - **type:** `string`
  - **defaultValue:** `"text"`

- **`label`**
  - **type:** `string`
  - **defaultValue:** `null`

- **`value`**
  - **type:** `string`
  - **defaultValue:** `null`


## Slots

- **`label`**
  - **bindings:** `label`

- **`text`**
  - **bindings:** `text`, `value`, `isTypeText`, `isOptionSelected`

- **`color`**
  - **bindings:** `color`, `value`, `isOptionSelected`

- **`image`**
  - **bindings:** `image`, `value`, `isOptionSelected`


## Events

- **`input`**


## CSS modifiers

- **`text--selected`**
- **`color--selected`**
- **`image--selected`**


## SCSS variables

```scss
$options-font-family: $body-font-family-secondary !default;
$options-font-size: $font-size-regular-mobile !default;
$options-font-weight: 500 !default;
$options-line-height: 1.6 !default;
$options-transition: all 0.3s ease-in-out !default;
$options__label-margin-bottom: 0.5rem !default;
$options__label-font-size: $font-size-big-mobile !default;
$options__option-size: 2rem !default;
$options__option-color-size-desktop: 1rem !default;
$options__option-margin: 0.75rem !default;
$options__option-text-color: #BDBDBD;
$options__option--selected-text-color: $c-text-primary;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfOptions.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfOptions.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfOptions.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
