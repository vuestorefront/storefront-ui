/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";

import SfBottomNavigation from "./SfBottomNavigation.vue";

import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

storiesOf("Organisms|BottomNavigation", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfBottomNavigation, SfCircleIcon, SfIcon },
    props: {
      label: {
        default: text("label", "Home", "Props")
      },
      icon: {
        default: text("icon", "home", "Props")
      },
      iconActive: {
        default: text("iconActive", "home_fill", "Props")
      }
    },
    data() {
      return {
        items: [
          {
            icon: "menu",
            iconActive: "",
            label: "Menu"
          },
          {
            icon: "heart",
            iconActive: "heart_fill",
            label: "Heart"
          },
          {
            icon: "profile",
            iconActive: "profile_fill",
            label: "Profile"
          }
        ],
        currentIcon: "heart_fill"
      };
    },
    template: `<SfBottomNavigation>
      <SfBottomNavigationItem 
        :icon="icon" 
        :label="label"
        :icon-active="iconActive"
        :is-active="currentIcon === iconActive"
        @click="currentIcon = iconActive"
      />
      <SfBottomNavigationItem
        v-for="(item, key) in items"
        :key="key"
        :icon="item.icon" 
        :icon-active="item.iconActive"
        :label="item.label"
        icon-size="17px"
        :is-active="currentIcon === item.iconActive"
        @click="currentIcon = item.iconActive"
      />
      <SfBottomNavigationItem
        label="Basket"
        icon="add_to_cart"     
        >
        <template #icon>
          <SfCircleIcon aria-label="Add to cart">
            <SfIcon
              icon="add_to_cart"
              color="white"
              size="25px"
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
      label: {
        default: text("label", "Home", "Props")
      },
      icon: {
        default: text("icon", "home", "Props")
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
      />
      <SfBottomNavigationItem
        v-for="(item, key) in items"
        :key="key"
        :icon="item.icon"
        :label="item.label"
        icon-size="17px"
      />
      <SfBottomNavigationItem
        icon="add_to_cart"
      >
        <template #icon>
          <SfCircleIcon>
            <SfIcon
              icon="add_to_cart"
              color="white"
              size="25px"
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
      label: {
        default: text("label", "Home", "Props")
      },
      icon: {
        default: text("icon", "home", "Props")
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
      />
      <SfBottomNavigationItem
        v-for="(item, key) in items"
        :key="key"
        :icon="item.icon"
        :label="item.label"
        icon-size="17px"
      />
      <SfBottomNavigationItem
        label="Basket"
      >
      </SfBottomNavigationItem>
    </SfBottomNavigation>`
  }));
