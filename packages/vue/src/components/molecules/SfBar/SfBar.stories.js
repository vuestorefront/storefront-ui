/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfBar from "./SfBar.vue";

storiesOf("Molecules|Bar", module)
  .addDecorator(withKnobs)
  .add("[slot] default", () => ({
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-bar--modifier":
              "sf-bar--modifier"
          },
          "",
          { display: "multi-select" }
        )
      }
    },
    editableProp: {
      default: text("propname (prop)", "propvalue")
    },
    components: { SfBar },
    template: `<SfBar
      :class="customClass" />`
  }));

