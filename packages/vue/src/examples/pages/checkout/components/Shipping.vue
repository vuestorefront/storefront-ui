<template>
  <div class="shipping">
    <div class="form">
      <SfHeading
        :level="2"
        title="2. Shipping"
        class="sf-heading--left sf-heading--no-underline form__element"
      />

      <SfInput
        v-model="shipping.firstName"
        class="form__element form__element--half"
        label="First name"
        name="first-name"
        required
      />
      <SfInput
        v-model="shipping.lastName"
        class="form__element form__element--half"
        label="Last name"
        name="last-name"
        required
      />
      <SfInput
        v-model="shipping.streetName"
        class="form__element"
        label="Street name"
        name="street-name"
        required
      />
      <SfInput
        v-model="shipping.apartmentNumber"
        class="form__element"
        label="House/Apartment number"
        name="apartment-number"
        required
      />
      <SfInput
        v-model="shipping.city"
        class="form__element form__element--half"
        label="City"
        name="city"
        required
      />
      <SfInput
        v-model="shipping.state"
        class="form__element form__element--half"
        label="State/Province"
        name="state"
        required
      />
      <SfInput
        v-model="shipping.zipCode"
        class="form__element form__element--half"
        label="Zip-code"
        name="zip-code"
        required
      />

      <SfSelect
        v-model="shipping.country"
        class="form__element form__element--half sf-select--underlined"
        label="Country"
        name="country"
        required
      >
        <SfSelectOption value="poland">Poland</SfSelectOption>
        <SfSelectOption value="england">England</SfSelectOption>
      </SfSelect>
      <SfInput
        v-model="shipping.phoneNumber"
        class="form__element"
        label="Phone number"
        name="phone-number"
        required
      />

      <SfHeading
        :level="2"
        title="Shipping method"
        class="sf-heading--left sf-heading--no-underline form__element"
      />
      <SfRadio
        v-model="shipping.shippingMethod"
        class="form__element"
        label="Pickup in the store"
        value="pick-in-store"
        name="shipping-method"
        description="Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
      />
      <SfRadio
        v-model="shipping.shippingMethod"
        class="form__element"
        label="Delivery to home"
        value="to-home"
        name="shipping-method"
        description="Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
      />
      <SfRadio
        v-model="shipping.shippingMethod"
        class="form__element"
        label="Paczkomaty Inpost"
        value="in-post"
        name="shipping-method"
        description="Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
      />
      <SfRadio
        v-model="shipping.shippingMethod"
        class="form__element"
        label="48 hours coffee"
        value="coffee"
        name="shipping-method"
        description="Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
      />
      <SfRadio
        v-model="shipping.shippingMethod"
        class="form__element"
        label="Urgent 24h"
        value="urgent-24h"
        name="shipping-method"
        description="Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
      />
      <SfButton class="form__element form__element--half sf-button--text">
        Go back to Personal details
      </SfButton>
      <SfButton class="form__element form__element--half"
        >Continue to payment</SfButton
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
  SfButton
} from "../../../../../index.js";
export default {
  name: "Shipping",
  components: {
    SfHeading,
    SfInput,
    SfSelect,
    SfRadio,
    SfButton
  },
  data() {
    return {
      shipping: {
        firstName: "",
        lastName: "",
        streetName: "",
        apartmentNumber: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        phoneNumber: "",
        shippingMethod: ""
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
    //margin: $spacer-big 0;
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
