# Accordion

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`multiple`**
  - _Allows to open multiple accordion items if set to "true"_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`firstOpen`**
  - _Opens the first accordion item if set to "true"_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`showChevron`**
  - _Toggles chevron icon in accordion item header_
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`transition`**
  - _Overlay transition effect_
  - **type:** `string`
  - **defaultValue:** `"fade"`


## Slots

- **`default`**
  - _default slot to setup SfAccordionItem elements_
  - **bindings:** `selected`


## Events

None.


## CSS modifiers

- **`icon--up`**
- **`item__content--active`**


## SCSS variables

```scss
$accordion-item__header-padding: 0.5rem 0 !default;
$accordion-item__header-font-size: 18px !default;
$accordion-item__header-bg-color: $c-light-primary !default;
$accordion-item__header-bg-color--active: #ffffff !default;
$accordion-item__header-font-weight: 900 !default;
$accordion-item__header-text-transform: uppercase !default;
$accordion-item__header-display: flex !default;
$accordion-item__header-justify-content: space-between !default;
$accordion-item__content-color: $c-dark-primary !default;
$accordion-item__content-font-size: 14px !default;
$accordion-item__content-padding: 0.5rem 0 !default;
$accordion-item__content-padding--first: 1.5rem 0 0.5rem !default;
$accordion-item__content-padding--last: 0.5rem 0 1.5rem !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/organisms/SfAccordion.html"></template>
<script src="@storefront-ui/vue/src/components/organisms/SfAccordion.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfAccordion.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
