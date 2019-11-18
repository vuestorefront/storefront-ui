import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";

import SfHeader from "./SfHeader.vue";
import SfHeaderNavItem from "./_internal/SfHeaderNavItem.vue";

storiesOf("Organisms/Header", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfHeader, SfHeaderNavItem },
    props: {
      logo: {
        default: text("(prop) logo", "/assets/logo.svg")
      },
      cartIcon: {
        default: text("(prop) cartIcon", "empty_cart")
      },
      wishlistIcon: {
        default: text("(prop) wishlistIcon", "heart")
      },
      accountIcon: {
        default: text("(prop) accountIcon", "profile")
      }
    },
    template: `<SfHeader 
      :logo="logo"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon">
        <template #navigation>
          <SfHeaderNavItem>WOMEN</SfHeaderNavItem>
          <SfHeaderNavItem>MEN</SfHeaderNavItem>
          <SfHeaderNavItem>KIDS</SfHeaderNavItem>
        </template>
      </SfHeader>`
  }))
  .add("[slot] logo", () => ({
    components: { SfHeader, SfHeaderNavItem },
    props: {
      logo: {
        default: text("(prop) logo", "/assets/heart.svg")
      },
      cartIcon: {
        default: text("(prop) cartIcon", "empty_cart")
      },
      wishlistIcon: {
        default: text("(prop) wishlistIcon", "heart")
      },
      accountIcon: {
        default: text("(prop) accountIcon", "profile")
      }
    },
    template: `<SfHeader 
      :logo="logo"
      :navigations="navigations"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon">
      <template #logo>
        CUSTOM LOGO 
      </template>
      <template #navigation>
        <SfHeaderNavItem>WOMEN</SfHeaderNavItem>
        <SfHeaderNavItem>MEN</SfHeaderNavItem>
        <SfHeaderNavItem>KIDS</SfHeaderNavItem>
      </template>
      </SfHeader>`
  }))
  .add("[slot] search", () => ({
    components: { SfHeader, SfHeaderNavItem },
    props: {
      logo: {
        default: text("(prop) logo", "/assets/logo.svg")
      },
      cartIcon: {
        default: text("(prop) cartIcon", "empty_cart")
      },
      wishlistIcon: {
        default: text("(prop) wishlistIcon", "heart")
      },
      accountIcon: {
        default: text("(prop) accountIcon", "profile")
      }
    },
    template: `<SfHeader 
      :logo="logo"
      :navigations="navigations"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon">
      <template #navigation>
        <SfHeaderNavItem>WOMEN</SfHeaderNavItem>
        <SfHeaderNavItem>MEN</SfHeaderNavItem>
        <SfHeaderNavItem>KIDS</SfHeaderNavItem>
      </template>
      <template #search>
        <img src="assets/storybook/doge.svg" style="height: 25px; margin-left: auto;" />
      </template>
      </SfHeader>`
  }))
  .add("[slot] icons", () => ({
    components: { SfHeader, SfHeaderNavItem },
    props: {
      logo: {
        default: text("(prop) logo", "/assets/logo.svg")
      },
      cartIcon: {
        default: text("(prop) cartIcon", "empty_cart")
      },
      wishlistIcon: {
        default: text("(prop) wishlistIcon", "heart")
      },
      accountIcon: {
        default: text("(prop) accountIcon", "mail")
      }
    },
    template: `<SfHeader 
      :logo="logo"
      :navigations="navigations"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon">
      <template #navigation>
        <SfHeaderNavItem>WOMEN</SfHeaderNavItem>
        <SfHeaderNavItem>MEN</SfHeaderNavItem>
        <SfHeaderNavItem>KIDS</SfHeaderNavItem>
      </template>
      <template #header-icons>
        CUSTOM ICONS
      </template>
      </SfHeader>`
  }));
