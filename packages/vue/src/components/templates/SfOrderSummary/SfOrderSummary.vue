<template>
  <div class="sf-order-summary">
    <slot name="heading">
      <SfHeading
        :title="orderTitle"
        :level="orderTitleLevel"
        class="sf-heading--left sf-heading--no-underline title"
      />
    </slot>
    <div class="highlighted highlighted--total">
      <slot name="summary">
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
      </slot>
    </div>
    <div class="highlighted promo-code">
      <slot name="promo">
        <SfInput
          v-model="promoCode"
          name="promoCode"
          label="Enter promo code"
          class="sf-input--filled promo-code__input"
        />
        <SfButton
          class="promo-code__button"
          data-testid="apply-button"
          @click="$emit('click:apply-code')"
        >
          Apply
        </SfButton>
      </slot>
    </div>
    <div class="actions">
      <slot name="actions">
        <SfButton
          class="sf-button--full-width actions__button desktop-only"
          @click="$emit('click:checkout')"
          >{{ firstButtonName }}</SfButton
        >
        <SfButton
          class="
            sf-button--full-width
            actions__button
            color-secondary
            desktop-only
          "
          @click="$emit('click:shopping')"
          >{{ secondButtonName }}</SfButton
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
        </SfCharacteristic>
        <div class="smartphone-only">
          <SfButton
            class="sf-button--full-width actions__button"
            @click="$emit('click:next')"
            >{{ firstMobileButtonName }}</SfButton
          >
          <SfButton
            class="
              sf-button--full-width sf-button--underlined
              actions__button actions__button--back
            "
            @click="$emit('click:back')"
            >{{ secondMobileButtonName }}</SfButton
          >
        </div>
      </slot>
    </div>
    <div class="info desktop-only">
      <slot name="info">
        <p>Helpful information:</p>
        <ul class="info__list">
          <li>Questions? Chat with us or call 1.888.282.6060.</li>
          <li>Shipping internationally? Choose your destination & currency.</li>
          <li>Shipping methods & charges</li>
        </ul>
      </slot>
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
} from "@storefront-ui/vue"
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
    orderTitle: {
      type: String,
      default: "Order review",
    },
    orderTitleLevel: {
      type: Number,
      default: 3,
    },
    firstButtonName: {
      type: String,
      default: "Go to checkout",
    },
    secondButtonName: {
      type: String,
      default: "Go back shopping",
    },
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
    firstMobileButtonName: {
      type: String,
      default: "PLace my order",
    },
    secondMobileButtonName: {
      type: String,
      default: "Go back",
    },
  },
  data() {
    return {
      promoCode: "",
      showPromoCode: false,
      listIsHidden: false,
    }
  },
  computed: {
    products() {
      return this.order.products
    },
    totalItems() {
      return this.products
        ? this.products.reduce((previous, current) => {
            return previous + current.qty
          }, 0)
        : 0
    },
    shipping() {
      return this.order.shipping
    },
    shippingMethod() {
      const shippingMethod = this.shipping ? this.shipping.shippingMethod : null
      const method = this.shippingMethods.find(
        (method) => method.value === shippingMethod
      )
      return method ? method : { price: "$0.00" }
    },
    payment() {
      return this.order.payment
    },
    paymentMethod() {
      const paymentMethod = this.payment.paymentMethod
      const method = this.paymentMethods.find(
        (method) => method.value === paymentMethod
      )
      return method ? method : { label: "" }
    },
    subtotal() {
      const products = this.products
      const subtotal = this.products
        ? products.reduce((previous, current) => {
            const qty = current.qty
            const price = current.price.special
              ? current.price.special
              : current.price.regular
            const total = qty * parseFloat(price.replace("$", ""))
            return previous + total
          }, 0)
        : 0
      return "$" + subtotal.toFixed(2)
    },
    total() {
      const subtotal = parseFloat(this.subtotal.replace("$", ""))
      const shipping = parseFloat(this.shippingMethod.price.replace("$", ""))
      const total = subtotal + (isNaN(shipping) ? 0 : shipping)
      return "$" + total.toFixed(2)
    },
  },
}
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
    &--back {
      color: var(--c-text);
      background-color: var(--c-white);
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
