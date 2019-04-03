import { storiesOf } from "@storybook/vue";

import SfMegaMenu from "../components/organisms/SfMegaMenu/SfMegaMenu.vue";

storiesOf("MegaMenu", module).add("Mega Menu Wrapper with Text", () => ({
  components: { SfMegaMenu },
  template: "<sf-mega-menu>Hello Mega-Menu</sf-mega-menu>"
}));
