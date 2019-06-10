# SfIcon

Icon Component for rendering SVG path as icon, with customizable size and color.
## Screens
![icon in different size](https://res.cloudinary.com/mayashavin/image/upload/v1560200985/Screen_Shot_2019-06-11_at_0.08.13.png)

## Props

- `path`
    * icon SVG path
- `size` 
    * Custom size of the icon
    * It can be our standard sizes, or `12px` or `1.2rem` or nothing.
    * Standard sizes: `xxs`, `xs`, `sm` (_default_), `md`, `lg`, `xl`, `xxl`, `xl3`, `xl4`.
- `color`
    * Custom color of the icon
    * It can be according to our standard colors, or `#fff` or `rgb(255,255,255)` or nothing.
    * Standard colors: `primary`, `secondary`, `white`, `black` (_default_), `accent`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`.

## SCSS variables

- `$sf-icon-sizes` - maps of icon sizes
    * `xxs` (1rem),
    * `xs` (1.4rem), 
    * `sm` (1.625rem (!default)), 
    * `md` (1.8rem), 
    * `lg` (2rem), 
    * `xl` (2.2rem), 
    * `xxl` (2.5rem), 
    * `xl3` (2.8rem), 
    * `xl4` (3.25rem)

- `$sf-icon-colors` - maps of icon color palettes
    * `primary`  ($c-green-primary), 
    * `secondary` ($c-dark-primary), 
    * `white` ($c-white), 
    * `black` ($c-black (!default)),
    * `accent` ($c-accent-secondary),
    * `gray-primary` ($c-gray-primary),
    * `gray-secondary` ($c-gray-secondary),
    * `light-primary` ($c-light-primary),
    * `light-secondary` ($c-light-secondary),
    * `pink-primary` ($c-pink-primary),
    * `pink-secondary` ($c-pink-secondary),
    * `yellow-primary` ($c-yellow-primar)y,
    * `yellow-secondary` ($c-yellow-secondary),
    * `blue-primary` ($c-blue-primary),
    * `blue-secondary` ($c-blue-secondary)

## CSS Modifiers

- `.sf-icon--color-<palette>` - Change color to a specific preset pallete (see above).
- `.sf-icon--size-<size>` - Change size to specific preset size (see above).
- `--icon-color: <color>` - Modify CSS Variable for icon color
- `--icon-size: <size>` - Modify CSS Variable for icon size.


## Source files and Storybook demo

- [@/src/components/atoms/SfCircleIcon](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/atoms/SfIcon)
- [HTML template](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/atoms/SfIcon/SfIcon.html)
- link to storybook
        
        
