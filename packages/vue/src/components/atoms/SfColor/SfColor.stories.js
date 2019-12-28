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
        colors: [
          {
            label: "blue",
            active: false
          },
          {
            label: "yellow",
            active: false
          },
          {
            label: "pink",
            active: true
          },
          {
            label: "orange",
            active: false
          }
        ]
      };
    },
    template: `<div>
        <SfColor v-for="color in colors" :color="color.label" :is-active="color.active"/>
    </div>`
  }));
