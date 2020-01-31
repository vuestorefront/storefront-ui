# Colors

## Basic palette group

Below is our basic color palette grouped by types of usage:

<sf-docs-colors/>

### Classes

Each color from the palette is converted to

* Background color through class syntax `bg-<color>` for primary color or `bg-<color>--variant` for the variant from the palette, such as `<div class="bg-primary"/>` or `<div class="bg-primary-variant"/>`

* Text color variant through class `text-<color>`, e.g. `<div class="text-primary"/>`.

* A set of stylings (background, border, text color) based on its type of usage through a class such as `<div class="color-primary/>`

More information on how these classes are defined can be found [here](https://github.com/DivanteLtd/storefront-ui/blob/develop/packages/shared/styles/variables/_colors.scss).

## Colors for icon

In order to maximize ease of use for `SfIcon` in rendering custom SVG icons, we provide a list of icon colors based on StorefrontUI palette, as following:

<sf-docs-colors mapType="icons"/>

### Use with classes

Each color used from this list for the icon will be converted to a proper color class, following the syntax `sf-icon--color-<color>`. For example `sf-icon--color-green-primary`. These classes for colors are defined [here](https://github.com/DivanteLtd/storefront-ui/blob/develop/packages/shared/styles/components/SfIcon.scss)

You can apply any color from the list above to an icon, simply by passing the color's label to `color` prop, e.g
```html
<sf-icon color="green-primary"/>
```
or by importing the list of icon colors from `@storefront-ui/shared/variables/colors` and using the desired color variable, e.g
```vue
<template>
  <sf-icon :color="iconColor"/>
</template>
<script>
import { colors } from "@storefront-ui/shared/variables/colors";
export default {
  data() {
    return {
      iconColor: colors.greenPrimary
    }
  }
}
</script>
```
More information on `SfIcon` can be found [here](/components/Icon.md)