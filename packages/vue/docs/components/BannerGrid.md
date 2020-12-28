# BannerGrid

Full width grid made with banners.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-bannergrid--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 40rem"></iframe>
  </div>

```html
<template>
  <SfBannerGrid
    :banner-grid="bannerGrid"
    :style="{ maxWidth: '1240px', margin: 'auto' }"
  >
    <template v-for="item in banners" v-slot:[item.slot]>
      <SfBanner
        :key="item.slot"
        :title="item.title"
        :subtitle="item.subtitle"
        :description="item.description"
        :button-text="item.buttonText"
        :image="item.image"
        :class="item.class"
      />
    </template>
  </SfBannerGrid>
</template>
<script>
import { SfBannerGrid } from "@storefront-ui/vue";
import { SfBanner } from "@storefront-ui/vue";
export default {
  components: {
    SfBannerGrid,
    SfBanner,
  },
  data() {
    return {
      bannersExample: [
        {
          slot: "banner-A",
          subtitle: ["Dresses"],
          title: ["Cocktail & Party"],
          description: [
            "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
          ],
          buttonText: ["Shop now"],
          image: ["/assets/storybook/Home/bannerF.jpg"],
          class: ["sf-banner--slim"],
        },
        {
          slot: "banner-B",
          subtitle: ["Dresses"],
          title: ["Linen Dresses"],
          description: [
            "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
            "",
          ],
          buttonText: ["Shop now"],
          image: ["/assets/storybook/Home/bannerE.jpg"],
          class: ["sf-banner--slim"],
          style: ["padding-right: 20%", null],
        },
        {
          slot: "banner-C",
          subtitle: ["T-Shirts"],
          title: ["The Office Life", "Your Office"],
          buttonText: [null, "Shop now"],
          image: ["/assets/storybook/Home/bannerC.jpg"],
          class: ["sf-banner--slim"],
        },
        {
          slot: "banner-D",
          subtitle: ["Summer Sandals"],
          title: ["Eco Sandals"],
          buttonText: [null, "Shop now"],
          image: [
            "/assets/storybook/Home/bannerG.jpg",
            "/assets/storybook/Home/bannerK.jpg",
          ],
          class: ["sf-banner--slim"],
        },
      ],
      bannerGrid: 1,
    };
  },
};
</script>
```

## Props

- **`bannerGrid`**
  - **type:** `number`
  - **defaultValue:** `1`

## Slots

- **`banner-A`**

- **`banner-B`**

- **`banner-C`**

- **`banner-D`**

## Events

None.

## CSS modifiers

- **`.sf-banner-grid__col--small`**
- **`.sf-banner-grid__col--medium`**
- **`.sf-banner-grid__col--higher`**

## CSS custom properties (variables)

- **`--banner-grid-row-display`**
- **`--banner-grid-row-flex`**
- **`--banner-grid-row-margin`**
- **`--banner-grid-col-display`**
- **`--banner-grid-col-flex`**
- **`--banner-grid-col-margin`**
### Overridden other components CSS variables 
- **`--banner-align-items`**
- **`--banner-container-width`**
- **`--banner-description-margin`**
- **`--banner-height`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-bannergrid--common">Storybook</a>.
