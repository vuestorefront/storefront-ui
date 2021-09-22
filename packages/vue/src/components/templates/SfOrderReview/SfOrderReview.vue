<template>
  <div class="sf-order-review review" data-testid="review">
    <slot name="heading">
      <SfHeading
        :title="reviewTitle"
        :level="reviewTitleLevel"
        class="sf-heading--left sf-heading--no-underline title"
      />
    </slot>
    <slot name="personal-details">
      <div class="review__header">
        <p class="review__title">Personal details</p>
        <SfButton
          class="sf-button--text"
          data-testid="personal-edit-button"
          @click="$emit('click:personal-details-edit', 0)"
          >Edit
        </SfButton>
      </div>
      <p class="content">{{ order.firstName }} {{ order.lastName }}<br /></p>
      <p class="content">
        {{ shipping.streetName }} {{ shipping.apartment }} <br />
        {{ shipping.zipCode }}, {{ shipping.city }}, {{ shipping.country }}
      </p>
      <br />
      <p class="content">
        {{ order.email }}
      </p>
      <p class="content">
        {{ shipping.phoneNumber }}
      </p>
    </slot>
    <slot name="shipping-details">
      <div class="review__header">
        <p class="review__title">Shipping details</p>
        <SfButton
          class="sf-button--text"
          data-testid="shipping-edit-button"
          @click="$emit('click:shipping-details-edit', 1)"
        >
          Edit
        </SfButton>
      </div>
      <p class="content">
        <span class="content__label content__shipping">{{
          shippingMethod
        }}</span
        ><br />
        {{ shipping.streetName }} {{ shipping.apartment }} <br />
        {{ shipping.zipCode }}, {{ shipping.city }}, {{ shipping.country }}
      </p>
    </slot>
    <slot name="billing-details">
      <div class="review__header">
        <p class="review__title">Billing address</p>
        <SfButton
          class="sf-button--text"
          data-testid="billing-edit-button"
          @click="$emit('click:billing-details-edit', 2)"
        >
          Edit
        </SfButton>
      </div>
      <p v-if="payment.sameAsShipping" class="content">
        Same as shipping address
      </p>
      <template v-else>
        <p class="content">
          <span class="content__label">{{ payment.shippingMethod }}</span
          ><br />
          {{ payment.streetName }} {{ payment.apartment }}, {{ payment.zipCode
          }}<br />
          {{ payment.city }}, {{ payment.country }}
        </p>
        <p class="content">{{ payment.phoneNumber }}</p>
      </template>
    </slot>
    <slot name="payment-details">
      <div class="review__header">
        <p class="review__title">Payment method</p>
        <SfButton
          class="sf-button--text"
          data-testid="payment-edit-button"
          @click="$emit('click:payment-details-edit', 2)"
        >
          Edit
        </SfButton>
      </div>
      <p class="content">{{ paymentMethod }}</p>
    </slot>
    <div class="promo-code">
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
          @click="$emit('click:promo-code-apply')"
        >
          Apply
        </SfButton>
      </slot>
    </div>
    <div class="characteristics">
      <slot name="characteristics">
        <SfCharacteristic
          v-for="characteristic in characteristics"
          :key="characteristic.title"
          :title="characteristic.title"
          :description="characteristic.description"
          :icon="characteristic.icon"
          color-icon="green-primary"
          class="characteristics__item"
        />
      </slot>
    </div>
  </div>
</template>
<script>
import {
  SfHeading,
  SfButton,
  SfCharacteristic,
  SfInput,
} from "@storefront-ui/vue";
export default {
  name: "SfOrderReview",
  components: {
    SfHeading,
    SfButton,
    SfCharacteristic,
    SfInput,
  },
  props: {
    reviewTitle: {
      type: String,
      default: "Order review",
    },
    reviewTitleLevel: {
      type: Number,
      default: 3,
    },
    order: {
      type: Object,
      default: () => ({}),
    },
    characteristics: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      promoCode: "",
    };
  },
  computed: {
    shipping() {
      return this.order.shipping
        ? this.order.shipping
        : {
            streetName: "",
            apartment: "",
            zipCode: "",
            city: "",
            country: "",
            phoneNumber: "",
            shippingMethod: "",
          };
    },
    payment() {
      return this.order.payment
        ? this.order.payment
        : {
            streetName: "",
            apartment: "",
            zipCode: "",
            city: "",
            country: "",
            phoneNumber: "",
            paymentMethod: "",
            shippingMethod: "",
          };
    },
    shippingMethod() {
      return this.shipping.shippingMethod;
    },
    paymentMethod() {
      return this.payment.paymentMethod;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.title {
  --heading-title-margin: 0 0 var(--spacer-xl) 0;
  --heading-title-font-weight: var(--font-weight--bold);
  border-bottom: 1px solid var(--c-white);
}
.review {
  box-sizing: border-box;
  width: 100%;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    font-family: var(--font-family--secondary);
    font-weight: var(--font-weight--medium);
    font-size: var(--font-size--base);
  }
}
.promo-code {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: var(--spacer-lg);
  margin-top: var(--spacer-lg);
  border-top: var(--c-white) solid 1px;
  &__input {
    --input-background: var(--c-white);
    --input-label-font-size: var(--font-size--base);
    flex: 1;
  }
  &__button {
    --button-height: 1.875rem;
  }
}
.promo-code {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: var(--spacer-lg) 0 var(--spacer-base) 0;
  margin-top: var(--spacer-lg);
  border-top: var(--c-white) solid 1px;
  &__input {
    --input-background: var(--c-white);
    flex: 1;
  }
  &__button {
    --button-height: 30px;
  }
}
.characteristics {
  &__item {
    margin: var(--spacer-base) 0;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
.content {
  font-family: var(--font-family--primary);
  font-size: var(--font-size--sm);
  line-height: 1.6;
  font-weight: var(--font-weight--normal);
  margin: 0;
  color: var(--c-dark-variant);
  &__label {
    color: var(--c-text);
  }
  &__shipping {
    font-weight: var(--font-weight--bold);
  }
}
</style>
