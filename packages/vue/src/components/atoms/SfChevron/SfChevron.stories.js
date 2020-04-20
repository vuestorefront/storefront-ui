import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import { SfChevron, SfIcon } from "@storefront-ui/vue";
export default {
  title: "Atoms|Chevron",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfChevron },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-chevron--top": "sf-chevron--top",
          "sf-chevron--left": "sf-chevron--left",
          "sf-chevron--right": "sf-chevron--right",
        },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
  },
  template: `<SfChevron
        :class="customClass" />`,
});
export const SlotDefault = () => ({
  components: {
    SfChevron,
    SfIcon,
  },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-chevron--top": "sf-chevron--top",
          "sf-chevron--left": "sf-chevron--left",
          "sf-chevron--right": "sf-chevron--right",
        },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
  },
  template: `<SfChevron
        :class="customClass">
        <SfIcon icon="chevron_down" size="xxs"/> 
      </SfChevron>`,
});
SlotDefault.story = {
  name: "[slot] default",
};
