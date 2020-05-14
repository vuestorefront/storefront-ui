import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import { SfChevron, SfIcon } from "@storefront-ui/vue";
storiesOf("Atoms|Chevron", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
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
  }))
  .add("[slot] default", () => ({
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
        <SfIcon icon="chevron_down" size="14px"/> 
      </SfChevron>`,
  }));
