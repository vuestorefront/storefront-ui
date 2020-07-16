# Colors

## Basic palette group

Below is our basic color palette grouped by types of usage:

<sf-docs-colors/>

### Global Classes

Each color from the palette is converted to:

* Background color through class syntax `bg-<color>` for primary color or `bg-<color>--variant` for the variant from the palette, such as:
 
```html
<div class="bg-primary"/>
<div class="bg-primary--variant"/>
```

* Text color variant through class `text-<color>`, e.g.:
 
 ```html
<div class="text-primary"/>
 ```

### Component Classes

There is a SASS mixin prepared to add a set of styling classes (background, border, text color) in the components.

```scss
@mixin color-modifiers($componentName) { }
```

If we add this mixin in the desired component:

```scss
.sf-button {
  @include color-modifiers('--button');
}
```

it will generate the following code for each color palette:

```scss
&.color-warning {
  --button-color: var(--c-on-warning);
  --button-background-color: var(--c-warning);
  --button-border-color: var(--c-warning);
  --button-hover-color: var(--c-on-warning-hover);
  --button-hover-background-color: var(--c-warning-hover);
  --button-hover-border-color: var(--c-warning-hover);
}
```

So that we can make color variations through a class such as:
 
```html
<div class="sf-button color-primary"/>
```

### How does it work?

This mixin is based on the CSS variables of the component. To make it work, we need to define the desired variables based on component name and assign them to the component class. For example:

```scss
:root {
  --button-color: #ffffff;
  --button-background-color: #000000;
  --button-border-color: #000000;
  --button-hover-color: #000000;
  --button-hover-background-color: #ffffff;
  --button-hover-border-color: #ffffff;
}
.sf-button {
  color: var(--button-color);
  background-color: var(--button-background-color);
  border-color: var(--button-border-color);
  &:hover {
    color: var(--button-hover-color);
    background-color: var(--button-hover-background-color);
    border-color: var(--button-hover-border-color);
  }
  @include color-modifiers('--button');
}
```

## Colors for icon

In order to maximize ease of use for `SfIcon` in rendering custom SVG icons, we provide a list of icon colors based on StorefrontUI palette, as following:

<sf-docs-colors mapType="icons"/>

### Use with classes

Each color used from this list for the icon will be converted to a proper color class, following the syntax `sf-icon--color-<color>`. For example `sf-icon--color-green-primary`. These classes for colors are defined [here](https://github.com/DivanteLtd/storefront-ui/blob/develop/packages/shared/styles/components/atoms/SfIcon.scss)

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
import { iconColors as colors } from "@storefront-ui/shared/variables/colors";
export default {
  data() {
    return {
      iconColor: colors.greenPrimary
    }
  }
}
</script>
```
More information on `SfIcon` can be found [here](/components/Icon.md).
