# Header

Header component for page navigation.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-header--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 5rem"></iframe>
  </div>

```html
<template>
  <div>
    <SfHeader
      :class="customClass"
      :title="title"
      :logo="logo"
      :active-icon="activeIcon"
      :search-placeholder="searchPlaceholder"
      :search-value="searchValue"
      :cart-icon="cartIcon"
      :wishlist-icon="wishlistIcon"
      :is-sticky="isSticky"
      :account-icon="accountIcon"
      :style="spacer"
      :cart-items-qty="cartItemsQty"
      :wishlist-items-qty="wishlistItemsQty"
      @click:cart="alert('@click:cart')"
      @click:wishlist="alert('@click:wishlist')"
      @click:account="alert('@click:account')"
      @change:search="searchValue = $event"
    >
      <template #navigation>
        <SfHeaderNavigationItem v-for="item in navigation" :key="item">
          <template slot="desktop-navigation-item">
            <SfLink href="#">{{ item }}</SfLink>
          </template>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        height: 155vh;
        background-color: #f2f2f2;
      "
    >
      [page content]
    </div>
  </div>
</template>
<script>
import { SfHeader } from "@storefront-ui/vue";
import { SfLink } from "@storefront-ui/vue";
export default {
  components: {
    SfHeader,
    SfLink,
  },
  data() {
    return {
      isMobile: false,
      navigation: ["women", "man", "kids"],
      searchValue: "",
      title: "Storefront UI",
      logo: {
        mobile: { url: "/assets/logo.svg" },
        desktop: { url: "/assets/logo.svg" },
      },
      activeIcon: "account",
      isSticky: true,
      searchPlaceholder: "Search for items",
      cartIcon: "empty_cart",
      wishlistIcon: "heart",
      accountIcon: "profile",
      cartItemsQty: "0",
      wishlistItemsQty: "0",
    };
  },
};
</script>
```

## Props

- **`logo`**
  - _Header logo_
  - **type:** `string|object`
  - **defaultValue:** `""`

- **`title`**
  - _Header title_
  - **type:** `string`
  - **defaultValue:** `""`

- **`cartIcon`**
  - _Header cartIcon (accepts same value as SfIcon)_
  - **type:** `string|boolean|array`
  - **defaultValue:** `"empty_cart"`

- **`wishlistIcon`**
  - _Header wishlistIcon (accepts same value as SfIcon)_
  - **type:** `string|boolean|array`
  - **defaultValue:** `"heart"`

- **`accountIcon`**
  - _Header accountIcon (accepts same value as SfIcon)_
  - **type:** `string|boolean|array`
  - **defaultValue:** `"profile"`

- **`activeIcon`**
  - _Header activeIcon (accepts account, wishlist and cart)_
  - **type:** `string`
  - **defaultValue:** `""`

- **`searchPlaceholder`**
  - _Header search placeholder_
  - **type:** `string`
  - **defaultValue:** `"Search for items"`

- **`searchValue`**
  - _Header search phrase_
  - **type:** `string`
  - **defaultValue:** `""`

- **`wishlistItemsQty`**
  - _Header cart items quantity_
  - **type:** `string|number`
  - **defaultValue:** `"0"`

- **`cartItemsQty`**
  - _Header cart items quantity_
  - **type:** `string|number`
  - **defaultValue:** `"0"`

- **`isSticky`**
  - _Header sticky to top_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`isNavVisible`**
  - _Header search on mobile_
  - **type:** `boolean`
  - **defaultValue:** `false`

## Slots

- **`logo`**
  - _Use this slot to replace logo with text or image_
  - **bindings:** `logo`, `title`

- **`aside`**
  - _Use this slot for language or currency selector_

- **`navigation`**

- **`search`**
  - _Use this slot to replace default search bar_
  - **bindings:** `searchValue`, `searchPlaceholder`

- **`header-icons`**
  - _Use this slot to replace default header icons with custom content_
  - **bindings:** `activeIcon`, `cartHasProducts`, `cartItemsQty`, `cartIcon`, `wishlistIcon`, `accountIcon`

## Events

None.

## CSS modifiers

- **`.sf-header-navigation-item--not-stretched`**
- **`.sf-header-navigation-item__item--desktop`**
- **`.sf-header-navigation-item__item--mobile`**
- **`.sf-header--has-mobile-search`**
- **`.sf-header--has-mobile-navigation`**
- **`.sf-header--multiline`**

## CSS custom properties (variables)

- **`--header-navigation-item-position`**
- **`--header-navigation-item-flex`**
- **`--header-navigation-item-content-position`**
- **`--header-navigation-item-content-width`**
- **`--header-navigation-item-text-decoration`**
- **`--header-navigation-item-menu-item-display`**
- **`--header-navigation-item-menu-item-padding`**
- **`--header-navigation-item-menu-item-margin`**
- **`--header-navigation-item-menu-item-border`**
- **`--header-navigation-item-menu-item-border-width`**
- **`--header-navigation-item-display`**
- **`--header-navigation-item-color`**
- **`--header-navigation-item-padding`**
- **`--header-navigation-item-margin`**
- **`--header-navigation-item-border`**
- **`--header-navigation-item-border-width`**
- **`--header-navigation-item-transition`**
- **`--header-navigation-item-font`**
- **`--header-navigation-item-font-weight`**
- **`--header-navigation-item-font-size`**
- **`--header-navigation-item-font-line-height`**
- **`--header-navigation-item-font-family`**
- **`--header-navigation-item-width`**
### Overridden other components CSS variables 
- **`--menu-item-font`**
- **`--font-size--base`**
- **`--menu-item-font`**
- **`--font-weight--medium`**
- **`--menu-item-text-transform`**
- **`--header-navigation-item-border-color`**
- **`--link-color`**
- **`--menu-item-font`**
- **`--font-size--base`**
- **`--menu-item-font`**
- **`--font-weight--medium`**
- **`--header-navigation-menu-display`**
- **`--sidebar-content-padding`**
- **`--header-navigation-sidebar-display`**
- **`--image-width`**
- **`--image-height`**
- **`--header-navigation-display`**
- **`--header-navigation-margin`**
- **`--search-bar-display`**
- **`--header-search-flex`**
- **`--header-icons-display`**
- **`--icon-color`**
- **`--icon-badge-top`**
- **`--icon-badge-right`**
- **`--header-wrapper-position`**
- **`--header-wrapper-transform`**
- **`--header-wrapper-transition`**
- **`--header-box-shadow`**
- **`--header-icons-margin`**
- **`--header-icons-order`**
- **`--header-actions-flex-wrap`**


You can override CSS variables values bound to this component.

## Internal components

### HeaderNavigation
#### Props
- **`isVisibleOnMobile`**
  - **type:** `boolean`
  - **defaultValue:** `false`

#### Slots
- **`default`**

#### Events
None.

#### CSS modifiers
None.

#### CSS variables
None.

### HeaderNavigationItem
#### Props
- **`label`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`link`**
  - **type:** `string|object`
  - **defaultValue:** `""`

#### Slots
- **`desktop-navigation-item`**

- **`default`**

- **`mobile-navigation-item`**

#### Events
None.

#### CSS modifiers
None.

#### CSS variables
None.

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-header--common">Storybook</a>.
