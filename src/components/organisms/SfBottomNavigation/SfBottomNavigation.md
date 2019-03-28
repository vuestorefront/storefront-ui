# SfBottomNavigation

Mobile-only bottom navigation menu with icon elements and floating Button.

## HTML Template

```html
<div class="sf-bottom-navigation">
  <div class="sf-bottom-navigation__elements">
    <router-link to="/">
      </router-link><div class="sf-bottom-navigation__element" :class="{ 'active': true }" v-if="$slots.image">
        <slot name="image">
          <img src="../../../assets/home.svg" alt="nav-home" class="sf-bottom-navigation-element-img"/>
        </slot>
      </div>
    </router-link>
    <router-link to="/">
      </router-link><div class="sf-bottom-navigation__element" v-if="$slots.image">
        <slot name="image">
          <img src="../../../assets/search.svg" alt="nav-home" class="sf-bottom-navigation-element-img" />
        </slot>
      </div>
    </router-link>
    <router-link to="/">
      </router-link><div class="sf-bottom-navigation__element" v-if="$slots.image">
        <slot name="image">
          <img src="../../../assets/heart.svg" alt="nav-wishlist" class="sf-bottom-navigation-element-img"/>
        </slot>
      </div>
    </router-link>
    <router-link to="/">
      </router-link><div class="sf-bottom-navigation__element" v-if="$slots.image">
        <slot name="image">
          <img src="../../../assets/profile.svg" alt="nav-profile" class="sf-bottom-navigation-element-img"/>
        </slot>
      </div>
    </router-link>
  </div>
  <!--Waiting for floating button styles-->
  <div class="sf-bottom-navigation__element">
      <div class="sf-bottom-navigation-cart-button" >
        <img src="../../../assets/cart.svg" alt="nav-cart" class="sf-bottom-navigation-element-img"/>
      </div>
  </div>
</div>
```

## Slots

- `image` - customizable image icon, intended for navigation menus

## SCSS variables

- `$bottom-navigation-cart-shadow` (0px 4px 6px rgba(66, 66, 66, 0.2) )
- `$bottom-navigation-padding`: (0.5rem 0)
- `$bottom-navigation-background`: (\$c-white !default)

- `$bottom-navigation__elements-justify-content`: (space-evenly)

- `$bottom-navigation__element-width`: (1.5rem)
- `$bottom-navigation__element-transition`: (0.3s all)

## Source files and Storybook demo

//WIP
