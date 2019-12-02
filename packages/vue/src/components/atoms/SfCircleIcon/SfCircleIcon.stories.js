// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  select,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { icons } from "@storefront-ui/shared/icons/icons";

import SfCircleIcon from "./SfCircleIcon.vue";

const iconsNames = Object.keys(icons);

storiesOf("Atoms|CircleIcon", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfCircleIcon },
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-circle-icon--small": "sf-circle-icon--small",
            "sf-circle-icon--big": "sf-circle-icon--big",
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
      icon: {
        default: select("icon (prop)", iconsNames, "home")
      },
      iconSize: {
        default: text("icon-size (prop)", "20px")
      }
    },
    template: `<SfCircleIcon
        :class="customClass"
        :icon="icon" 
        :icon-size="iconSize"/>`
  }))
  .add("[slot] default", () => ({
    components: { SfCircleIcon },
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
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
      icon: {
        default: select("icon (prop)", iconsNames, "home")
      }
    },
    template: `<SfCircleIcon
      :class="customClass"
      :icon="icon">
      <span style="font-size: 1.5rem; width: 20px; height: 20px; line-height: 0; display: flex; justify-content: center; align-items: center">1</span>
    </SfCircleIcon>`
  }));
