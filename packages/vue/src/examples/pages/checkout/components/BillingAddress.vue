<template>
  <div class="sf-highlighted-box order-summary">
    <div
      style="display: flex; align-items: center; justify-content: space-between"
    >
      <SfHeading :level="3" title="Billing address" class="sf-heading--left" />
      <span>Edit</span>
    </div>
    <p style="line-height: 1.6; color: #737680; font-size: 12px;">
      Same as shipping address
    </p>
  </div>
</template>
<script>
import { SfHeading } from "../../../../../index.js";
export default {
  name: "BilingAddress",
  components: {
    SfHeading
  }
};
</script>
<style lang="scss" scoped>
@import "../../../../css/variables";

.sf-highlighted-box {
  background-color: #f1f2f3;
  padding: $spacer-extra-big;
}
.order-summary {
  position: relative;
  &__counter {
    position: absolute;
    left: calc(-52px / 2);
    top: 90px;
  }
}
</style>
