/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { icons } from "@storefront-ui/shared/icons/icons";

import SfIcon from "./SfIcon.vue";

const iconsNames = Object.keys(icons);
const sizes = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl", "xl3", "xl4"];
const colors = [
  "primary",
  "secondary",
  "white",
  "black",
  "accent",
  "green-primary",
  "green-secondary",
  "gray-primary",
  "gray-secondary",
  "light-primary",
  "light-secondary",
  "pink-primary",
  "pink-secondary",
  "yellow-primary",
  "yellow-secondary",
  "blue-primary",
  "blue-secondary"
];

storiesOf("Atoms|Icon", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    props: {
      icon: {
        default: select("icon (prop)", iconsNames, "home")
      },
      size: {
        default: select("size (prop)", sizes, "xxs")
      },
      color: {
        default: select("color (prop)", colors, "primary")
      },
      viewBox: {
        default: text("view-box (prop)", "0 0 24 24")
      }
    },
    components: { SfIcon },
    template: `<SfIcon
      :icon="icon"
      :size="size"
      :color="color"
      :view-box="viewBox"/>`
  }))
  .add("[props] default", () => ({
    props: {
      icon: {
        default: text(
          "icon (prop)",
          "M21 8.25L13.5645 0.861954C12.4224 -0.287318 8.57214 -0.287318 7.42974 0.861954L0 8.25V10.843V19.9384C0 21.0762 0.916023 22 2.04678 22H6.5731C7.05737 22 7.45029 21.6042 7.45029 21.1165V14.6372C7.45029 14.1483 7.84321 13.7537 8.32748 13.7537H12.6667C13.1509 13.7537 13.5439 14.1483 13.5439 14.6372V21.1165C13.5439 21.6042 13.9368 22 14.4211 22H18.9532C20.084 22 21 21.0762 21 19.9384V10.8489V8.25ZM19.2455 19.9383C19.2455 20.0154 19.2147 20.0913 19.1599 20.1466C19.105 20.2018 19.0308 20.2328 18.9531 20.2328H15.2982V14.6371C15.2982 13.1726 14.1194 11.9865 12.6666 11.9865H8.3274C6.87454 11.9865 5.69582 13.1726 5.69582 14.6371V20.2328H2.04085C1.87981 20.2328 1.74846 20.1005 1.74846 19.9383V9.08177L8.67009 2.11127C9.13267 1.66491 11.8614 1.66491 12.324 2.11127L19.2456 9.08177L19.2455 19.9383Z"
        )
      },
      size: {
        default: text("size (prop)", "24px")
      },
      color: {
        default: text("color (prop)", "#FF6F61")
      },
      viewBox: {
        default: text("view-box (prop)", "0 0 24 24")
      }
    },
    components: { SfIcon },
    template: `<SfIcon
      :icon="icon"
      :size="size"
      :color="color"
      :view-box="viewBox" />`
  }))
  .add("[slot] default", () => ({
    props: {
      icon: {
        default: text(
          "icon (prop)",
          "M21 8.25L13.5645 0.861954C12.4224 -0.287318 8.57214 -0.287318 7.42974 0.861954L0 8.25V10.843V19.9384C0 21.0762 0.916023 22 2.04678 22H6.5731C7.05737 22 7.45029 21.6042 7.45029 21.1165V14.6372C7.45029 14.1483 7.84321 13.7537 8.32748 13.7537H12.6667C13.1509 13.7537 13.5439 14.1483 13.5439 14.6372V21.1165C13.5439 21.6042 13.9368 22 14.4211 22H18.9532C20.084 22 21 21.0762 21 19.9384V10.8489V8.25ZM19.2455 19.9383C19.2455 20.0154 19.2147 20.0913 19.1599 20.1466C19.105 20.2018 19.0308 20.2328 18.9531 20.2328H15.2982V14.6371C15.2982 13.1726 14.1194 11.9865 12.6666 11.9865H8.3274C6.87454 11.9865 5.69582 13.1726 5.69582 14.6371V20.2328H2.04085C1.87981 20.2328 1.74846 20.1005 1.74846 19.9383V9.08177L8.67009 2.11127C9.13267 1.66491 11.8614 1.66491 12.324 2.11127L19.2456 9.08177L19.2455 19.9383Z"
        )
      },
      size: {
        default: text("size (prop)", "24px")
      },
      color: {
        default: text("color (prop)", "#FF6F61")
      },
      viewBox: {
        default: text("view-box (prop)", "0 0 24 24")
      }
    },
    components: { SfIcon },
    template: `<SfIcon
      :icon="icon"
      :size="size"
      :color="color"
      :view-box="viewBox">
      <template #default="{viewBox, iconPaths, icon}">
        <img src="/assets/storybook/vue.ico" alt="Vue.js">
      </template>
    </SfIcon>`
  }));
