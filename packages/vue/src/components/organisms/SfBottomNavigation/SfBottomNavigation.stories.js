import { SfBottomNavigation, SfCircleIcon, SfIcon } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/BottomNavigation",
  component: SfBottomNavigation,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: "30em",
      description: {
        component: "Full-width fixed bottom navigation component with items and circle icon.",
      },
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
      label: "Home",
      icon: "home",
      iconActive: "home",
    };
  },
  template: `
  <SfBottomNavigation>
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
});

export const Common = Template.bind({});
Common.args = {};
