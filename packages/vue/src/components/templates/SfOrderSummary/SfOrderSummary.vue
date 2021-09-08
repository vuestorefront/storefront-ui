<template>
  <div class="sf-order-summary">
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
        label="Enter promo code"
        class="sf-input--filled promo-code__input"
      />
      <SfButton
        class="promo-code__button"
        data-testid="apply-button"
        @click="$emit('click:apply')"
      >
        Apply
      </SfButton>
    </div>
    <div class="actions">
      <SfButton
        class="sf-button--full-width actions__button desktop-only"
        @click="$emit('click:next')"
        >Go to checkout</SfButton
      >
      <SfButton
        class="
          sf-button--full-width
          actions__button
          color-secondary
          desktop-only
        "
        @click="$emit('click:back')"
        >Go back shopping</SfButton
      >
      <SfCharacteristic
        v-for="characteristic in characteristics"
        :key="characteristic.title"
        :title="characteristic.title"
        :description="characteristic.description"
        :icon="characteristic.icon"
        size-icon="32px"
        color-icon="green-primary"
        class="characteristics__item"
      >
        <template #text>
          <SfButton
            class="sf-button--text actions__button actions__button--secondary"
            >Send my basket to email</SfButton
          >
        </template>
      </SfCharacteristic>
      <div class="smartphone-only">
        <SfButton
          class="sf-button--full-width actions__button"
          @click="$emit('click:next')"
          >{{ buttonName }}</SfButton
        >
        <SfButton
          class="sf-button--text actions__button actions__button--secondary"
          @click="$emit('click:back')"
          >Go back</SfButton
        >
      </div>
      <div class="info desktop-only">
        <p>Helpful information:</p>
        <ul class="info__list">
          <li>Questions? Chat with us or call 1.888.282.6060.</li>
          <li>Shipping internationally? Choose your destination & currency.</li>
          <li>Shipping methods & charges</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {
  SfHeading,
  SfButton,
  SfDivider,
  SfProperty,
  SfCharacteristic,
  SfInput,
} from "@storefront-ui/vue";
export default {
  name: "SfOrderSummary",
  components: {
    SfHeading,
    SfButton,
    SfDivider,
    SfProperty,
    SfCharacteristic,
    SfInput,
  },
  props: {
    order: {
      type: Object,
      default: () => ({}),
    },
    shippingMethods: {
      type: Array,
      default: () => [],
    },
    paymentMethods: {
      type: Array,
      default: () => [],
    },
    characteristics: {
      type: Array,
      default: () => [],
    },
    buttonName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      promoCode: "",
      showPromoCode: false,
      listIsHidden: false,
    };
  },
  computed: {
    products() {
      return this.order.products;
    },
    totalItems() {
      return this.products
        ? this.products.reduce((previous, current) => {
            return previous + current.qty;
          }, 0)
        : 0;
    },
    shipping() {
      return this.order.shipping;
    },
    shippingMethod() {
      const shippingMethod = this.shipping
        ? this.shipping.shippingMethod
        : null;
      const method = this.shippingMethods.find(
        (method) => method.value === shippingMethod
      );
      return method ? method : { price: "$0.00" };
    },
    payment() {
      return this.order.payment;
    },
    paymentMethod() {
      const paymentMethod = this.payment.paymentMethod;
      const method = this.paymentMethods.find(
        (method) => method.value === paymentMethod
      );
      return method ? method : { label: "" };
    },
    subtotal() {
      const products = this.products;
      const subtotal = this.products
        ? products.reduce((previous, current) => {
            const qty = current.qty;
            const price = current.price.special
              ? current.price.special
              : current.price.regular;
            const total = qty * parseFloat(price.replace("$", ""));
            return previous + total;
          }, 0)
        : 0;
      return "$" + subtotal.toFixed(2);
    },
    total() {
      const subtotal = parseFloat(this.subtotal.replace("$", ""));
      const shipping = parseFloat(this.shippingMethod.price.replace("$", ""));
      const total = subtotal + (isNaN(shipping) ? 0 : shipping);
      return "$" + total.toFixed(2);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.title {
  --heading-title-margin: 0 0 var(--spacer-xl) 0;
  --heading-title-font-weight: var(--font-weight--bold);
  --heading-padding: 0;
  --heading-title-margin: 0 0 var(--spacer-xl) 0;
  @include for-desktop {
    --heading-title-font-weight: var(--font-weight--semibold);
  }
}
.property {
  margin: var(--spacer-base) 0;
  --property-name-font-weight: var(--font-weight--medium);
  --property-value-font-weight: var(--font-weight--bold);
  &:last-of-type {
    margin: var(--spacer-base) 0 var(--spacer-xl);
    --property-name-color: var(--c-text);
  }
}
.divider {
  --divider-border-color: var(--c-white);
  --divider-margin: var(--spacer-xl) 0 0 0;
}
.promo-code {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &__input {
    --input-background: var(--c-white);
    --input-label-font-size: var(--font-size--base);
    flex: 1;
  }
  &__button {
    --button-height: 1.875rem;
  }
}
.actions {
  &__email {
    margin: var(--spacer-lg) auto 0;
  }
  &__button {
    margin: var(--spacer-sm) 0;
    &--secondary {
      margin: 0;
      text-align: left;
    }
  }
}
.characteristics {
  &__item {
    margin: var(--spacer-base) 0;
    &:last-of-type {
      margin: 0;
    }
  }
}
.info {
  margin: var(--spacer-lg) 0 var(--spacer-xl);
  color: var(--c-link);
  font-family: var(--font-family--primary);
  font-size: var(--font-size--base);
  font-weight: var(--font-weight--light);
  line-height: 1.6;
  &__list {
    padding: 0;
    list-style: none;
    li::before {
      content: "•";
      color: var(--c-primary);
      padding: 0 var(--spacer-xs) 0 0;
    }
  }
}
</style>
