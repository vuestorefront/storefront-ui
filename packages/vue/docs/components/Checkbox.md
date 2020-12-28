# Checkbox

Checkbox component

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-checkbox--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 3rem"></iframe>
  </div>

```html
<template>
  <SfCheckbox
    v-model="checked"
    :name="name"
    :label="label"
    :hintMessage="hintMessage"
    :required="required"
    :error-message="errorMessage"
    :valid="valid"
    :infoMessage="infoMessage"
    :disabled="disabled"
  />
</template>
<script>
import { SfCheckbox } from "@storefront-ui/vue";
export default {
  components: {
    SfCheckbox,
  },
  data() {
    return {
      checked: false,
      name: "shipping",
      label: "I want to create an account",
      hintMessage: "Required",
      required: false,
      errorMessage: "Something is wrong",
      valid: true,
      infoMessage: "",
      disabled: false,
    };
  },
};
</script>
```

## Props

- **`name`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`value`**
  - **type:** `string|boolean`
  - **defaultValue:** `""`

- **`label`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`hintMessage`**
  - _Hint/Required message value of checkbox._
  - **type:** `string`
  - **defaultValue:** `"Required."`

- **`required`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`infoMessage`**
  - _Info/success message value of select._
  - **type:** `string`
  - **defaultValue:** `""`

- **`errorMessage`**
  - _Error message value of select. It will be appeared if `valid` is `true`._
  - **type:** `string`
  - **defaultValue:** `"This field is not correct."`

- **`valid`**
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`disabled`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`selected`**
  - **type:** `array|boolean`
  - **defaultValue:** `() => []`

## Slots

- **`checkmark`**
  - _Custom check mark markup_
  - **bindings:** `isChecked`, `disabled`

- **`label`**
  - _Custom label markup_
  - **bindings:** `label`, `isChecked`, `disabled`

- **`computedMessageSlotName`**
  - _Custom message of form input_
  - **bindings:** `computedMessage`

## Events

- **`change`**

## CSS modifiers

- **`.sf-checkbox--is-disabled`**
- **`.sf-checkbox__message--info`**

## CSS custom properties (variables)

- **`--checkbox-padding`**
- **`--checkbox-container-width`**
- **`--checkbox-cursor`**
- **`--checkbox-display`**
- **`--checkbox-order`**
- **`--checkbox-size`**
- **`--checkbox-border`**
- **`--checkbox-border-width`**
- **`--checkbox-border-radius`**
- **`--checkbox-background`**
- **`--checkbox-label-margin`**
- **`--checkbox-label-color`**
- **`--checkbox-font`**
- **`--checkbox-font-weight`**
- **`--checkbox-font-size`**
- **`--checkbox-font-line-height`**
- **`--checkbox-font-family`**
- **`--checkbox-message-margin`**
- **`--checkbox-message-color`**
- **`--checkbox-message-font`**
- **`--checkbox-message-font-weight`**
- **`--checkbox-message-font-size`**
- **`--checkbox-message-font-line-height`**
- **`--checkbox-message-font-family`**
### Overridden other components CSS variables 
- **`--icon-size`**
- **`--checkbox-border-color`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-checkbox--common">Storybook</a>.
