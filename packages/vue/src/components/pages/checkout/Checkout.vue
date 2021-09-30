<template>
  <div id="checkout">
    <div class="checkout">
      <div class="checkout__main">
        <SfSteps :active="currentStep" @change="updateStep($event)">
          <SfStep name="Details">
            <SfPersonalDetails
              :value="personalDetails"
              @input="personalDetails = $event"
            />
          </SfStep>
          <SfStep name="Shipping">
            <SfShipping
              :value="shipping"
              :shipping-methods="shippingMethods"
              @input="shipping = $event"
            />
          </SfStep>
          <SfStep name="Payment">
            <SfPayment
              :payment-methods="paymentMethods"
              :shipping="shipping"
              @input="payment = $event"
            />
          </SfStep>
          <SfStep name="Review">
            <SfConfirmOrder
              :order="getOrder"
              order-title="Order details"
              :order-title-level="3"
              :properties-names="['Subtotal', 'Shipping', 'Total price']"
              :table-headers="[
                'Size',
                'Description',
                'Quantity',
                'Colour',
                'Amount',
              ]"
              @click:edit="currentStep = $event"
            />
          </SfStep>
        </SfSteps>
      </div>
      <div class="checkout__aside">
        <transition name="sf-fade">
          <SfOrderSummary
            v-if="currentStep <= 2"
            key="order-summary"
            class="checkout__aside-order"
            :order="getOrder"
            order-title="Order review"
            :order-title-level="3"
            :properties-names="[
              'Products',
              'Subtotal',
              'Shipping',
              'Total price',
            ]"
            :characteristics="characteristics"
          />
          <SfOrderReview
            v-else
            key="order-review"
            class="checkout__aside-order"
            :order="getOrder"
            review-title="Order review"
            :review-title-level="3"
            button-text="Edit"
            :characteristics="characteristics"
            @click:edit="currentStep = $event"
          />
        </transition>
      </div>
    </div>
    <div class="actions">
      <SfButton
        class="sf-button--full-width actions__button"
        data-testid="next-button"
        @click="currentStep++"
        >{{ steps[currentStep] }}</SfButton
      >
      <SfButton
        class="
          sf-button--full-width sf-button--underlined
          actions__button
          smartphone-only
        "
        @click="currentStep--"
        >Go back</SfButton
      >
    </div>
  </div>
