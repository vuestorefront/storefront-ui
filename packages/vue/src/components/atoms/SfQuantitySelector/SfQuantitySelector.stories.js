import {
  withKnobs,
  text,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { SfQuantitySelector } from "@storefront-ui/vue";
export default {
  title: "Atoms|QuantitySelector",
  decorators: [withKnobs],
};
export const Common = () => ({
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
          "sf-quantity-selector--secondary": "sf-quantity-selector--secondary",
        },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    ariaLabel: {
      default: text("ariaLabel", "Quantity", "Props"),
    },
  },
  template: `<div style="max-width: 375px">
        <SfQuantitySelector
          v-model="value"
          :class="customClass"
          :aria-label="ariaLabel"
        />
      </div>`,
});
