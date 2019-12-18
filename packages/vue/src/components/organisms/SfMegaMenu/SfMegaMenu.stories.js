import { storiesOf } from "@storybook/vue";

import SfMegaMenu from "./SfMegaMenu.vue";

storiesOf("Organisms|MegaMenu", module).add("Common", () => ({
  components: { SfMegaMenu },
  template: "<SfMegaMenu>Hello Mega-Menu</SfMegaMenu>"
}));
