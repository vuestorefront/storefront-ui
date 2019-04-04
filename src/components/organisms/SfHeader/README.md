# SfHeader

<!-- Write about general purpose of the component. Include screenshot (to be replaced with a live example once we migrate to vuepress) -->

Responsive header (navbar) component.

### Mobile view

![header mobile](https://camo.githubusercontent.com/70adbf5caa42d53b0dfe342f8fddd324cb0589d8/68747470733a2f2f73637265656e73686f747363646e2e66697265666f7875736572636f6e74656e742e636f6d2f696d616765732f35666434643564622d373464642d343738372d386634362d6137316537613165316565382e706e67)

![header mobile with text](https://camo.githubusercontent.com/d1e8ae6d1c8141298eff4330111d0c2691e07eb7/68747470733a2f2f73637265656e73686f747363646e2e66697265666f7875736572636f6e74656e742e636f6d2f696d616765732f64376465366235652d666563352d343664652d623934382d6536626437303139323565322e706e67)

## HTML Template

<!-- Just paste HTML template. It's much better description than any other code -->

````html
<header class="sf-header">
  <div class="sf-header__column sf-header__column--left">
    <slot name="left"></slot>
  </div>
  <div class="sf-header__column sf-header__column--middle">
    <slot name="middle">
      <img src="/assets/logo.svg" alt="logo" class="sf-header__logo"/>
    </slot>
  </div>
  <div class="sf-header__column sf-header__column--right">
    <slot name="right"></slot>
  </div>
  <slot />
</header>
````

## Slots

<!-- Describe slots and their purpose -->

- `left` - Left column for mobile view, hidden on desktop,
usage dependent of page context,
but usually intended for nav menu icon or arrow left (back).

- `middle` - Intended to contain logo image.

- `right` - Right column for mobile view,
hidden on desktop, usage dependent of page context.

- `default` - Should contain desktop version of header by default.

## SCSS variables

<!-- Write down SCSS variables available for configuration -->

- `$header-mobile-background` ($c-bg-primary)
- `$header-mobile-height` (50px)
- `$header-mobile-justify-content` (space-between)
- `$header-mobile-align-items` (center)
- `$header-mobile-padding-x` (1rem)
- `$header-tablet-justify-content` (flex-start)
- `$header__logo-width` (21px)
- `$header__logo-height` (auto)

## Source files and Storybook demo

- [@src/components/organisms/SfHeader](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/organisms/SfHeader)
- [@src/stories/SfHeader.stories.js](https://github.com/DivanteLtd/storefront-ui/blob/master/src/stories/SfHeader.stories.js)
