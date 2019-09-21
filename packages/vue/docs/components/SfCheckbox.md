# Checkbox

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

- **`required`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`disabled`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`selected`**
  - **type:** `array`
  - **defaultValue:** `() => []`


## Slots

- **`checkmark`**
  - _Custom chekcmark markup (bind 'isChecked' boolean, 'disabled' boolean_
  - **bindings:** `isChecked`, `disabled`

- **`label`**
  - _Custom label markup (bind 'label' string, 'isChecked' boolean, 'disabled' boolean_
  - **bindings:** `label`, `isChecked`, `disabled`


## Events

- **`input`**


## CSS modifiers

None.


## SCSS variables

```scss
$checkbox-font-family: $body-font-family-secondary !default;
$checkbox-font-size: $font-size-big-mobile !default;
$checkbox-font-size-desktop: $font-size-big-desktop !default;
$checkbox-font-weight: $body-font-weight-primary !default;
$checkbox-line-height: 1.6 !default;
$checkbox__checkmark-size: 1.25rem !default;
$checkbox__checkmark-size-desktop: 1.5rem !default;
$checkbox__checkmark-primary-color: $c-green-primary !default;;
$checkbox__checkmark-secondary-color: $c-gray-secondary !default;;
$checkbox__checkmark-transition: background-color 0.25s cubic-bezier(1, 0.5, 0.8, 1), border-color 0.25s cubic-bezier(1, 0.5, 0.8, 1) !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfCheckbox/SfCheckbox.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfCheckbox/SfCheckbox.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfCheckbox.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
