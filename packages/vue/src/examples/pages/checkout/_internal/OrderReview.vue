<template>
  <div>
    <SfHeading
      title="Order review"
      :level="3"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="highlighted__header">
      <h3 class="highlighted__title">Personal details</h3>
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
    <div class="highlighted__header">
      <h3 class="highlighted__title">Shipping details</h3>
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
    <div class="highlighted__header">
      <h3 class="highlighted__title">Billing address</h3>
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
    <div class="highlighted__header">
      <h3 class="highlighted__title">Payment method</h3>
      <SfButton
        class="sf-button--text color-secondary"
        @click="$emit('click:edit', 2)"
        >Edit
      </SfButton>
    </div>
    <p class="content">{{ paymentMethod.label }}</p>
    <SfButton class="sf-button--full-width actions__action-button"
      >Place my order
    </SfButton>
    <SfButton
      class="sf-button--full-width sf-button--text color-secondary actions__action-button"
      @click="$emit('click:back')"
    >
      Go back to Payment
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
    SfCharacteristic
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
    }
  },
  computed: {
    shipping() {
      return this.order.shipping;
    },
    shippingMethod() {
      const shippingMethod = this.shipping.shippingMethod;
      const method = this.shippingMethods.find(
        method => method.value === shippingMethod
      );
      return method ? method : { price: 0 };
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
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.highlighted {
  box-sizing: border-box;
  width: 100%;
  background: #f1f2f3;
  padding: var(--spacer-extra-big);
  margin: 0 0 var(--spacer-big) 0;
  &:last-child {
    margin: 0;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font: 500 var(--font-size-big) / 1.6 var(--font-family-secondary);
    h3 {
      font: inherit;
    }
  }
}
.characteristics {
  padding: var(--spacer-sm) 0 var(--spacer-base) 0;
  &__item {
    margin: var(--spacer-base) 0;
  }
}
.content {
  font: 300 var(--font-size-extra-small) / 1.6 var(--font-family-secondary);
  &__label {
    font-weight: 400;
  }
}
</style>
