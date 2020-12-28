# Image

Image accepting string source or object

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-image--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 25rem"></iframe>
  </div>

```html
<template>
  <SfImage
    :src="src"
    :alt="alt"
    :lazy="lazy"
    :rootMargin="rootMargin"
    :threshold="threshold"
  />
</template>
<script>
import { SfImage } from "@storefront-ui/vue";
export default {
  components: {
    SfImage,
  },
  data() {
    return {
      srcset: [
        {
          src: "/assets/storybook/SfImage/product-109x164.webp",
          media: "(max-width: 480px)",
          type: "image/webp",
        },
        {
          src: "/assets/storybook/SfImage/product-109x164.webp",
          media: "(min-width: 480px) and (max-width: 720px)",
          type: "image/webp",
        },
        {
          src: "/assets/storybook/SfImage/product-216x326.jpg",
          media: "(min-width: 1240px)",
          type: "image/jpg",
        },
      ],
      src: "/assets/storybook/SfImage/product-216x326.jpg",
      alt: "Vila stripe maxi shirt dress",
      width: 216,
      height: 326,
      lazy: true,
      rootMargin: "0px",
      threshold: 0,
    };
  },
};
</script>
```

## Props

- **`src`**
  - **type:** `string|object`
  - **defaultValue:** `""`

- **`srcset`**
  - **type:** `string|array`
  - **defaultValue:** `""`

- **`lazy`**
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`width`**
  - **type:** `string|number`
  - **defaultValue:** `null`

- **`height`**
  - **type:** `string|number`
  - **defaultValue:** `null`

- **`rootMargin`**
  - **type:** `string`
  - **defaultValue:** `"0px 0px 0px 0px"`

- **`threshold`**
  - **type:** `string|number`
  - **defaultValue:** `0`

## Slots

- **`default`**

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--image-width`**
- **`--image-height`**
- **`--_image-width`**
- **`--_image-height`**
- **`--image-overlay-padding`**
- **`--image-overlay-background`**
- **`--image-overlay-color`**
- **`--image-overlay-opacity`**
- **`--image-overlay-font`**
- **`--image-overlay-font-weight`**
- **`--image-overlay-font-size`**
- **`--image-overlay-font-line-height`**
- **`--image-overlay-font-family`**
### Overridden other components CSS variables 
None. 


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-image--common">Storybook</a>.
