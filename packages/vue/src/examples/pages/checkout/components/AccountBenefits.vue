<template>
  <div>
    <h2>Account Benefits</h2>
    <p style="margin-bottom: 1.875rem">
      Enjoy these perks with your free account!
    </p>
    <SfCharacteristic
      title=""
      description="Faster checkout"
      style="margin-bottom: 1.25rem"
    />
    <SfCharacteristic
      title=""
      description="Full rewards program benefits"
      style="margin-bottom: 1.25rem"
    />
    <SfCharacteristic
      title=""
      description="Earn credits with every purchase"
      style="margin-bottom: 1.25rem"
    />
    <SfCharacteristic
      title=""
      description="Manage your wishliste"
      style="margin-bottom: 1.875rem"
    />
    <SfButton class="sf-button--full-width color-secondary">OK</SfButton>
  </div>
</template>
<script>
import { SfCharacteristic, SfButton } from "../../../../../index.js";
export default {
  name: "AccountBenefits",
  components: {
    SfCharacteristic,
    SfButton
  }
};
</script>
