/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";

import SfColor from "./SfColor.vue";

storiesOf("Atoms|Color", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfColor },
    data() {
      return {
        colors: ["blue", "green", "pink", "yellow"]
      };
    },
    template: `<div>
        <SfColor v-for="color in colors" :color="color"/>
    </div>`
  }));
