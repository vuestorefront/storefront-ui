import { icons } from "@storefront-ui/shared/icons/icons";
import { sizesValues as sizes } from "@storefront-ui/shared/variables/sizes";
import { iconColorsValues as colors } from "@storefront-ui/shared/variables/colors";
import { SfIcon } from "@storefront-ui/vue";
const iconsNames = Object.keys(icons);

export default {
  title: "Atoms/Icon",
  component: SfIcon,
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: iconsNames,
      },
      defaultValue: "",
    },
    size: {
      control: {
        type: "select",
        options: sizes,
      },
      defaultValue: "",
    },
    color: {
      control: {
        type: "select",
        options: colors,
      },
      defaultValue: "",
    },
    viewBox: {
      control: "text",
      defaultValue: "0 0 24 24",
    },
    coverage: {
      control: {
        type: "number",
        range: {
          min: 0,
          max: 1,
          step: 0.1,
        },
        defaultValue: 1,
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfIcon },
  props: Object.keys(argTypes),
  template: `
  <SfIcon
    :icon="icon"
    :size="size"
    :color="color"
    :view-box="viewBox"
    :coverage="coverage"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  icon: "home",
  size: "lg",
  color: "green-primary",
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  ...Common.args,
  icon:
    "M21 8.25L13.5645 0.861954C12.4224 -0.287318 8.57214 -0.287318 7.42974 0.861954L0 8.25V10.843V19.9384C0 21.0762 0.916023 22 2.04678 22H6.5731C7.05737 22 7.45029 21.6042 7.45029 21.1165V14.6372C7.45029 14.1483 7.84321 13.7537 8.32748 13.7537H12.6667C13.1509 13.7537 13.5439 14.1483 13.5439 14.6372V21.1165C13.5439 21.6042 13.9368 22 14.4211 22H18.9532C20.084 22 21 21.0762 21 19.9384V10.8489V8.25ZM19.2455 19.9383C19.2455 20.0154 19.2147 20.0913 19.1599 20.1466C19.105 20.2018 19.0308 20.2328 18.9531 20.2328H15.2982V14.6371C15.2982 13.1726 14.1194 11.9865 12.6666 11.9865H8.3274C6.87454 11.9865 5.69582 13.1726 5.69582 14.6371V20.2328H2.04085C1.87981 20.2328 1.74846 20.1005 1.74846 19.9383V9.08177L8.67009 2.11127C9.13267 1.66491 11.8614 1.66491 12.324 2.11127L19.2456 9.08177L19.2455 19.9383Z",
};

export const WithDefaultSlot = (args, { argTypes }) => ({
  components: { SfIcon },
  props: Object.keys(argTypes),
  template: `
  <SfIcon
    :icon="icon"
    :size="size"
    :color="color"
    :view-box="viewBox">
    <template #default="{viewBox, iconPaths, icon}">
      <img src="/assets/logo.svg" alt="Vue.js">
    </template>
  </SfIcon>`,
});
WithDefaultSlot.args = {
  ...Common.args,
};
