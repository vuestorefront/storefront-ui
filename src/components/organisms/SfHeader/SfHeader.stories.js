import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SfHeader from "./SfHeader.vue";

export default storiesOf("Header", module)
  .add("mobile with icons", () => ({
    components: { SfHeader },
    template: `
    <sf-header>
      <img src="arrow_left.svg" alt="arrow" slot="left"/>
      <img src="arrow_right.svg" alt="arrow" slot="right"/>
    </sf-header>`,
    methods: {}
  }))
  .add("mobile with text", () => ({
    components: { SfHeader },
    template: `
    <sf-header>
      <img src="arrow_left.svg" alt="arrow" slot="left"/>
      <template slot="middle">Women</template>
    </sf-header>`,
    methods: {}
  }));
