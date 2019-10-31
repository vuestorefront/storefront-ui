<template>
  <div class="shipping">
    <SfHeading level="2" title="2. Shipping" class="sf-heading--left" />
    <SfInput label="First name" name="first-name" required />
    <SfInput label="Last name" name="last-name" required />
    <SfInput label="Street name" name="street-name" required />
    <SfInput label="House/Apartment number" name="apartment-number" required />
    <SfInput label="City" name="city" required />
    <SfInput label="State/Province" name="state" required />
    <SfInput label="Zip-code" name="zip-code" required />
    <SfSelect
      label="Country"
      name="country"
      required
      class="sf-select--underlined"
    >
      <SfSelectOption value="poland">Poland</SfSelectOption>
      <SfSelectOption value="england">England</SfSelectOption>
    </SfSelect>
    <SfInput label="Phone number" name="phone-number" required />
    <SfHeading level="2" title="Shipping method" class="sf-heading--left" />
    <SfRadio
      label="Pickup in the store"
      name="pick-in-store"
      description="Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
    />
    <SfRadio
      label="Delivery to home"
      name="to-home"
      description="Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
    />
    <SfRadio
      label="Paczkomaty Inpost"
      name="in-post"
      description="Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
    />
    <SfRadio
      label="48 hours coffee"
      name="coffe"
      description="Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
    />
    <SfRadio
      label="Urgent 24h"
      name="urgent-24h"
      description="Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
    />
    <span>Go back to Personal details</span>
    <SfButton>Continue to payment</SfButton>
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
  }
};
</script>

<style scoped></style>
