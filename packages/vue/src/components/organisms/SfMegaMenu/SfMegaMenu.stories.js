import { storiesOf } from "@storybook/vue";

import SfMegaMenu from "./SfMegaMenu.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";
import SfMegaMenuColumn from "./_internal/SfMegaMenuColumn.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";

storiesOf("Organisms|MegaMenu", module).add("Default", () => ({
  components: { SfMegaMenu, SfMenuItem, SfMegaMenuColumn, SfImage },
  template: `<SfMegaMenu>
    <SfMegaMenuColumn>
    <div>
      <h3>Clothing</h3>
      <SfMenuItem label="Skirts"></SfMenuItem>
    </div>
    </SfMegaMenuColumn>
    <SfMegaMenuColumn>
      <div>
        <h3>LAST PAIRS LEFT</h3>
        <SfImage src="assets/storybook/megamenu/bannerSandals.jpg"/>
      </div>
      <div>
        <h3>BEACH BAGS 2=1</h3>
        <SfImage src="assets/storybook/megamenu/bannerBeachBag.jpg"/>
      </div>
    </SfMegaMenuColumn>
    </SfMegaMenu>`
}));
