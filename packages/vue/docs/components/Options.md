# Options

Component with label. Can be used as part of product configuration.


[[toc]]


## Most common usage scenario

<iframe src="https://deploy-preview-480--storefrontui-storybook.netlify.com/iframe.html?id=molecules-options--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 5rem"></iframe>

```html
<template>
  <SfOptions
    v-model="value"
    :options="options[type]"
    :type="type"
    :label="label"
  />
</template>

<script>
import { SfOptions } from "@storefront-ui/vue";

export default {
  components: {
    SfOptions
  },
  data() {
    return {
      value: "",
      label: "Size",
      type: "text",
      options: {
        text: [
          { value: "xs", text: "XS" },
          { value: "s", text: "S" },
          { value: "m", text: "M" },
          { value: "l", text: "L" }
        ],
        color: [
          { value: "orange", color: "orange" },
          { value: "pink", color: "pink" },
          { value: "yellow", color: "yellow" },
          { value: "blue", color: "blue" },
          { value: "green", color: "green" }
        ],
        image: [
          { value: "logo", image: "/assets/logo.svg" },
          { value: "heart", image: "/assets/storybook/SfOptions/heart.svg" },
          { value: "home", image: "/assets/storybook/SfOptions/home.svg" },
          { value: "profile", image: "/assets/storybook/SfOptions/profile.svg" }
        ]
      }
    };
  }
};
</script>
```


## Props

- **`options`**
  - **type:** `array`
  - **defaultValue:** `() => []`

- **`type`**
  - **type:** `string`
  - **defaultValue:** `"text"`

- **`label`**
  - **type:** `string`
  - **defaultValue:** `null`

- **`value`**
  - **type:** `string`
  - **defaultValue:** `null`


## Slots

- **`label`**
  - **bindings:** `label`

- **`text`**
  - **bindings:** `text`, `value`, `isTypeText`, `isOptionSelected`

- **`color`**
  - **bindings:** `color`, `value`, `isOptionSelected`

- **`image`**
  - **bindings:** `image`, `value`, `isOptionSelected`


## Events

- **`input`**


## CSS modifiers

- **`.sf-options__option-text--selected`**
- **`.sf-options__option-color--selected`**
- **`.sf-options__option-image--selected`**


## SCSS variables

```scss
$options-font-family: $body-font-family-secondary !default;
$options-font-size: $font-size-regular-mobile !default;
$options-font-weight: 500 !default;
$options-line-height: 1.6 !default;
$options-transition: all 0.3s ease-in-out !default;
$options__label-margin-bottom: 0.5rem !default;
$options__label-font-size: $font-size-big-mobile !default;
$options__option-size: 2rem !default;
$options__option-color-size-desktop: 1rem !default;
$options__option-margin: 0.75rem !default;
$options__option-text-color: #bdbdbd !default;
$options__option--selected-text-color: $c-text !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


<!-- No _internal components -->


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfOptions/SfOptions.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfOptions/SfOptions.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfOptions.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-options--common">Storybook</a>.
