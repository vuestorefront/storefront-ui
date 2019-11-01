import { storiesOf } from "@storybook/vue";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";

import SfAddToCart from "./SfAddToCart.vue";

storiesOf("Molecules|AddToCart", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfAddToCart },
    props: {
      disabled: {
        default: boolean("disabled (props)", false)
      },
      stock: {
        default: number("stock (props)", 99)
      }
    },
    data() {
      return {
        qty: "1"
      };
    },
    template: `<SfAddToCart 
      :disabled="disabled"
      :stock="stock"
      v-model="qty" />`
  }))
  .add("[slot] add-to-cart-btn", () => ({
    components: { SfAddToCart },
    props: {
      disabled: {
        default: boolean("disabled (props)", false)
      },
      stock: {
        default: number("stock (props)", 99)
      }
    },
    data() {
      return {
        qty: "1"
      };
    },
    template: `<SfAddToCart 
      :disabled="disabled"
      :stock="stock"
      v-model="qty">
      <template #add-to-cart-btn>
        <!-- slot content -->
      </template>
    </SfAddToCart>`
  }))
  .add("[slot] quantity-select-input", () => ({
    components: { SfAddToCart },
    props: {
      disabled: {
        default: boolean("disabled (props)", false)
      },
      stock: {
        default: number("stock (props)", 99)
      }
    },
    data() {
      return {
        qty: "1"
      };
    },
    template: `<SfAddToCart 
      :disabled="disabled"
      :stock="stock"
      v-model="qty">
      <template #quantity-select-input>
        <!-- slot content -->
      </template>
    </SfAddToCart>`
  }));
