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
import SfCircleIcon from "./SfCircleIcon.vue";
const iconsNames = Object.keys(icons);
const StoriesPlaceholder = {
  template: `<span style="font-size: 1.5rem; width: 20px; height: 20px; line-height: 0; display: flex; justify-content: center; align-items: center">1</span>`
};
storiesOf("Atoms|CircleIcon", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
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
            "color-success": "color-success"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      icon: {
        default: select("icon", iconsNames, "home", "Props")
      },
      iconSize: {
        default: text("iconSize", "20px", "Props")
      },
      iconColor: {
        default: color("iconColor", "#FFFFFF", "Props")
      }
    },
    template: `<SfCircleIcon
        :class="customClass"
        :icon="icon" 
        :iconSize="iconSize"
        :iconColor="iconColor"
     />`
  }))
  .add("[slot] default", () => ({
    components: { SfCircleIcon, StoriesPlaceholder },
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
            "color-success": "color-success"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      icon: {
        default: select("icon", iconsNames, "home", "Props")
      },
      iconSize: {
        default: text("iconSize", "20px", "Props")
      },
      iconColor: {
        default: text("iconColor", "#FFFFFF", "Props")
      }
    },
    template: `<SfCircleIcon
      :class="customClass"
      :icon="icon"
      :iconSize="iconSize"
      :iconColor="iconColor"
    >
      <StoriesPlaceholder/>
    </SfCircleIcon>`
  }));
