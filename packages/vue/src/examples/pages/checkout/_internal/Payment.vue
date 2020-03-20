<template>
  <div>
    <SfHeading
      title="Billing address"
      :level="3"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="form">
      <SfCheckbox
        v-model="sameAsShipping"
        :value="sameAsShipping"
        label="Copy address data from shipping"
        name="copyShippingAddress"
        class="form__element form__checkbox"
        @change="updateField('sameAsShipping', $event)"
      />
      <SfInput
        v-model="firstName"
        :value="firstName"
        label="First name"
        name="firstName"
        class="form__element form__element--half"
        required
        @input="updateField('firstName', $event)"
      />
      <SfInput
        v-model="lastName"
        :value="lastName"
        label="Last name"
        name="lastName"
        class="form__element form__element--half form__element--half-even"
        required
        @input="updateField('lastName', $event)"
      />
      <SfInput
        v-model="streetName"
        :value="streetName"
        label="Street name"
        name="streetName"
        class="form__element"
        required
        @input="updateField('streetName', $event)"
      />
      <SfInput
        v-model="apartment"
        :value="apartment"
        label="House/Apartment number"
        name="apartment"
        class="form__element"
        required
        @input="updateField('apartment', $event)"
      />
      <SfInput
        v-model="city"
        :value="city"
        label="City"
        name="city"
        class="form__element form__element--half"
        required
        @input="updateField('city', $event)"
      />
      <SfInput
        v-model="state"
        :value="state"
        label="State/Province"
        name="state"
        class="form__element form__element--half form__element--half-even"
        required
        @input="updateField('state', $event)"
      />
      <SfInput
        v-model="zipCode"
        :value="zipCode"
        label="Zip-code"
        name="zipCode"
        class="form__element form__element--half"
        required
        @input="updateField('zipCode', $event)"
      />
      <SfSelect
        v-model="country"
        :value="country"
        label="Country"
        class="form__element form__element--half form__element--half-even form__select sf-select--underlined"
        required
        @change="updateField('country', $event)"
      >
        <SfSelectOption
          v-for="countryOption in countries"
          :key="countryOption"
          :value="countryOption"
        >
          {{ countryOption }}
        </SfSelectOption>
      </SfSelect>
      <SfInput
        v-model="phoneNumber"
        :value="phoneNumber"
        label="Phone number"
        name="phone"
        class="form__element"
        required
        @input="updateField('phoneNumber', $event)"
      />
      <SfCheckbox
        v-model="invoice"
        :value="invoice"
        label="I want to generate invoice for the company"
        name="getInvoice"
        class="form__element form__checkbox"
        @change="updateField('invoice', $event)"
      />
    </div>
    <SfHeading
      title="Payment methods"
      :level="3"
      subtitle="Choose your payment method"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="form">
      <div class="form__element payment-methods">
        <SfRadio
          v-for="item in paymentMethods"
          :key="item.value"
          v-model="paymentMethod"
          :label="item.label"
          :value="item.value"
          name="paymentMethod"
          :description="item.description"
          class="form__radio payment-method"
          @input="updateField('paymentMethod', $event)"
        >
          <template #label>
            <div class="sf-radio__label">
              <template
                v-if="
                  item.value !== 'debit' &&
                    item.value !== 'mastercard' &&
                    item.value !== 'electron'
                "
              >
                {{ item.label }}
              </template>
              <template v-else>
                <SfImage
                  :src="`/assets/storybook/checkout/${item.value}.png`"
                  class="payment-image"
                  :lazy="false"
                />
              </template>
            </div>
          </template>
        </SfRadio>
      </div>
      <transition name="fade">
        <div v-if="isCreditCard" class="credit-card-form">
          <SfInput
            v-model="cardNumber"
            :value="cardNumber"
            name="cardNumber"
            label="Card number"
            class=" credit-card-form__input"
            @input="updateField('cardNumber', $event)"
          />
          <SfInput
            v-model="cardHolder"
            :value="cardHolder"
            label="Card holder"
            name="cardHolder"
            class=" credit-card-form__input"
            @input="updateField('cardHolder', $event)"
          />
          <div class="credit-card-form__group">
            <span
              class="credit-card-form__label credit-card-form__label--small credit-card-form__label--required"
              >Expiry date:</span
            >
            <div class="credit-card-form__element">
              <SfInput
                v-model="cardMonth"
                :value="cardMonth"
                label="Month"
                name="month"
                class="credit-card-form__input credit-card-form__input--with-spacer"
                @input="updateField('cardMonth', $event)"
              />
              <SfInput
                v-model="cardYear"
                :value="cardYear"
                label="Year"
                name="year"
                class="credit-card-form__input"
                @input="updateField('cardYear', $event)"
              />
            </div>
          </div>
          <div class="credit-card-form__group">
            <SfInput
              v-model="cardCVC"
              :value="cardCVC"
              label="Code CVC"
              name="cardCVC"
              class=" credit-card-form__input credit-card-form__input--small credit-card-form__input--with-spacer"
              @input="updateField('cardCVC', $event)"
            />
            <SfButton class="sf-button--text credit-card-form__button"
              >Where can I find CVC code</SfButton
            >
          </div>
          <SfCheckbox
            v-model="cardKeep"
            :value="cardKeep"
            name="keepcard"
            label="I want to keep this data for other purchases."
            @change="updateField('cardKeep', $event)"
          />
        </div>
      </transition>
      <div class="form__action mobile-only">
        <SfButton
          class="sf-button--full-width form__action-button"
          @click="$emit('click:next')"
          >Review order
        </SfButton>
        <SfButton
          class="sf-button--full-width sf-button--text color-secondary form__action-button form__action-button--secondary"
          @click="$emit('click:back')"
        >
          Go back to Shipping Methods
        </SfButton>
      </div>
    </div>
  </div>
