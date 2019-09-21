# Input

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`value`**
  - _Current input value (`v-model`)_
  - **type:** `string`
  - **defaultValue:** `null`

- **`label`**
  - _Form input label_
  - **type:** `string`
  - **defaultValue:** `null`

- **`name`**
  - _Form input name_
  - **type:** `string`
  - **defaultValue:** `null`

- **`valid`**
  - _Validate value of form input_
  - **type:** `boolean`
  - **defaultValue:** `undefined`

- **`errorMessage`**
  - _Error message value of form input. It will be appeared if `valid` is `true`._
  - **type:** `string`
  - **defaultValue:** `null`

- **`required`**
  - _Native input required attribute_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`disabled`**
  - _Native input disabled attribute_
  - **type:** `boolean`
  - **defaultValue:** `false`


## Slots

- **`label`**
  - _Custom input label_
  - **bindings:** `label`

- **`errorMessage`**
  - _Custom error message of form input_
  - **bindings:** `errorMessage`


## Events

- **`input`**


## CSS modifiers

- **`input--invalid`**
- **`input--invalid.sf-input--has-text`**
- **`input--has-text`**


## SCSS variables

```scss
$input-color: $c-text-primary !default;
$input-color-active: $c-accent-primary !default;
$input-color-invalid: #d12727 !default;
$input-color-disabled: $c-dark-secondary !default;
$input-font-family: $body-font-family-secondary !default;
$input-font-size: $font-size-big-mobile !default;
$input-font-size-desktop: $font-size-big-desktop !default;
$input-font-weight: $body-font-weight-secondary !default;
$input-line-height: 1.6 !default;
$input__label-focus-font-size: $font-size-small-mobile !default;
$input__label-focus-font-size-desktop: $font-size-extra-small-desktop !default;
$input__label-transition: all 150ms ease-in-out !default;
$input__bar-transition: all 150ms ease-in-out !default;
$input__error-message-font-family: $body-font-family-primary !default;
$input__error-message-font-size: $font-size-small-mobile !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfInput.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfInput.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfInput.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
