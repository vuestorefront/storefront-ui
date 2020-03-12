/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";
import SfQuantitySelector from "./SfQuantitySelector.vue";
storiesOf("Atoms|QuantitySelector", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfQuantitySelector },
    data() {
      return {
        value: 1
      };
    },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-quantity-selector--secondary": "sf-quantity-selector--secondary"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      ariaLabel: {
        default: text("ariaLabel", "Quantity", "Props")
      }
    },
    template: `<SfQuantitySelector
    :class="customClass"    
    :aria-label="ariaLabel"
        v-model="value"

      />`
  }));
