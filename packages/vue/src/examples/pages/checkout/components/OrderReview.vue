<template>
  <div class="sf-highlighted-box order-summary">
    <SfHeading
      :level="2"
      title="Order review"
      class="sf-heading--left"
      style="margin-bottom: 1.875rem"
    />
    <div
      style="display: flex; align-items: center; justify-content: space-between"
    >
      <SfHeading :level="3" title="Personal details" class="sf-heading--left" />
      <span>Edit</span>
    </div>
    <p style="line-height: 1.6; color: #737680; font-size: 12px;">
      Sviatlana Havaka<br />
      Zielinskiego 30 – 41, 53-345<br />
      Wroclaw, Poland
    </p>
    <p style="line-height: 1.6; color: #737680; font-size: 12px;">
      sviatlana.example@gmail.com<br />
      (00) 468 900 300
    </p>
  </div>
</template>
<script>
import { SfHeading } from "../../../../../index.js";
export default {
  name: "OrderReview",
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
