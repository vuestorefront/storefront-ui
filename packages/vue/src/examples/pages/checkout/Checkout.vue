<template>
  <div id="checkout">
    <div class="checkout">
      <div class="checkout__main">
        <SfSteps :active="currentStep" @change="currentStep = $event">
          <SfStep name="Personal Details">
            <PersonalDetails :order="order" @click:next="updateOrder($event)" />
          </SfStep>
          <SfStep name="Shipping">
            <Shipping :order="order" @click:next="updateOrder($event)" @click:back="currentStep--" />
          </SfStep>
          <SfStep name="Payment">
            <Payment :order="order" @click:next="updateOrder($event)" @click:back="currentStep--" />
          </SfStep>
          <SfStep name="Review">
            <ReviewOrder :order="order" @click:back="currentStep--" />
          </SfStep>
        </SfSteps>
      </div>
      <div class="checkout__aside desktop-only">
        <transition name="fade">
          <OrderSummary v-if="currentStep <= 2" key="order-summary" :order="order"/>
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
      currentStep: 0,
      order: {
        firstName: "Sviatlana",
        lastName: "Havaka",
        email: "example@email.com",
        password: "",
        createAccount: false,
        shipping: {
          streetName: "Zielinskiego",
          apartment: "24/193A",
          city: "Wroclaw",
          state: "Lower Silesia",
          zipCode: "53-540",
          country: "Poland",
          phone: "(00)560 123 456",
          shippingMethod: "inpost"
        },
        payment: {
          streetName: "Zielinskiego",
          apartment: "24/193A",
          city: "Wroclaw",
          state: "Lower Silesia",
          zipCode: "53-540",
          country: "Poland",
          phone: "(00)560 123 456",
          paymentMethod: "",
          card: {
            number: "",
            holder: "",
            month: "",
            year: "",
            cvc: "",
            keep: false
          }
        },
        review:{
          subtotal: "$150.00",
          shipping: "$9.00",
          total: "$159.00"
        },
        products: [
          {
            title: "Cream Beach Bag",
            image: "/assets/storybook/homepage/productA.jpg",
            price: { regular: "50.00" },
            configuration: [
              { name: "Size", value: "XS" },
              { name: "Color", value: "White" }
            ],
            qty: "1"
          },
          {
            title: "Cream Beach Bag",
            image: "/assets/storybook/homepage/productB.jpg",
            price: { regular: "50.00", special: "20.05" },
            configuration: [
              { name: "Size", value: "XS" },
              { name: "Color", value: "White" }
            ],
            qty: "2"
          }
        ]
      }
    };
  },
  methods: {
    updateOrder(order) {
      this.order = { ...this.order, ...order };
      this.currentStep++;
    }
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
  @include for-desktop {
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
