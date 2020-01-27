/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, number, text } from "@storybook/addon-knobs";
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
      min: {
        default: number("min", 1, {}, "Props")
      },
      ariaLabel: {
        default: text("ariaLabel", "Quantity", "Props")
      }
    },
    template: `<SfQuantitySelector 
        v-model="value"
        :min="min"
        :aria-label="ariaLabel"
      />`
  }));
