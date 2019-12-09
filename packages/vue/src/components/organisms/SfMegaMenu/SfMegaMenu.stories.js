// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";

import SfMegaMenu from "./SfMegaMenu.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";

storiesOf("Organisms|MegaMenu", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: {
      SfMegaMenu,
      SfMenuItem,
      SfImage
    },
    props: {
      parentMenu: {
        default: text("parent-menu", "Women", "Props")
      }
    },
    data() {
      return {
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
    },
    template: `<div style="margin: -20px;">
    <SfMegaMenu
      :parent-menu="parentMenu"
    >
      <SfMegaMenuColumn v-for="category in categories" :title="category.header" :key="category.header">
        <SfMenuItem v-for="item in category.items" :label="item.label" :key="item.label" class="sf-mega-menu__menu-item" />
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
  </div>`,
    methods: {
      updateActive(title) {
        this.activePage = title;
      }
    }
  }));
