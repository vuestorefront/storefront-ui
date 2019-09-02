// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfAddToCart from "./SfAddToCart.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

// use this to document events
const eventsTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    ["click", "event triggered when Add To Cart button is clicked"]
  ]
};

const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [".sf-add-to-cart", "to set blue color for alert message"],
    [
      ".sf-add-to-cart__select-quantity",
      "to set styles of quantity input button"
    ],
    [".sf-add-to-cart__button", "to set styles of add to cart button"]
  ]
};

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$add-to-cart__quantity-select__max-width",
      "90px",
      "Maximum width of the quantity input field."
    ]
  ]
};

storiesOf("Molecules|AddToCart", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data() {
        return {
          qty: "1"
        };
      },
      methods: {
        addToCart() {
          console.log(this.qty);
        }
      },
      props: {
        stock: {
          default: number("stock (prop)", 3)
        },
        canAddToCart: {
          default: boolean("canAddToCart (prop)", true)
        }
      },
      components: { SfAddToCart },
      template: `<SfAddToCart 
        :stock="stock"
        @click="addToCart"
        :canAddToCart="canAddToCart"
        v-model="qty"
      />`
    }),
    {
      info: {
        summary: `<p>Component for adding a product with a selected quantity to cart.</p>
       <h2>Usage</h2>
       <pre><code>import { SfAddToCart } from "@storefrontui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       ${generateStorybookTable(cssTableConfig, "CSS modifiers")}
       ${generateStorybookTable(eventsTableConfig, "Events")}`
      }
    }
  )
  .add(
    "[slot] Add to cart Button",
    () => ({
      components: { SfAddToCart },
      data() {
        return {
          qty: "1"
        };
      },
      methods: {
        addToCart() {
          console.log(this.qty);
        }
      },
      props: {
        quantity: {
          default: number("quantity (prop)", 3)
        },
        canAddToCart: {
          default: boolean("canAddToCart (prop)", true)
        }
      },
      template: `
      <SfAddToCart 
        :quantity="quantity"
        @click="addToCart"
        :canAddToCart="canAddToCart"
        v-model="qty">
        <template slot="add-to-cart-btn">
          <img src="assets/storybook/doge.svg" style="height: 25px; margin-right: 10px;"/>
        </template>
      </SfAddToCart>
    `
    }),
    {
      info: true,
      knobs: {
        escapeHTML: false
      }
    }
  )
  .add(
    "[slot] Quantity Option",
    () => ({
      components: { SfAddToCart, SfIcon },
      data() {
        return {
          qty: "1"
        };
      },
      methods: {
        addToCart() {
          console.log(this.qty);
        }
      },
      props: {
        stock: {
          default: number("stock (prop)", 3)
        },
        canAddToCart: {
          default: boolean("canAddToCart (prop)", true)
        }
      },
      template: `
      <SfAddToCart 
        :stock="stock"
        @click="addToCart"
        :canAddToCart="canAddToCart"
        v-model="qty">
        <template slot="quantity-select-input" slot-scope="{ qty }">
          <div class="sf-add-to-cart__select-quantity" :style="{ display: 'flex', 'align-items': 'center' }">
            <sf-icon icon="heart_fill" color="pink-primary"/>
            <div :style="{'margin-left': '0.5rem'}">{{qty}}</div>
          </div>
        </template>
      </SfAddToCart>
    `
    }),
    {
      info: true,
      knobs: {
        escapeHTML: false
      }
    }
  );
