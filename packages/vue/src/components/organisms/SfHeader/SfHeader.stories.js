import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  select,
  object,
  boolean
} from "@storybook/addon-knobs";
import SfHeader from "./SfHeader.vue";
const StoriesPlaceholder = {
  template: `<div style="box-sizing: border-box; display: flex; justify-content: center; align-items: center; width: 100%; height: 151vh; background-color: #5ECE7B; color: #FFF">[page content]</div>`
};
storiesOf("Organisms|Header", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfHeader, StoriesPlaceholder },
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
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props")
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props")
      },
      sticky: {
        default: boolean("sticky", true, "Props")
      }
    },
    template: `<div>
      <SfHeader
        :title="title" 
        :logo="logo"
        :cart-icon="cartIcon" 
        :wishlist-icon="wishlistIcon" 
        :account-icon="accountIcon"
        :active-icon="activeIcon"
        :has-mobile-search="hasMobileSearch"
        :search-placeholder="searchPlaceholder"
        :sticky="sticky"
       >
        <template #navigation>
          <SfHeaderNavigationItem>CLOTHES</SfHeaderNavigationItem>
          <SfHeaderNavigationItem>MEN</SfHeaderNavigationItem>
          <SfHeaderNavigationItem>KIDS</SfHeaderNavigationItem>
        </template>
      </SfHeader>
      <StoriesPlaceholder/>
    </div>`
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
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props")
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props")
      }
    },
    template: `<div>
      <SfHeader
        :title="title"  
        :logo="logo"
        :cart-icon="cartIcon" 
        :wishlist-icon="wishlistIcon" 
        :account-icon="accountIcon"
        :active-icon="activeIcon"
        :has-mobile-search="hasMobileSearch"
        :search-placeholder="searchPlaceholder"
        :sticky="sticky"
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
      <StoriesPlaceholder/>
    </div>`
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
        default: text("activeIcon", "account", "Props")
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props")
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props")
      },
      sticky: {
        default: boolean("sticky", true, "Props")
      }
    },
    template: `<div>
      <SfHeader
        :title="title" 
        :logo="logo"
        :cart-icon="cartIcon" 
        :wishlist-icon="wishlistIcon" 
        :account-icon="accountIcon"
        :active-icon="activeIcon"
        :has-mobile-search="hasMobileSearch"
        :search-placeholder="searchPlaceholder"
        :sticky="sticky"
      >
        <template #navigation>
          CUSTOM NAVIGATION
        </template>
      </SfHeader>
      <StoriesPlaceholder/>
    </div>`
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
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props")
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props")
      },
      sticky: {
        default: boolean("sticky", true, "Props")
      }
    },
    template: `<div>
      <SfHeader
        :title="title"  
        :logo="logo"
        :cart-icon="cartIcon" 
        :wishlist-icon="wishlistIcon" 
        :account-icon="accountIcon"
        :active-icon="activeIcon"
        :has-mobile-search="hasMobileSearch"
        :search-placeholder="searchPlaceholder"
        :sticky="sticky"
      >
        <template #navigation>
          <SfHeaderNavigationItem>WOMEN</SfHeaderNavigationItem>
          <SfHeaderNavigationItem>MEN</SfHeaderNavigationItem>
          <SfHeaderNavigationItem>KIDS</SfHeaderNavigationItem>
        </template>
        <template #search>
         CUSTOM SEARCH
        </template>
      </SfHeader>
      <StoriesPlaceholder/>
    </div>`
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
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props")
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props")
      },
      sticky: {
        default: boolean("sticky", true, "Props")
      }
    },
    template: `<div>
      <SfHeader
        :title="title" 
        :logo="logo"
        :cart-icon="cartIcon" 
        :wishlist-icon="wishlistIcon" 
        :account-icon="accountIcon"
        :active-icon="activeIcon"
        :has-mobile-search="hasMobileSearch"
        :search-placeholder="searchPlaceholder"
        :sticky="sticky"
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
      <StoriesPlaceholder/>
    </div>`
  }));