</template>
<script>
import {
  SfSteps,
  SfButton,
  SfPersonalDetails,
  SfShipping,
  SfPayment,
  SfConfirmOrder,
  SfOrderSummary,
  SfOrderReview,
} from "@storefront-ui/vue";
export default {
  name: "Checkout",
  components: {
    SfSteps,
    SfPersonalDetails,
    SfShipping,
    SfPayment,
    SfConfirmOrder,
    SfOrderSummary,
    SfOrderReview,
    SfButton,
  },
  data() {
    return {
      currentStep: 0,
      steps: [
        "Go to shipping",
        "Go to payment",
        "Pay for order",
        "Confirm and pay",
      ],
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
        shippingMethod: {
          price: "$0.00",
        },
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
        cardNumber: "",
        cardHolder: "",
        cardMonth: "",
        cardYear: "",
        cardCVC: "",
        cardKeep: false,
      },
      order: {
        password: "",
        createAccount: false,
        firstName: "John",
        lastName: "Dog",
        email: "john.dog@gmail.com",
        orderItems: [
          {
            title: "Cream Beach Bag",
            image: "/assets/storybook/Home/productA.jpg",
            price: { regular: "$50.00" },
            configuration: [
              { name: "Size", value: "XS" },
              { name: "Color", value: "White" },
            ],
            qty: 1,
            sku: "MSD23-345-324",
          },
          {
            title: "Vila stripe maxi dress",
            image: "/assets/storybook/Home/productB.jpg",
            price: { regular: "$50.00", special: "$20.05" },
            configuration: [
              { name: "Size", value: "XS" },
              { name: "Color", value: "White" },
            ],
            qty: 2,
            sku: "MSD23-345-325",
          },
        ],
      },
      paymentMethods: [
        {
          label: "Visa Debit",
          value: "debit",
        },
        {
          label: "MasterCard",
          value: "mastercard",
        },
        {
          label: "Visa Electron",
          value: "electron",
        },
        {
          label: "Cash on delivery",
          value: "cash",
        },
        {
          label: "Check",
          value: "check",
        },
      ],
      shippingMethods: [
        {
          isOpen: false,
          price: "Free",
          delivery: "Delivery from 3 to 7 business days",
          label: "Pickup in the store",
          value: "store",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
        },
        {
          isOpen: false,
          price: "$9.90",
          delivery: "Delivery from 4 to 6 business days",
          label: "Delivery to home",
          value: "home",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
        },
        {
          isOpen: false,
          price: "$9.90",
          delivery: "Delivery from 4 to 6 business days",
          label: "Paczkomaty InPost",
          value: "inpost",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
        },
        {
          isOpen: false,
          price: "$11.00",
          delivery: "Delivery within 48 hours",
          label: "48 hours coffee",
          value: "coffee",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
        },
        {
          isOpen: false,
          price: "$14.00",
          delivery: "Delivery within 24 hours",
          label: "Urgent 24h",
          value: "urgent",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
        },
      ],
      buttonNames: [
        { name: "Go to shipping" },
        { name: "Go to payment" },
        { name: "Review Order" },
        { name: "Place my order" },
      ],
      characteristics: [
        {
          title: "Safety",
          description: "It carefully packaged with a personal touch",
          icon: "safety",
        },
        {
          title: "Easy shipping",
          description:
            "You’ll receive dispatch confirmation and an arrival date",
          icon: "shipping",
        },
        {
          title: "Changed your mind?",
          description: "Rest assured, we offer free returns within 30 days",
          icon: "return",
        },
      ],
    };
  },
  computed: {
    getOrder() {
      console.log(this.shipping);
      return {
        ...this.order,
        ...this.personalDetails,
        shipping: { ...this.shipping },
        payment: { ...this.payment },
      };
    },
  },
  watch: {
    shipping(newVal, oldVal) {
      if (newVal.shippingMethod != oldVal.shippingMethod) {
        const method = this.shippingMethods.find(
          (method) => method.value === newVal.shippingMethod
        );
        return method
          ? (newVal.shippingMethod = method)
          : (newVal.shippingMethod = { price: "$0.00" });
      }
    },
  },
  methods: {
    updateStep(next) {
      // prevent to move next by SfStep header
      if (next < this.currentStep) {
        this.currentStep = next;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#checkout {
  box-sizing: border-box;
  @include for-desktop {
    padding: 0 var(--spacer-sm);
    max-width: 1272px;
    margin: 0 auto;
  }
}
.checkout {
  --steps-content-padding: 0 var(--spacer-sm);
  @include for-desktop {
    --steps-content-padding: 0;
    display: flex;
  }
  &__main {
    ::v-deep .sf-steps__step.is-done {
      --steps-step-color: var(--c-primary);
    }
    @include for-desktop {
      flex: 1;
      padding: var(--spacer-xl) 0 0 0;
    }
  }
  &__aside {
    @include for-desktop {
      flex: 0 0 26.8125rem;
      margin: 0 0 0 var(--spacer-base);
    }
    &-order {
      box-sizing: border-box;
      width: 100%;
      background: var(--c-light);
      padding: var(--spacer-base) var(--spacer-sm) var(--spacer-xl);
      @include for-desktop {
        padding: var(--spacer-xl);
      }
    }
  }
}
.actions {
  background: var(--c-white);
  padding: var(--spacer-sm);
  box-shadow: 0px -2px 10px rgba(154, 154, 154, 0.15);
  text-align: center;
  position: sticky;
  bottom: 0;
  &__button {
    margin-bottom: var(--spacer-sm);
  }
  @include for-desktop {
    position: relative;
    box-shadow: none;
    padding: 0;
    width: 25rem;
    &__button {
      margin: 0;
    }
  }
}
</style>

<include-source />
