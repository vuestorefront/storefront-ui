import {
  withKnobs,
  text,
  select,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { icons } from "@storefront-ui/shared/icons/icons";
import SfCircleIcon from "./SfCircleIcon.vue";
const iconsNames = Object.keys(icons);
const StoriesPlaceholder = {
  template: `<span style="font-size: 1.5rem; width: 20px; height: 20px; line-height: 0; display: flex; justify-content: center; align-items: center">1</span>`,
};
export default {
  title: "Atoms|CircleIcon",
  decorators: [withKnobs],
};
export const Common = () => ({
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
    ariaLabel: {
      default: text("ariaLabel", "Go to home", "Props"),
    },
    hasBadge: {
      default: boolean("hasBadge", false, "Props"),
    },
    badgeLabel: {
      default: text("badgeLabel", "99", "Props"),
    },
    disabled: {
      default: boolean("disabled", false, "Props"),
    },
  },
  template: `<SfCircleIcon
        :class="customClass"
        :icon="icon" 
        :has-badge="hasBadge"
        :badge-label="badgeLabel"
        :aria-label="ariaLabel"
        :disabled="disabled"
        :style="{margin: '.5rem'}"
     />`,
});
export const SlotDefault = () => ({
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
    >
      <StoriesPlaceholder/>
    </SfCircleIcon>`,
});
SlotDefault.story = {
  name: "[slot] default",
};
