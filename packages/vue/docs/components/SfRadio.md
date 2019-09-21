# Radio

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`name`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`value`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`label`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`description`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`required`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`disabled`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`selected`**
  - **type:** `string`
  - **defaultValue:** `""`


## Slots

- **`checkmark`**
  - _Custom checkmark markup (bind 'isChecked' boolean, 'disabled' boolean_
  - **bindings:** `isChecked`, `disabled`

- **`label`**
  - _Custom label markup (bind 'label' string, 'isChecked' boolean, 'disabled' boolean_
  - **bindings:** `label`, `isChecked`, `disabled`

- **`description`**
  - _Custom description markup (bind 'description' string_
  - **bindings:** `description`


## Events

- **`input`**


## CSS modifiers

- **`radio--transparent.sf-radio.is-active`**


## SCSS variables

```scss
$radio-font-family: $body-font-family-secondary !default;
$radio-font-size: $font-size-extra-small-desktop !default;
$radio-font-weight: $body-font-weight-primary !default;
$radio-line-height: 1.6 !default;
$radio-transition: background-color 0.25s cubic-bezier(1, 0.5, 0.8, 1) !default;
$radio__label-font-size: $font-size-big-desktop;
$radio__label-font-weight: 500;
$radio__label-line-height: 1.3 !default;
$radio__checkmark-transition: border 0.25s cubic-bezier(1, 0.5, 0.8, 1) !default;
$radio__checkmark-size: 1.4375rem !default;
$radio__checkmark-color-primary: $c-green-primary !default;
$radio__checkmark-color-secondary: $c-gray-secondary !default;
$radio--active-background: $c-light-primary !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfRadio.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
