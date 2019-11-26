import { storiesOf } from "@storybook/vue";

import SfMegaMenu from "./SfMegaMenu.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";
import SfMegaMenuColumn from "./_internal/SfMegaMenuColumn.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfList from "../../organisms/SfList/SfList.vue";

storiesOf("Organisms|MegaMenu", module).add("Default", () => ({
  data: () => {
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
      activeColumn: "Shoes"
    };
  },
  components: {
    SfMegaMenu,
    SfMenuItem,
    SfMegaMenuColumn,
    SfImage,
    SfList
  },
  template: `<SfMegaMenu :active="activeColumn" @click:change="updateActive">
    <SfMegaMenuColumn v-for="(category, j) in categories" :title="category.header" :key="j">
        <SfMenuItem style="margin: 1rem 0;" v-for="item in category.items" :label="item.label"></SfMenuItem>
    </SfMegaMenuColumn>
    </SfMegaMenu>`
}));
