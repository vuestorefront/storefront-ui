import { storiesOf } from "@storybook/vue";
import { withKnobs, text, object } from "@storybook/addon-knobs";

import SfHeader from "./SfHeader.vue";

storiesOf("Organisms/Header", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfHeader },
    props: {
      logo: {
        default: text("(prop) logo", "/assets/logo.svg")
      },
      navigations: {
        default: object("(prop) navigations", [
          {
            text: "WOMEN",
            href: ""
          },
          {
            text: "MEN",
            href: ""
          }
        ])
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
      :account-icon="accountIcon" />`
  }))
  .add("[slot] logo", () => ({
    components: { SfHeader },
    props: {
      logo: {
        default: text("(prop) logo", "/assets/heart.svg")
      },
      navigations: {
        default: object("(prop) navigations", [
          {
            text: "WOMEN",
            href: ""
          },
          {
            text: "MEN",
            href: ""
          }
        ])
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
      :account-icon="accountIcon" />`
  }))
  .add("[slot] navigations", () => ({
    components: { SfHeader },
    props: {
      logo: {
        default: text("(prop) logo", "/assets/logo.svg")
      },
      navigations: {
        default: object("(prop) navigations", [
          {
            text: "KIDS",
            href: ""
          },
          {
            text: "SALE",
            href: ""
          }
        ])
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
      :account-icon="accountIcon" />`
  }))
  .add("[slot] search", () => ({
    components: { SfHeader },
    props: {
      logo: {
        default: text("(prop) logo", "/assets/logo.svg")
      },
      navigations: {
        default: object("(prop) navigations", [
          {
            text: "WOMEN",
            href: ""
          },
          {
            text: "MEN",
            href: ""
          }
        ])
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
      <template slot="search">
          <img src="assets/storybook/doge.svg" style="height: 25px; margin-left: auto;"/>
      </template>
      </SfHeader>`
  }))
  .add("[slot] accountIcon", () => ({
    components: { SfHeader },
    props: {
      logo: {
        default: text("(prop) logo", "/assets/logo.svg")
      },
      navigations: {
        default: object("(prop) navigations", [
          {
            text: "WOMEN",
            href: ""
          },
          {
            text: "MEN",
            href: ""
          }
        ])
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
      </SfHeader>`
  }))
  .add("[slot] cartIcon", () => ({
    components: { SfHeader },
    props: {
      logo: {
        default: text("(prop) logo", "/assets/logo.svg")
      },
      navigations: {
        default: object("(prop) navigations", [
          {
            text: "WOMEN",
            href: ""
          },
          {
            text: "MEN",
            href: ""
          }
        ])
      },
      cartIcon: {
        default: text("(prop) cartIcon", "cross")
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
      </SfHeader>`
  }))
  .add("[slot] wishlistIcon", () => ({
    components: { SfHeader },
    props: {
      logo: {
        default: text("(prop) logo", "/assets/logo.svg")
      },
      navigations: {
        default: object("(prop) navigations", [
          {
            text: "WOMEN",
            href: ""
          },
          {
            text: "MEN",
            href: ""
          }
        ])
      },
      cartIcon: {
        default: text("(prop) cartIcon", "empty_cart")
      },
      wishlistIcon: {
        default: text("(prop) wishlistIcon", "marker")
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
      </SfHeader>`
  }));
