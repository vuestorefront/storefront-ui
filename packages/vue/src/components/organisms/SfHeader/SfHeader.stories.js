import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select, object } from "@storybook/addon-knobs";

import SfHeader from "./SfHeader.vue";

storiesOf("Organisms|Header", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props")
      },
      logo: {
        default: object(
          "logo",
          {
            small: { url: "/assets/logo.svg" },
            normal: { url: "/assets/logo.svg" }
          },
          "Props"
        )
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props")
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props")
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props")
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        )
      }
    },
    template: `<SfHeader
      :title="title" 
      :logo="logo"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon"
      :active-icon="activeIcon"
     >
      <template #navigation>
        <SfHeaderNavigationItem>
          <a href="#women" class="sf-header-navigation-item__link">Women</a>
        </SfHeaderNavigationItem>
        <SfHeaderNavigationItem>
          <a href="#man" class="sf-header-navigation-item__link">Man</a>
        </SfHeaderNavigationItem>
        <SfHeaderNavigationItem>
          <a href="#kids" class="sf-header-navigation-item__link">Kids</a>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>`
  }))
  .add("[slot] navigation", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props")
      },
      logo: {
        default: object(
          "logo",
          {
            small: { url: "/assets/logo.svg" },
            normal: { url: "/assets/logo.svg" }
          },
          "Props"
        )
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props")
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props")
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props")
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        )
      }
    },
    template: `<SfHeader
      :title="title"
      :logo="logo"
      :cart-icon="cartIcon"
      :wishlist-icon="wishlistIcon"
      :account-icon="accountIcon"
      :active-icon="activeIcon"
    >
      <template #navigation>
        CUSTOM NAVIGATION
      </template>
    </SfHeader>`
  }))
  .add("[slot] logo", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props")
      },
      logo: {
        default: object(
          "logo",
          {
            small: { url: "/assets/logo.svg" },
            normal: { url: "/assets/logo.svg" }
          },
          "Props"
        )
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props")
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props")
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props")
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        )
      }
    },
    template: `<SfHeader
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
        <SfHeaderNavigationItem>
          <a href="#women" class="sf-header-navigation-item__link">Women</a>
        </SfHeaderNavigationItem>
        <SfHeaderNavigationItem>
          <a href="#man" class="sf-header-navigation-item__link">Man</a>
        </SfHeaderNavigationItem>
        <SfHeaderNavigationItem>
          <a href="#kids" class="sf-header-navigation-item__link">Kids</a>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>`
  }))
  .add("[slot] search", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props")
      },
      logo: {
        default: object(
          "logo",
          {
            small: { url: "/assets/logo.svg" },
            normal: { url: "/assets/logo.svg" }
          },
          "Props"
        )
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props")
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props")
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props")
      },
      activeIcon: {
        default: text("activeIcon", "account", "Props")
      }
    },
    template: `<SfHeader
      :title="title"  
      :logo="logo"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon"
      :active-icon="activeIcon"
    >
      <template #search>
        CUSTOM SEARCH
      </template>
      <template #navigation>
        <SfHeaderNavigationItem>
          <a href="#women" class="sf-header-navigation-item__link">Women</a>
        </SfHeaderNavigationItem>
        <SfHeaderNavigationItem>
          <a href="#man" class="sf-header-navigation-item__link">Man</a>
        </SfHeaderNavigationItem>
        <SfHeaderNavigationItem>
          <a href="#kids" class="sf-header-navigation-item__link">Kids</a>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>`
  }))
  .add("[slot] icons", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props")
      },
      logo: {
        default: object(
          "logo",
          {
            small: { url: "/assets/logo.svg" },
            normal: { url: "/assets/logo.svg" }
          },
          "Props"
        )
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props")
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props")
      },
      accountIcon: {
        default: text("accountIcon", "mail", "Props")
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        )
      }
    },
    template: `<SfHeader
      :title="title" 
      :logo="logo"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon"
      :active-icon="activeIcon"
    >
      <template #header-icons>
        CUSTOM ICONS
      </template>
      <template #navigation>
        <SfHeaderNavigationItem>
          <a href="#women" class="sf-header-navigation-item__link">Women</a>
        </SfHeaderNavigationItem>
        <SfHeaderNavigationItem>
          <a href="#man" class="sf-header-navigation-item__link">Man</a>
        </SfHeaderNavigationItem>
        <SfHeaderNavigationItem>
          <a href="#kids" class="sf-header-navigation-item__link">Kids</a>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>`
  }));
