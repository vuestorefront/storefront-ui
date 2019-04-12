import { storiesOf } from "@storybook/vue";

import SfMegaMenu from "./SfMegaMenu.vue";

storiesOf("MegaMenu", module).add(
  "[slot] default",
  () => ({
    components: { SfMegaMenu },
    template: "<sf-mega-menu>Hello Mega-Menu</sf-mega-menu>"
  }),
  {
    info: true
  }
);
