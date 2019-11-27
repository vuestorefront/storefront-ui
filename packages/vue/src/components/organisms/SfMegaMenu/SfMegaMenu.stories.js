// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfMegaMenuColumn from "./_internal/SfMegaMenuColumn.vue";
import SfMegaMenu from "./SfMegaMenu.vue";

import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";

storiesOf("Organisms|MegaMenu", module).add("[slot] default", () => ({
  components: {
    SfMegaMenu,
    SfMenuItem,
    SfMegaMenuColumn
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
  template: `<div>
      <SfMegaMenu
        :active="activePage"
        @click:change="updateActive">
        <SfMegaMenuColumn v-for="category in categories" :title="category.header">
          <SfMenuItem v-for="item in category.items" :label="item.label"></SfMenuItem>
        </SfMegaMenuColumn>
      </SfMegaMenu>
      <button 
        v-if="activePage" 
        @click="activePage = ''" 
        style="position: absolute; bottom: .5rem; left: .5rem; border: 0; background-color: transparent" 
        class="mobile-only">back</button>
    </div>`,
  methods: {
    updateActive(title) {
      this.activePage = title;
    }
  }
}));
