/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfBottomNavigation from "./SfBottomNavigation.vue";
storiesOf("Organisms|BottomNavigation", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfBottomNavigation },
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
    <SfBottomNavigationItem icon="home" icon-size="20px" label="Home"/>
    <SfBottomNavigationItem icon="menu" icon-size="20px" label="Menu"/>
    <SfBottomNavigationItem icon="heart" icon-size="20px" label="Heart" :class="customClass"/>
    <SfBottomNavigationItem icon="profile" icon-size="20px" label="Profile"/>
    <SfBottomNavigationItem icon="add_to_cart" :is-floating="true" label="Basket"/>
  </SfBottomNavigation>`
  }))
  .add("[slot] icon", () => ({
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
    <SfBottomNavigationItem>
    <template #icon>
      <SfIcon icon="home" size="20px"/>
    </template>
  </SfBottomNavigationItem>
  <SfBottomNavigationItem>
    <template #icon>
      <SfIcon icon="menu" size="20px"/>
    </template>
  </SfBottomNavigationItem>
  <SfBottomNavigationItem :class="customClass">
    <template #icon>
      <SfIcon icon="heart" size="20px"/>
    </template>
  </SfBottomNavigationItem>
  <SfBottomNavigationItem>
    <template #icon>
      <SfIcon icon="profile" size="20px"/>
    </template>
  </SfBottomNavigationItem>
  <SfBottomNavigationItem :is-floating="true">
    <template #icon>
      <SfCircleIcon icon="add_to_cart" icon-color="white" icon-size="20px"/>
    </template>
  </SfBottomNavigationItem>
</SfBottomNavigation>`
  }))
  .add("[slot] label", () => ({
    components: { SfBottomNavigation },
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
  <SfBottomNavigationItem>
    <template #label>
      <span>Home</span>
    </template>
  </SfBottomNavigationItem>
  <SfBottomNavigationItem>
    <template #label>
      <span>Menu</span>
    </template>
  </SfBottomNavigationItem>
  <SfBottomNavigationItem :class="customClass">
    <template #label>
      <span>Heart</span>
    </template>
  </SfBottomNavigationItem>
  <SfBottomNavigationItem>
    <template #label>
      <span>Profile</span>
    </template>
  </SfBottomNavigationItem>
  <SfBottomNavigationItem>
    <template #label>
      <span>Basket</span>
    </template>
  </SfBottomNavigationItem>
  </SfBottomNavigation>`
  }));
