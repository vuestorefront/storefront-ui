# MegaMenu

MegaMenu component for page navigation.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-megamenu--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 10rem"></iframe>
  </div>

```html
<template>
  <SfMegaMenu :visible="true" title="Man" class="sb-mega-menu">
    <SfMegaMenuColumn
      v-for="(category, key) in categories"
      :key="key"
      :title="category.title"
    >
      <SfList>
        <SfListItem v-for="(subcategory, key) in category.subcategories">
          <SfMenuItem :label="subcategory.title"></SfMenuItem>
        </SfListItem>
      </SfList>
    </SfMegaMenuColumn>
    <SfMegaMenuColumn
      title="Featured"
      class="sf-mega-menu-column--pined-content-on-mobile sf-mega-menu-column--hide-header-on-mobile sb-mega-menu__featured"
    >
      <div class="sb-mega-menu__banners">
        <SfBanner
          v-for="(banner, key) in banners"
          :key="key"
          :title="banner.title"
          :subtitle="banner.subtitle"
          :image="banner.pictures"
          class="sb-mega-menu__banner"
        />
      </div>
    </SfMegaMenuColumn>
  </SfMegaMenu>
</template>
<script>
import { SfMegaMenu } from "@storefront-ui/vue";
import { SfList } from "@storefront-ui/vue";
import { SfBanner } from "@storefront-ui/vue";
import { SfMenuItem } from "@storefront-ui/vue";
import {} from "@storefront-ui/vue";
export default {
  components: {
    SfMegaMenu,
    SfList,
    SfBanner,
    SfMenuItem,
  },
  data() {
    return {
      categories: [
        {
          title: "Clothing",
          subcategories: [
            { title: "Skirts" },
            { title: "Sweaters" },
            { title: "Dresses" },
            { title: "TShirts" },
            { title: "Pants" },
            { title: "Underwear" },
            { title: "Jackets" },
            { title: "Blouses" },
          ],
        },
        {
          title: "Accesories",
          subcategories: [
            { title: "Bags & Purses" },
            { title: "Belts" },
            { title: "Gloves" },
            { title: "Hats" },
          ],
        },
        {
          title: "Shoes",
          subcategories: [
            { title: "Boots" },
            { title: "Heels" },
            { title: "Flat shoes" },
            { title: "Loafers" },
            { title: "Sandals" },
            { title: "Slippers" },
            { title: "Trainers" },
          ],
        },
      ],
      banners: [
        {
          title: "THE OFFICE LIFE",
          subtitle: "T-shirts",
          pictures: {
            mobile: "/assets/storybook/SfMegaMenu/bannerSandals.jpg",
            desktop: "/assets/storybook/SfMegaMenu/bannerSandals.jpg",
          },
        },
        {
          title: "ECO SANDALS",
          subtitle: "T-shirts",
          pictures: {
            mobile: "/assets/storybook/SfMegaMenu/bannerBeachBag.jpg",
            desktop: "/assets/storybook/SfMegaMenu/bannerBeachBag.jpg",
          },
        },
      ],
    };
  },
};
</script>
```

## Props

- **`title`**
  - **type:** `string`
  - **defaultValue:** `""`

- **`visible`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`isAbsolute`**
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`transitionName`**
  - **type:** `string`
  - **defaultValue:** `"sf-fade"`

- **`asideTitle`**
  - **type:** `string`
  - **defaultValue:** `""`

## Slots

- **`default`**
  - _Slot for menu column_

- **`aside`**

## Events

- **`change`**

- **`close`**

## CSS modifiers

- **`.sf-mega-menu-column--hide-header-on-mobile`**
- **`.sf-mega-menu-column--pined-content-on-mobile`**

## CSS custom properties (variables)

- **`--mega-menu-column-header-display`**
- **`--mega-menu-column-header-padding`**
- **`--mega-menu-column-header-margin`**
- **`--mega-menu-column-header-border`**
- **`--mega-menu-column-header-border-width`**
- **`--mega-menu-column-content-position`**
- **`--mega-menu-column-content-top`**
- **`--mega-menu-column-content-display`**
- **`--mega-menu-column-content-transform`**
### Overridden other components CSS variables 
- **`--list-item-padding`**
- **`--list-item-border-width`**
- **`--menu-item-font`**
- **`--font-size--sm`**
- **`--list-item-margin`**
- **`--menu-item-font`**
- **`--font-size--base`**
- **`--menu-item-font`**
- **`--font-weight--medium`**
- **`--menu-item-text-transform`**
- **`--menu-item-font`**
- **`--font-weight--normal`**
- **`--mega-menu-height`**
- **`--menu-item-font`**
- **`--font-size--base`**
- **`--menu-item-font`**
- **`--font-weight--medium`**
- **`--menu-item-font`**
- **`--font-weight--bold`**
- **`--mega-menu-content-transform`**
- **`--mega-menu-position`**


You can override CSS variables values bound to this component.

## Internal components

### MegaMenuColumn
#### Props
- **`title`**
  - **type:** `string`
  - **defaultValue:** `""`

#### Slots
- **`title`**
  - **bindings:** `title`, `changeActive`

- **`default`**

#### Events
None.

#### CSS modifiers
None.

#### CSS variables
None.

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-megamenu--common">Storybook</a>.
