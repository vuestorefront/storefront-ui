import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import { SfBottomNavigation, SfCircleIcon, SfIcon } from "@storefront-ui/vue";
storiesOf("Organisms|BottomNavigation", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfBottomNavigation, SfCircleIcon, SfIcon },
    props: {
      label: {
        default: text("label", "Home", "Props"),
      },
      icon: {
        default: text("icon", "home", "Props"),
      },
      iconActive: {
        default: text("iconActive", "home", "Props"),
      },
    },
    data() {
      return {
        items: [
          {
            icon: "menu",
            iconActive: "menu",
            label: "Menu",
          },
          {
            icon: "heart",
            iconActive: "heart",
            label: "Heart",
          },
          {
            icon: "account",
            iconActive: "account",
            label: "Profile",
          },
        ],
        currentIcon: "heart",
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
        icon-size="20px"
        :is-active="currentIcon === item.iconActive"
        @click="currentIcon = item.iconActive"
      />
      <SfBottomNavigationItem
        label="Basket"
        icon="add_to_cart"     
        is-floating
        />
    </SfBottomNavigation>`,
  }))
  .add("Icons only", () => ({
    components: { SfBottomNavigation, SfCircleIcon, SfIcon },
    props: {
      label: {
        default: text("label", "Home", "Props"),
      },
      icon: {
        default: text("icon", "home", "Props"),
      },
    },
    data() {
      return {
        items: [{ icon: "menu" }, { icon: "heart" }, { icon: "profile" }],
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
        icon-size="20px"
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
    </SfBottomNavigation>`,
  }))
  .add("Labels only", () => ({
    components: { SfBottomNavigation, SfCircleIcon, SfIcon },
    props: {
      label: {
        default: text("label", "Home", "Props"),
      },
      icon: {
        default: text("icon", "home", "Props"),
      },
    },
    data() {
      return {
        items: [{ label: "Menu" }, { label: "Heart" }, { label: "Profile" }],
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
        icon-size="20px"
      />
      <SfBottomNavigationItem
        label="Basket"
      >
      </SfBottomNavigationItem>
    </SfBottomNavigation>`,
  }));
