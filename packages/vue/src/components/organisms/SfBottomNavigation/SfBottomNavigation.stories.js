/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options
} from "@storybook/addon-knobs";
import SfBottomNavigation from "./SfBottomNavigation.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
storiesOf("Organisms|BottomNavigation", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfBottomNavigation, SfCircleIcon, SfIcon },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-bottom-navigation__item--active":
              "sf-bottom-navigation__item--active"
          },
          "sf-bottom-navigation__item--active",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      label: {
        default: text("label", "Home", "Props")
      },
      icon: {
        default: text("icon", "home", "Props")
      },
      isFloating: {
        default: boolean("isFloating", true, "Props")
      }
    },
    data() {
      return {
        items: [
          { icon: "menu", label: "Menu" },
          { icon: "heart", label: "Heart" },
          { icon: "profile", label: "Profile" }
        ]
      };
    },
    template: `<SfBottomNavigation>
      <SfBottomNavigationItem 
        :icon="icon" 
        :label="label"
        :class="customClass"
      />
      <SfBottomNavigationItem
        v-for="(item, key) in items"
        :key="key"
        :icon="item.icon"
        :label="item.label"
        icon-size="20px"
      />
      <SfBottomNavigationItem
        label="Basket"
        icon="add_to_cart"
        :is-floating="isFloating"
      >
        <template #icon>
          <SfCircleIcon>
            <SfIcon
              icon="add_to_cart"
              color="white"
              size="28px"
              :style="{margin: '0 0 0 -2px'}"
            />
          </SfCircleIcon>
        </template>
      </SfBottomNavigationItem>
    </SfBottomNavigation>`
  }))
  .add("Icons only", () => ({
    components: { SfBottomNavigation, SfCircleIcon, SfIcon },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-bottom-navigation__item--active":
              "sf-bottom-navigation__item--active"
          },
          "sf-bottom-navigation__item--active",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      label: {
        default: text("label", "Home", "Props")
      },
      icon: {
        default: text("icon", "home", "Props")
      },
      isFloating: {
        default: boolean("isFloating", true, "Props")
      }
    },
    data() {
      return {
        items: [{ icon: "menu" }, { icon: "heart" }, { icon: "profile" }]
      };
    },
    template: `<SfBottomNavigation>
      <SfBottomNavigationItem
        :icon="icon"
        :class="customClass"
      />
      <SfBottomNavigationItem
        v-for="(item, key) in items"
        :key="key"
        :icon="item.icon"
        :label="item.label"
        icon-size="20px"
      />
      <SfBottomNavigationItem
        icon="add_to_cart"
        :is-floating="isFloating"
      >
        <template #icon>
          <SfCircleIcon>
            <SfIcon
              icon="add_to_cart"
              color="white"
              size="28px"
              :style="{margin: '0 0 0 -2px'}"
            />
          </SfCircleIcon>
        </template>
      </SfBottomNavigationItem>
    </SfBottomNavigation>`
  }))
  .add("Labels only", () => ({
    components: { SfBottomNavigation, SfCircleIcon, SfIcon },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-bottom-navigation__item--active":
              "sf-bottom-navigation__item--active"
          },
          "sf-bottom-navigation__item--active",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      label: {
        default: text("label", "Home", "Props")
      },
      icon: {
        default: text("icon", "home", "Props")
      },
      isFloating: {
        default: boolean("isFloating", true, "Props")
      }
    },
    data() {
      return {
        items: [{ label: "Menu" }, { label: "Heart" }, { label: "Profile" }]
      };
    },
    template: `<SfBottomNavigation>
      <SfBottomNavigationItem
        :label="label"
        :class="customClass"
      />
      <SfBottomNavigationItem
        v-for="(item, key) in items"
        :key="key"
        :icon="item.icon"
        :label="item.label"
        icon-size="20px"
      />
      <SfBottomNavigationItem
        label="Basket"
      >
      </SfBottomNavigationItem>
    </SfBottomNavigation>`
  }));
