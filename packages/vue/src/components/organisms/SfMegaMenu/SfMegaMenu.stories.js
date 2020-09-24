import "./SfMegaMenu.stories.scss";
import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";
import {
  SfMegaMenu,
  SfList,
  SfBanner,
  SfProductCard,
  SfScrollable,
  SfMenuItem,
} from "@storefront-ui/vue";
storiesOf("Organisms|MegaMenu", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
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
    template: `<SfMegaMenu 
      :visible="true" 
      title="Man"
      class="sb-mega-menu"
    >
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
      <SfMegaMenuColumn title="Featured" class="sf-mega-menu-column--pined-content-on-mobile sf-mega-menu-column--hide-header-on-mobile sb-mega-menu__featured">
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
    </SfMegaMenu>`,
  }))
  .add("Search results", () => ({
    components: {
      SfMegaMenu,
      SfList,
      SfBanner,
      SfProductCard,
      SfScrollable,
      SfMenuItem,
    },
    data() {
      return {
        categories: [
          "Long dresses",
          "Summer dresses",
          "Dresses",
          "Coctail dresses",
          "New dresses",
          "Dresses on SALE",
        ],
      };
    },
    template: `<SfMegaMenu
        :visible="true"
        title="Search results"
        class="sb-mega-menu"
    >
      <SfMegaMenuColumn title="Categories" class="sf-mega-menu-column--pined-content-on-mobile" style="flex: 0 0 220px; --menu-item-mobile-nav-icon-display: none;">
        <SfList>
          <SfListItem v-for="(category, key) in categories">
            {{category}}
          </SfListItem>
        </SfList>
      </SfMegaMenuColumn>
      <SfMegaMenuColumn title="Product suggestions" class="sf-mega-menu-column--pined-content-on-mobile" style="flex: 1">
        <template #title="{title}">
          <SfMenuItem
              :label="title"
              class="sf-mega-menu-column__header"
              style="--menu-item-mobile-nav-icon-display: none;"
          >
            <template #label>
              <div style="display: flex; align-items: center;">
                {{title}} <span style="margin: 0 0 0 var(--spacer-sm); color:var(--c-gray); font: var(--font-weight--normal) var(--font-size--sm)/1.4 var(--font-family--secondary); text-transform: lowercase">(20 items)</span>
              </div>
            </template>
          </SfMenuItem>
        </template>
        <SfScrollable style="--scrollable-max-height: 630px;" show-text="" hide-text="">
          <div style="display: flex; flex-wrap: wrap;">
            <SfProductCard 
                v-for="index in 8" 
                :key="index" 
                title="Cotton Sweater" 
                image="/assets/storybook/Home/productB.jpg" 
                regular-price="$50.00" 
                :score-rating="4" 
                :reviews-count="7"
            />
          </div>
        </SfScrollable>
      </SfMegaMenuColumn>
    </SfMegaMenu>`,
  }))
  .add("[slot] aside", () => ({
    components: {
      SfMegaMenu,
      SfList,
      SfBanner,
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
    template: `<SfMegaMenu 
      :visible="true" 
      title="Man"
      aside-title="Featured"
      class="sb-mega-menu"
    >
      <SfMegaMenuColumn 
        v-for="(category, key) in categories" 
        :key="key" 
        :title="category.title"
      >
        <SfList>
          <SfListItem v-for="(subcategory, key) in category.subcategories">
            {{subcategory.title}}
          </SfListItem>
        </SfList>
      </SfMegaMenuColumn>
      <template #aside>
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
      </template>
    </SfMegaMenu>`,
  }));
