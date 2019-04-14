# SfGallery

<!-- Write about general purpose of the component. Include screenshot (to be replaced with a live example once we migrate to vuepress) -->

Swappable gallery for product images.

![desktop](https://screenshotscdn.firefoxusercontent.com/images/0dec9565-4c31-45b1-9554-20b19fdf33c0.png)

![desktop](https://screenshotscdn.firefoxusercontent.com/images/6234ea80-b523-4a68-9050-73d4c6ccf301.png)

## Props

<!--Write down props and their purpose -->

- `images` - Array of image objects with the format below:

```javascript
let images = [
  {
    small: { url, alt },
    big: { url, alt },
    zoom: { url, alt }
  }
]
```

- `current` (1) - Selected image, default is 1 (the first image in the list).

## Slots

<!-- Describe slots and their purpose -->

- `default` - Content on "stage", default is the selected image (big).

- `thumb` - Content on each nav item, default is the small size of each image.

## Emitted events

- `change:current` - Emitted when an nav item (thumbnail) is clicked and
the selected image is changed.

## SCSS variables

<!-- Write down SCSS variables available for configuration -->

- `$pagination__list-padding` (1rem)
- `$gallery-flex-direction` (row)
- `$gallery__nav-width` (100px)
- `$gallery__nav-margin` (0 $spacing-extra-big 0 0)
- `$gallery__item-margin-bottom` ($spacing-medium)
- `$gallery__item-opacity` (.5)
- `$gallery__item-transition` ($transition-fade)
- `$gallery__item-mobile-size` (10px)
- `$gallery__stage-width` (auto)

## Source files and Storybook demo

- [@src/components/molecules/SfGallery](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/molecules/SfGallery)
- [HTML template](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/molecules/SfGallery/SfGallery.html)
- template import `@storefrontui/vue/SfGallery.html`
- instance import `@storefrontui/vue/SfGallery.js`
- scss import `@storefrontui/vue/SfGallery.scss`
