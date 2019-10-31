<template>
  <div class="shipping">
    <SfHeading level="2" title="2. Shipping" class="sf-heading--left" />
    <SfCheckbox
      label="Copy address data from shipping"
      name="copy-shipping-address"
    />
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
    <SfHeading level="2" title="Payment methods" class="sf-heading--left" />
    <p>Choose your payment method</p>
    <SfRadio label="Visa" name="visa" />
    <SfRadio label="Master Card" name="master-card" />
    <SfRadio label="Visa" name="visa" />
    <SfRadio label="Cash on delivery" name="cash" />
    <SfRadio label="Check" name="check" />
    <SfInput label="Number" name="number" required />
    <SfInput label="Card holder" name="card-holder" required />
    <SfSelect label="Month" name="month" required class="sf-select--underlined">
      <SfSelectOption value="1">1</SfSelectOption>
      <SfSelectOption value="2">2</SfSelectOption>
    </SfSelect>
    <SfSelect label="Year" name="year" required class="sf-select--underlined">
      <SfSelectOption value="2020">2020</SfSelectOption>
      <SfSelectOption value="2021">2021</SfSelectOption>
    </SfSelect>
    <SfInput label="Code CVC" name="cvc" required />
    <span>Go back to Shipping</span>
    <SfButton>Review order</SfButton>
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
  }
};
</script>

<style scoped></style>
