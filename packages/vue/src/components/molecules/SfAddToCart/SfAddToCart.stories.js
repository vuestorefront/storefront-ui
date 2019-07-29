// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, number, select, text } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfAddToCart from "./SfAddToCart.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [["$component-size", "1.438rem", "size of checkmark"]]
};

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
      "to set styles of quantity select button"
    ],
    [
      ".sf-add-to-cart__select-option",
      "to set styles of each dropdown option of quantity for selection"
    ],
    [".sf-add-to-cart__button", "to set styles of add to cart button"]
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
        quantity: {
          default: number("quantity (prop)", 3)
        }
      },
      components: { SfAddToCart },
      template: `<SfAddToCart 
        :quantity="quantity"
        @click="addToCart"
        v-model="qty"
      />`
    }),
    {
      info: {
        summary: `<p>Component for selecting quantity and add a product to cart.</p>
       <h2>Usage</h2>
       <pre><code>import { SfAddToCart } from "@storefrontui/vue"</code></pre>
       ${generateStorybookTable(cssTableConfig, "CSS modifiers")}
       ${generateStorybookTable(eventsTableConfig, "Events")}`
      }
    }
  );
