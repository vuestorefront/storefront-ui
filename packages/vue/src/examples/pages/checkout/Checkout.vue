<template>
  <div id="checkout" style="display: flex">
    <div style="flex: 1">
      <SfSteps :active="currentStep" @change="currentStep = $event">
        <SfStep name="Personal Detail">
          <PersonalDetails @click:next="currentStep++" />
        </SfStep>
        <SfStep name="Shipping">
          <Shipping
            @click:next="currentStep++"
            @click:back="currentStep--"
          />
        </SfStep>
        <SfStep name="Payment">
          <Payment
            @click:next="currentStep++"
            @click:back="currentStep--"
          />
        </SfStep>
        <SfStep name="Review order">
          <ReviewOrder @click:back="currentStep--" />
        </SfStep>
      </SfSteps>
    </div>
    <div style="flex-basis: 26.875rem; margin-left: 6.25rem;">
      <OrderSummary v-if="currentStep <= 2" />
      <OrderReview v-else />
    </div>
    <SfModal :visible="false">
      <AccountBenefits />
    </SfModal>
  </div>
</template>
<script>
import AccountBenefits from "./components/AccountBenefits";
import OrderSummary from "./components/OrderSummary";
import OrderReview from "./components/OrderReview";
import { SfSteps, SfModal } from "../../../../index.js";
import {
  PersonalDetails,
  Shipping,
  Payment,
  ReviewOrder
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
      currentStep: 3
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
  margin: 0 0 60px 0;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
  }
}
</style>
