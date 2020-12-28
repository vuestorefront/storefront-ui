# Select




[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-select--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;"></iframe>
  </div>

```html
<template>
  <SfSelect
    v-model="selected"
    :class="customClass"
    :label="label"
    :required="required"
    :valid="valid"
    :disabled="disabled"
    :error-message="errorMessage"
    :placeholder="placeholder"
    style="max-width: 30rem; margin: 10px;"
  >
    <SfSelectOption
      v-for="(option, key) in options"
      :key="key"
      :value="option.value"
    >
      <SfProductOption
        :color="option.color"
        :label="option.label"
      ></SfProductOption>
    </SfSelectOption>
  </SfSelect>
</template>
<script>
import { SfSelect } from "@storefront-ui/vue";
import { SfProductOption } from "@storefront-ui/vue";
export default {
  components: {
    SfSelect,
    SfProductOption,
  },
  data() {
    return {
      selected: "",
      options: [
        { value: "amaranth", color: "#E52B50", label: "Amaranth" },
        { value: "amber", color: "#FFBF00", label: "Amber" },
        { value: "arctic-lime", color: "#D0FF14", label: "Arctic lime" },
        { value: "bluetiful", color: "#3C69E7", label: "Bluetiful" },
        { value: "buff", color: "#F0DC82", label: "Buff" },
      ],
      label: "Color",
      required: false,
      valid: true,
      disabled: false,
      errorMessage: "Color",
      placeholder: "Select color",
    };
  },
};
</script>
```

## Props

- **`label`**
  - _Select field label_
  - **type:** `string`
  - **defaultValue:** `""`

- **`required`**
  - _Required attribute_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`valid`**
  - _Validate value of form select_
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`disabled`**
  - _Disabled status of form select_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`errorMessage`**
  - _Error message value of form select. It will be appeared if `valid` is `true`._
  - **type:** `string`
  - **defaultValue:** `"This field is not correct."`

- **`placeholder`**
  - _Adds placeholder_
  - **type:** `string`
  - **defaultValue:** `""`

## Slots

- **`label`**
  - **bindings:** `label`

- **`placeholder`**
  - **bindings:** `placeholder`

- **`default`**

- **`errorMessage`**
  - _Custom error message of form select_
  - **bindings:** `errorMessage`

## Events

None.

## CSS modifiers

- **`.sf-select--underlined`**

## CSS custom properties (variables)

- **`--select-width`**
- **`--select-height`**
- **`--select-padding`**
- **`--select-color`**
- **`--select-label-top`**
- **`--select-label-left`**
- **`--select-label-color`**
- **`--select-label-transition`**
- **`--select-label-font`**
- **`--select-label-font-weight`**
- **`--select-label-font-size`**
- **`--select-label-font-line-height`**
- **`--select-label-font-family`**
- **`--select-label-required`**
- **`--select-dropdown-color`**
- **`--select-dropdown-border`**
- **`--select-dropdown-border-width`**
- **`--select-option-background`**
- **`--select-option-background-size`**
- **`--select-option-font`**
- **`--select-option-font-weight`**
- **`--select-option-font-size`**
- **`--select-option-font-line-height`**
- **`--select-option-font-family`**
- **`--select-placeholder-display`**
- **`--select-error-message-color`**
- **`--select-error-message-height`**
### Overridden other components CSS variables 
- **`--select-dropdown-border-color`**
- **`--select-border-width`**
- **`--select-border-color`**


You can override CSS variables values bound to this component.

## Internal components

### SelectOption
#### Props
- **`value`**
  - **type:** `string|number|object`
  - **defaultValue:** `""`

#### Slots
- **`default`**

#### Events
None.

#### CSS modifiers
None.

#### CSS variables
None.

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-select--common">Storybook</a>.
