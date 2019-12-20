/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  select,
  color,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { icons } from "@storefront-ui/shared/icons/icons";
const iconsNames = Object.keys(icons);

const StoriesPlaceholder = {
  template: `<span style="font-size: 1.5rem; width: 20px; height: 20px; line-height: 0; display: flex; justify-content: center; align-items: center">1</span>`
};

import SfCircleIcon from "./SfCircleIcon.vue";

storiesOf("Atoms|CircleIcon", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
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
      },
      iconSize: {
        default: text("icon-size (prop)", "20px")
      },
      iconColor: {
        default: color("icon-color (prop)", "#FFFFFF")
      }
    },
    template: `<SfCircleIcon
        :class="customClass"
        :icon="icon" 
        :icon-size="iconSize"
        :icon-color="iconColor"
     />`
  }))
  .add("[slot] default", () => ({
    components: { SfCircleIcon, StoriesPlaceholder },
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
      },
      iconSize: {
        default: text("icon-size (prop)", "20px")
      },
      iconColor: {
        default: text("icon-color (prop)", "#FFFFFF")
      }
    },
    template: `<SfCircleIcon
      :class="customClass"
      :icon="icon"
      :icon-size="iconSize"
      :icon-color="iconColor"
    >
      <StoriesPlaceholder/>
    </SfCircleIcon>`
  }));
