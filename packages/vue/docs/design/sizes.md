# Sizes

## Icon sizes

Similarly, we provide the same standard sizes for customizing `SfIcon`.

<SfDocsIcons/>

Each size used from this list for the icon will be converted to a proper size class, following the syntax `sf-icon--size-<size>`. For example `sf-icon--size-xxs`. These classes for sizes are defined [here](https://github.com/DivanteLtd/storefront-ui/blob/develop/packages/shared/styles/components/SfIcon.scss)

You can apply any size from the list above to an icon, simply by passing the size's label to `size` prop, e.g
```html
<sf-icon size="xxs"/>
```
or by importing the list of icon sizes from `@storefront-ui/shared/variables/sizes` and using the desired size variable, e.g
```vue
<template>
  <sf-icon :size="iconSize"/>
</template>
<script>
import { sizes } from "@storefront-ui/shared/variables/sizes";
export default {
  data() {
    return {
      iconSize: sizes.xxs
    }
  }
}
</script>
```
More information on `SfIcon` can be found [here](/components/Icon.md)

