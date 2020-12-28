# Counter

Counter component with indicators.


[[toc]]


## Most common usage scenario

<iframe src="https://deploy-preview-480--storefrontui-storybook.netlify.com/iframe.html?id=molecules-counter--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 5rem"></iframe>

```html
<template>
  <SfCounter
    v-model="value"
    :step="step"
    :auto-fill="autoFill"
    :min="min"
    :max="max"
    :precision="precision"
    :delimiter="delimiter"
    :thousands="thousands"
    :controls="controls"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
  />
</template>

<script>
import { SfCounter } from "@storefront-ui/vue";

export default {
  components: {
    SfCounter
  },
  data() {
    return {
      value: 1,
      step: 1,
      autoFill: false,
      min: 1,
      max: 99,
      precision: 0,
      delimiter: ".",
      thousands: ",",
      controls: true,
      type: "text",
      name: "counter",
      placeholder: "",
      disabled: false,
      required: false
    };
  }
};
</script>
```


## Props

- **`step`**
  - **type:** `number`
  - **defaultValue:** `1`

- **`value`**
  - **type:** `number`
  - **defaultValue:** `0`

- **`autoFill`**
  - **type:** `boolean`

- **`min`**
  - **type:** `number`
  - **defaultValue:** `0`

- **`max`**
  - **type:** `number`
  - **defaultValue:** `1`

- **`precision`**
  - **type:** `number`
  - **defaultValue:** `0`

- **`delimiter`**
  - **type:** `string`
  - **defaultValue:** `"."`

- **`thousands`**
  - **type:** `string`
  - **defaultValue:** `","`

- **`controls`**
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`type`**
  - **type:** `string`
  - **defaultValue:** `"text"`

- **`name`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`placeholder`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`disabled`**
  - **type:** `boolean`

- **`required`**
  - **type:** `boolean`


## Slots

- **`down`**

- **`field`**
  - **bindings:** `stringValue`, `increase`, `decrease`, `keypress`, `type`, `name`, `required`, `disabled`, `placeholder`

- **`up`**


## Events

- **`input`**


## CSS modifiers

None.


## SCSS variables

None.

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


<!-- No _internal components -->


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfCounter/SfCounter.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfCounter/SfCounter.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfCounter.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-counter--common">Storybook</a>.
