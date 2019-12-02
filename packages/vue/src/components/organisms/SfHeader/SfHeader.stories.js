import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import SfHeader from "./SfHeader.vue";

storiesOf("Organisms/Header", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title (prop)", "Storefront UI")
      },
      logo: {
        default: text("logo (prop)", "/assets/logo.svg")
      },
      cartIcon: {
        default: text("a (prop)", "empty_cart")
      },
      wishlistIcon: {
        default: text("wishlistIcon (prop)", "heart")
      },
      accountIcon: {
        default: text("accountIcon (prop)", "profile")
      },
      activeIcon: {
        default: select(
          "active-icon (prop)",
          ["", "account", "wishlist", "cart"],
          "account"
        )
      }
    },
    template: `<div style="margin: -20px">
      <SfHeader
        :title="title" 
        :logo="logo"
        :cart-icon="cartIcon" 
        :wishlist-icon="wishlistIcon" 
        :account-icon="accountIcon"
        :active-icon="activeIcon"
        style="max-width: 1024px; margin: auto"
      >
        <template #navigation>
          <SfHeaderNavigationItem>WOMEN</SfHeaderNavigationItem>
          <SfHeaderNavigationItem>MEN</SfHeaderNavigationItem>
          <SfHeaderNavigationItem>KIDS</SfHeaderNavigationItem>
        </template>
      </SfHeader>
      <div style="max-width: 1024px; margin: auto; height: 30px; background-color: #a3a5ad">&nbsp;</div>
    </div>`
  }))
  .add("[slot] logo", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title (prop)", "Storefront UI")
      },
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
        default: select(
          "active-icon (prop)",
          ["", "account", "wishlist", "cart"],
          "account"
        )
      }
    },
    template: `<div style="margin: -20px">
      <SfHeader
        :title="title"  
        :logo="logo"
        :cart-icon="cartIcon" 
        :wishlist-icon="wishlistIcon" 
        :account-icon="accountIcon"
        :active-icon="activeIcon"
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
      title: {
        default: text("title (prop)", "Storefront UI")
      },
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
        :title="title"  
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
      title: {
        default: text("title (prop)", "Storefront UI")
      },
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
        default: select(
          "active-icon (prop)",
          ["", "account", "wishlist", "cart"],
          "account"
        )
      }
    },
    template: `<div style="margin: -20px">
      <SfHeader
        :title="title" 
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
