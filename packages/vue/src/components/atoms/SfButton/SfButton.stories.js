/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfButton from "./SfButton.vue";

storiesOf("Atoms|Button", module)
  .addDecorator(withKnobs)
  .add("[slot] default", () => ({
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-button--outline": "sf-button--outline",
            "sf-button--text": "sf-button--text",
            "sf-button--full-width": "sf-button--full-width",
            "color-primary": "color-primary",
            "color-secondary": "color-secondary",
            "color-warning": "color-warning",
            "color-danger": "color-danger",
            "color-info": "color-info",
            "color-success": "color-success"
          },
          "",
          { display: "multi-select" }
        )
      },
      customLabel: {
        default: text("default (slot)", "Shop now")
      }
    },
    components: { SfButton },
    template: `<SfButton
      :class="customClass">
      {{customLabel}}
    </SfButton>`
  }));