</template>
<script>
import {
  SfHeading,
  SfInput,
  SfButton,
  SfSelect,
  SfRadio,
  SfImage,
  SfCheckbox
} from "@storefront-ui/vue";

export default {
  name: "Payment",
  components: {
    SfHeading,
    SfInput,
    SfButton,
    SfSelect,
    SfRadio,
    SfImage,
    SfCheckbox
  },
  props: {
    paymentMethods: {
      type: Array,
      default: () => []
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
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
      countries: [
        "Austria",
        "Azerbaijan",
        "Belarus",
        "Belgium",
        "Bosnia and Herzegovina",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Georgia",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Kosovo",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macedonia",
        "Malta",
        "Moldova",
        "Monaco",
        "Montenegro",
        "The Netherlands",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "Russia",
        "San Marino",
        "Serbia",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Turkey",
        "Ukraine",
        "United Kingdom",
        "Vatican City"
      ]
    };
  },
  computed: {
    isCreditCard() {
      return ["debit", "mastercard", "electron"].includes(this.paymentMethod);
    }
  },
  methods: {
    updateField(fieldName, fieldValue) {
      this.$emit("input", {
        ...this.value,
        [fieldName]: fieldValue
      });
    }
    // toReview() {
    //   const order = { ...this.order };
    //   const payment = { ...order.payment };
    //   const card = { ...payment.card };
    //   payment.sameAsShipping = this.sameAsShipping;
    //   payment.firstName = this.firstName;
    //   payment.lastName = this.lastName;
    //   payment.streetName = this.streetName;
    //   payment.streetName = this.streetName;
    //   payment.apartment = this.apartment;
    //   payment.city = this.city;
    //   payment.state = this.state;
    //   payment.zipCode = this.zipCode;
    //   payment.country = this.country;
    //   payment.phoneNumber = this.phoneNumber;
    //   payment.paymentMethod = this.paymentMethod;
    //   if (this.isCreditCard) {
    //     card.number = this.cardNumber;
    //     card.holder = this.cardHolder;
    //     card.month = this.cardMonth;
    //     card.year = this.cardYear;
    //     card.cvc = this.cardCVC;
    //     card.keep = this.cardKeep;
    //   }
    //   payment.card = card;
    //   order.payment = payment;
    //   this.$emit("update:order", order);
    // }
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.title {
  --heading-padding: 0 0 var(--spacer-sm) 0;
  @include for-desktop {
    --heading-padding: var(--spacer-sm) 0 var(--spacer-base) 0;
  }
}
.form {
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__element {
    @include for-desktop {
      flex: 0 0 100%;
    }
    &--half {
      @include for-desktop {
        flex: 1 1 50%;
      }
      &-even {
        @include for-desktop {
          padding: 0 0 0 var(--spacer-xl);
        }
      }
    }
  }
  &__checkbox {
    padding: 0 0 var(--spacer-lg) 0;
  }
  &__group {
    display: flex;
    align-items: center;
  }

  &__action {
    @include for-desktop {
      flex: 0 0 100%;
      display: flex;
    }
  }
  &__action-button {
    --button-height: 4.0625rem;
    &:first-child {
      margin: var(--spacer-lg) 0 0 0;
    }
  }
  // &__button {
  //   --button-width: 100%;
  //   @include for-desktop {
  //     --button-width: auto;
  //   }
  // }
  &__radio-group {
    flex: 0 0 100%;
    margin: 0 0 var(--spacer-extra-big) 0;
  }
}
.payment-methods {
  border: 1px solid var(--c-light);
  border-width: 0 0 1px 0;
  padding: 0 0 var(--spacer-sm) 0;
  @include for-desktop {
    display: flex;
    justify-content: space-between;
    padding: var(--spacer-big) 0;
    border-width: 1px 0;
  }
}
.payment-method {
  --radio-container-align-items: center;
  --radio-background: transparent;
  --ratio-content-margin: 0 0 0 var(--spacer-lg);
  white-space: nowrap;
}
.credit-card-form {
  padding: var(--spacer-xl) 0 0 0;
  @include for-desktop {
    width: 100%;
    padding: var(--spacer-lg) var(--spacer-2xl);
  }
  &__group {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    position: relative;
  }
  &__element {
    @include for-desktop {
      display: flex;
    }
  }
  &__label {
    font-size: var(--font-lg);
    flex: 50%;
    &--small {
      @include for-desktop {
        flex: 0 0 calc(100% / 3);
      }
    }
  }
  &__button {
    @include for-mobile {
      position: absolute;
      bottom: 50%;
      right: 0;
      transform: translate3d(0, 0, 50%);
    }
  }

  &__input {
    flex: 1;
    @include for-desktop {
      align-self: center;
      &--with-spacer {
        margin: 0 var(--spacer-xl) 0 0;
      }
      &--small {
        flex: 0 0 calc(100% / 3);
      }
      &--margin {
        margin: 0 0 0 var(--spacer-lg);
      }
    }
  }
}
</style>
