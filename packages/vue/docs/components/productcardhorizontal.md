# ProductCardHorizontal

Product card horizontal component with image, description, rating and add to cart button.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-productcardhorizontal--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 30rem"></iframe>
  </div>

```html
<template>
  <div :style="{ maxWidth: '1240px' }">
    <SfProductCardHorizontal
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :title="title"
      :link="link"
      :link-tag="linkTag"
      :regular-price="regularPrice"
      :special-price="specialPrice"
      :score-rating="scoreRating"
      :max-rating="maxRating"
      :wishlist-icon="wishlistIcon"
      :reviews-count="reviewsCount"
      :is-added-to-cart="isAddedToCart"
      :add-to-cart-disabled="addToCartDisabled"
      :description="description"
      :qty="quantity"
      @input="quantity = $event"
      :is-on-wishlist-icon="isOnWishlistIcon"
      :is-on-wishlist="isOnWishlist"
    >
      <template #configuration>
        <SfProperty
          class="desktop-only"
          name="Size"
          value="XS"
          style="margin: 0 0 1rem 0;"
        />
        <SfProperty class="desktop-only" name="Color" value="white" />
      </template>
      <template #actions>
        <SfButton
          class="sf-button--text desktop-only"
          @click="$emit('click:add-to-wishlist')"
          style="margin: 0 0 1rem auto; display: block;"
        >
          Save for later
        </SfButton>
        <SfButton
          class="sf-button--text desktop-only"
          @click="$emit('click:add-to-compare')"
          style="margin: 0 0 0 auto; display: block;"
        >
          Add to compare
        </SfButton>
      </template>
    </SfProductCardHorizontal>
  </div>
</template>
<script>
import { SfProductCardHorizontal } from "@storefront-ui/vue";
import { SfButton } from "@storefront-ui/vue";
import { SfProperty } from "@storefront-ui/vue";
export default {
  components: {
    SfProductCardHorizontal,
    SfButton,
    SfProperty,
  },
  data() {
    return {
      quantity: 1,
      image: "assets/storybook/SfProductCardHorizontal/productA.jpg",
      imageWidth: 140,
      imageHeight: 200,
      title: "Cream Beach Bag",
      description:
        "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
      link: "",
      linkTag: "",
      regularPrice: "$10,99",
      specialPrice: "",
      wishlistIcon: "heart",
      isOnWishlist: true,
      isOnWishlistIcon: "heart_fill",
      maxRating: 5,
      scoreRating: 4,
      reviewsCount: 7,
      isAddedToCart: false,
      qty: 1,
      addToCartDisabled: false,
    };
  },
};
</script>
```

## Props

- **`description`**
  - _Product description_
  - **type:** `string`
  - **defaultValue:** `""`

- **`image`**
  - _Product image. It should be an url of the product_
  - **type:** `array|object|string`
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

- **`link`**
  - _Link to product page_
  - **type:** `string|object`
  - **defaultValue:** `""`

- **`linkTag`**
  - _Link element tag_
  - **type:** `string`
  - **defaultValue:** `undefined`

- **`scoreRating`**
  - _Product rating_
  - **type:** `number|boolean`
  - **defaultValue:** `false`

- **`reviewsCount`**
  - _Product reviews count_
  - **type:** `number|boolean`
  - **defaultValue:** `false`

- **`maxRating`**
  - _Maximum product rating_
  - **type:** `number|string`
  - **defaultValue:** `5`

- **`regularPrice`**
  - _Product regular price_
  - **type:** `number|string`
  - **defaultValue:** `null`

- **`specialPrice`**
  - _Product special price_
  - **type:** `number|string`
  - **defaultValue:** `null`

- **`isAddedToCart`**
  - _isAddedToCart status of whether button is showed, product is added or not_
  - **type:** `boolean`

- **`addToCartDisabled`**
  - _addToCartDisabled status of whether button is disabled when out of stock_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`wishlistIcon`**
  - _Wish list icon. This is the default icon for product not yet added to wish list. It can be a icon name from our icons list, or array or string as SVG path(s)._
  - **type:** `string|array|boolean`
  - **defaultValue:** `"heart"`

- **`isOnWishlistIcon`**
  - _Wish list icon for product which has been added to wish list. This is the icon for product added to wish list. Default visible on mobile. Visible only on hover on desktop. It can be a icon name from our icons list, or array or string as SVG path(s)._
  - **type:** `string|array`
  - **defaultValue:** `"heart_fill"`

- **`isOnWishlist`**
  - _Status of whether product is on wish list or not_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`qty`**
  - _Selected quantity_
  - **type:** `number|string`
  - **defaultValue:** `1`

## Slots

- **`image`**
  - _Use this slot to replace image_
  - **bindings:** `image`, `title`, `link`, `imageHeight`, `imageWidth`

- **`title`**
  - _Use this slot to replace title_
  - **bindings:** `title`, `link`

- **`description`**
  - _Use this slot to replace description_

- **`configuration`**

- **`price`**
  - _Use this slot to replace price_
  - **bindings:** `specialPrice`, `regularPrice`

- **`reviews`**
  - _Use this slot to replace reviews_
  - **bindings:** `maxRating`, `scoreRating`

- **`actions`**
  - _Use this slot to place content inside actions_

- **`add-to-cart`**
  - _Use this slot to replace add to cart_

- **`wishlist-icon`**
  - _Use this slot to replace wishlist icon_
  - **bindings:** `currentWishlistIcon`

## Events

- **`click:wishlist`**

## CSS modifiers

- **`.sf-product-card-horizontal__link--image`**

## CSS custom properties (variables)

- **`--product-card-horizontal-padding`**
- **`--product-card-horizontal-background`**
- **`--product-card-horizontal-image-width`**
- **`--product-card-horizontal-image-transition`**
- **`--product-card-horizontal-image-opacity`**
- **`--product-card-horizontal-image-even-opacity`**
- **`--product-card-horizontal-flex-direction`**
- **`--product-card-horizontal-main-padding`**
- **`--product-card-horizontal-actions-wrapper`**
- **`--product-card-horizontal-actions-wrapper-margin`**
- **`--product-card-horizontal-title-color`**
- **`--product-card-horizontal-title-font`**
- **`--product-card-horizontal-title-font-weight`**
- **`--product-card-horizontal-title-font-size`**
- **`--product-card-horizontal-title-font-line-height`**
- **`--product-card-horizontal-title-font-family`**
- **`--product-card-horizontal-description-margin`**
- **`--product-card-horizontal-description-color`**
- **`--product-card-horizontal-description-font`**
- **`--product-card-horizontal-description-font-weight`**
- **`--product-card-horizontal-description-font-size`**
- **`--product-card-horizontal-description-font-line-height`**
- **`--product-card-horizontal-description-font-family`**
- **`--product-card-horizontal-configuration-margin`**
- **`--product-card-horizontal-review-margin`**
- **`--product-card-horizontal-reviews-font`**
- **`--product-card-horizontal-reviews-font-weight`**
- **`--product-card-horizontal-reviews-font-size`**
- **`--product-card-horizontal-reviews-font-line-height`**
- **`--product-card-horizontal-reviews-font-family`**
- **`--product-card-horizontal-actions-margin`**
- **`--product-card-horizontal-add-to-cart-margin`**
- **`--product-card-horizontal-box-shadow`**
### Overridden other components CSS variables 
- **`--property-value-font`**
- **`--font-weight--normal`**
- **`--button-font`**
- **`--font-size--sm`**
- **`--button-font`**
- **`--font-weight--light`**
- **`--icon-color`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-productcardhorizontal--common">Storybook</a>.
