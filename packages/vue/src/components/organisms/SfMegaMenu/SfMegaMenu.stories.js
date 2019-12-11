/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfMegaMenu from "./SfMegaMenu.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";

storiesOf("Organisms|MegaMenu", module)
  .add("Common", () => ({
    components: {
      SfMegaMenu,
      SfMenuItem
    },
    data() {
      return {
        open: true,
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
        ]
      };
    },
    computed: {
      parentMenu() {
        return this.open ? "Man" : "";
      }
    },
    template: `<div>
      <SfMegaMenu :parent-menu="parentMenu">
        <SfMegaMenuColumn v-for="subcategory in subcategories" :key="subcategory.header" :title="subcategory.header">
          <SfMenuItem v-for="item in subcategory.items" :key="item.label" :label="item.label" class="sf-mega-menu__menu-item"/>
        </SfMegaMenuColumn>
      </SfMegaMenu>
      </div>`
  }))
  .add("[slot] aside", () => ({
    components: {
      SfMegaMenu,
      SfMenuItem,
      SfImage
    },
    data() {
      return {
        open: true,
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
              small: {
                url: "assets/storybook/megamenu/bannerSandals-full.png"
              },
              normal: { url: "assets/storybook/megamenu/bannerSandals.jpg" }
            }
          },
          {
            title: "Beach bags 2=1",
            pictures: {
              small: {
                url: "assets/storybook/megamenu/bannerBeachBag-full.png"
              },
              normal: { url: "assets/storybook/megamenu/bannerBeachBag.jpg" }
            }
          }
        ]
      };
    },
    computed: {
      parentMenu() {
        return this.open ? "Man" : "";
      }
    },
    template: `<div>
      <SfMegaMenu :parent-menu="parentMenu">
        <SfMegaMenuColumn v-for="subcategory in subcategories" :key="subcategory.header" :title="subcategory.header">
          <SfMenuItem v-for="item in subcategory.items" :key="item.label" :label="item.label" class="sf-mega-menu__menu-item"/>
        </SfMegaMenuColumn>
        <template #aside>
          <div :style="{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}">
            <div v-for="tile in tiles" :key="tile.title" :style="{marginBottom: '1.25rem'}">
              <h3 :style="{marginBottom: '1.25rem', textTransform: 'uppercase'}">{{tile.title}}</h3>
              <SfImage :src="tile.pictures"/>
            </div>
          </div>
        </template>
      </SfMegaMenu>
      </div>`
  }));
