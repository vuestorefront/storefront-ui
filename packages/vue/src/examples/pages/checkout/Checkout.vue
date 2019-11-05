<template>
  <div id="checkout" style="display: flex">
    <div style="flex: 1">
      <SfSteps :active="active" @change="active = $event">
        <SfStep name="Personal Detail">
          <PersonalDetails />
        </SfStep>
        <SfStep name="Shipping">
          <Shipping />
        </SfStep>
        <SfStep name="Payment">
          <Payment />
        </SfStep>
        <SfStep name="Review order">
          <ReviewOrder />
        </SfStep>
      </SfSteps>
    </div>
    <div style="flex-basis: 26.875rem; margin-left: 6.25rem;">
      <template v-if="active <= 2">
        <OrderSummary style="margin-bottom: 1.25rem" />
        <Summary style="margin-bottom: 1.25rem" />
        <CharacteristicBox />
      </template>
      <template v-else>
        <OrderReview style="margin-bottom: 1.25rem" />
        <ShippingDetails />
      </template>
    </div>
    <SfModal :visible="false">
      <AccountBenefits />
    </SfModal>
  </div>
</template>
<script>
import PersonalDetails from "./components/PersonalDetails";
import Shipping from "./components/Shipping";
import Payment from "./components/Payment";
import ReviewOrder from "./components/ReviewOrder";
import OrderSummary from "./components/OrderSummary";
import CharacteristicBox from "./components/CharacteristicBox";
import Summary from "./components/Summary";
import AccountBenefits from "./components/AccountBenefits";
import OrderReview from "./components/OrderReview";
import ShippingDetails from "./components/ShippingDetails";
import { SfSteps, SfModal } from "../../../../index.js";

export default {
  name: "Checkout",
  components: {
    SfSteps,
    SfModal,
    PersonalDetails,
    Shipping,
    Payment,
    ReviewOrder,
    OrderSummary,
    CharacteristicBox,
    Summary,
    AccountBenefits,
    OrderReview,
    ShippingDetails
  },
  data() {
    return {
      active: 3
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
