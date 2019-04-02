# SfBottomNavigation

Mobile-only bottom navigation menu with icon elements and floating Button.

## HTML Template

```html
<div class="sf-bottom-navigation">
  <div class="sf-bottom-navigation__elements" v-for="icon in icons">
    <slot name="icon" :image="icon">
      <div
        class="sf-bottom-navigation__element"
        :class="{ active: isActive }"
        @click="isActive = !isActive"
        v-if="icon"
      >
        <img
          :src="icon"
          alt="nav-home"
          class="sf-bottom-navigation-element-img"
        />
      </div>
    </slot>
  </div>

  <!--Waiting for button styles-->
  <div class="sf-bottom-navigation__element">
    <slot name="button" :icon="icon">
      <div class="sf-bottom-navigation-cart-button">
        <img
          :src="icon"
          alt="nav-cart"
          class="sf-bottom-navigation-element-img"
        />
      </div>
    </slot>
  </div>
  <slot />
</div>
```

## Slots

- `icon` - customizable icon icon, intended for navigation menus

## SCSS variables

- `$bottom-navigation-cart-shadow` (0px 4px 6px rgba(66, 66, 66, 0.2) )
- `$bottom-navigation-padding`: (0.5rem 0)
- `$bottom-navigation-background`: (\$c-white !default)

- `$bottom-navigation__elements-justify-content`: (space-evenly)

- `$bottom-navigation__element-width`: (1.5rem)
- `$bottom-navigation__element-transition`: (0.3s all)

## Source files and Storybook demo

- [@/src/components/organisms/SfBottomNavigation](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/organisms/SfBottomNavigation)
