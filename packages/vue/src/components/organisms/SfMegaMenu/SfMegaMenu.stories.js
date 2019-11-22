import { storiesOf } from "@storybook/vue";

import SfMegaMenu from "./SfMegaMenu.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";
import SfMegaMenuColumn from "./_internal/SfMegaMenuColumn.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";

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
      ]
    };
  },
  components: { SfMegaMenu, SfMenuItem, SfMegaMenuColumn, SfImage },
  template: `<SfMegaMenu>
    <SfMegaMenuColumn style="padding: 0 6rem 0 2rem;">
      <div v-for="category in categories">
        <h3>{{ category.header }}</h3>
        <SfMenuItem style="margin: 1rem 0;" v-for="item in category.items" :label="item.label"></SfMenuItem>
      </div>
    </SfMegaMenuColumn>
    <SfMegaMenuColumn style="padding: 0 2rem 0 6rem;">
      <div>
        <h3>LAST PAIRS LEFT</h3>
        <SfImage style="margin: 1rem 1rem 0 0 ;" src="assets/storybook/megamenu/bannerSandals.jpg"/>
      </div>
      <div>
        <h3>BEACH BAGS 2=1</h3>
        <SfImage style="margin: 1rem 1rem 0 0;" src="assets/storybook/megamenu/bannerBeachBag.jpg"/>
      </div>
    </SfMegaMenuColumn>
    </SfMegaMenu>`
}));
