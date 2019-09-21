# HeroItem

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`title`**
  - _Hero item title_
  - **type:** `string`
  - **defaultValue:** `""`

- **`subtitle`**
  - _Hero item subtitle (at the top)_
  - **type:** `string`
  - **defaultValue:** `""`

- **`buttonText`**
  - _text that will be displayed inside the button. You can replace the button  with "call-to-action" slot_
  - **type:** `string`
  - **defaultValue:** `""`

- **`background`**
  - _Background color_
  - **type:** `string`
  - **defaultValue:** `""`

- **`image`**
  - _Background image path_
  - **type:** `string`
  - **defaultValue:** `""`


## Slots

- **`subtitle`**
  - _hero item subtitle. Slot content will replace default <h2> tag_

- **`title`**
  - _hero item title. Slot content will replace default <h1> tag_

- **`call-to-action`**
  - _Call to action section. Slot content will replace default SfButton component_


## Events

None.


## CSS modifiers

None.


## SCSS variables

None.

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/organisms/SfHeroItem.html"></template>
<script src="@storefront-ui/vue/src/components/organisms/SfHeroItem.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfHeroItem.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
