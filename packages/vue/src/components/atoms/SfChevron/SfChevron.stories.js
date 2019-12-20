/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";

import SfChevron from "./SfChevron.vue";
import SfIcon from "../SfIcon/SfIcon.vue";

storiesOf("Atoms|Chevron", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
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
  }))
  .add("[slot] default", () => ({
    components: {
      SfChevron,
      SfIcon
    },
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
        <SfIcon icon="chevron_down" size="xxs"/> 
      </SfChevron>`
  }));
