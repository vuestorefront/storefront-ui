# Loader

Overlay loading spinner, wrapped around elements for indicating long running tasks like image loading

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-loader--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 25rem"></iframe>
  </div>

```html
<template>
  <div style="width: 236px; height: 366px; border: 1px solid #f2f2f2;">
    <SfLoader :loading="isLoading">
      <SfImage src="/assets/storybook/SfImage/product-216x326.jpg" />
    </SfLoader>
  </div>
</template>
<script>
import { SfLoader } from "@storefront-ui/vue";
import { SfImage } from "@storefront-ui/vue";
import {} from "@storefront-ui/vue";
export default {
  components: {
    SfLoader,
    SfImage,
  },
  data() {
    return {
      isLoading: true,
    };
  },
};
</script>
```

## Props

- **`loading`**
  - _Shows the loader on top of the existing content_
  - **type:** `boolean`
  - **defaultValue:** `true`

## Slots

- **`default`**
  - _Slot for the actual content being loaded_

- **`loader`**
  - _Use this slot to replace the loader_

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--loader-overlay-background`**
- **`--loader-spinner-stroke`**
### Overridden other components CSS variables 
None. 


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-loader--common">Storybook</a>.
