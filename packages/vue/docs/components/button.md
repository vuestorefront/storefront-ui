<RegisterExternals />

# Button

[[toc]]

Base button component.

## Most common usage scenario
<br />
<SfButton>Hello World!</SfButton>

```html
<template>
  <SfButton>Hello World!</SfButton>
</template>

<script>
import { SfButton } from '@storefront-ui/vue'

export default {
  components: {
    SfButton
  }
}
</script>
```

## Props

none
## Slots
- `default` button content
## Events
none
## CSS Modifiers

- `sf-button--full-width`

## SCSS variables
Below you can find defaut values of SCSS variables bound to this component. You can override them in `sfui.scss` in the root of your project.

```scss
$button-color: $c-text-on-dark !default;
$button-background-color: $c-green-primary !default;
$button-border-radius: 0 !default;
$button-text-transform: uppercase !default;
$button-desktop-padding: 0.9375rem 2.5rem !default;
$button-desktop-font-size: 1.125rem !default;
$button-mobile-padding: 0.5rem 1.7rem !default;
$button-mobile-font-size: 0.75rem !default;
```
## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-button--basic">Storybook</a>.

