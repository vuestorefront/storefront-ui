# ComponentSelect

On click input select field with dropdown

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-componentselect--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 10rem"></iframe>
  </div>

```html
<template>
  <SfComponentSelect
    v-model="selected"
    :class="customClass"
    :label="label"
    :size="size"
    :required="required"
    :valid="valid"
    :disabled="disabled"
    :error-message="errorMessage"
    :persistent="persistent"
    style="max-width: 30rem;"
  >
    <SfComponentSelectOption
      v-for="(option, key) in options"
      :key="key"
      :value="option.value"
    >
      <SfProductOption
        :color="option.color"
        :label="option.label"
      ></SfProductOption>
    </SfComponentSelectOption>
  </SfComponentSelect>
</template>
<script>
import { SfComponentSelect } from "@storefront-ui/vue";
import { SfProductOption } from "@storefront-ui/vue";
export default {
  components: {
    SfComponentSelect,
    SfProductOption,
  },
  data() {
    return {
      options: [
        { value: "amaranth", color: "#E52B50", label: "Amaranth" },
        { value: "amber", color: "#FFBF00", label: "Amber" },
        { value: "arctic-lime", color: "#D0FF14", label: "Arctic lime" },
        { value: "bluetiful", color: "#3C69E7", label: "Bluetiful" },
        { value: "buff", color: "#F0DC82", label: "Buff" },
      ],
      label: "Color",
      size: 5,
      required: false,
      valid: true,
      disabled: false,
      errorMessage: "Color",
      persistent: false,
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

- **`selected`**
  - _Selected item value_
  - **type:** `string|number|object`
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

- **`persistent`**
  - _If true clicking outside will not dismiss the select_
  - **type:** `boolean`
  - **defaultValue:** `false`

## Slots

- **`label`**

- **`icon`**

- **`default`**

- **`cancel`**

- **`error-message`**
  - _Custom error message of form select_
  - **bindings:** `errorMessage`

## Events

- **`change`**

## CSS modifiers

- **`.sf-component-select--underlined`**
- **`.sf-component-select--no-chevron`**

## CSS custom properties (variables)

- **`--component-select-option-padding`**
- **`--component-select-option-border`**
- **`--component-select-option-border-width`**
- **`--component-select-option-background`**
- **`--component-select-option-font`**
- **`--component-select-option-font-weight`**
- **`--component-select-option-font-size`**
- **`--component-select-option-font-line-height`**
- **`--component-select-option-font-family`**
### Overridden other components CSS variables 
- **`--chevron-position`**
- **`--product-option-font`**
- **`--font-size--lg`**
- **`--component-select-border-color`**
- **`--button-background`**
- **`--button-color`**
- **`--component-select-border-width`**
- **`--component-select-label-top`**
- **`--component-select-label-font`**
- **`--font-size--xs`**
- **`--chevron-color`**
- **`--component-select-label-color`**
- **`--component-select-color`**
- **`--component-select-label-required`**
- **`--chevron-display`**
- **`--component-select-dropdown-position`**
- **`--component-select-dropdown-top`**
- **`--component-select-dropdown-bottom`**
- **`--component-select-animation-enter`**
- **`--component-select-animation-leave`**


You can override CSS variables values bound to this component.

## Internal components

### ComponentSelectOption
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

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-componentselect--common">Storybook</a>.
