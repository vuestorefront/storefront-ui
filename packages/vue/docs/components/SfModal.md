# Modal

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`cross`**
  - _Cross closing modal button_
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`visible`**
  - _Visibility of the modal_
  - **type:** `boolean`
  - **defaultValue:** `() => false`

- **`overlay`**
  - _Whether to show the overlay_
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`persistent`**
  - _If true clicking outside will not dismiss the modal_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`transitionOverlay`**
  - _overlay transition effect_
  - **type:** `string`
  - **defaultValue:** `"fade"`

- **`transitionModal`**
  - _overlay transition effect_
  - **type:** `string`
  - **defaultValue:** `"fade"`


## Slots

- **`close`**
  - _Use this slot to place content inside the close button._

- **`default`**
  - _Use this slot to place content inside the modal._


## Events

- **`close`**

- **`open`**


## CSS modifiers

None.


## SCSS variables

```scss
$modal-background-color: $c-white;
$modal-width: 430px;
$modal-height: auto;
$modal-padding: 2.5em 5em;
$modal-border: solid 1px rgba($c-black, 0.5);
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfModal/SfModal.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfModal/SfModal.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfModal.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
