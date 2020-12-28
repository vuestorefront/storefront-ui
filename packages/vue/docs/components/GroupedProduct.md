# GroupedProduct

Grouped Product component

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-groupedproduct--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 30rem"></iframe>
  </div>

```html
<template>
  <SfGroupedProduct
    :settings="settings"
    :has-carousel="hasCarousel"
    :style="{ maxWidth: '500px' }"
  >
    <SfGroupedProductItem
      :qty="productQty"
      @input="productQty = $event"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :image-lazy="imageLazy"
      :title="title"
      :price-regular="priceRegular"
      :price-special="priceSpecial"
    >
      <template #details>
        <div :style="{ color: '#72757E', fontSize: 'var(--font-size--base' }">
          MSD23-345-324
        </div>
        <SfProperty
          name="Color"
          value="White"
          :style="{ margin: 'auto 0 0 0' }"
        />
      </template>
    </SfGroupedProductItem>
  </SfGroupedProduct>
</template>
<script>
import { SfGroupedProduct } from "@storefront-ui/vue";
import { SfProperty } from "@storefront-ui/vue";
export default {
  components: {
    SfGroupedProduct,
    SfProperty,
  },
  data() {
    return {
      productQty: 1,
      settings: { type: "slider" },
      hasCarousel: false,
      image: {
        mobile: { url: "/assets/storybook/SfGroupedProduct/product-white.png" },
        desktop: {
          url: "/assets/storybook/SfGroupedProduct/product-white.png",
        },
      },
      imageWidth: 328,
      imageHeight: 448,
      imageLazy: true,
      title: "Leave white brooch",
      priceRegular: "$10,99",
      priceSpecial: "",
    };
  },
};
</script>
```

## Props

- **`settings`**
  - **type:** `object`
  - **defaultValue:** `{}`

- **`hasCarousel`**
  - **type:** `boolean`
  - **defaultValue:** `true`

## Slots

- **`default`**
  - _Slot for Grouped Product Items_

## Events

None.

## CSS modifiers

- **`.glide__slide--clone`**

## CSS custom properties (variables)

- **`--grouped-product-item-display`**
- **`--grouped-product-item-padding`**
- **`--grouped-product-item-border`**
- **`--grouped-product-item-border-width`**
- **`--grouped-product-item-font`**
- **`--grouped-product-item-font-weight`**
- **`--grouped-product-item-font-size`**
- **`--grouped-product-item-font-line-height`**
- **`--grouped-product-item-font-family`**
- **`--grouped-product-item-aside-position`**
- **`--grouped-product-item-flex`**
- **`--grouped-product-item-image-background`**
- **`--grouped-product-item-quantity-selector-display`**
- **`--grouped-product-item-quantity-selector-bottom`**
- **`--grouped-product-item-quantity-selector-left`**
- **`--grouped-product-item-quantity-selector-right`**
- **`--grouped-product-item-quantity-selector-transfrom`**
- **`--grouped-product-item-quantity-selector-margin`**
- **`--grouped-product-item-description-margin`**
- **`--grouped-product-item-info-margin`**
- **`--grouped-product-item-title-color`**
- **`--grouped-product-item-title-margin`**
- **`--grouped-product-item-title-font`**
- **`--grouped-product-item-title-font-weight`**
- **`--grouped-product-item-title-font-size`**
- **`--grouped-product-item-title-font-line-height`**
- **`--grouped-product-item-title-font-family`**
- **`--grouped-product-item-price-margin`**
### Overridden other components CSS variables 
- **`--quantity-selector-background`**
- **`--link-text-decoration`**


You can override CSS variables values bound to this component.

## Internal components

### GroupedProductItem
#### Props
- **`image`**
  - _Product image_
  - **type:** `string|object`
  - **defaultValue:** `""`

- **`imageWidth`**
  - _Product image width, without unit_
  - **type:** `string|number`
  - **defaultValue:** `328`

- **`imageHeight`**
  - _Product image height, without unit_
  - **type:** `string|number`
  - **defaultValue:** `448`

- **`imagePlaceholder`**
  - _Product image placeholder_
  - **type:** `string`
  - **defaultValue:** `""`

- **`imageLazy`**
  - _Product image lazy loading_
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`imagePictureBreakpoint`**
  - _Product image picture breakpoint_
  - **type:** `number`
  - **defaultValue:** `576`

- **`title`**
  - _Product title_
  - **type:** `string`
  - **defaultValue:** `""`

- **`priceRegular`**
  - _Product regular price_
  - **type:** `number|string`
  - **defaultValue:** `""`

- **`priceSpecial`**
  - _Product special price_
  - **type:** `number|string`
  - **defaultValue:** `""`

- **`qty`**
  - _Product quantity_
  - **type:** `number|string`
  - **defaultValue:** `1`

- **`link`**
  - _Link to product_
  - **type:** `string|object`
  - **defaultValue:** `""`

#### Slots
- **`image`**
  - _Custom image markup_
  - **bindings:** `image`, `title`, `imagePlaceholder`, `imageLazy`, `imagePictureBreakpoint`

- **`title`**
  - _Custom title markup_
  - **bindings:** `title`

- **`details`**
  - _Custom details markup_

- **`configuration`**
  - _Custom configuration markup_

- **`price`**
  - _Custom price markup_
  - **bindings:** `priceSpecial`, `priceRegular`

- **`input`**
  - _Custom input markup_
  - **bindings:** `qty`

#### Events
None.

#### CSS modifiers
None.

#### CSS variables
None.

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-groupedproduct--common">Storybook</a>.
