import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";

import SfHeader from "./SfHeader.vue";

storiesOf("Organisms/Header", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfHeader },
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
        <template #navigations>
        <ul style="display: flex; margin: 0; padding: 0; list-style: none;">
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">WOMEN</a>
        </li>
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">MEN</a>
        </li>
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">KIDS</a>
        </li>
      </ul>
        </template>
      </SfHeader>`
  }))
  .add("[slot] logo", () => ({
    components: { SfHeader },
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
      <template #navigations>
        <ul style="display: flex; margin: 0; padding: 0; list-style: none;">
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">WOMEN</a>
        </li>
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">MEN</a>
        </li>
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">KIDS</a>
        </li>
      </ul>
      </template>
      </SfHeader>`
  }))
  .add("[slot] navigations", () => ({
    components: { SfHeader },
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
      <template #navigations>
        <ul style="display: flex; margin: 0; padding: 0; list-style: none;">
        <li>
          <a style="color: hsl(136, 53%, 59%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">SHOES</a>
        </li>
        <li>
          <a style="color: hsl(205, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">ACCESSORIES</a>
        </li>
      </ul>
      </template>
      </SfHeader>`
  }))
  .add("[slot] search", () => ({
    components: { SfHeader },
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
      <template #navigations>
        <ul style="display: flex; margin: 0; padding: 0; list-style: none;">
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">WOMEN</a>
        </li>
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">MEN</a>
        </li>
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">KIDS</a>
        </li>
      </ul>
      </template>
      <template #search>
        <img src="assets/storybook/doge.svg" style="height: 25px; margin-left: auto;" />
      </template>
      </SfHeader>`
  }))
  .add("[slot] accountIcon", () => ({
    components: { SfHeader },
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
      <template #navigations>
        <ul style="display: flex; margin: 0; padding: 0; list-style: none;">
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">WOMEN</a>
        </li>
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">MEN</a>
        </li>
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">KIDS</a>
        </li>
      </ul>
      </template>
      </SfHeader>`
  }))
  .add("[slot] cartIcon", () => ({
    components: { SfHeader },
    props: {
      logo: {
        default: text("(prop) logo", "/assets/logo.svg")
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
      <template #navigations>
        <ul style="display: flex; margin: 0; padding: 0; list-style: none;">
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">WOMEN</a>
        </li>
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">MEN</a>
        </li>
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">KIDS</a>
        </li>
      </ul>
      </template>
      </SfHeader>`
  }))
  .add("[slot] wishlistIcon", () => ({
    components: { SfHeader },
    props: {
      logo: {
        default: text("(prop) logo", "/assets/logo.svg")
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
      <template #wishlistIcon>wishlist</template>
      <template #navigations>
        <ul style="display: flex; margin: 0; padding: 0; list-style: none;">
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">WOMEN</a>
        </li>
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">MEN</a>
        </li>
        <li>
          <a style="color: hsl(216, 8%, 12%); font-size: 0.875rem; font-weight: 500; padding-left: 40px;">KIDS</a>
        </li>
      </ul>
      </template>
      </SfHeader>`
  }));
