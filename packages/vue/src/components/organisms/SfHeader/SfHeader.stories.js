import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";

import SfHeader from "./SfHeader.vue";

storiesOf("Organisms/Header", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfHeader },
    props: {
      logo: {
        default: text("logo (prop)", "/assets/logo.svg")
      },
      cartIcon: {
        default: text("cartIcon (prop)", "empty_cart")
      },
      wishlistIcon: {
        default: text("wishlistIcon (prop)", "heart")
      },
      accountIcon: {
        default: text("accountIcon (prop)", "profile")
      },
      activeIcon: {
        default: text("activeIcon (prop)", "account")
      }
    },
    template: `<div style="margin: -20px">
      <SfHeader 
        :logo="logo"
        :cart-icon="cartIcon" 
        :wishlist-icon="wishlistIcon" 
        :account-icon="accountIcon"
        :active-icon="activeIcon"
      >
        <template #navigation>
          <SfHeaderNavigationItem>WOMEN</SfHeaderNavigationItem>
          <SfHeaderNavigationItem>MEN</SfHeaderNavigationItem>
          <SfHeaderNavigationItem>KIDS</SfHeaderNavigationItem>
        </template>
      </SfHeader>
    </div>`
  }))
  .add("[slot] logo", () => ({
    components: { SfHeader },
    props: {
      logo: {
        default: text("logo (prop) ", "/assets/heart.svg")
      },
      cartIcon: {
        default: text("cartIcon (prop)", "empty_cart")
      },
      wishlistIcon: {
        default: text("wishlistIcon (prop)", "heart")
      },
      accountIcon: {
        default: text("accountIcon (prop)", "profile")
      },
      activeIcon: {
        default: text("activeIcon (prop)", "account")
      }
    },
    template: `<div style="margin: -20px">
      <SfHeader 
        :logo="logo"
        :cart-icon="cartIcon" 
        :wishlist-icon="wishlistIcon" 
        :account-icon="accountIcon"
      >
        <template #logo>
          CUSTOM LOGO 
        </template>
        <template #navigation>
        <SfHeaderNavigationItem>WOMEN</SfHeaderNavigationItem>
        <SfHeaderNavigationItem>MEN</SfHeaderNavigationItem>
        <SfHeaderNavigationItem>KIDS</SfHeaderNavigationItem>
      </template>
      </SfHeader>
    </div>`
  }))
  .add("[slot] search", () => ({
    components: { SfHeader },
    props: {
      logo: {
        default: text("logo (prop)", "/assets/logo.svg")
      },
      cartIcon: {
        default: text("cartIcon (prop)", "empty_cart")
      },
      wishlistIcon: {
        default: text("wishlistIcon (prop)", "heart")
      },
      accountIcon: {
        default: text("accountIcon (prop)", "profile")
      },
      activeIcon: {
        default: text("activeIcon (prop)", "account")
      }
    },
    template: `<div style="margin: -20px">
      <SfHeader 
        :logo="logo"
        :cart-icon="cartIcon" 
        :wishlist-icon="wishlistIcon" 
        :account-icon="accountIcon"
        :active-icon="activeIcon"
      >
        <template #navigation>
          <SfHeaderNavigationItem>WOMEN</SfHeaderNavigationItem>
          <SfHeaderNavigationItem>MEN</SfHeaderNavigationItem>
          <SfHeaderNavigationItem>KIDS</SfHeaderNavigationItem>
        </template>
        <template #search>
          <img src="assets/storybook/doge.svg" style="height: 25px; margin-left: auto;" />
        </template>
      </SfHeader>
    </div>`
  }))
  .add("[slot] icons", () => ({
    components: { SfHeader },
    props: {
      logo: {
        default: text("logo (prop)", "/assets/logo.svg")
      },
      cartIcon: {
        default: text("cartIcon (prop)", "empty_cart")
      },
      wishlistIcon: {
        default: text("wishlistIcon (prop)", "heart")
      },
      accountIcon: {
        default: text("accountIcon (prop)", "mail")
      },
      activeIcon: {
        default: text("activeIcon (prop)", "account")
      }
    },
    template: `<div style="margin: -20px">
      <SfHeader 
        :logo="logo"
        :cart-icon="cartIcon" 
        :wishlist-icon="wishlistIcon" 
        :account-icon="accountIcon"
        :active-icon="activeIcon"
      >
        <template #navigation>
          <SfHeaderNavigationItem>WOMEN</SfHeaderNavigationItem>
          <SfHeaderNavigationItem>MEN</SfHeaderNavigationItem>
          <SfHeaderNavigationItem>KIDS</SfHeaderNavigationItem>
        </template>
        <template #header-icons>
          CUSTOM ICONS
        </template>
      </SfHeader>
    </div>`
  }));
