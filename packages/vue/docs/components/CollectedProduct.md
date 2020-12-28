# CollectedProduct

Tile component with image, descriptions and actions for collected product.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-collectedproduct--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 10rem"></iframe>
  </div>

```html
<template>
  <SfCollectedProduct
    :qty="productQty"
    :class="customClass"
    @input="productQty = $event"
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :title="title"
    :regular-price="regularPrice"
    :special-price="specialPrice"
  >
  </SfCollectedProduct>
</template>
<script>
import { SfCollectedProduct } from "@storefront-ui/vue";
import { SfButton } from "@storefront-ui/vue";
export default {
  components: {
    SfCollectedProduct,
    SfButton,
  },
  data() {
    return {
      productQty: 1,
      image: {
        mobile: { url: "/assets/storybook/Home/productB.jpg" },
        desktop: { url: "/assets/storybook/Home/productB.jpg" },
      },
      imageWidth: 140,
      imageHeight: 200,
      title: "Cotton Sweater Modern Style",
      regularPrice: "$10,99",
      specialPrice: "",
    };
  },
};
</script>
```

## Props

- **`image`**
  - _Product image. It should be an url of the product_
  - **type:** `string|object`
  - **defaultValue:** `""`

- **`imageWidth`**
  - _Product image width, without unit_
  - **type:** `string|number`
  - **defaultValue:** `140`

- **`imageHeight`**
  - _Product image height, without unit_
  - **type:** `string|number`
  - **defaultValue:** `200`

- **`title`**
  - _Product title_
  - **type:** `string`
  - **defaultValue:** `""`

- **`regularPrice`**
  - _Product regular price_
  - **type:** `number|string`
  - **defaultValue:** `null`

- **`specialPrice`**
  - _Product special price_
  - **type:** `number|string`
  - **defaultValue:** `null`

- **`qty`**
  - _Selected quantity_
  - **type:** `number|string`
  - **defaultValue:** `1`

- **`link`**
  - _Link to product_
  - **type:** `string|object`
  - **defaultValue:** `""`

## Slots

- **`title`**
  - **bindings:** `title`

- **`price`**
  - **bindings:** `specialPrice`, `regularPrice`

- **`configuration`**

- **`actions`**

- **`image`**
  - **bindings:** `image`, `title`

- **`input`**

- **`remove`**
  - **bindings:** `removeHandler`

- **`more-actions`**

## Events

- **`click:remove`**

## CSS modifiers

- **`.sf-collected-product__remove--circle-icon`**
- **`.sf-collected-product__remove--text`**
- **`.sf-collected-product--detailed`**

## CSS custom properties (variables)

- **`--collected-product-width`**
- **`--collected-product-padding`**
- **`--collected-product-background`**
- **`--collected-product-z-index`**
- **`--collected-product-remove-opacity`**
- **`--collected-product-remove-right`**
- **`--collected-product-remove-transition`**
- **`--collected-product-remove-top`**
- **`--collected-product-remove-circle-icon-display`**
- **`--collected-product-remove-circle-icon-transform`**
- **`--collected-product-remove-bottom`**
- **`--collected-product-remove-text-display`**
- **`--collected-product-image-background`**
- **`--collected-product-main-margin`**
- **`--collected-product-main-flex-direction`**
- **`--collected-product-title-margin`**
- **`--collected-product-title-color`**
- **`--collected-product-title-font`**
- **`--collected-product-title-font-weight`**
- **`--collected-product-title-font-size`**
- **`--collected-product-title-font-line-height`**
- **`--collected-product-title-font-family`**
- **`--collected-product-configuration-display`**
- **`--collected-product-configuration-justify-content`**
- **`--collected-product-configuration-align-items`**
- **`--collected-product-configuration-margin`**
- **`--collected-product-actions-display`**
- **`--collected-product-actions-justify-content`**
- **`--collected-product-actions-align-items`**
- **`--collected-product-box-shadow`**
### Overridden other components CSS variables 
- **`--quantity-selector-background`**
- **`--link-text-decoration`**
- **`--collected-product-transition`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-collectedproduct--common">Storybook</a>.
