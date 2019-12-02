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
      ]
    };
  },
  template: `<div style="margin: -20px">
      <SfMegaMenu
        :active="activePage"
        @click:change="updateActive">
        <template #menu-content>
          <SfMegaMenuColumn v-for="category in categories" :title="category.header">
            <SfMenuItem v-for="item in category.items" :label="item.label" />
          </SfMegaMenuColumn>
        </template>
        <div>
          <h3 style="text-transform: uppercase;">Last pairs left</h3>
          <SfImage style="margin: 1.25rem 2rem 1.25rem 0;" src="assets/storybook/megamenu/bannerSandals.jpg" />
        </div>
        <div>
          <h3 style="text-transform: uppercase;">Beach bags 2=1</h3>
          <SfImage style="margin: 1.25rem 2rem 1.25rem 0;" src="assets/storybook/megamenu/bannerBeachBag.jpg" />
        </div>
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
