<template>
  <div id="checkout">
    <div class="checkout">
      <div class="checkout__main">
        <!-- <pre>{{ getOrxder }}</pre> -->
        <!-- <pre>{{ goNext(personalDetails) }}</pre> -->
        <SfSteps :active="currentStep" @change="updateStep($event)">
          <SfStep name="Details">
            <PersonalDetails
              v-model="personalDetails"
              :button-name="getButtonName"
              @click:next="currentStep++"
              @click:back="currentStep--"
              @update:order="updateOrder($event)"
            />
          </SfStep>
          <SfStep name="Shipping">
            <Shipping
              v-model="shipping"
              :shipping-methods="shippingMethods"
              @update:order="updateOrder($event)"
              @click:next="currentStep++"
              @click:back="currentStep--"
            />
          </SfStep>
          <SfStep name="Payment">
            <Payment
              v-model="payment"
              :payment-methods="paymentMethods"
              @update:order="updateOrder($event)"
              @click:next="currentStep++"
              @click:back="currentStep--"
            />
          </SfStep>
          <SfStep name="Review">
            <ConfirmOrder
              :shipping-methods="shippingMethods"
              :order="getOrder"
              :payment-methods="paymentMethods"
              :characteristics="characteristics"
              @click:back="currentStep--"
              @click:edit="currentStep = $event"
              @update:order="updateOrder($event, false)"
            />
          </SfStep>
        </SfSteps>
      </div>
      <div class="checkout__aside desktop-only">
        <transition name="fade">
          <OrderSummary
            v-if="currentStep <= 2"
            key="order-summary"
            class="checkout__aside-order"
            :order="getOrder"
            :shipping-methods="shippingMethods"
            :payment-methods="paymentMethods"
            :characteristics="characteristics"
            :button-name="getButtonName"
            @click:next="currentStep++"
            @click:back="currentStep--"
            @update:order="updateOrder($event, false)"
          />
          <OrderReview
            v-else
            key="order-review"
            class="checkout__aside-order"
            :order="getOrder"
            :shipping-methods="shippingMethods"
            :payment-methods="paymentMethods"
            :characteristics="characteristics"
            @click:edit="currentStep = $event"
          />
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { SfSteps } from "@storefront-ui/vue";
import {
  PersonalDetails,
  Shipping,
  Payment,
  ConfirmOrder,
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
    ConfirmOrder,
    OrderSummary,
    OrderReview
  },
  data() {
    return {
      currentStep: 0,
      canGoNext: false,
      personalDetails: { firstName: "", lastName: "", email: "" },
      shipping: {
        firstName: "",
        lastName: "",
        streetName: "",
        apartment: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        phoneNumber: "",
        shippingMethod: ""
      },
      payment: {
        sameAsShipping: false,
        firstName: "",
        lastName: "",
        streetName: "",
        apartment: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        phoneNumber: "",
        paymentMethod: "",
        invoice: false,
        card: {
          number: "",
          holder: "",
          month: "",
          year: "",
          cvc: "",
          keep: false
        }
      },
      order: {
        password: "",
        createAccount: false,
        review: {
          subtotal: "$150.00",
          shipping: "$9.00",
          total: "$159.00"
        },
        products: [
          {
            title: "Cream Beach Bag",
            image: "/assets/storybook/Home/productA.jpg",
            price: { regular: "$50.00" },
            configuration: [
              { name: "Size", value: "XS" },
              { name: "Color", value: "White" }
            ],
            qty: 1,
            sku: "MSD23-345-324"
          },
          {
            title: "Vila stripe maxi dress",
            image: "/assets/storybook/Home/productB.jpg",
            price: { regular: "$50.00", special: "$20.05" },
            configuration: [
              { name: "Size", value: "XS" },
              { name: "Color", value: "White" }
            ],
            qty: 2,
            sku: "MSD23-345-325"
          }
        ]
      },
      paymentMethods: [
        {
          label: "Visa Debit",
          value: "debit"
        },
        {
          label: "MasterCard",
          value: "mastercard"
        },
        {
          label: "Visa Electron",
          value: "electron"
        },
        {
          label: "Cash on delivery",
          value: "cash"
        },
        {
          label: "Check",
          value: "check"
        }
      ],
      shippingMethods: [
        {
          isOpen: false,
          price: "Free",
          delivery: "Delivery from 3 to 7 business days",
          label: "Pickup in the store",
          value: "store",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        },
        {
          isOpen: false,
          price: "$9.90",
          delivery: "Delivery from 4 to 6 business days",
          label: "Delivery to home",
          value: "home",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        },
        {
          isOpen: false,
          price: "$9.90",
          delivery: "Delivery from 4 to 6 business days",
          label: "Paczkomaty InPost",
          value: "inpost",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        },
        {
          isOpen: false,
          price: "$11.00",
          delivery: "Delivery within 48 hours",
          label: "48 hours coffee",
          value: "coffee",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        },
        {
          isOpen: false,
          price: "$14.00",
          delivery: "Delivery within 24 hours",
          label: "Urgent 24h",
          value: "urgent",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        }
      ],
      buttonNames: [
        { name: "Go to shipping" },
        { name: "Go to payment" },
        { name: "Review Order" },
        { name: "Place my order" }
      ],
      characteristics: [
        {
          title: "Safety",
          description: "It carefully packaged with a personal touch",
          icon: "safety"
        },
        {
          title: "Easy shipping",
          description:
            "You’ll receive dispatch confirmation and an arrival date",
          icon: "shipping"
        },
        {
          title: "Changed your mind?",
          description: "Rest assured, we offer free returns within 30 days",
          icon: "return"
        }
      ]
    };
  },
  computed: {
    getOrder() {
      return {
        ...this.order,
        ...this.personalDetails,
        shipping: { ...this.shipping },
        payment: { ...this.payment }
      };
    },
    getButtonName() {
      return this.buttonNames[this.currentStep].name;
    }
  },
  methods: {
    updateStep(next) {
      // prevent to move next by SfStep header
      if (next < this.currentStep) {
        this.currentStep = next;
      }
    },
    goNext(data) {
      this.canGoNext = !Object.values(data).includes("");
      return this.canGoNext;
    },
    updateOrder(order, next = true) {
      this.order = { ...this.order, ...order };
      if (next) {
        this.currentStep++;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#checkout {
  font-family: var(--font-family-secondary);
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: 0 auto;
  }
}
.checkout {
  --steps-content-padding: var(--spacer-xl) var(--spacer-sm) var(--spacer-xs);

  @include for-desktop {
    --steps-content-padding: var(--spacer-xl) var(--spacer-sm) 0 0;

    display: flex;
  }
  &__main {
    @include for-desktop {
      padding: var(--spacer-lg) 0 0 0;
      flex: 1;
    }
  }
  &__aside {
    @include for-desktop {
      flex: 0 0 25.5rem;
      margin: 0 0 0 4.25rem;
    }
    &-order {
      box-sizing: border-box;
      width: 100%;
      background: var(--c-light);
      padding: var(--spacer-xl);
      margin: 0 0 var(--spacer-lg) 0;
    }
  }
}
</style>
