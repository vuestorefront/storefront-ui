# SfCircleButton

Circle Button Component for basket button / close button.

## HTML Template

<SfButton class="sf-circle-button">
    <img class="sf-circle-button__icon" :src="icon" :alt="alt"/>
</SfButton>

## Props
- `icon` - icon source for image
- `alt` - image alt text

## SCSS variables

- `$sf-circle-button-background-primary` ($c-green-primary)
- `$sf-circle-button-background-secondary` ($c-dark-primary)
- `$sf-circle-button-icon-color` ($c-white)
- `$sf-circle-button-size` (3.25rem !default)
- `$sf-circle-button-big-size` (3.25rem !default);
- `$sf-circle-button-small-size` (1.625rem !default);
- `$sf-circle-button-background-small` ($c-gray-secondary);
- `$sf-circle-button-background-small-hover` ($c-dark-secondary);

## CSS Modifiers

- `.sf-circle-button--secondary` - change color to dark
- `.sf-ciricle-button--small`  change size, color and hover / active state

## Source files and Storybook demo

- - [@/src/components/atoms/SfCircleButton] (https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/atoms/SfCircleButton)

- link to storybook