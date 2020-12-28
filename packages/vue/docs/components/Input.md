# Input

Input form field with validation and built-in label animation

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-input--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 5rem"></iframe>
  </div>

```html
<template>
  <div style="padding: 10px;">
    <SfInput
      v-model="value"
      :type="type"
      :label="label"
      :name="name"
      :valid="valid"
      :error-message="errorMessage"
      :required="required"
      :disabled="disabled"
      :has-show-password="hasShowPassword"
      :class="customClass"
      :placeholder="placeholder"
    />
  </div>
</template>
<script>
import { SfInput } from "@storefront-ui/vue";
export default {
  components: {
    SfInput,
  },
  data() {
    return {
      value: "",
      type: "text",
      label: "First name",
      name: "first-name",
      errorMessage: "Required.",
      valid: true,
      required: true,
      disabled: false,
      hasShowPassword: false,
      placeholder: "",
    };
  },
};
</script>
```

## Props

- **`value`**
  - _Current input value (`v-model`)_
  - **type:** `string|number`
  - **defaultValue:** `""`

- **`label`**
  - _Form input label_
  - **type:** `string`
  - **defaultValue:** `""`

- **`name`**
  - _Form input name_
  - **type:** `string`
  - **defaultValue:** `""`

- **`type`**
  - _Form input type_
  - **type:** `string`
  - **defaultValue:** `"text"`

- **`valid`**
  - _Validate value of form input_
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`errorMessage`**
  - _Error message value of form input. It will be appeared if `valid` is `true`._
  - **type:** `string`
  - **defaultValue:** `""`

- **`required`**
  - _Native input required attribute_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`disabled`**
  - _Native input disabled attribute_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`hasShowPassword`**
  - _Status of show password icon display_
  - **type:** `boolean`
  - **defaultValue:** `false`

## Slots

- **`label`**
  - _Custom input label_
  - **bindings:** `label`

- **`show-password`**
  - **bindings:** `isPasswordVisible`, `switchVisibilityPassword`

- **`error-message`**
  - _Custom error message of form input_
  - **bindings:** `errorMessage`

## Events

- **`input`**

## CSS modifiers

- **`.sf-input--filled`**
- **`.sf-input--outline`**

## CSS custom properties (variables)

- **`--input-width`**
- **`--input-height`**
- **`--input-label-display`**
- **`--input-label-top`**
- **`--input-label-left`**
- **`--input-label-padding`**
- **`--input-label-color`**
- **`--input-label-background`**
- **`--input-label-transform`**
- **`--input-label-transition`**
- **`--input-label-font`**
- **`--input-label-font-weight`**
- **`--input-label-font-size`**
- **`--input-label-font-line-height`**
- **`--input-label-font-family`**
- **`--input-label-required`**
- **`--input-bar-display`**
- **`--input-bar-width`**
- **`--input-bar-background`**
- **`--input-error-message-color`**
- **`--input-error-message-font`**
- **`--input-error-message-font-weight`**
- **`--input-error-message-font-size`**
- **`--input-error-message-font-line-height`**
- **`--input-error-message-font-family`**
- **`--input-margin`**
- **`--input-padding`**
- **`--input-border`**
- **`--input-border-width`**
- **`--input-background`**
- **`--input-color`**
- **`--input-font`**
- **`--input-font-weight`**
- **`--input-font-size`**
- **`--input-font-line-height`**
- **`--input-font-family`**
- **`--input-text-align`**
- **`--input-icon-top`**
- **`--input-icon-right`**
- **`--input-password-icon-background`**
- **`--input-password-icon-scaleX`**
### Overridden other components CSS variables 
- **`--icon-color`**
- **`--input-border-color`**
- **`--icon-size`**
- **`--button-padding`**
- **`--button-background`**
- **`--button-box-shadow`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-input--common">Storybook</a>.
