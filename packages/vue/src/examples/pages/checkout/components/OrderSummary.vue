<template>
  <div>
    <div
      class="sf-highlighted-box order-summary"
      style="margin-bottom: 1.25rem"
    >
      <!-- Adjust to Cart-->
      <SfCollectedProduct
        v-for="(product, key) in ['', '']"
        :key="key"
        image="assets/storybook/product_thumb.jpg"
        title="Summer Bag"
        regular-price="$50.00"
        style="margin-bottom: 10px"
      >
        <template #input>
          <span></span>
        </template>
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
    <div
      class="sf-highlighted-box order-summary"
      style="margin-bottom: 1.25rem"
    >
      <span style="font-size: 18px; color: #5ECE7B;">+ Promo Code</span>
    </div>
    <div class="sf-highlighted-box order-summary">
      <SfCharacteristic
        title="Safety"
        description="It carefully packaged with a personal touch"
        size-icon="sm"
        style="margin-bottom: 1.25rem;"
      />
      <SfCharacteristic
        title="Easy shipping"
        description="You’ll receive dispatch confirmation and an arrival date"
        size-icon="sm"
        style="margin-bottom: 1.25rem;"
      />
      <SfCharacteristic
        title="Changed your mind?"
        description="Rest assured, we offer free returns within 30 days"
        size-icon="sm"
      />
    </div>
  </div>
</template>
<script>
import {
  SfHeading,
  SfCircleIcon,
  SfCollectedProduct,
  SfProperty,
  SfCharacteristic
} from "../../../../../index.js";
export default {
  name: "OrderSummary",
  components: {
    SfHeading,
    SfCircleIcon,
    SfCollectedProduct,
    SfProperty,
    SfCharacteristic
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
    top: 6.25rem;
  }
}
</style>
