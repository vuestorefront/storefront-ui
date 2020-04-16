import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import SfButton from "./SfButton.vue";
storiesOf("Atoms|Button", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-button--outline": "sf-button--outline",
            "sf-button--underlined": "sf-button--underlined",
            "sf-button--text": "sf-button--text",
            "sf-button--full-width": "sf-button--full-width",
            "color-primary": "color-primary",
            "color-secondary": "color-secondary",
            "color-warning": "color-warning",
            "color-danger": "color-danger",
            "color-info": "color-info",
            "color-success": "color-success",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      customLabel: {
        default: text("default", "Shop now", "Slots"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
    },
    components: { SfButton },
    template: `<SfButton
      :class="customClass"
      aria-label="my label"
      :disabled="disabled">
      {{customLabel}}
    </SfButton>`,
  }));
