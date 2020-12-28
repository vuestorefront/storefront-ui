# Textarea

Multi-line text input control

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-textarea--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 5rem"></iframe>
  </div>

```html
<template>
  <div style="padding-top: 20px;">
    <SfTextarea
      v-model="value"
      :cols="cols"
      :rows="rows"
      :minlength="minlength"
      :maxlength="maxlength"
      :label="label"
      :name="name"
      :wrap="wrap"
      :valid="valid"
      :error-message="errorMessage"
      :required="required"
      :disabled="disabled"
      :placeholder="placeholder"
    />
  </div>
</template>
<script>
import { SfTextarea } from "@storefront-ui/vue";
export default {
  components: {
    SfTextarea,
  },
  data() {
    return {
      value: "",
      label: "First name",
      name: "first-name",
      cols: "40",
      rows: "10",
      minlength: "",
      maxlength: "",
      wrap: "soft",
      errorMessage: "Required.",
      valid: true,
      required: true,
      disabled: false,
      placeholder: "",
    };
  },
};
</script>
```

## Props

- **`value`**
  - _Current textarea value (`v-model`)._
  - **type:** `string|number`
  - **defaultValue:** `""`

- **`label`**
  - _Textarea label._
  - **type:** `string`
  - **defaultValue:** `""`

- **`name`**
  - _Textarea name._
  - **type:** `string`
  - **defaultValue:** `""`

- **`cols`**
  - _The visible width of the text control. It must be a positive integer. If it is not specified, the default value is 20._
  - **type:** `string|number`
  - **defaultValue:** `"20"`

- **`rows`**
  - _The number of visible text lines for the control._
  - **type:** `string|number`
  - **defaultValue:** `""`

- **`maxlength`**
  - _The maximum number of characters that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters._
  - **type:** `string|number`
  - **defaultValue:** `""`

- **`minlength`**
  - _The minimum number of characters required that the user should enter._
  - **type:** `string|number`
  - **defaultValue:** `""`

- **`wrap`**
  - _Indicates how the control wraps text. Possible values are soft, hard, off. Default value is soft._
  - **type:** `string`
  - **defaultValue:** `"soft"`

- **`readonly`**
  - _With default false value the textarea is editable._
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`valid`**
  - _Validate value of textarea._
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`errorMessage`**
  - _Error message for textarea. It will be appeared if `valid` is `true`._
  - **type:** `string`
  - **defaultValue:** `""`

- **`required`**
  - _Native textarea required attribute._
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`placeholder`**
  - _Placeholder for textarea._
  - **type:** `string`
  - **defaultValue:** `""`

- **`disabled`**
  - _Native textarea disabled attribute._
  - **type:** `boolean`
  - **defaultValue:** `false`

## Slots

- **`label`**
  - _Custom input label_
  - **bindings:** `label`

- **`error-message`**
  - _Custom error message_
  - **bindings:** `errorMessage`

## Events

- **`input`**

## CSS modifiers

- **`.sf-textarea--has-text`**
- **`.sf-textarea--invalid`**

## CSS custom properties (variables)

- **`--textarea-position`**
- **`--textarea-resize`**
- **`--textarea-color`**
- **`--textarea-font`**
- **`--textarea-font-weight`**
- **`--textarea-font-size`**
- **`--textarea-font-line-height`**
- **`--textarea-font-family`**
- **`--textarea-height`**
- **`--textarea-width`**
- **`--textarea-padding`**
- **`--textarea-border`**
- **`--textarea-border-width`**
- **`--textarea-label-font`**
- **`--textarea-label-font-weight`**
- **`--textarea-label-font-size`**
- **`--textarea-label-font-line-height`**
- **`--textarea-label-font-family`**
- **`--textarea-label-position`**
- **`--textarea-label-padding`**
- **`--textarea-label-top`**
- **`--textarea-label-bottom`**
- **`--textarea-label-left`**
- **`--textarea-label-right`**
- **`--textarea-label-transform`**
- **`--textarea-label-color`**
- **`--textarea-label-transition`**
- **`--textarea-label-required`**
- **`--textarea-error-message-color`**
- **`--textarea-error-message-font`**
- **`--textarea-error-message-font-weight`**
- **`--textarea-error-message-font-size`**
- **`--textarea-error-message-font-line-height`**
- **`--textarea-error-message-font-family`**
### Overridden other components CSS variables 
- **`--textarea-border-color`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-textarea--common">Storybook</a>.
