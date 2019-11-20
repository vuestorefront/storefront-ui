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
    template: `<SfHeader 
      :logo="logo"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon"
      :active-icon="activeIcon">
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
    template: `<SfHeader 
      :logo="logo"
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
    template: `<SfHeader 
      :logo="logo"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon"
      :active-icon="activeIcon">
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
    template: `<SfHeader 
      :logo="logo"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon"
      :active-icon="activeIcon">
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
