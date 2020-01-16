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
            label: "red",
            active: false
          },
          {
            label: "black",
            active: false
          },
          {
            label: "purple",
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
        <SfColor v-for="color in colors" :color="color.label" :is-active="color.active" :aria-label="color.label" @click="color.active= !color.active" style="margin: 10px;"/>
    </div>`
  }));
