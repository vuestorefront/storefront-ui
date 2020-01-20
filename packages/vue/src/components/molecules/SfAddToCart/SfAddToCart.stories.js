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
      qtyMin: {
        default: number("qtyMin", 1, {}, "Props")
      }
    },
    data() {
      return {
        qty: 1
      };
    },
    template: `<div style="max-width: 21.25rem">
      <SfAddToCart 
        v-model="qty" 
        :disabled="disabled"
        :qty-min="qtyMin"
        @click="()=>{}"/>
      </div>`
  }))
  .add("[slot] add-to-cart-btn", () => ({
    components: { SfAddToCart },
    props: {
      disabled: {
        default: boolean("disabled", false, "Props")
      },
      qtyMin: {
        default: number("qtyMin", 1, {}, "Props")
      }
    },
    data() {
      return {
        qty: 1
      };
    },
    template: `<div style="max-width: 21.25rem">
        <SfAddToCart
          v-model="qty" 
          :disabled="disabled"
          :qty-min="qtyMin"
          >
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
      qtyMin: {
        default: number("qtyMin", 1, {}, "Props")
      }
    },
    data() {
      return {
        qty: 1
      };
    },
    template: `<div style="max-width: 21.25rem">
        <SfAddToCart 
          :disabled="disabled"
          :qty-min="qtyMin"
          @click="()=>{}">
          <template #quantity-select-input="{qty, qtyMin}">
            <select v-model="qty">
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="25">25</option>
            </select>
          </template>
        </SfAddToCart>
      </div>`
  }));
