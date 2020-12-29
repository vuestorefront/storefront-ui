# ProductCard

Product card component with image, description and rating.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-productcard--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 25rem"></iframe>
  </div>

```html
<template>
  <SfProductCard
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :badge-label="badgeLabel"
    :badge-color="badgeColor"
    :title="title"
    :link="link"
    :link-tag="linkTag"
    :score-rating="scoreRating"
    :max-rating="maxRating"
    :reviews-count="reviewsCount"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :wishlist-icon="wishlistIcon"
    :is-on-wishlist-icon="isOnWishlistIcon"
    :is-on-wishlist="isOnWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:is-added-to-cart="alert('@click:is-added-to-cart')"
    @click:wishlist="alert('@click:wishlist')"
    @click:reviews="alert('@click:reviews')"
  />
</template>
<script>
import { SfProductCard } from "@storefront-ui/vue";
export default {
  components: {
    SfProductCard,
  },
  data() {
    return {
      image: {
        mobile: { url: "/assets/storybook/Home/productB.jpg" },
        desktop: { url: "/assets/storybook/Home/productB.jpg" },
      },
      imageWidth: 216,
      imageHeight: 326,
      badgeLabel: "",
      badgeColor: "color-primary",
      title: "Cotton Sweater",
      link: "",
      linkTag: "",
      scoreRating: 4,
      maxRating: 5,
      reviewsCount: 7,
      regularPrice: "$10.99",
      specialPrice: "",
      wishlistIcon: "heart",
      isOnWishlistIcon: "heart_fill",
      isOnWishlist: false,
      showAddToCartButton: true,
      isAddedToCart: false,
      addToCartDisabled: false,
    };
  },
};
</script>
```

## Props

- **`image`**
  - _Product image. It should be an url of the product_
  - **type:** `array|object|string`
  - **defaultValue:** `""`

- **`imageWidth`**
  - _Product image width, without unit_
  - **type:** `string|number`
  - **defaultValue:** `216`

- **`imageHeight`**
  - _Product image height, without unit_
  - **type:** `string|number`
  - **defaultValue:** `326`

- **`badgeLabel`**
  - _Badge label_
  - **type:** `string`
  - **defaultValue:** `""`

- **`badgeColor`**
  - _Badge color. It can be according to our standard colors, or legitimate CSS color such as `#fff`, `rgb(255,255,255)`), and `lightgray` or nothing. Standard colors: `primary`, `secondary`, `white`, `black`, `accent`, `green-primary`, `green-secondary`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`._
  - **type:** `string`
  - **defaultValue:** `""`

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

- **`showAddToCartButton`**
  - _Status of showing add to cart button_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`isAddedToCart`**
  - _isAddedToCart status of whether button is showed, product is added or not_
  - **type:** `boolean`

- **`addToCartDisabled`**
  - _addToCartDisabled status of whether button is disabled when out of stock_
  - **type:** `boolean`
  - **defaultValue:** `false`

## Slots

- **`image`**
  - **bindings:** `image`, `title`, `link`, `imageHeight`, `imageWidth`

- **`badge`**
  - **bindings:** `badgeLabel`, `badgeColor`

- **`wishlist-icon`**
  - **bindings:** `currentWishlistIcon`

- **`add-to-cart`**
  - **bindings:** `isAddedToCart`, `showAddedToCartBadge`, `isAddingToCart`, `title`

- **`add-to-cart-icon`**

- **`title`**
  - **bindings:** `title`, `link`

- **`price`**
  - **bindings:** `specialPrice`, `regularPrice`

- **`reviews`**
  - **bindings:** `maxRating`, `scoreRating`

## Events

- **`click:wishlist`**

- **`click:add-to-cart`**

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--product-card-z-index`**
- **`--product-card-max-width`**
- **`--product-card-height`**
- **`--product-card-padding`**
- **`--product-card-background`**
- **`--product-card-transition`**
- **`--product-card-box-shadow`**
- **`--product-card-link-margin`**
- **`--product-card-title-font`**
- **`--product-card-title-font-weight`**
- **`--product-card-title-font-size`**
- **`--product-card-title-font-line-height`**
- **`--product-card-title-font-family`**
- **`--product-card-title-color`**
- **`--product-card-title-margin`**
- **`--product-card-image-transition`**
- **`--product-card-image-opacity`**
- **`--product-card-image-even-opacity`**
- **`--product-card-badge-top`**
- **`--product-card-badge-left`**
- **`--product-card-add-button-right`**
- **`--product-card-add-button-bottom`**
- **`--product-card-add-button-display`**
- **`--product-card-add-button-transform`**
- **`--product-card-add-button-opacity`**
- **`--product-card-margin`**
- **`--product-card-reviews-count-margin`**
- **`--product-card-reviews-count-color`**
- **`--product-card-wishlist-icon-top`**
- **`--product-card-wishlist-icon-right`**
- **`--product-card-wishlist-icon-padding`**
- **`--product-card-wishlist-icon-opacity`**
- **`--product-card-wishlist-icon-transition`**
### Overridden other components CSS variables 
- **`--circle-icon-position`**
- **`--button-box-shadow`**
- **`--icon-color`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-productcard--common">Storybook</a>.
