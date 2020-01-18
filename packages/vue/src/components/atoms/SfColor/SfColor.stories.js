/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import SfColor from "./SfColor.vue";
storiesOf("Atoms|Color", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfColor },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-color--rounded": "sf-color--rounded"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      }
    },
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
        <SfColor 
          v-for="color in colors"
          :color="color.label" 
          :selected="color.active" 
          :aria-label="color.label"  
          style="margin: 10px;"
          :class="customClass"
          @click="color.active= !color.active"/>
    </div>`
  }));
