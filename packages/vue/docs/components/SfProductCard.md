# ProductCard

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`image`**
  - _Product image. It should be an url of the product_
  - **type:** `string`
  - **defaultValue:** `"assets/storybook/product_thumb.png"`

- **`title`**
  - _Product title_
  - **type:** `string`
  - **required:** `true`

- **`scoreRating`**
  - _Product rating_
  - **type:** `number|string|boolean`
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


## Slots

- **`wishlist-icon`**
  - **bindings:** `currentWishlistIcon`

- **`image`**
  - **bindings:** `image`, `title`

- **`title`**
  - **bindings:** `title`

- **`price`**
  - **bindings:** `specialPrice`, `regularPrice`

- **`reviews`**
  - **bindings:** `maxRating`, `scoreRating`


## Events

- **`click:wishlist`**


## CSS modifiers

- **`card--on-wishlist`**


## SCSS variables

```scss
$product-card-max-width: 200px!default;
$product-card-max-width-desktop: 240px!default;
$product-card-padding:$spacer-small!default;
$product-card-padding-desktop:$spacer-big!default;
$product-card-hover-box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19) !default;
$product-card__image-background-color: $c-bg-primary !default;
$product-card__image-blend-mode: darken !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.html"></template>
<script src="@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfProductCard.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
