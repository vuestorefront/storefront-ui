<template>
  <div class="payment">
    <div class="form">
      <SfHeading
        :level="2"
        title="2. Shipping"
        class="sf-heading--left sf-heading--no-underline form__element"
      />
      <SfCheckbox
        label="Copy address data from shipping"
        name="copy-shipping-address"
        class="form__element"
      />
      <SfInput
        v-model="payment.firstName"
        label="First name"
        name="first-name"
        required
        class="form__element form__element--half"
      />
      <SfInput
        v-model="payment.lastName"
        label="Last name"
        name="last-name"
        required
        class="form__element form__element--half"
      />
      <SfInput
        v-model="payment.streetName"
        label="Street name"
        name="street-name"
        required
        class="form__element"
      />
      <SfInput
        v-model="payment.apartmentNumber"
        label="House/Apartment number"
        name="apartment-number"
        required
        class="form__element"
      />
      <SfInput
        v-model="payment.city"
        label="City"
        name="city"
        required
        class="form__element form__element--half"
      />
      <SfInput
        v-model="payment.state"
        label="State/Province"
        name="state"
        required
        class="form__element form__element--half"
      />
      <SfInput
        v-model="payment.zipCode"
        label="Zip-code"
        name="zip-code"
        required
        class="form__element form__element--half"
      />
      <SfSelect
        v-model="payment.country"
        label="Country"
        name="country"
        required
        class="sf-select--underlined form__element form__element--half "
      >
        <SfSelectOption value="poland">Poland</SfSelectOption>
        <SfSelectOption value="england">England</SfSelectOption>
      </SfSelect>
      <SfInput
        v-model="payment.phoneNumber"
        label="Phone number"
        name="phone-number"
        required
        class="form__element"
      />
      <SfHeading
        :level="2"
        title="Payment methods"
        class="sf-heading--left sf-heading--no-underline form__element"
      />
      <p class="form__element">Choose your payment method</p>
      <SfRadio
        v-model="payment.paymentMethod"
        label="Visa"
        value="visa"
        name="payment-method"
        class="form__element--half"
      />
      <SfRadio
        v-model="payment.paymentMethod"
        label="Master Card"
        value="master-card"
        name="payment-method"
        class="form__element--half"
      />
      <SfRadio label="Visa" value="visa" class="form__element--half" />
      <SfRadio
        v-model="payment.paymentMethod"
        label="Cash on delivery"
        value="cash"
        name="payment-method"
        class="form__element--half"
      />
      <SfRadio
        v-model="payment.paymentMethod"
        label="Check"
        value="check"
        name="payment-method"
        class="form__element--half"
      />
      <!-- Begin: Card component -->
      <SfInput v-model="card.number" label="Number" name="number" required />
      <SfInput
        v-model="card.cardHolder"
        label="Card holder"
        name="card-holder"
        required
      />
      <SfSelect
        v-model="card.month"
        label="Month"
        name="month"
        required
        class="sf-select--underlined form__element form__element--half"
      >
        <SfSelectOption value="1">1</SfSelectOption>
        <SfSelectOption value="2">2</SfSelectOption>
      </SfSelect>
      <SfSelect
        v-model="card.year"
        label="Year"
        name="year"
        required
        class="sf-select--underlined form__element form__element--half"
      >
        <SfSelectOption value="2020">2020</SfSelectOption>
        <SfSelectOption value="2021">2021</SfSelectOption>
      </SfSelect>
      <SfInput
        v-model="card.cvc"
        label="Code CVC"
        name="cvc"
        required
        class="form__element form__element--half"
      />
      <!-- End: Card component -->
      <SfButton class="sf-button--text form__element form__element--half"
        >Go back to Shipping</SfButton
      >
      <SfButton class="form__element form__element--half"
        >Review order</SfButton
      >
    </div>
  </div>
</template>
<script>
import {
  SfHeading,
  SfInput,
  SfSelect,
  SfRadio,
  SfButton,
  SfCheckbox
} from "../../../../../index.js";
export default {
  name: "Payment",
  components: {
    SfHeading,
    SfInput,
    SfSelect,
    SfRadio,
    SfButton,
    SfCheckbox
  },
  data() {
    return {
      payment: {
        firstName: "",
        lastName: "",
        streetName: "",
        apartmentNumber: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        phoneNumber: "",
        paymentMethod: ""
      },
      card: {
        number: "",
        cardHolder: "",
        month: "",
        year: "",
        cvc: ""
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.form {
  display: flex;
  flex-wrap: wrap;
  &__element {
    flex: 0 0 100%;
    margin: $spacer-big 0;
    align-self: center;
    &--half {
      flex: auto;
      & + & {
        margin-left: $spacer-extra-big;
      }
    }
  }
}
</style>
