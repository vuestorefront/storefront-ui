<template>
  <div id="checkout">
    <div class="checkout">
      <div class="checkout__main">
        <SfSteps :active="currentStep" @change="currentStep = $event">
          <SfStep name="Personal Detail">
            <PersonalDetails @click:next="currentStep++" />
          </SfStep>
          <SfStep name="Shipping">
            <Shipping @click:next="currentStep++" @click:back="currentStep--" />
          </SfStep>
          <SfStep name="Payment">
            <Payment @click:next="currentStep++" @click:back="currentStep--" />
          </SfStep>
          <SfStep name="Review order">
            <ReviewOrder @click:back="currentStep--" />
          </SfStep>
        </SfSteps>
      </div>
      <div class="checkout__aside">
        <OrderSummary v-if="currentStep <= 2" />
        <OrderReview v-else />
      </div>
    </div>
    <SfModal :visible="false">
      <AccountBenefits />
    </SfModal>
  </div>
</template>
<script>
import AccountBenefits from "./components/AccountBenefits";
// import OrderSummary from "./components/OrderSummary";
import OrderReview from "./components/OrderReview";
import { SfSteps, SfModal } from "../../../../index.js";
import {
  PersonalDetails,
  Shipping,
  Payment,
  ReviewOrder,
  OrderSummary
} from "./_internal/index.js";

export default {
  name: "Checkout",
  components: {
    SfSteps,
    SfModal,
    PersonalDetails,
    Shipping,
    Payment,
    ReviewOrder,
    AccountBenefits,
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
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
  }
}
.checkout {
  display: flex;
  &__main {
    flex: 1;
  }
  &__aside {
    flex: 0 0 25.5rem;
    margin-left: 6.25rem;
  }
}
</style>
