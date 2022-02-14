<template>
  <div class="sf-order-review" :data-testid="dataTestDisplay('review')">
    <slot name="heading" v-bind="{ reviewTitle, reviewTitleLevel }">
      <SfHeading
        :title="reviewTitle"
        :level="reviewTitleLevel"
        class="sf-heading--left sf-heading--no-underline sf-order-review__heading"
      />
    </slot>
    <slot name="personal-details" v-bind="{ order, shipping, buttonText }">
      <div class="sf-order-review__header">
        <p class="sf-order-review__title">Personal details</p>
        <SfButton
          class="sf-button--text"
          :data-testid="dataTestDisplay('personal-edit-button')"
          @click="$emit('click:personal-details-edit', 0)"
          >{{ buttonText }}
        </SfButton>
      </div>
      <p class="sf-order-review__content">
        {{ order.firstName }} {{ order.lastName }}<br />
      </p>
      <p class="sf-order-review__content">
        {{ shipping.streetName }} {{ shipping.apartment }} <br />
        {{ shipping.zipCode }}, {{ shipping.city }}, {{ shipping.country }}
      </p>
      <br />
      <p class="sf-order-review__content">
        {{ order.email }}
      </p>
      <p class="sf-order-review__content">
        {{ shipping.phoneNumber }}
      </p>
    </slot>
    <slot
      name="shipping-details"
      v-bind="{ buttonText, shippingMethod, shipping }"
    >
      <div class="sf-order-review__header">
        <p class="sf-order-review__title">Shipping details</p>
        <SfButton
          class="sf-button--text"
          :data-testid="dataTestDisplay('shipping-edit-button')"
          @click="$emit('click:shipping-details-edit', 1)"
        >
          {{ buttonText }}
        </SfButton>
      </div>
      <p class="sf-order-review__content">
        <span
          class="sf-order-review__content-label sf-order-review__content-shipping"
          >{{ shippingMethod.value }}</span
        ><br />
        {{ shipping.streetName }} {{ shipping.apartment }} <br />
        {{ shipping.zipCode }}, {{ shipping.city }}, {{ shipping.country }}
      </p>
    </slot>
    <slot name="billing-details" v-bind="{ payment, buttonText }">
      <div class="sf-order-review__header">
        <p class="sf-order-review__title">Billing address</p>
        <SfButton
          class="sf-button--text"
          :data-testid="dataTestDisplay('billing-edit-button')"
          @click="$emit('click:billing-details-edit', 2)"
        >
          {{ buttonText }}
        </SfButton>
      </div>
      <p v-if="payment.sameAsShipping" class="sf-order-review__content">
        Same as shipping address
      </p>
      <template v-else>
        <p class="sf-order-review__content">
          <span class="sf-order-review__content-label">{{
            payment.shippingMethod
          }}</span
          ><br />
          {{ payment.streetName }} {{ payment.apartment }}, {{ payment.zipCode
          }}<br />
          {{ payment.city }}, {{ payment.country }}
        </p>
        <p class="sf-order-review__content">{{ payment.phoneNumber }}</p>
      </template>
    </slot>
    <slot name="payment-details" v-bind="{ paymentMethod, buttonText }">
      <div class="sf-order-review__header">
        <p class="sf-order-review__title">Payment method</p>
        <SfButton
          class="sf-button--text"
          :data-testid="dataTestDisplay('payment-edit-button')"
          @click="$emit('click:payment-details-edit', 2)"
        >
          {{ buttonText }}
        </SfButton>
      </div>
      <p class="sf-order-review__content">{{ paymentMethod }}</p>
    </slot>
    <div class="sf-order-review__promo-code">
      <slot name="promo" v-bind="{ promoCode }">
        <SfInput
          v-model="promoCode"
          name="promoCode"
          label="Enter promo code"
          class="sf-input--filled sf-order-review__promo-code-input"
        />
        <SfButton
          class="sf-order-review__promo-code-button"
          :data-testid="dataTestDisplay('apply-button')"
          @click="$emit('click:promo-code-apply')"
        >
          Apply
        </SfButton>
      </slot>
    </div>
    <div class="sf-order-review__characteristics">
      <slot name="characteristics" v-bind="{ characteristics }">
        <SfCharacteristic
          v-for="characteristic in characteristics"
          :key="characteristic.title"
          :title="characteristic.title"
          :description="characteristic.description"
          :icon="characteristic.icon"
          color-icon="green-primary"
          class="sf-order-review__characteristics-item"
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
import { dataTestDisplay } from "../../../utilities/helpers";

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
      default: 2,
    },
    order: {
      type: Object,
      default: () => ({}),
    },
    buttonText: {
      type: String,
      default: "Edit",
    },
    characteristics: {
      type: Array,
      default: () => [
        {
          title: "Safety",
          description: "It carefully packaged with a personal touch",
          icon: "safety",
        },
      ],
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
  methods: {
    dataTestDisplay,
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/components/templates/SfOrderReview.scss";
</style>
