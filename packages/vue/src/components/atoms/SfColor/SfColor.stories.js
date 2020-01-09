/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
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
          },
          {
            label: "white",
            active: false
          }
        ]
      };
    },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-color--light": "sf-color--light"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      }
    },
    template: `<div>
        <SfColor v-for="color in colors" :color="color.label" :is-active="color.active" :aria-label="color.label" @click="color.active= !color.active" :class="customClass"/>
    </div>`
  }));
