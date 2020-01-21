/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfBottomNavigation from "./SfBottomNavigation.vue";
storiesOf("Organisms|BottomNavigation", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfBottomNavigation, SfIcon, SfCircleIcon },
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
      }
    },
    template: `<SfBottomNavigation>
        <SfBottomNavigationItem icon-name="home" icon-size="20px"/>
        <SfBottomNavigationItem icon-name="menu" icon-size="20px"/>
        <SfBottomNavigationItem icon-name="heart" icon-size="20px" :class="customClass"/>
        <SfBottomNavigationItem icon-name="profile" icon-size="20px"/>
        <SfBottomNavigationItem icon-name="add_to_cart" icon-size="20px" :is-active-button="true"/>
      </SfBottomNavigation>`
  }))
  .add("With text and icon", () => ({
    components: { SfBottomNavigation, SfIcon, SfCircleIcon },
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
      }
    },
    template: `<SfBottomNavigation>
    <SfBottomNavigationItem icon-name="home" icon-size="20px" icon-label="Home"/>
    <SfBottomNavigationItem icon-name="menu" icon-size="20px" icon-label="Menu"/>
    <SfBottomNavigationItem icon-name="heart" icon-size="20px" icon-label="Heart" :class="customClass"/>
    <SfBottomNavigationItem icon-name="profile" icon-size="20px" icon-label="Profile"/>
    <SfBottomNavigationItem icon-name="add_to_cart" icon-size="20px" :is-active-button="true" icon-label="Basket"/>
  </SfBottomNavigation>`
  }))
  .add("With text", () => ({
    components: { SfBottomNavigation, SfIcon, SfCircleIcon },
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
      }
    },
    template: `<SfBottomNavigation>
    <SfBottomNavigationItem icon-label="Home"/>
    <SfBottomNavigationItem icon-label="Menu"/>
    <SfBottomNavigationItem icon-label="Heart" :class="customClass"/>
    <SfBottomNavigationItem icon-label="Profile"/>
    <SfBottomNavigationItem icon-label="Basket"/>
    </SfBottomNavigation>`
  }));
