<template>
  <div class="sf-highlighted-box order-summary">
    <SfHeading
      :level="2"
      title="Order Summary"
      class="sf-heading--left"
      style="padding: 0 20px"
    />
    <SfCircleIcon class="order-summary__counter">
      <span style="font-size: 1.5rem">2</span>
    </SfCircleIcon>
    <div
      style="padding: 20px; display: flex; align-items: center; justify-content: space-between"
    >
      <SfHeading :level="3" title="Total items" class="sf-heading--left" />
      <span>Hide item list</span>
    </div>
    <SfCollectedProduct
      v-for="(product, key) in ['', '']"
      :key="key"
      image="assets/storybook/product_thumb.jpg"
      title="Summer Bag"
      regular-price="$50.00"
      style="margin-bottom: 10px"
    >
      <template #configuration>
        <div style="margin-top: 1.25rem">
          <SfProperty name="Size" value="XS" />
          <SfProperty name="Color" value="White" />
        </div>
      </template>
      <template #actions>
        <div style="color: #A3A5AD">
          <div>MSD23-345-324</div>
          <div>Quantity: <span style="color: #1D1F22">1</span></div>
        </div>
      </template>
    </SfCollectedProduct>
  </div>
</template>
<script>
import {
  SfHeading,
  SfCircleIcon,
  SfCollectedProduct,
  SfProperty
} from "../../../../../index.js";
export default {
  name: "OrderSummary",
  components: {
    SfHeading,
    SfCircleIcon,
    SfCollectedProduct,
    SfProperty
  }
};
</script>
<style lang="scss" scoped>
@import "../../../../css/variables";

.sf-highlighted-box {
  background-color: #f1f2f3;
  padding: $spacer-extra-big $spacer-big;
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
