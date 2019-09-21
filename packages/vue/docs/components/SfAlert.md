# Alert

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`message`**
  - _Message that will be displayed in Alert._
  - **type:** `string`
  - **defaultValue:** `""`

- **`colorIcon`**
  - _One of predefined SfIcon colors, default is black._
  - **type:** `string`
  - **defaultValue:** `"white"`

- **`sizeIcon`**
  - _One of predefined SfIcon sizes._
  - **type:** `string`
  - **defaultValue:** `"24px"`

- **`icon`**
  - _Svg file iconPath_
  - **type:** `string`
  - **defaultValue:** `"clock"`

- **`type`**
  - _Alert type ("alert", "warning", "info", "success"). Check "Knobs" section to see how they look like._
  - **type:** `string`
  - **defaultValue:** `"alert"`


## Slots

- **`icon`**
  - _Custom alert icon. Slot content will replace default icon &lt;img&gt; tag._
  - **bindings:** `icon`, `sizeIcon`, `colorIcon`, `type`

- **`message`**
  - _Custom message . Slot content will replace default message &lt;span&gt; tag._
  - **bindings:** `message`


## Events

None.


## CSS modifiers

- **`alert--info`**
- **`alert--alert`**
- **`alert--warning`**
- **`alert--success`**


## SCSS variables

```scss
$alert__message-margin: 0 !default;
$alert__message-padding-left: 0.625rem !default;
$alert-font-family: $body-font-family-secondary !default;
$alert-font-size: $font-size-regular-mobile !default;
$alert-font-size-desktop: $font-size-big-desktop !default;
$alert-font-weight: $body-font-weight-secondary !default;
$alert-line-height: 1.6 !default;
$alert--info-color: $c-dark-primary !default;
$alert--warning-color: #d12727 !default;
$alert--alert-color: #0468db !default;
$alert--success-color: #128830 !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfAlert.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfAlert.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfAlert.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
