<template>
  <div id="checkout" style="display: flex">
    <div style="flex: 1">
      <SfSteps>
        <SfStep name="Personal Detail"></SfStep>
        <SfStep name="Shipping"></SfStep>
        <SfStep name="Payment"></SfStep>
        <SfStep name="Review orders"></SfStep>
      </SfSteps>
    </div>
    <div style="flex-basis: 430px; margin-left: 100px">
      <div style="background-color: #F1F2F3">...</div>
    </div>
  </div>
</template>
<script>
import { SfSteps } from "../../../../index.js";
export default {
  name: "Checkout",
  components: {
    SfSteps
  }
};
</script>
<style lang="scss" scoped>
@import "../../../css/variables";
@import "~@storefront-ui/shared/styles/helpers/visibility";

@mixin for-desktop {
  @media screen and (min-width: $desktop-min) {
    @content;
  }
}

#checkout {
  box-sizing: border-box;
  margin: 0 0 60px 0;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
  }
}
</style>
