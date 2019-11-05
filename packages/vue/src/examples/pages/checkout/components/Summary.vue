<template>
  <div>
    <div class="sf-highlighted-box order-summary" style="margin-bottom: 1px">
      <SfProperty
        name="Products"
        value="3"
        class="sf-property--full-width"
        style="margin-bottom: 1rem"
      />
      <SfProperty
        name="Subtotal"
        value="$150.00"
        class="sf-property--full-width"
        style="margin-bottom: 1rem"
      />
      <SfProperty
        name="Products"
        value="free"
        class="sf-property--full-width"
        style="margin-bottom: 3.125rem"
      />
      <SfProperty
        name="Total"
        value="$150.00"
        class="sf-property--full-width"
        style="font-size: 24px; font-weight: 400;"
      />
    </div>
    <div class="sf-highlighted-box order-summary">
      <span style="font-size: 18px; color: #5ECE7B;">+ Promo Code</span>
    </div>
  </div>
</template>
<script>
import { SfProperty } from "../../../../../index.js";
export default {
  name: "Summary",
  components: {
    SfProperty
  }
};
</script>
<style lang="scss" scoped>
@import "../../../../css/variables";

.sf-highlighted-box {
  background-color: #f1f2f3;
  padding: $spacer-extra-big ($spacer-extra-big * 2) $spacer-extra-big
    ($spacer-big * 3);
}
</style>
