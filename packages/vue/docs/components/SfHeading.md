# Heading

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`level`**
  - _Heading level_
  - **type:** `number`
  - **defaultValue:** `2`

- **`title`**
  - _Heading title_
  - **type:** `string`
  - **defaultValue:** `""`

- **`subtitle`**
  - _Heading subtitle_
  - **type:** `string`
  - **defaultValue:** `""`


## Slots

- **`title`**
  - _Heading title. Slot content will replace default &lt;h&gt; tag_
  - **bindings:** `title`

- **`subtitle`**
  - _Heading subtitle. Slot content will replace default &lt;div&gt; tag_
  - **bindings:** `subtitle`


## Events

None.


## CSS modifiers

- **`heading--no-underline`**
- **`heading--left`**
- **`heading--right`**


## SCSS variables

```scss
$heading__subtitle-font-family: $body-font-family-primary !default;
$heading__subtitle-font-size: $font-size-regular-mobile !default;
$heading__subtitle-font-size-desktop: $font-size-big-desktop !default;
$heading__subtitle-line-height: 1.6 !default;
$heading--border-color: #f1f2f4 !default;
$heading--underline-subtitle-color: #a3a5ad !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfHeading.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
