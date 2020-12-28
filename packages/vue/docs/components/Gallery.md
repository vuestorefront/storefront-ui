# Gallery

Gallery with one main and few side pictures that use can browse through.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-gallery--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 28rem"></iframe>
  </div>

```html
<template>
  <SfGallery
    :images="images"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :slider-options="sliderOptions"
    :current="current"
    :enable-zoom="enableZoom"
  />
</template>
<script>
import { SfGallery } from "@storefront-ui/vue";
export default {
  components: {
    SfGallery,
  },
  data() {
    return {
      current: 1,
      enableZoom: false,
      images: [
        {
          alt: "Product A",
          mobile: { url: "assets/storybook/SfGallery/productA.png" },
          desktop: { url: "assets/storybook/SfGallery/productA.png" },
          zoom: { url: "assets/storybook/SfGallery/productA.png" },
        },
        {
          alt: "Product B",
          mobile: { url: "/assets/storybook/SfGallery/productB.jpg" },
          desktop: { url: "/assets/storybook/SfGallery/productB.jpg" },
          zoom: { url: "/assets/storybook/SfGallery/productB.jpg" },
        },
        {
          alt: "Product A",
          mobile: { url: "assets/storybook/SfGallery/productA.png" },
          desktop: { url: "assets/storybook/SfGallery/productA.png" },
          zoom: { url: "assets/storybook/SfGallery/productA.png" },
        },
        {
          alt: "Product B",
          mobile: { url: "/assets/storybook/SfGallery/productB.jpg" },
          desktop: { url: "/assets/storybook/SfGallery/productB.jpg" },
          zoom: { url: "/assets/storybook/SfGallery/productB.jpg" },
        },
      ],
      imageWidth: 422,
      imageHeight: 664,
      sliderOptions: { autoplay: false, rewind: true, gap: 0 },
    };
  },
};
</script>
```

## Props

- **`images`**
  - _Images list_
  - **type:** `array`
  - **defaultValue:** `() => []`

- **`imageWidth`**
  - _Images width, without unit_
  - **type:** `number|string`
  - **defaultValue:** `422`

- **`imageHeight`**
  - _Images height, without unit_
  - **type:** `number|string`
  - **defaultValue:** `664`

- **`thumbWidth`**
  - _Thumb width, without unit_
  - **type:** `number|string`
  - **defaultValue:** `160`

- **`thumbHeight`**
  - _Thumb height, without unit_
  - **type:** `number|string`
  - **defaultValue:** `160`

- **`current`**
  - _Initial image number (starting from 1)_
  - **type:** `number`
  - **defaultValue:** `1`

- **`sliderOptions`**
  - _Glide slider options (https://glidejs.com/docs/options/)_
  - **type:** `object`
  - **defaultValue:** `function(){
  return {
    type: "slider",
    autoplay: false,
    rewind: false,
    gap: 0,
  };
}`

- **`outsideZoom`**
  - _Image zoom inside or overlap the stage_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`enableZoom`**
  - _Toogle for image zoom or overlap the stage_
  - **type:** `boolean`
  - **defaultValue:** `false`

## Slots

- **`thumbs`**
  - **bindings:** `images`, `active`, `go`

## Events

- **`click`**
  - _Event for current image change (`v-model`)_

## CSS modifiers

- **`.sf-gallery__item--selected`**

## CSS custom properties (variables)

- **`--gallery-flex-direction`**
- **`--gallery-thumbs-display`**
- **`--gallery-thumbs-flex`**
- **`--gallery-thumbs-flex-direction`**
- **`--gallery-thumbs-margin`**
- **`--gallery-thumbs-order`**
- **`--gallery-thumb-width`**
- **`--gallery-item-margin`**
- **`--gallery-item-opacity`**
- **`--gallery-item-transition`**
- **`--gallery-item-cursor`**
- **`--gallery-thumb-height`**
- **`--gallery-stage-width`**
### Overridden other components CSS variables 
None. 


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-gallery--common">Storybook</a>.
