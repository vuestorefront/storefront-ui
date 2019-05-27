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

- `$sf-search-bar-background-primary`: $c-light-primary !default;
- `$sf-search-bar-background-secondary`: $c-light-secondary !default;
- `$sf-search-bar-placeholder-color`: $c-dark-primary !default;
- `$sf-search-bar-placeholder-color-focus`: $c-gray-primary !default;
- `$sf-search-bar-width`: 20rem !default;
- `$sf-search-bar-height`: 2.25rem !default;
- `$sf-search-bar-border-radius`: 1.6875rem !default;
- `$sf-search-bar-text-align`: center !default;
- `$sf-search-bar-font-size`: 0.875rem !default;

## CSS Modifiers

- `.sf-search-bar--position-right` - changed icon and text position
- `.sf-search-bar--position-right-mobile` - changed icon and text position for mobile view only
- `.sf-search-bar--position-right-desktop` - changed icon and text position for desktop view only
- `.sf-search-bar--secondary` - change color to white

## Source files and Storybook demo

- [@/src/components/atoms/SfSearchBar](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/atoms/SfSearchBar)
- [HTML template](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/atoms/SfSearchBar/SfSearchBar.html)
- link to storybook
