import { storiesOf } from "@storybook/vue";

import SfMegaMenu from "./SfMegaMenu.vue";

storiesOf("Organisms|MegaMenu", module).add(
  "Basic",
  () => ({
    components: { SfMegaMenu },
    template: "<SfMegaMenu>Hello Mega-Menu</SfMegaMenu>"
  }));
