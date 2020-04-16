import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import SfOverlay from "./SfOverlay.vue";

export default {
  title: "Atoms|Overlay",
  decorators: [withKnobs],
};

export const Common = () => ({
  components: { SfOverlay },
  props: {
    transition: {
      default: text("transition", "fade", "Props"),
    },
    visible: {
      default: boolean("visible", true, "Props"),
    },
  },
  template: `<SfOverlay
      :visible="visible"
      :transition="transition" />`,
});
