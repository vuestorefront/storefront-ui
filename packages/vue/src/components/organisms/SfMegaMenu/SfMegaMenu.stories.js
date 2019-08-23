import { storiesOf } from "@storybook/vue";

import SfMegaMenu from "./SfMegaMenu.vue";

storiesOf("Organisms|MegaMenu", module).add(
  "Basic",
  () => ({
    components: { SfMegaMenu },
    template: "<SfMegaMenu>Hello Mega-Menu</SfMegaMenu>"
  }),
  {
    info: {
      summary: `<h2> Usage </h2>
      <pre><code>import { SfMegaMenu } from "@storefront-ui/vue"</code></pre>`
    }
  }
);
