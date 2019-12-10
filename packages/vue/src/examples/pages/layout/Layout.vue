<template>
  <div>
    <SfHeader logo="/assets/logo.svg" class="header">
      <template #navigation>
        <div
          class="sf-header__navigation-item"
          @mouseover="parentMenu = 'Women'"
          @mouseleave="parentMenu = ''"
        >
          <a href="#woman" class="sf-header__navigation-link">Women</a>
          <SfMegaMenu
            :parent-menu="parentMenu === 'Women' ? parentMenu : ''"
            class="mega-menu"
          >
            <SfMegaMenuColumn
              v-for="subcategory in subcategories"
              :key="subcategory.header"
              :title="subcategory.header"
            >
              <SfMenuItem
                v-for="item in subcategory.items"
                :key="item.label"
                :label="item.label"
                class="sf-mega-menu__menu-item"
              />
            </SfMegaMenuColumn>
            <template #aside>
              <div
                :style="{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap'
                }"
              >
                <div
                  v-for="tile in tiles"
                  :key="tile.title"
                  :style="{ marginBottom: '1.25rem' }"
                >
                  <h3
                    :style="{
                      marginBottom: '1.25rem',
                      textTransform: 'uppercase'
                    }"
                  >
                    {{ tile.title }}
                  </h3>
                  <SfImage :src="tile.pictures" />
                </div>
              </div>
            </template>
          </SfMegaMenu>
        </div>
        <div
          class="sf-header__navigation-item"
          @mouseover="parentMenu = 'Man'"
          @mouseleave="parentMenu = ''"
        >
          <a href="#man" class="sf-header__navigation-link">Man</a>
          <SfMegaMenu
            :parent-menu="parentMenu === 'Man' ? parentMenu : ''"
            class="mega-menu"
          >
            <SfMegaMenuColumn
              v-for="subcategory in subcategories"
              :key="subcategory.header"
              :title="subcategory.header"
            >
              <SfMenuItem
                v-for="item in subcategory.items"
                :key="item.label"
                :label="item.label"
                class="sf-mega-menu__menu-item"
              />
            </SfMegaMenuColumn>
            <template #aside>
              <div
                :style="{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap'
                }"
              >
                <div
                  v-for="tile in tiles"
                  :key="tile.title"
                  :style="{ marginBottom: '1.25rem' }"
                >
                  <h3
                    :style="{
                      marginBottom: '1.25rem',
                      textTransform: 'uppercase'
                    }"
                  >
                    {{ tile.title }}
                  </h3>
                  <SfImage :src="tile.pictures" />
                </div>
              </div>
            </template>
          </SfMegaMenu>
        </div>
        <div
          class="sf-header__navigation-item"
          @mouseover="parentMenu = 'Kids'"
          @mouseleave="parentMenu = ''"
        >
          <a href="#kids" class="sf-header__navigation-link">Kids</a>
          <SfMegaMenu
            :parent-menu="parentMenu === 'Kids' ? parentMenu : ''"
            class="mega-menu"
          >
            <SfMegaMenuColumn
              v-for="subcategory in subcategories"
              :key="subcategory.header"
              :title="subcategory.header"
            >
              <SfMenuItem
                v-for="item in subcategory.items"
                :key="item.label"
                :label="item.label"
                class="sf-mega-menu__menu-item"
              />
            </SfMegaMenuColumn>
            <template #aside>
              <div
                :style="{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap'
                }"
              >
                <div
                  v-for="tile in tiles"
                  :key="tile.title"
                  :style="{ marginBottom: '1.25rem' }"
                >
                  <h3
                    :style="{
                      marginBottom: '1.25rem',
                      textTransform: 'uppercase'
                    }"
                  >
                    {{ tile.title }}
                  </h3>
                  <SfImage :src="tile.pictures" />
                </div>
              </div>
            </template>
          </SfMegaMenu>
        </div>
      </template>
    </SfHeader>
    <Home class="content" />
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
      <SfFooterColumn title="Social" class="social-column">
        <div class="social-column__icons">
          <img
            v-for="item in social"
            :key="item"
            :src="'/assets/storybook/footer/' + item + '.svg'"
            :alt="item"
            class="social-column__icon"
          />
        </div>
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
  components: {
    SfHeader,
    SfMegaMenu,
    SfImage,
    SfFooter,
    SfList,
    SfMenuItem,
    Home
  },
  data() {
    return {
      parentMenu: "",
      aboutUs: ["Who we are", "Quality in the details", "Customer Reviews"],
      departments: ["Women fashion", "Men fashion", "Kidswear", "Home"],
      help: ["Customer service", "Size guide", "Contact us"],
      paymentsDelivery: ["Purchase terms", "Guarantee"],
      subcategories: [
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
            small: { url: "assets/storybook/megamenu/bannerSandals-full.png" },
            normal: { url: "assets/storybook/megamenu/bannerSandals.jpg" }
          }
        },
        {
          title: "Beach bags 2=1",
          pictures: {
            small: { url: "assets/storybook/megamenu/bannerBeachBag-full.png" },
            normal: { url: "assets/storybook/megamenu/bannerBeachBag.jpg" }
          }
        }
      ],
      social: ["facebook", "pinterest", "twitter", "youtube"]
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
.header {
  position: relative;
}
.mega-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100%;
  @include for-desktop {
    margin-top: -2px;
  }
}
.content {
  margin-top: 10px;
  @include for-desktop {
    margin-top: 0;
  }
}
.social-column {
  margin-left: auto;
  &__icons {
    padding: $spacer-big $spacer-extra-big;
    @include for-desktop {
      padding: 6px 0;
    }
  }
  &__icon {
    height: 0.75rem;
    margin-right: 1.25rem;
  }
}
</style>
