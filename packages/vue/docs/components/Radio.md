# Radio

Radio button component with label and description.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-radio--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 8rem"></iframe>
  </div>

```html
<template>
  <SfRadio
    :class="customClass"
    :label="label"
    :details="details"
    :description="description"
    :name="name"
    :value="value"
    :disabled="disabled"
    :required="required"
    v-model="checked"
  />
</template>
<script>
import { SfRadio } from "@storefront-ui/vue";
export default {
  components: {
    SfRadio,
  },
  data() {
    return {
      checked: "",
      label: "Pickup in the store",
      details: "Delivery from 4 to 6 business days",
      description:
        "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
      name: "shipping",
      value: "store",
      disabled: false,
      required: false,
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
  - **type:** `string`
  - **defaultValue:** `""`

- **`label`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`details`**
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

- **`details`**
  - _Custom details markup (bind 'details' string_
  - **bindings:** `details`

- **`description`**
  - _Custom description markup (bind 'description' string_
  - **bindings:** `description`

## Events

- **`input`**

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--radio-display`**
- **`--radio-transition`**
- **`--radio-label-display`**
- **`--radio-label-font`**
- **`--radio-label-font-weight`**
- **`--radio-label-font-size`**
- **`--radio-label-font-line-height`**
- **`--radio-label-font-family`**
- **`--radio-label-color`**
- **`--radio-checkmark-size`**
- **`--radio-checkmark-border`**
- **`--radio-checkmark-border-width`**
- **`--radio-checkmark-border-radius`**
- **`--radio-checkmark-transition`**
- **`--radio-container-display`**
- **`--radio-container-align-items`**
- **`--radio-container-padding`**
- **`--radio-container-cursor`**
- **`--radio-content-margin`**
- **`--radio-details-margin`**
- **`--radio-details-color`**
- **`--radio-details-font`**
- **`--radio-details-font-weight`**
- **`--radio-details-font-size`**
- **`--radio-details-font-line-height`**
- **`--radio-details-font-family`**
- **`--radio-description-margin`**
- **`--radio-description-font`**
- **`--radio-description-font-weight`**
- **`--radio-description-font-size`**
- **`--radio-description-font-line-height`**
- **`--radio-description-font-family`**
- **`--radio-background`**
### Overridden other components CSS variables 
- **`--radio-checkmark-border-color`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-radio--common">Storybook</a>.
