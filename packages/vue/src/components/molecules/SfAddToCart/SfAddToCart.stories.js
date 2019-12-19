import { storiesOf } from "@storybook/vue";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";

import SfAddToCart from "./SfAddToCart.vue";

storiesOf("Molecules|AddToCart", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfAddToCart },
    props: {
      disabled: {
        default: boolean("disabled", false, "Props")
      },
      stock: {
        default: number("stock", 99, {}, "Props")
      }
    },
    data() {
      return {
        value: "1"
      };
    },
    template: `<div style="max-width: 21.25rem">
      <SfAddToCart 
        :disabled="disabled"
        :stock="stock"
        v-model="value" 
        @click="()=>{}"/>
      </div>`
  }))
  .add("[slot] add-to-cart-btn", () => ({
    components: { SfAddToCart },
    props: {
      disabled: {
        default: boolean("disabled", false, "Props")
      },
      stock: {
        default: number("stock", 99, {}, "Props")
      }
    },
    data() {
      return {
        value: "1"
      };
    },
    template: `<div style="max-width: 21.25rem">
        <SfAddToCart 
          :disabled="disabled"
          :stock="stock"
          v-model="value">
        <template #add-to-cart-btn>
        <button  @click="()=>{}">Custom Add To Cart</button>
      </template>
        </SfAddToCart>
      </div>`
  }))
  .add("[slot] quantity-select-input", () => ({
    components: { SfAddToCart },
    props: {
      disabled: {
        default: boolean("disabled", false, "Props")
      },
      stock: {
        default: number("stock", 99, {}, "Props")
      }
    },
    data() {
      return {
        value: "1"
      };
    },
    template: `<div style="max-width: 21.25rem">
        <SfAddToCart 
          :disabled="disabled"
          :stock="stock"
          @click="()=>{}">
          <template #quantity-select-input="{qty, stock}">
            <select v-model="value">
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="25">25</option>
            </select>
          </template>
        </SfAddToCart>
      </div>`
  }));
