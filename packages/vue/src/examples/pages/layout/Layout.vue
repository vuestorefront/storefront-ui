<template>
  <div>
    <SfHeader logo="/assets/logo.svg" class="header">
      <template #navigation>
        <SfHeaderNavigationItem style="position: static" @mouseover="parentMenu = 'Women'" @mouseleave="parentMenu = ''">
          <div>WOMEN</div>
          <SfMegaMenu :parent-menu="parentMenu" class="mega-menu">
            <SfMegaMenuColumn
              v-for="category in categories"
              :title="category.header"
              :key="category.header"
            >
              <SfMenuItem
                v-for="item in category.items"
                :label="item.label"
                :key="item.label"
                class="sf-mega-menu__menu-item"
              />
            </SfMegaMenuColumn>
            <template #aside>
              <div style="display: flex; justify-content: space-between; flex-wrap: wrap">
                <div v-for="tile in tiles" :key="tile.title" style="text-transform: uppercase; margin-bottom: 1.25rem">
                  <h3 style="margin-bottom: 1.25rem">{{ tile.title }}</h3>
                  <SfImage class="mobile-only" :src="tile.pictures.full" />
                  <SfImage class="desktop-only" :src="tile.pictures.normal" />
                </div>
              </div>
            </template>
          </SfMegaMenu>
        </SfHeaderNavigationItem>
        <SfHeaderNavigationItem>MEN</SfHeaderNavigationItem>
        <SfHeaderNavigationItem>KIDS</SfHeaderNavigationItem>
      </template>
    </SfHeader>
    <Home />
    <SfFooter class="footer">
      <SfFooterColumn title="About us">
        <SfList>
          <SfListItem v-for="item in aboutUs" :key="item">
            <SfMenuItem :label="item" />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn title="Departments">
        <SfList>
          <SfListItem v-for="item in departments" :key="item">
            <SfMenuItem :label="item" />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn title="Help">
        <SfList>
          <SfListItem v-for="item in help" :key="item">
            <SfMenuItem :label="item" />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn title="Payment & delivery">
        <SfList>
          <SfListItem v-for="item in paymentsDelivery" :key="item">
            <SfMenuItem :label="item" />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
    </SfFooter>
  </div>
</template>
<script>
import {
  SfHeader,
  SfMegaMenu,
  SfFooter,
  SfList,
  SfMenuItem,
  SfImage
} from "../../../../index.js";
import Home from "../home/Home.vue";
export default {
  name: "Layout",
  components: { SfHeader, SfMegaMenu, SfImage, SfFooter, SfList, SfMenuItem, Home },
  data() {
    return {
      parentMenu: "",
      aboutUs: ["Who we are", "Quality in the details", "Customer Reviews"],
      departments: ["Women fashion", "Men fashion", "Kidswear", "Home"],
      help: ["Customer service", "Size guide", "Contact us"],
      paymentsDelivery: ["Purchase terms", "Guarantee"],
      categories: [
        {
          header: "Clothing",
          items: [
            { label: "Skirts" },
            { label: "Sweaters" },
            { label: "Dresses" },
            { label: "TShirts" },
            { label: "Pants" },
            { label: "Underwear" },
            { label: "Jackets" },
            { label: "Blouses" }
          ]
        },
        {
          header: "Accessories",
          items: [
            { label: "Bags & Purses" },
            { label: "Belts" },
            { label: "Gloves" },
            { label: "Hats" }
          ]
        },
        {
          header: "Shoes",
          items: [
            { label: "Boots" },
            { label: "Heels" },
            { label: "Flat shoes" },
            { label: "Loafers" },
            { label: "Sandals" },
            { label: "Slippers" },
            { label: "Trainers" }
          ]
        }
      ],
      tiles: [
        {
          title: "Last pairs left",
          pictures: {
            full: "assets/storybook/megamenu/bannerSandals-full.png",
            normal: "assets/storybook/megamenu/bannerSandals.jpg"
          }
        },
        {
          title: "Beach bags 2=1",
          pictures: {
            full: "assets/storybook/megamenu/bannerBeachBag-full.png",
            normal: "assets/storybook/megamenu/bannerBeachBag.jpg"
          }
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

@mixin for-desktop {
  @media screen and (min-width: $desktop-min) {
    @content;
  }
}
.header,
.footer {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin-right: auto;
    margin-left: auto;
  }
}
.mega-menu {
  position: absolute;
  top: 5rem;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1240px;
}
</style>
