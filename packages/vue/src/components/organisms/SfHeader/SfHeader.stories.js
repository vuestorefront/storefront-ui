import { storiesOf } from "@storybook/vue";
import { withKnobs, text, array } from "@storybook/addon-knobs";
import SfHeader from "./SfHeader.vue";

storiesOf("Organisms/Header", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfHeader },
    props: {
      logo: {
        default: text("(prop) logo", "")
      },
      navigations: {
        default: array("(prop) navigations", [
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
    template: `
        <SfHeader :navigations="navigations" :cart-icon="cartIcon" :wishlist-icon="wishlistIcon" :account-icon="accountIcon">
          <img src="arrow_left.svg" alt="arrow" slot="left"/>
          <img src="arrow_right.svg" alt="arrow" slot="right"/>
        </SfHeader>`
  }));

// export default storiesOf("Organisms/Header", module)
//   .add("mobile with icons", () => ({
//     components: { SfHeader },
//     template: `
//     <sf-header>
//       <img src="arrow_left.svg" alt="arrow" slot="left"/>
//       <img src="arrow_right.svg" alt="arrow" slot="right"/>
//     </sf-header>`,
//     methods: {}
//   }))
//   .add("mobile with text", () => ({
//     components: { SfHeader },
//     template: `
//     <sf-header>
//       <img src="arrow_left.svg" alt="arrow" slot="left"/>
//       <template slot="middle">Women</template>
//     </sf-header>`,
//     methods: {}
//   }));
