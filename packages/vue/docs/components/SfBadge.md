# Badge

Badge component. Place desired content into its default slot.


[[toc]]


## Most common usage scenario

<br><SfBadge>LIMITED</SfBadge>

```html 
<template>
  <SfBadge>LIMITED</SfBadge>
</template>

<script>
import { SfBadge } from '@storefront-ui/vue'

export default {
  components: {
    SfBadge
  }
}
</script>
```


## Props

None.


## Slots

- **`default`**
  - _Use this slot to place content inside the badge._


## Events

None.


## CSS modifiers

- **`badge--alert`**
- **`badge--warning`**
- **`badge--full-width`**


## SCSS variables

```scss
$badge-padding: 0.3125rem 0.625rem !default;
$badge-text-color: $c-white !default;
$badge-font-family: $body-font-family-secondary !default;
$badge-font-size: $font-size-small-desktop !default;
$badge-font-weight: 500 !default;
$badge-line-height: 1.6 !default;
$badge--alert: $c-pink-primary !default;
$badge--warning: $c-blue-primary !default;
$badge--info: $c-green-primary !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfBadge.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfBadge.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfBadge.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-badge--basic">Storybook</a>.
