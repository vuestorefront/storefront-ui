import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import {
  SfMegaMenu,
  SfList,
  SfBanner,
  SfProductCard,
  SfScrollable,
} from "@storefront-ui/vue";
storiesOf("Organisms|MegaMenu", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
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
        tiles: [
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
    >
      <SfMegaMenuColumn 
        v-for="(category, key) in categories" 
        :key="key" 
        :title="category.title"
      >
        <SfList>
          <SfListItem v-for="(subcategory, key) in category.subcategories" style="--list-item-padding: .5rem 0">
            {{subcategory.title}}
          </SfListItem>
        </SfList>
      </SfMegaMenuColumn>
      <SfMegaMenuColumn title="Featured" style="flex: 0 0 50%">
        <div style="display: flex">
          <SfBanner
            v-for="(tile, key) in tiles"
            :key="key"
            :title="tile.title"
            :subtitle="tile.subtitle"
            :image="tile.pictures"
            :style="{margin: key === 0 ? '0 1rem 0 0' : ''}"
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
        title="Man"
    >
      <SfMegaMenuColumn title="Categories" style="flex: 0 0 220px">
        <SfList>
          <SfListItem v-for="(category, key) in categories"style="--list-item-padding: .5rem 0">
            {{category}}
          </SfListItem>
        </SfList>
      </SfMegaMenuColumn>
      <SfMegaMenuColumn title="Product suggestions" style="flex: 1">
        <template #title="{title}">
          <div style="display: flex; align-items: center">
            <h3 class="sf-mega-menu-column__title">{{ title }}</h3>
            <span style="margin: 0 0 0 var(--spacer-sm); color:var(--c-gray); font: var(--font-normal) var(--font-sm)/1.4 var(--font-family-secondary);">(20 items)</span>
          </div>
        </template>
        <SfScrollable style="--scrollable-max-height: 630px; margin: -35px" show-text="" hide-text="">
          <div style="display: flex; flex-wrap: wrap; padding: 35px">
            <SfProductCard 
                v-for="index in 8" 
                :key="index" 
                title="Cotton Sweater" 
                image="/assets/storybook/Home/productB.jpg" 
                regular-price="$50.00" 
                :score-rating="4" 
                :reviews-count="7"/>
          </div>
        </SfScrollable>
      </SfMegaMenuColumn>
    </SfMegaMenu>`,
  }));
