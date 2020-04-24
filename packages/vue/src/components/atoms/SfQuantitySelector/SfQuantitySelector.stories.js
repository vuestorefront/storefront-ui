import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
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
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
    },
    template: `<div style="max-width: 375px">
        <SfQuantitySelector
          v-model="value"
          aria-label="Quantity"
          :class="customClass"
        />
      </div>`,
  }));
