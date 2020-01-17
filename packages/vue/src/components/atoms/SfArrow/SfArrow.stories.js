/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import SfArrow from "./SfArrow.vue";
import SfIcon from "../SfIcon/SfIcon.vue";
storiesOf("Atoms|Arrow", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: {
      SfArrow
    },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-arrow--right": "sf-arrow--right",
            "sf-arrow--long": "sf-arrow--long",
            "sf-arrow--transparent": "sf-arrow--transparent",
            "sf-arrow--rounded": "sf-arrow--rounded",
            "sf-arrow--no-shadow": "sf-arrow--no-shadow"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      }
    },
    template: `<SfArrow
      :class="customClass" />`
  }))
  .add("[slot] default", () => ({
    components: {
      SfArrow,
      SfIcon
    },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-arrow--right": "sf-arrow--right",
            "sf-arrow--long": "sf-arrow--long",
            "sf-arrow--transparent": "sf-arrow--transparent",
            "sf-arrow--rounded": "sf-arrow--rounded",
            "sf-arrow--no-shadow": "sf-arrow--no-shadow"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      }
    },
    template: `<SfArrow
      :class="customClass">
      <SfIcon icon="chevron_left" class="sf-arrow__icon" size="12px" view-box="0 0 24 12"/>
    </SfArrow>`
  }));
