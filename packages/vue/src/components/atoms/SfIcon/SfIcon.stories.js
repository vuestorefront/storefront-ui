import { withKnobs, text, select } from "@storybook/addon-knobs";
import { icons } from "@storefront-ui/shared/icons/icons";
import { sizesValues as sizes } from "@storefront-ui/shared/variables/sizes";
import { iconColorsValues as colors } from "@storefront-ui/shared/variables/colors";
import { SfIcon } from "@storefront-ui/vue";
const iconsNames = Object.keys(icons);
export default {
  title: "Atoms|Icon",
  decorators: [withKnobs],
};
export const Common = () => ({
  props: {
    icon: {
      default: select("icon", iconsNames, "home", "Props"),
    },
    size: {
      default: select("size", sizes, "xxs", "Props"),
    },
    color: {
      default: select("color", colors, "green-primary", "Props"),
    },
    viewBox: {
      default: text("viewBox", "0 0 24 24", "Props"),
    },
  },
  components: { SfIcon },
  template: `<SfIcon
      :icon="icon"
      :size="size"
      :color="color"
      :view-box="viewBox"/>`,
});
export const Icons = () => ({
  components: { SfIcon },
  data() {
    return {
      iconsNames,
    };
  },
  template: `<div :style="{display: 'flex', flexWrap: 'wrap'}">
      <div 
          v-for="icon in iconsNames" 
          :key="icon" 
          :style="{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '.5rem',flex: '0 0 50px', height: '50px', font: '300 12px Raleway'}">
        <SfIcon :icon="icon" :style="{margin: '0 0 8px 0'}"/>
        <span :style="{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', width: '50px', textAlign: 'center'}">{{ icon }}</span>
      </div>
    </div>`,
});
export const PropsDefault = () => ({
  props: {
    icon: {
      default: text(
        "icon",
        "M21 8.25L13.5645 0.861954C12.4224 -0.287318 8.57214 -0.287318 7.42974 0.861954L0 8.25V10.843V19.9384C0 21.0762 0.916023 22 2.04678 22H6.5731C7.05737 22 7.45029 21.6042 7.45029 21.1165V14.6372C7.45029 14.1483 7.84321 13.7537 8.32748 13.7537H12.6667C13.1509 13.7537 13.5439 14.1483 13.5439 14.6372V21.1165C13.5439 21.6042 13.9368 22 14.4211 22H18.9532C20.084 22 21 21.0762 21 19.9384V10.8489V8.25ZM19.2455 19.9383C19.2455 20.0154 19.2147 20.0913 19.1599 20.1466C19.105 20.2018 19.0308 20.2328 18.9531 20.2328H15.2982V14.6371C15.2982 13.1726 14.1194 11.9865 12.6666 11.9865H8.3274C6.87454 11.9865 5.69582 13.1726 5.69582 14.6371V20.2328H2.04085C1.87981 20.2328 1.74846 20.1005 1.74846 19.9383V9.08177L8.67009 2.11127C9.13267 1.66491 11.8614 1.66491 12.324 2.11127L19.2456 9.08177L19.2455 19.9383Z",
        "Props"
      ),
    },
    size: {
      default: text("size", "24px", "Props"),
    },
    color: {
      default: text("color", "#FF6F61", "Props"),
    },
    viewBox: {
      default: text("viewBox", "0 0 24 24", "Props"),
    },
  },
  components: { SfIcon },
  template: `<SfIcon
      :icon="icon"
      :size="size"
      :color="color"
      :view-box="viewBox" />`,
});
PropsDefault.story = {
  name: "[props] default",
};
export const SlotDefault = () => ({
  props: {
    icon: {
      default: text(
        "icon",
        "M21 8.25L13.5645 0.861954C12.4224 -0.287318 8.57214 -0.287318 7.42974 0.861954L0 8.25V10.843V19.9384C0 21.0762 0.916023 22 2.04678 22H6.5731C7.05737 22 7.45029 21.6042 7.45029 21.1165V14.6372C7.45029 14.1483 7.84321 13.7537 8.32748 13.7537H12.6667C13.1509 13.7537 13.5439 14.1483 13.5439 14.6372V21.1165C13.5439 21.6042 13.9368 22 14.4211 22H18.9532C20.084 22 21 21.0762 21 19.9384V10.8489V8.25ZM19.2455 19.9383C19.2455 20.0154 19.2147 20.0913 19.1599 20.1466C19.105 20.2018 19.0308 20.2328 18.9531 20.2328H15.2982V14.6371C15.2982 13.1726 14.1194 11.9865 12.6666 11.9865H8.3274C6.87454 11.9865 5.69582 13.1726 5.69582 14.6371V20.2328H2.04085C1.87981 20.2328 1.74846 20.1005 1.74846 19.9383V9.08177L8.67009 2.11127C9.13267 1.66491 11.8614 1.66491 12.324 2.11127L19.2456 9.08177L19.2455 19.9383Z",
        "Props"
      ),
    },
    size: {
      default: text("size", "24px", "Props"),
    },
    color: {
      default: text("color", "#FF6F61", "Props"),
    },
    viewBox: {
      default: text("viewBox", "0 0 24 24", "Props"),
    },
  },
  components: { SfIcon },
  template: `<SfIcon
      :icon="icon"
      :size="size"
      :color="color"
      :view-box="viewBox">
      <template #default="{viewBox, iconPaths, icon}">
        <img src="/assets/logo.svg" alt="Vue.js">
      </template>
    </SfIcon>`,
});
SlotDefault.story = {
  name: "[slot] default",
};
