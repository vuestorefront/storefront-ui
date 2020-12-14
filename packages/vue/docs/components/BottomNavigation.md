# BottomNavigation

Full-width fixed bottom navigation component with items and circle icon.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-bottomnavigation--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 8rem"></iframe>
  </div>

```html
<template>
  <SfBottomNavigation>
    <SfBottomNavigationItem
      :icon="icon"
      :label="label"
      :icon-active="iconActive"
      :is-active="currentIcon === iconActive"
      @click="currentIcon = iconActive"
    />
    <SfBottomNavigationItem
      v-for="(item, key) in items"
      :key="key"
      :icon="item.icon"
      :icon-active="item.iconActive"
      :label="item.label"
      icon-size="20px"
      :is-active="currentIcon === item.iconActive"
      @click="currentIcon = item.iconActive"
    />
    <SfBottomNavigationItem label="Basket" icon="add_to_cart" is-floating />
  </SfBottomNavigation>
</template>
<script>
import { SfBottomNavigation } from "@storefront-ui/vue";
import { SfCircleIcon } from "@storefront-ui/vue";
import { SfIcon } from "@storefront-ui/vue";
export default {
  components: {
    SfBottomNavigation,
    SfCircleIcon,
    SfIcon,
  },
  data() {
    return {
      items: [
        { icon: "menu", iconActive: "menu", label: "Menu" },
        { icon: "heart", iconActive: "heart", label: "Heart" },
        { icon: "account", iconActive: "account", label: "Profile" },
      ],
      currentIcon: "heart",
      label: "Home",
      icon: "home",
      iconActive: "home",
    };
  },
};
</script>
```

## Props

None.

## Slots

- **`default`**

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--bottom-navigation-z-index`**
- **`--bottom-navigation-height`**
- **`--bottom-navigation-padding`**
- **`--bottom-navigation-background`**
- **`--bottom-navigation-box-shadow`**
- **`--bottom-navigation-item-top`**
- **`--bottom-navigation-item-align-self`**
- **`--bottom-navigation-item-margin`**
- **`--bottom-navigation-item-padding`**
- **`--bottom-navigation-item-color`**
- **`--bottom-navigation-item-font`**
- **`--bottom-navigation-item-font-weight`**
- **`--bottom-navigation-item-font-size`**
- **`--bottom-navigation-item-font-line-height`**
- **`--bottom-navigation-item-font-family`**
- **`--bottom-navigation-item-label-margin`**
### Overridden other components CSS variables 
- **`--icon-color`**
- **`--button-size`**
- **`--circle-icon-position`**


You can override CSS variables values bound to this component.

## Internal components

### BottomNavigationItem
#### Props
- **`icon`**
  - **type:** `string|array`
  - **defaultValue:** `""`

- **`isActive`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`iconActive`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`label`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`iconSize`**
  - **type:** `string`
  - **defaultValue:** `"20px"`

- **`isFloating`**
  - **type:** `boolean`
  - **defaultValue:** `false`

#### Slots
- **`icon`**
  - **bindings:** `icon`, `iconActive`, `iconSize`, `isFloating`

- **`label`**
  - **bindings:** `label`

#### Events
None.

#### CSS modifiers
None.

#### CSS variables
None.

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-bottomnavigation--common">Storybook</a>.
