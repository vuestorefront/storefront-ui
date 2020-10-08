import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  optionsKnob as options,
  object,
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
      icon: {
        default: object(
          "icon",
          {
            icon: "arrow_left",
            size: "1.5rem",
          },
          "Props"
        ),
      },
      button: {
        default: object(
          "button",
          {
            disabled: false,
          },
          "Props"
        ),
      },
    },
    template: `<SfArrow
      :class="customClass" 
      :icon="icon"
      :button="button"
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
      icon: {
        default: object(
          "icon",
          {
            icon: "arrow_left",
            size: "1.5rem",
          },
          "Props"
        ),
      },
      button: {
        default: object(
          "button",
          {
            disabled: false,
          },
          "Props"
        ),
      },
    },
    template: `<SfArrow
      :class="customClass" aria-label="Arrow label">
      <SfIcon icon="chevron_left" class="sf-arrow__icon" size="14px" view-box="0 0 24 12"/>
    </SfArrow>`,
  }));
