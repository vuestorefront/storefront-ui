<template>
  <div>
    <SfHeading
      title="Order review"
      :level="3"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="review__header">
      <h3 class="review__title">Personal details</h3>
      <SfButton
        class="sf-button--text color-secondary"
        @click="$emit('click:edit', 0)"
        >Edit
      </SfButton>
    </div>
    <p class="content">{{ order.firstName }} {{ order.lastName }}<br /></p>
    <p class="content">
      {{ order.email }}
    </p>
    <div class="review__header">
      <h3 class="review__title">Shipping details</h3>
      <SfButton
        class="sf-button--text color-secondary"
        @click="$emit('click:edit', 1)"
        >Edit
      </SfButton>
    </div>
    <p class="content">
      <span class="content__label">{{ shippingMethod.label }}</span
      ><br />
      {{ shipping.streetName }} {{ shipping.apartment }}, {{ shipping.zipCode
      }}<br />
      {{ shipping.city }}, {{ shipping.country }}
    </p>
    <p class="content">{{ shipping.phoneNumber }}</p>
    <div class="review__header">
      <h3 class="review__title">Billing address</h3>
      <SfButton
        class="sf-button--text color-secondary"
        @click="$emit('click:edit', 2)"
        >Edit
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
    <div class="review__header">
      <h3 class="review__title">Payment method</h3>
      <SfButton
        class="sf-button--text color-secondary"
        @click="$emit('click:edit', 2)"
        >Edit
      </SfButton>
    </div>
    <p class="content">{{ paymentMethod.label }}</p>
    <SfButton class="sf-button--full-width actions__button"
      >Place my order
    </SfButton>
    <SfButton
      class="sf-button--full-width sf-button--text color-secondary actions__button actions__button--secondary"
      @click="$emit('click:back')"
    >
      Go back
    </SfButton>
    <div class="characteristics">
      <SfCharacteristic
        v-for="characteristic in characteristics"
        :key="characteristic.title"
        :title="characteristic.title"
        :description="characteristic.description"
        :icon="characteristic.icon"
        color-icon="green-primary"
        class="characteristics__item"
      />
    </div>
  </div>
</template>
<script>
import { SfHeading, SfButton, SfCharacteristic } from "@storefront-ui/vue";
export default {
  name: "OrderReview",
  components: {
    SfHeading,
    SfButton,
    SfCharacteristic,
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
  },
  computed: {
    shipping() {
      return this.order.shipping;
    },
    shippingMethod() {
      const shippingMethod = this.shipping.shippingMethod;
      const method = this.shippingMethods.find(
        (method) => method.value === shippingMethod
      );
      return method ? method : { price: 0 };
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
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.title {
  --heading-title-margin: 0 0 var(--spacer-lg) 0;
}
.review {
  box-sizing: border-box;
  width: 100%;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      font: inherit;
    }
  }
}
.characteristics {
  &__item {
    margin: var(--spacer-base) 0;
  }
}
.content {
  font-family: var(--font-family-primary);
  font-size: var(--font-xs);
  line-height: 1.6;
  font-weight: var(--font-light);
  margin: 0;
  color: var(--c-dark-variant);
  &__label {
    color: var(--c-text);
    font-weight: var(--font-normal);
  }
}
.actions {
  &__button {
    margin: var(--spacer-sm) 0;
    &--secondary {
      text-align: left;
    }
  }
}
</style>
