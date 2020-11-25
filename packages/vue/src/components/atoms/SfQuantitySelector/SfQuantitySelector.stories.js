import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  object,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { SfQuantitySelector } from "@storefront-ui/vue";
storiesOf("Atoms|QuantitySelector", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfQuantitySelector },
    data() {
      return {
        value: 1,
      };
    },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-quantity-selector--secondary":
              "sf-quantity-selector--secondary",
            "sf-quantity-selector--transparent":
              "sf-quantity-selector--transparent",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      input: {
        default: object(
          "input",
          {
            type: "number",
          },
          "Props"
        ),
      },
      disabled: {
        default: boolean(
          "disabled",
          {
            type: "boolean",
          },
          "Props"
        ),
      },
    },
    template: `<div style="max-width: 375px">
        <SfQuantitySelector
          v-model="value"
          aria-label="Quantity"
          :class="customClass"
          :input="input"
          :disabled="disabled"
        />
      </div>`,
  }));
