import { icons } from "@storefront-ui/shared/icons/icons";
import { SfBottomNavigation, SfCircleIcon, SfIcon } from "@storefront-ui/vue";
import SfBottomNavigationItem from "./_internal/SfBottomNavigationItem.vue";
const iconsNames = Object.keys(icons);

export default {
  title: "Components/Organisms/BottomNavigation",
  component: SfBottomNavigationItem,
  parameters: {
    cssprops: {
      "icon-color": {
        value: "var(--c-link)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-size": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "circle-icon-position": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },

    docs: {
      inlineStories: false,
      iframeHeight: "30em",
      description: {
        component:
          "Full-width fixed bottom navigation component with items and circle icon.  Constructed from main component - SfBottomNavigation and internal components - SfBottomNavigationItem.",
      },
    },
  },
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: iconsNames,
      },
      table: {
        category: "Props for internal component",
        type: {
          summary: ["string", "array"],
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description:
        "Sets icon type. Icon SVG path(s). It can be single SVG path(string) or array of SVG paths or icon name from our icons list(such as 'added_to_cart`)",
    },
    isActive: {
      control: "boolean",
      table: {
        category: "Props for internal component",
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description: "Sets icon to active",
    },
    iconActive: {
      control: "text",
      table: {
        category: "Props for internal component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "The name of the default active icon",
    },
    label: {
      control: "text",
      table: {
        category: "Props for internal component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Label text",
    },
    iconSize: {
      control: "text",
      table: {
        category: "Props for internal component",
        defaultValue: {
          summary: "20px",
        },
      },
      defaultValue: "20px",
      description: "Icons size",
    },
    isFloating: {
      control: "boolean",
      table: {
        category: "Props for internal component",
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description: "Changes icon styling",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfBottomNavigation },
  props: Object.keys(argTypes),
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
      labelProp: "Home",
      iconProp: "home",
      iconActiveProp: "home",
    };
  },
  template: `
  <SfBottomNavigation>
    <SfBottomNavigationItem 
      :icon="iconProp"
      :label="labelProp"
      :icon-active="iconActiveProp"
      :is-active="currentIcon === iconActiveProp"
      @click="currentIcon = iconActiveProp"
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
});

export const Common = Template.bind({});
Common.args = {};
