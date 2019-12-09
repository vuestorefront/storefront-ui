/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import SfOverlay from "./SfOverlay.vue";

storiesOf("Atoms|Overlay", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfOverlay },
    props: {
      transition: {
        default: text("transition (prop)", "fade")
      },
      visible: {
        default: boolean("visible (prop)", true)
      }
    },
    template: `<SfOverlay
      :visible="visible"
      :transition="transition" />`
  }));
