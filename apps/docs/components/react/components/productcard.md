# ProductCard component

The product card component contains the most relevant data about the product. The most popular are the product's snapshot, name and price. It also includes a direct add to cart button and reviews component. In order to customize image you can use slot for image or add VsfProductCardImage component with added attributes. The component can be displayed in vertical and horizontal variant.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=14013%3A45717)

## Props



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


## Source code

<<<../../../packages/sfui/frameworks/react/components/VsfProductCard/VsfProductCard.tsx
