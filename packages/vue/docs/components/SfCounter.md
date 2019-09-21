# Counter

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`step`**
  - **type:** `number`
  - **defaultValue:** `1`

- **`value`**
  - **type:** `number`

- **`autoFill`**
  - **type:** `boolean`

- **`min`**
  - **type:** `number`

- **`max`**
  - **type:** `number`

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

- **`placeholder`**
  - **type:** `string`

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

- **`counter--large`**
- **`counter__control--up`**


## SCSS variables

```scss
$counter-background: $c-white !default;
$counter-color: $c-dark-primary !default;
$counter-width: 4.5rem !default;
$counter-border: none !default;
$counter--large-width: $counter-width * 2 !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfCounter.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfCounter.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfCounter.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
