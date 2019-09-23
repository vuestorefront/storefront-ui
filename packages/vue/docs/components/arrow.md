---
sidebarDepth: 0
---
# Arrow
Arrow component for sliders and navigation.

[[toc]]

## Most common usage scenario
<br />
<SfArrow/>

```html 
<template>
  <SfArrow />
</template>

<script>
import { SfArrow } from '@storefront-ui/vue'

export default {
  components: {
    SfArrow
  }
}
</script>
```

## Props
none
## Slots
- `default` arrow SVG icon
## Events
none
## CSS Modifiers

- `sf-arrow--right` transform left to right arrow
- `sf-arrow--long` change short to long arrow


## SCSS variables
Below you can find defaut values of SCSS variables bound to this component. You can override them in `sfui.scss` in the root of your project.

```scss
$arrow__button-color: $c-light-primary !default;
$arrow__button-color--hover: $c-dark-primary !default;
$arrow__button-shadow: 0 5px 12px -6px rgba($c-dark-primary, 0) !default;
$arrow__button-shadow--right: 0 -5px 12px -5px rgba($c-dark-primary, 0.6) !default;
$arrow__icon-color: $c-white !default;
$arrow__icon-color--hover: $c-dark-primary !default;
```

## Partials

If you want to customize this component even more you can use it's partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfArrow.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfArrow.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfArrow.scss";
</style>
```
You can read about using component partials [here](docs.storefrontui.io/customization)

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-arrow--basic">Storybook</a>.

