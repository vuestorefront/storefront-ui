import { withKnobs, boolean } from "@storybook/addon-knobs";
import SfAddToCart from "./SfAddToCart.vue";
export default {
  title: "Molecules|AddToCart",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfAddToCart },
  props: {
    disabled: {
      default: boolean("disabled", false, "Props"),
    },
  },
  data() {
    return {
      qty: 1,
    };
  },
  template: `<div style="max-width: 21.25rem">
      <SfAddToCart 
        v-model="qty"
        :disabled="disabled"
        @click="()=>{}"/>
      </div>`,
});
export const SlotAddToCartBtn = () => ({
  components: { SfAddToCart },
  props: {
    disabled: {
      default: boolean("disabled", false, "Props"),
    },
  },
  data() {
    return {
      qty: 1,
    };
  },
  template: `<div style="max-width: 21.25rem">
        <SfAddToCart
          v-model="qty"
          :disabled="disabled"
>
        <template #add-to-cart-btn>
        <button  @click="()=>{}">Custom Add To Cart</button>
      </template>
        </SfAddToCart>
      </div>`,
});
SlotAddToCartBtn.story = {
  name: "[slot] add-to-cart-btn",
};
export const SlotQuantitySelectInput = () => ({
  components: { SfAddToCart },
  props: {
    disabled: {
      default: boolean("disabled", false, "Props"),
    },
  },
  data() {
    return {
      qty: 1,
    };
  },
  template: `<div style="max-width: 21.25rem">
        <SfAddToCart 
          :disabled="disabled"
          @click="()=>{}">
          <template #quantity-select-input="{qty}">
            <select v-model="qty">
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="25">25</option>
            </select>
          </template>
        </SfAddToCart>
      </div>`,
});
SlotQuantitySelectInput.story = {
  name: "[slot] quantity-select-input",
};
