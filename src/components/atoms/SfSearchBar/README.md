# SfSearchBar
Search Bar Component for search queries
## Screens

![Search Bar](https://user-images.githubusercontent.com/34887212/57677851-197e7c80-7628-11e9-96c4-b794d797ed8d.png)

![Search Bar with different icon and text position ](https://user-images.githubusercontent.com/34887212/57677827-0d92ba80-7628-11e9-9fb1-57b5ce5b4d8d.png)

## Props
- `placeholder` - text inside input 
- `value` - value for search query
- `icon` - icon visibility - default visibility is set to true

## SCSS variables

- `$search-bar-background-primary`: $c-light-primary !default;
- `$search-bar-background-secondary`: $c-light-secondary !default;
- `$search-bar-placeholder-color`: $c-dark-primary !default;
- `$search-bar-placeholder-color-focus`: $c-gray-primary !default;
- `$search-bar-width`: 20rem !default;
- `$search-bar-height`: 2.25rem !default;
- `$search-bar-border-radius`: 1.6875rem !default;
- `$search-bar-text-align`: center !default;

## CSS Modifiers

- `.search-bar--position-right` - changed icon and text position
- `.search-bar--position-right-mobile` - changed icon and text position for mobile view only
- `.search-bar--position-right-desktop` - changed icon and text position for desktop view only
- `.search-bar--secondary` - change color to white

## Source files and Storybook demo

- [@/src/components/atoms/SfSearchBar](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/atoms/SfSearchBar)
- [HTML template](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/atoms/SfSearchBar/SfSearchBar.html)
- link to storybook
