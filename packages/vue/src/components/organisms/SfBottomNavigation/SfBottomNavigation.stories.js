import { SfBottomNavigation, SfCircleIcon, SfIcon } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/BottomNavigation",
  component: SfBottomNavigation,
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
      icon: {
        icon: "home",
      },
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
      :icon="{icon: item.icon}" 
      :icon-active="item.iconActive"
      :label="item.label"
      :is-active="currentIcon === item.iconActive"
      @click="currentIcon = item.iconActive"
    />
    <SfBottomNavigationItem
      label="Basket"
      :icon='{icon:"add_to_cart"}'     
      is-floating
      />
  </SfBottomNavigation>`,
});

export const Common = Template.bind({});
Common.args = {};
