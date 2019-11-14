import { storiesOf } from "@storybook/vue";

import SfMegaMenu from "./SfMegaMenu.vue";

storiesOf("Organisms|MegaMenu", module).add("Default", () => ({
  components: { SfMegaMenu },
  template: `<SfMegaMenu>
    Hello
    </SfMegaMenu>`
}));
