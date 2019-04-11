# SfBottomNavigation

Mobile-only bottom navigation menu with icon elements and floating Button.

## Props

- `current` - Current active icon in bottom navigation menu

## Slots

- `items` - customizable slots for bottom navigation icons
- `floating-icon` - icon for optional floating button

## Emitted events

- `change:current` - Emitted when an icon is clicked

## SCSS variables

- `$bottom-navigation-padding`: (0.5rem 0)
- `$bottom-navigation-background`: (\$c-white !default)

- `$bottom-navigation__elements-justify-content`: (space-evenly)

- `$bottom-navigation__element-width`: (1.5rem)
- `$bottom-navigation__element-transition`: (0.3s all)

## Source files and Storybook demo

- [@/src/components/organisms/SfBottomNavigation](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/organisms/SfBottomNavigation)
- [HTML template](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/organisms/SfBottomNavigtion/SfBottomNavigation.html)
- template import `@storefrontui/vue/SfBottomNavigation.html`
- instance import `@storefrontui/vue/SfBottomNavigation.js`
- scss import `@storefrontui/vue/SfBottomNavigationn.scss`
