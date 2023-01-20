---
layout: ComponentLayout
hideBreadcrumbs: true
---
# ProductCard

The product card component contains the most relevant data about the product. The most popular are the product's snapshot, name and price. It also includes a direct add to cart button and reviews component. In order to customize image you can use slot for image or add VsfProductCardImage component with added attributes. The component can be displayed in vertical and horizontal variant.

<Generate style="height:900px" />

## Props

<!-- vue -->

| Prop name       | Type     | Default value | Possible values                        |
| --------------- | -------- | ------------- | -------------------------------------- |
| `image`         | String   | ''            |                                        |
| `imageAttr`     | Object   | {}            |                                        |
| `link`          | String   | ''            |                                        |
| `ratingValue`   | Number   | null          |                                        |
| `maxRatingValue`| Number   | null          |                                        |
| `reviewsAmount` | Number   | null          |                                        |
| `label`         | String   | ''            |                                        |
| `price`         | String   | ''            |                                        |
| `oldPrice`      | String   | ''            |                                        |
| `description`   | String   | ''            |                                        |
| `outOfStock`    | Boolean  | false         |                                        |
| `inCart`        | Number   | 0             |                                        |
| `size`          | String   | responsive    |  responsive, sm, base                  |
| `addToCartLabel`| String   | ''            |                                        |
| `similarLabel`  | String   | ''            |                                        |
| `badgeText`     | String   | ''            |                                        |
| `vertical`      | Boolean  | true          |                                        |


## Slots

| Slot name     |            Description                                     |
| ------------- | :--------------------------------------------------------: |
| `image`       | replaces product image                                     |
| `image-top`   | replaces the badge in top part of the image                |
| `image-bottom`| replaces in-cart tag component and add to favorites button |
| `rating`      | replaces reviews and counter component                     |

## Events

| Event name        |            Trigger                         |
| ----------------- | :----------------------------------------: |
| `addToCart`       | emits on clicking add to cart button       |
| `addToWishlist`   | emits on clicking add to wishlist button   |
| `seeSimilar`      | emits on clicking see similar button       |
| `seeReviews`      | emits on clicking reviews counter component|

<!-- end vue -->

<!-- react -->

| Prop name       | Type     | Default value | Possible values                        |
| --------------- | -------- | ------------- | -------------------------------------- |
| `image`         | String   |               |                                        |
| `imageAttr`     | Object   | {}            |                                        |
| `link`          | String   | ''            |                                        |
| `ratingValue`   | Number   | 0             |                                        |
| `maxRatingValue`| Number   | 0             |                                        |
| `reviewsAmount` | Number   | 0             |                                        |
| `label`         | String   | ''            |                                        |
| `price`         | String   | ''            |                                        |
| `oldPrice`      | String   | ''            |                                        |
| `description`   | String   | ''            |                                        |
| `outOfStock`    | Boolean  | false         |                                        |
| `inCart`        | Number   | 0             |                                        |
| `size`          | String   | responsive    |  responsive, sm, base                  |
| `addToCartLabel`| String   | ''            |                                        |
| `similarLabel`  | String   | ''            |                                        |
| `badgeText`     | String   | ''            |                                        |
| `vertical`      | Boolean  | true          |                                        |
| `slotImageBottom`| ReactNode  | true       |                                        |
| `slotImageTop`  | ReactNode   | true       |                                        |
| `slotImage`     | ReactNode   | true       |                                        |
| `slotRating`    | ReactNode   | true       |                                        |
| `onAddToCartClick`|  function   |          |                                        |
| `onAddToWishlistClick`|  function   |      |                                        |
| `onSeeSimilarClick`   |  function   |      |                                        |
| `onReviewsClick`      |  function   |      |                                        |

<!-- end react -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfProductCard/VsfProductCard.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfProductCard/VsfProductCard.tsx
<!-- end react -->