// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfGroupedProduct from "./SfGroupedProduct.vue";

storiesOf("Organisms|GroupedProduct", module)
  .addDecorator(withKnobs)
  .add("[slot] default", () => ({
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-grouped-product--modifier":
              "sf-grouped-product--modifier"
          },
          "",
          { display: "multi-select" }
        )
      }
    },
    editableProp: {
      default: text("propname (prop)", "propvalue")
    },
    components: { SfGroupedProduct },
    template: `<SfGroupedProduct
      :class="customClass" />`
  }));

