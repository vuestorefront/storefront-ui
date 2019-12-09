import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select, object } from "@storybook/addon-knobs";

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
        default: object("logo (prop)", {
          small: { url: "/assets/logo.svg" },
          normal: { url: "/assets/logo.svg" }
        })
      },
      cartIcon: {
        default: text("cart-icon (prop)", "empty_cart")
      },
      wishlistIcon: {
        default: text("wishlist-icon (prop)", "heart")
      },
      accountIcon: {
        default: text("account-icon (prop)", "profile")
      },
      activeIcon: {
        default: select(
          "active-icon (prop)",
          ["", "account", "wishlist", "cart"],
          "account"
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
      style="max-width: 1024px; margin: auto"
     >
      <template #navigation>
        <SfHeaderNavigationItem>WOMEN</SfHeaderNavigationItem>
        <SfHeaderNavigationItem>MEN</SfHeaderNavigationItem>
        <SfHeaderNavigationItem>KIDS</SfHeaderNavigationItem>
      </template>
    </SfHeader>`
  }))
  .add("[slot] logo", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title (prop)", "Storefront UI")
      },
      logo: {
        default: object("logo (prop)", {
          small: { url: "/assets/logo.svg" },
          normal: { url: "/assets/logo.svg" }
        })
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
    template: `<SfHeader
      :title="title"  
      :logo="logo"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon"
      :active-icon="activeIcon"
      style="max-width: 1024px; margin: auto"
    >
      <template #logo>
        CUSTOM LOGO 
      </template>
      <template #navigation>
      <SfHeaderNavigationItem>WOMEN</SfHeaderNavigationItem>
      <SfHeaderNavigationItem>MEN</SfHeaderNavigationItem>
      <SfHeaderNavigationItem>KIDS</SfHeaderNavigationItem>
    </template>
    </SfHeader>`
  }))
  .add("[slot] navigation", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title (prop)", "Storefront UI")
      },
      logo: {
        default: object("logo (prop)", {
          small: { url: "/assets/logo.svg" },
          normal: { url: "/assets/logo.svg" }
        })
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
      :title="title" 
      :logo="logo"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon"
      :active-icon="activeIcon"
      style="max-width: 1024px; margin: auto"
    >
      <template #navigation>
        <SfHeaderNavigationItem>CLOTHES</SfHeaderNavigationItem>
        <SfHeaderNavigationItem>MEN</SfHeaderNavigationItem>
        <SfHeaderNavigationItem>KIDS</SfHeaderNavigationItem>
      </template>
    </SfHeader>`
  }))
  .add("[slot] search", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title (prop)", "Storefront UI")
      },
      logo: {
        default: object("logo (prop)", {
          small: { url: "/assets/logo.svg" },
          normal: { url: "/assets/logo.svg" }
        })
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
      <template #search>
        CUSTOM SEARCH
      </template>
    </SfHeader>`
  }))
  .add("[slot] icons", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title (prop)", "Storefront UI")
      },
      logo: {
        default: object("logo (prop)", {
          small: { url: "/assets/logo.svg" },
          normal: { url: "/assets/logo.svg" }
        })
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
    template: `<SfHeader
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
      <template #header-icons>
        CUSTOM ICONS
      </template>
    </SfHeader>`
  }));
