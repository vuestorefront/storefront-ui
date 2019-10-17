// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";

import SfChevron from "./SfChevron.vue";

storiesOf("Atoms|Chevron", module)
  .addDecorator(withKnobs)
  .add(
    "Default",
    () => ({
      components: { SfChevron },
      props: {
        customClass: {
          default: options(
            "CSS modifier",
            {
              "sf-chevron--top": "sf-chevron--top"
            },
            "",
            { display: "multi-select" }
          )
        }
      },
      template: `<SfChevron
        :class="customClass" />`
    })
  )
  .add(
    "[slot] default",
    () => ({
      components: { SfChevron },
      props: {
        customClass: {
          default: options(
            "CSS modifier",
            {
              "sf-chevron--top": "sf-chevron--top"
            },
            "",
            { display: "multi-select" }
          )
        }
      },
      template: `<SfChevron
        :class="customClass">
        <span></span>  
      </SfChevron>`
    })
  );
