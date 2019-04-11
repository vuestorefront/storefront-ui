# SfBanner
Banner with Title, Subtitle and call to action button


![Banner](https://i.ibb.co/DChQq4v/banner22.png "Banner")

<!-- Write about general purpose of the component. Include screenshot (to be replaced with a live example once we migrate to vuepress) -->

## Props

- `title` - banner Title
- `subtitle` - banner Subtitle
- `description` - banner description
- `buttonText` - button text
- `background` - background color
- `image` - url for background image

## Slots

- `title` - slot for Title
- `subtitle` - slot for Subtitle
- `description` - slot for description
- `call-to-action` - slot for button replacement

<!-- Describe slots and their purpose -->

## SCSS variables

- `$banner-padding`  (4.25rem)
- `$banner-background-size`: (cover)
- `$banner-background-position`: (bottom left)
- `$banner-align-items` (flex-end)
- `$banner-width` (100%)

- `$banner-mobile-padding` (1.25rem)

- `$banner__subtitle-font-family` ($body-font-family-primary)
- `$banner__subtitle-font-size` (1.5rem)
- `$banner__subtitle-font-weight` (300)
- `$banner__subtitle-color` ($c-dark-secondary)
- `$banner__subtitle-text-transform` (none)

- `$banner-mobile__subtitle-font-size` (0.875rem)

- `$banner__title-text-transform` (uppercase)
- `$banner__title-font-weight` (300)
- `$banner__title-font-size` (3rem)
- `$banner__title-font-family` ($body-font-family-secondary)
- `$banner__title-color` ($c-dark-primary)

- `$banner-mobile__title-font-size` (1.125rem)

- `$banner__description-font-family` ($body-font-family-secondary)
- `$banner__description-font-size` (1.125rem)
- `$banner__description-color` ($c-dark-primary)


- `$banner__call-to-action-font-size` (0.875rem)
- `$banner__call-to-action-background-color` ($c-dark-primary)

<!-- Write down SCSS variables available for configuration -->

## CSS Modifiers

- `.sf-banner--top` - aligns content to top (visible on mobile)
- `.sf-banner--bottom` - aligns content to bottom (visible on mobile)
- `.sf-banner--left` -  aligns content to left
- `.sf-banner--secondary` - changes button color to accent

<!-- Write down available CSS Modifiers -->

## Source files and Storybook demo

- [@/src/components/molecules/SfBanner](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/molecules/SfBanner)
- [HTML template](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/molecules/SfBanner/SfBanner.html)
