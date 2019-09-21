# Section

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`titleHeading`**
  - _Heading title_
  - **type:** `string`
  - **defaultValue:** `""`

- **`subtitleHeading`**
  - _Heading subtitle_
  - **type:** `string`
  - **defaultValue:** `""`

- **`levelHeading`**
  - _Heading tag level_
  - **type:** `number`
  - **defaultValue:** `2`


## Slots

- **`heading`**
  - _Section heading. Slot content will replace default &lt;sf-heading&gt; component_
  - **bindings:** `levelHeading`, `titleHeading`, `subtitleHeading`

- **`default`**
  - _Section content._


## Events

None.


## CSS modifiers

None.


## SCSS variables

```scss
$section-margin-y: $spacer-big * 3 !default;
$section-margin-y-desktop: 10rem !default;
$section__content-margin-top: $spacer-big !default;
$section__content-margin-top-desktop: $spacer-extra-big * 1.5 !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfSection/SfSection.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfSection/SfSection.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfSection.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
