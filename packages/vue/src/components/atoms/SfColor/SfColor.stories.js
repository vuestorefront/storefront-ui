import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";
import SfColor from "./SfColor.vue";
storiesOf("Atoms|Color", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfColor },
    props: {
      color: { default: text("color", "red", "Props") },
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
        selected: true
      };
    },
    template: `<SfColor 
          :color="color" 
          :selected="selected" 
          aria-label="color"  
          style="margin: 10px;"
          :class="customClass"
          @click="selected = !selected"/>`
  }));
