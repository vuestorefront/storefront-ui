# SfComponent

<!-- Write about general purpose of the component. Include screenshot (to be replaced with a live example once we migrate to vuepress) -->

Swappable gallery for product images.

![desktop](https://screenshotscdn.firefoxusercontent.com/images/57c6cd69-6bcc-47e5-aa91-0cd699b3f624.png)

![mobile](https://screenshotscdn.firefoxusercontent.com/images/48f605e9-aac5-4fc9-8e11-05e824c46c3b.png)

> You must pass an array of objects (images) with the format below:

`
let images = [
  {
    small: { url, alt },
    big: { url, alt },
    zoom: { url, alt }
  }
]
`

## Events

- `update:current` - Emitted when an nav item (thumbnail) is clicked and
the selected image is changed, you may handle it with `:current.sync="currentImage"`.

## SCSS variables

<!-- Write down SCSS variables available for configuration -->

- `$pagination__list-padding` (1rem)
- `$gallery-flex-direction` (row)
- `$gallery__nav-width` (100px)
- `$gallery__nav-margin` (0 $spacing-extra-big 0 0)
- `$gallery__item-margin-bottom` ($spacing-medium)
- `$gallery__item-opacity` (.5)
- `$gallery__item-transition` (opacity .15s linear)
- `$gallery__item-mobile-size` (10px)
- `$gallery__stage-width` (400px)
