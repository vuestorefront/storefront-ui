# CircleIcon

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`icon`**
  - **type:** `string|array`
  - **defaultValue:** `"home"`

- **`colorIcon`**
  - **type:** `string`
  - **defaultValue:** `"white"`

- **`sizeIcon`**
  - **type:** `string`
  - **defaultValue:** `"100%"`


## Slots

- **`default`**
  - _Custom content that will replace default icon. can be used for inlined SVG's_


## Events

None.


## CSS modifiers

- **`icon--small`**
- **`icon--big`**


## SCSS variables

```scss
$circle-icon-background-primary: $c-green-primary !default;
$circle-icon-background-secondary: $c-dark-primary !default;
$circle-icon-icon-color: $c-white !default;
$circle-icon-size: 3.25rem !default;
$circle-icon-size-small: 1.625rem !default;
$circle-icon-size-big: 4rem !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfCircleIcon.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfCircleIcon.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfCircleIcon.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
