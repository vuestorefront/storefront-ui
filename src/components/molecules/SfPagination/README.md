# SfPagination

<!-- Write about general purpose of the component. Include screenshot (to be replaced with a live example once we migrate to vuepress) -->

Component to list page numbers and start handling content pagination.

![pagination](https://screenshotscdn.firefoxusercontent.com/images/6b8c6357-8464-43ba-8dd7-159044bf37bb.png)

## Props

<!--Write down props and their purpose -->

- `current.sync` (1) - Current page integer number, starting from 1. In sync with `update:current` event

- `total` (5) - Number of total available pages.

- `visible` (5) - Maximum number of visible page items, default is 5.

## Slots

<!-- Describe slots and their purpose -->

- `number` - Page item, contains the respective page number by default.

- `prev` - Previous page link, contents chevron left icon by default.

- `next` - Next page link, contains chevron right icon by default.

- `points` - Showed when the total number of pages is bigger than the
visible, default content is three points (...).

## Emitted events

- `update:current` - Emitted when an pagination link is clicked and
page should be changed, must be listened to update the content and
then update the current page number.

## SCSS variables

<!-- Write down SCSS variables available for configuration -->

- `$pagination__list-padding` (1rem)
- `$pagination__list-justify` (center)
- `$pagination__item-size` (1.25rem)
- `$pagination__item-margin` (0 .25rem)
- `$pagination__item-color` ($c-text-secondary)
- `$pagination__item-hover-color` ($c-text-primary)
- `$pagination__item-transition` (all .15s linear)
- `$pagination__item--current-color` ($pagination__item-hover-color)
- `$pagination__item--current-border` (1px solid $pagination__item--current-color)
- `$pagination__item--current-border-width` (0 0 1px 0)
- `$pagination__link--prev-margin` (3rem)
- `$pagination__link--next-margin` ($pagination__link--prev-margin)

## Source files and Storybook demo

- [@src/components/molecules/SfPagination](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/molecules/SfPagination)
- [HTML template](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/molecules/SfPagination/SfPagination.html)
- template import `@storefrontui/vue/SfPagination.html`
- instance import `@storefrontui/vue/SfPagination.js`
- scss import `@storefrontui/vue/SfPagination.scss`
