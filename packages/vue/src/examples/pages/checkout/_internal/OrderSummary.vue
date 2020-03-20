<template>
  <div id="order-summary">
    <SfHeading
      title="Totals"
      :level="3"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="highlighted highlighted--total">
      <SfProperty
        name="Products"
        :value="totalItems"
        class="sf-property--full-width sf-property--large property"
      />
      <SfProperty
        name="Subtotal"
        :value="subtotal"
        class="sf-property--full-width sf-property--large property"
      />
      <SfProperty
        name="Shipping"
        :value="shippingMethod.price"
        class="sf-property--full-width sf-property--large property"
      />
      <SfDivider class="divider" />
      <SfProperty
        name="Total price"
        :value="total"
        class="sf-property--full-width sf-property--large property"
      />
    </div>
    <div class="highlighted promo-code">
      <SfInput
        v-model="promoCode"
        name="promoCode"
        placeholder="Enter promo code"
        class="sf-input--filled promo-code__input"
      />
      <SfCircleIcon class="promo-code__circle-icon" icon="check" />
    </div>
    <div class="actions">
      <SfButton
        class="sf-button--full-width actions__button"
        @click="$emit('click:next')"
        >{{ buttonName }}</SfButton
      >
      <SfButton
        class="sf-button--text actions__button"
        @click="$emit('click:back')"
        >Go back</SfButton
      >
    </div>
    <div class="highlighted">
      <SfCharacteristic
        v-for="characteristic in characteristics"
        :key="characteristic.title"
        :title="characteristic.title"
        :description="characteristic.description"
        :icon="characteristic.icon"
        color-icon="green-primary"
        class="characteristic"
      />
    </div>
  </div>
</template>
<script>
import {
  SfHeading,
  SfButton,
  SfCircleIcon,
  SfDivider,
  SfProperty,
  SfCharacteristic,
  SfInput
} from "@storefront-ui/vue";

export default {
  name: "OrderSummary",
  components: {
    SfHeading,
    SfButton,
    SfDivider,
    SfCircleIcon,
    SfProperty,
    SfCharacteristic,
    SfInput
  },
  props: {
    order: {
      type: Object,
      default: () => ({})
    },
    shippingMethods: {
      type: Array,
      default: () => []
    },
    paymentMethods: {
      type: Array,
      default: () => []
    },
    characteristics: {
      type: Array,
      default: () => []
    },
    buttonName: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      promoCode: "",
      showPromoCode: false,
      listIsHidden: false
    };
  },
  computed: {
    products() {
      return this.order.products;
    },
    totalItems() {
      return (
        "" +
        this.products.reduce((previous, current) => {
          return previous + current.qty;
        }, 0)
      );
    },
    shipping() {
      return this.order.shipping;
    },
    shippingMethod() {
      const shippingMethod = this.shipping.shippingMethod;
      const method = this.shippingMethods.find(
        method => method.value === shippingMethod
      );
      return method ? method : { price: "$0.00" };
    },
    payment() {
      return this.order.payment;
    },
    paymentMethod() {
      const paymentMethod = this.payment.paymentMethod;
      const method = this.paymentMethods.find(
        method => method.value === paymentMethod
      );
      return method ? method : { label: "" };
    },
    subtotal() {
      const products = this.products;
      const subtotal = products.reduce((previous, current) => {
        const qty = current.qty;
        const price = current.price.special
          ? current.price.special
          : current.price.regular;
        const total = qty * parseFloat(price.replace("$", ""));
        return previous + total;
      }, 0);
      return "$" + subtotal.toFixed(2);
    },
    total() {
      const subtotal = parseFloat(this.subtotal.replace("$", ""));
      const shipping = parseFloat(this.shippingMethod.price.replace("$", ""));
      const total = subtotal + (isNaN(shipping) ? 0 : shipping);
      return "$" + total.toFixed(2);
    }
  },
  methods: {
    removeProduct(index) {
      const order = { ...this.order };
      const products = [...order.products];
      products.splice(index, 1);
      order.products = products;
      this.$emit("update:order", order);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

.title {
  --heading-title-margin: 0 0 var(--spacer-lg) 0;
}

.property {
  margin: var(--spacer-base) 0;
}

.divider {
  --divider-border-color: var(--c-white);
  --divider-border-width: 2px;
  --divider-margin: calc(var(--spacer-base) * 2) 0 0 0;
}

.promo-code {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--spacer-lg) 0 var(--spacer-base) 0;
  &__circle-icon {
    --button-size: 2rem;
    --icon-size: 0.6875rem;
  }
  &__input {
    flex: 1;
    --input-background: var(--c-white);
    margin: 0 var(--spacer-lg) 0 0;
  }
}
.characteristic {
  margin: var(--spacer-base) 0 var(--spacer-base) var(--spacer-xs);
}

.actions {
  &__button {
    margin: var(--spacer-sm) 0;
  }
}
</style>
