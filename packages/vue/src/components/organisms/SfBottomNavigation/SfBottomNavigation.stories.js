/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import SfBottomNavigation from "./SfBottomNavigation.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
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
    <SfBottomNavigationItem icon-name="home" icon-size="20px" icon-label="Home"/>
    <SfBottomNavigationItem icon-name="menu" icon-size="20px" icon-label="Menu"/>
    <SfBottomNavigationItem icon-name="heart" icon-size="20px" icon-label="Heart" :class="customClass"/>
    <SfBottomNavigationItem icon-name="profile" icon-size="20px" icon-label="Profile"/>
    <SfBottomNavigationItem icon-name="add_to_cart" icon-size="20px" :is-active-button="true" icon-label="Basket"/>
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
    <SfBottomNavigationItem>
      <template #icon>
        <SfIcon icon="heart" size="20px"/>
      </template>
    </SfBottomNavigationItem>
    <SfBottomNavigationItem>
      <template #icon>
        <SfIcon icon="profile" size="20px"/>
      </template>
    </SfBottomNavigationItem>
    <SfBottomNavigationItem :is-active-button="true">
      <template #icon>
        <SfCircleIcon>
          <SfIcon icon="add_to_cart" color="white" size="20px"/>
        </SfCircleIcon>
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
