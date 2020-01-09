/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import SfOverlay from "./SfOverlay.vue";
storiesOf("Atoms|Overlay", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfOverlay },
    props: {
      transition: {
        default: text("transition", "fade", "Props")
      },
      visible: {
        default: boolean("visible", true, "Props")
      }
    },
    template: `<SfOverlay
      :visible="visible"
      :transition="transition" />`
  }));
