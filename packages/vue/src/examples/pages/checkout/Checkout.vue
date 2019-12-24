<template>
  <div id="checkout">
    <div class="checkout">
      <div class="checkout__main">
        <SfSteps :active="currentStep" @change="currentStep = $event">
          <SfStep name="Personal Details">
            <PersonalDetails @click:next="currentStep++" />
          </SfStep>
          <SfStep name="Shipping">
            <Shipping @click:next="currentStep++" @click:back="currentStep--" />
          </SfStep>
          <SfStep name="Payment">
            <Payment @click:next="currentStep++" @click:back="currentStep--" />
          </SfStep>
          <SfStep name="Review">
            <ReviewOrder @click:back="currentStep--" />
          </SfStep>
        </SfSteps>
      </div>
      <div class="checkout__aside desktop-only">
        <transition name="fade">
          <OrderSummary v-if="currentStep <= 2" key="order-summary" />
          <OrderReview
            v-else
            key="order-review"
            @click:edit="currentStep = $event"
          />
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { SfSteps } from "../../../../index.js";
import {
  PersonalDetails,
  Shipping,
  Payment,
  ReviewOrder,
  OrderSummary,
  OrderReview
} from "./_internal/index.js";

export default {
  name: "Checkout",
  components: {
    SfSteps,
    PersonalDetails,
    Shipping,
    Payment,
    ReviewOrder,
    OrderSummary,
    OrderReview
  },
  data() {
    return {
      currentStep: 0
    };
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
  padding: 0 $spacer-big;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
    padding: 0;
  }
}
.checkout {
  @include for-desktop{
    display: flex;
  }
  &__main {
    @include for-desktop {
      flex: 1;
    }
  }
  &__aside {
    @include for-desktop {
      flex: 0 0 25.5rem;
      margin-left: 6.25rem;
    }
  }
}
</style>
