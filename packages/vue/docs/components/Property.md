# Property

Component for listing properties of a product.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-property--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 3rem"></iframe>
  </div>

```html
<template>
  <SfProperty :class="customClass" :name="name" :value="value" />
</template>
<script>
import { SfProperty } from "@storefront-ui/vue";
export default {
  components: {
    SfProperty,
  },
  data() {
    return {
      name: "Material",
      value: "Cotton",
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
  - **type:** `string|number`
  - **defaultValue:** `""`

## Slots

- **`name`**
  - _Use this slot to replace property name_
  - **bindings:** `name`

- **`value`**
  - _Use this slot to replace property value_
  - **bindings:** `value`

## Events

None.

## CSS modifiers

- **`.sf-property--large`**
- **`.sf-property--full-width`**
- **`.sf-property--value-in-middle`**
- **`.sf-property--without-suffix`**

## CSS custom properties (variables)

- **`--property-color`**
- **`--property-name-margin`**
- **`--property-name-color`**
- **`--property-name-text-transform`**
- **`--property-name-font`**
- **`--property-name-font-weight`**
- **`--property-name-font-size`**
- **`--property-name-font-line-height`**
- **`--property-name-font-family`**
- **`--property-name-content`**
- **`--property-value-color`**
- **`--property-value-font`**
- **`--property-value-font-weight`**
- **`--property-value-font-size`**
- **`--property-value-font-line-height`**
- **`--property-value-font-family`**
### Overridden other components CSS variables 
None. 


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-property--common">Storybook</a>.
