# ProductCardVertical component

The product card component contains the most relevant data about the product. The most popular are the product's snapshot, name and price. It can also include a direct add to cart button

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=14013%3A45717)

## Props

| Prop name    | Type     | Default value | Possible values                        |
| ------------ | -------- | ------------- | -------------------------------------- |
| image         | String   | ''            |                                        |
| alt           | String   | ''            |                                        |
| link          | String   | ''            |                                        |
| ratingValue   | Number   | 0             |                                        |
| maxRatingValue| Number   | 0             |                                        |
| reviews       | Number    | -1         |                                        |
| label         | String    | ''         |                                        |
| price         | String    | ''        |                                        |
| oldPrice     | String     | ''         |                                        |
| badge        | String     | ''         |                                        |
| description   | String    | ''            |                                        |
| outOfStock    | Boolean   | false           |                                        |
| inCart         | Number   | 0           |                                        |
| size          | String    | ''            |  'xs','sm','base','lg'                 |
| addToCartLabel | String   | ''             |                                        |
| seeSimilarLabel| String   | ''            |                                        |


## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
|           |                                   |

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| addToCart         | emits on add to cart button clicking    |
| addToWishlist     | emits on add to wishlist button clicking    |
| seeSimilar        | emits on see similar button clicking    |


## Source code

<<<../../mitosis/src/blocks/VsfProductCardVertical/VsfProductCardVertical.lite.tsx
