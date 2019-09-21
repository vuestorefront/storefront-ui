# Select

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`label`**
  - _Select field label_
  - **type:** `string`
  - **defaultValue:** `""`

- **`selected`**
  - _Selected item value_
  - **type:** `string|object`
  - **defaultValue:** `""`

- **`size`**
  - _Dropdown list size_
  - **type:** `number`
  - **defaultValue:** `5`

- **`required`**
  - _Required attribute_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`valid`**
  - _Validate value of form input_
  - **type:** `boolean`
  - **defaultValue:** `undefined`

- **`errorMessage`**
  - _Error message value of form select. It will be appeared if `valid` is `true`._
  - **type:** `string`
  - **defaultValue:** `"This field is not correct."`


## Slots

- **`label`**

- **`default`**

- **`errorMessage`**


## Events

- **`change`**


## CSS modifiers

- **`option--active`**
- **`select--bordered`**
- **`select--bordered.sf-select--is-active`**
- **`select--bordered.sf-select--is-selected`**
- **`select--underlined`**
- **`select--is-active`**
- **`select--is-selected`**
- **`select--is-required`**


## SCSS variables

```scss
$select-option-padding-y: 0.75rem !default;
$select-option-padding-x: 1.875rem !default;
$select-option-padding-y-desktop: 0.75rem !default;
$select-option-padding-x-desktop: 0 !default;
$select-color: $c-text-primary !default;
$select-color-primary: $c-light-primary !default;
$select-color-active: $c-accent-primary !default;
$select-color-invalid: #d12727 !default;
$select-font-family: $body-font-family-secondary !default;
$select-font-size: $font-size-big-mobile !default;
$select-font-size-desktop: $font-size-big-desktop !default;
$select-font-weight: $body-font-weight-secondary !default;
$select-line-height: 1.6 !default;
$select__label-focus-font-size: $font-size-small-mobile !default;
$select__label-focus-font-size-desktop: $font-size-extra-small-desktop !default;
$select__label-transition: all 350ms ease-in-out !default;
$select__bar-transition: all 150ms ease-in-out !default;
$select__error-message-font-family: $body-font-family-primary !default;
$select__error-message-font-size: $font-size-small-mobile !default;
$select__cancel-color: #a3a5ad !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfSelect.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfSelect.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfSelect.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
