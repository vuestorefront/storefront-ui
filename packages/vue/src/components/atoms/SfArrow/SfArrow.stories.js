import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { SfArrow, SfIcon } from "@storefront-ui/vue";
storiesOf("Atoms|Arrow", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: {
      SfArrow,
      SfIcon,
    },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-arrow--right": "sf-arrow--right",
            "sf-arrow--top": "sf-arrow--top",
            "sf-arrow--down": "sf-arrow--down",
            "sf-arrow--long": "sf-arrow--long",
            "sf-arrow--transparent": "sf-arrow--transparent",
            "sf-arrow--rounded": "sf-arrow--rounded",
            "sf-arrow--no-shadow": "sf-arrow--no-shadow",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
    },
    template: `<SfArrow
      :class="customClass" 
      :disabled="disabled"
      aria-label="Arrow label"
    />`,
  }))
  .add("[slot] default", () => ({
    components: {
      SfArrow,
      SfIcon,
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
            "sf-arrow--no-shadow": "sf-arrow--no-shadow",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
    },
    template: `<SfArrow
      :class="customClass"
      :disabled="disabled"
      aria-label="Arrow label">
      <SfIcon icon="chevron_left" class="sf-arrow__icon" size="14px" view-box="0 0 24 12"/>
    </SfArrow>`,
  }));
