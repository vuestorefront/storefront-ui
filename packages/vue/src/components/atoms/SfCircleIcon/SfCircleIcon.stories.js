import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  select,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { icons } from "@storefront-ui/shared/icons/icons";
import { SfCircleIcon } from "@storefront-ui/vue";
const iconsNames = Object.keys(icons);

storiesOf("Atoms|CircleIcon", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfCircleIcon },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-circle-icon--small": "sf-circle-icon--small",
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
      icon: {
        default: select("icon", iconsNames, "home", "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
    },
    template: `<SfCircleIcon
        :class="customClass"
        :icon="icon" 
        aria-label="Go to Home"
        :disabled="disabled"
        :style="{margin: '.5rem'}"
     />`,
  }))
  .add("[slot] default", () => ({
    components: { SfCircleIcon },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
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
      icon: {
        default: select("icon", iconsNames, "home", "Props"),
      },
      iconSize: {
        default: text("iconSize", "20px", "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
    },
    template: `<SfCircleIcon
      :class="customClass"
      :icon="icon"
      :iconSize="iconSize"
      aria-label="Go to Home"
    >
      <span style="font-size: 1.5rem; width: 20px; height: 20px; line-height: 0; display: flex; justify-content: center; align-items: center">
        1
      </span>,
    </SfCircleIcon>`,
  }));
