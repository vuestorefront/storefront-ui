<template>
  <div class="shipping">
    <SfHeading level="2" title="4. Order details" class="sf-heading--left" />
    <!-- Order details table -->
    <SfCheckbox name="terms-and-conditions">
      <template #label
        >I agree to
        <span style="text-decoration: underline"
          >Terms and conditions</span
        ></template
      >
    </SfCheckbox>
    <span>Go back to Payment</span>
    <SfButton>Place my order</SfButton>
  </div>
</template>

<script>
import { SfHeading, SfCheckbox, SfButton } from "../../../../../index.js";
export default {
  name: "Payment",
  components: {
    SfHeading,
    SfCheckbox,
    SfButton
  }
};
</script>

<style scoped></style>
