# Steps

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`steps`**
  - _Steps to show_
  - **type:** `array`
  - **required:** `true`

- **`active`**
  - _Current active step_
  - **type:** `number`
  - **defaultValue:** `0`

- **`canGoBack`**
  - _Disable clicking on  a past step_
  - **type:** `boolean`
  - **defaultValue:** `true`


## Slots

- **`steps`**
  - _Use this slot to customise the steps_
  - **bindings:** `step-click`, `step`

- **`default`**


## Events

- **`'change'`**
  - _Active step changed event_


## CSS modifiers

None.


## SCSS variables

```scss
$steps__active-line-height-mobile: 0.1875rem;
$steps__active-line-height-desktop: 0.125rem;
$steps__active-line-color: $c-dark-primary;
$steps-border: 0.0625rem solid #f1f2f4;
$steps__step-font-weight: 500;
$steps__step-font-size: 0.75rem;
$steps__step-font-color: $c-gray-secondary;
$steps__step-padding: 1.25rem 0;
$steps__step-text-transform: uppercase;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfSteps.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfSteps.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfSteps.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
