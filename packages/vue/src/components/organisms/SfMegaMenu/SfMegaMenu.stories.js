// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfMegaMenuColumn from "./_internal/SfMegaMenuColumn.vue";
import SfMegaMenu from "./SfMegaMenu.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";

storiesOf("Organisms|MegaMenu", module).add("[slot] default", () => ({
  components: {
    SfMegaMenu,
    SfMenuItem,
    SfMegaMenuColumn,
    SfImage
  },
  props: {},
  data() {
    return {
      activePage: "About us",
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
  template: `<div style="margin: -20px">
      <SfMegaMenu
        :active="activePage"
        @click:change="updateActive">
        <SfMegaMenuColumn v-for="category in categories" :title="category.header" :key="category.header">
          <SfMenuItem v-for="item in category.items" :label="item.label" :key="item.label" class="sf-mega-menu__subitem" />
        </SfMegaMenuColumn>
        <template #custom-section>
        <div v-for="tile in tiles" :key="tile.title" style="text-transform: uppercase;">
          <h3>{{ tile.title }}</h3>
          <SfImage class="mobile-only" style="margin: 1.25rem 2rem 1.25rem 0;" :src="tile.pictures.full" />
          <SfImage class="desktop-only" style="margin: 1.25rem 2rem 1.25rem 0;" :src="tile.pictures.normal" />
        </div>
        </template>
      </SfMegaMenu>
      <button 
      v-if="activePage" 
      @click="activePage = ''" 
      style="bottom: .5rem; left: .5rem; border: 0; background-color: transparent" 
      class="mobile-only">back</button>
    </div>`,
  methods: {
    updateActive(title) {
      this.activePage = title;
    }
  }
}));
