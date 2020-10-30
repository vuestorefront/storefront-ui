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
      <SfComponentSelect
        v-model="country"
        :value="country"
        label="Country"
        class="form__element form__element--half form__element--half-even form__select sf-component-select--underlined"
        required
        @change="updateField('country', $event)"
      >
        <SfComponentSelectOption
          v-for="countryOption in countries"
          :key="countryOption"
          :value="countryOption"
        >
          {{ countryOption }}
        </SfComponentSelectOption>
      </SfComponentSelect>
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
        label="I want to generate invoice"
        name="getInvoice"
        class="form__element form__checkbox"
        @change="updateField('invoice', $event)"
      />
    </div>
    <SfHeading
      title="Payment methods"
      :level="3"
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
      <transition name="sf-fade">
        <div v-if="isCreditCard" class="credit-card-form">
          <SfInput
            v-model="cardNumber"
            :value="cardNumber"
            name="cardNumber"
            label="Card number"
            class="credit-card-form__input"
            @input="updateField('cardNumber', $event)"
          />
          <SfInput
            v-model="cardHolder"
            :value="cardHolder"
            label="Card holder"
            name="cardHolder"
            class="credit-card-form__input"
            @input="updateField('cardHolder', $event)"
          />
          <div class="credit-card-form__group">
            <span
              class="credit-card-form__label credit-card-form__label--small credit-card-form__label--required"
              >Expiry date:</span
            >
            <div class="credit-card-form__element">
              <SfComponentSelect
                v-model="cardMonth"
                :value="cardMonth"
                label="Month"
                class="credit-card-form__input credit-card-form__input--with-spacer form__select sf-component-select--underlined"
                @change="updateField('cardMonth', $event)"
              >
                <SfComponentSelectOption
                  v-for="monthOption in months"
                  :key="monthOption"
                  :value="monthOption"
                >
                  {{ monthOption }}
                </SfComponentSelectOption>
              </SfComponentSelect>
              <SfComponentSelect
                v-model="cardYear"
                :value="cardYear"
                label="Year"
                class="credit-card-form__input form__select sf-component-select--underlined"
                @change="updateField('cardYear', $event)"
              >
                <SfComponentSelectOption
                  v-for="yearOption in years"
                  :key="yearOption"
                  :value="yearOption"
                >
                  {{ yearOption }}
                </SfComponentSelectOption>
              </SfComponentSelect>
            </div>
          </div>
          <div class="credit-card-form__group">
            <SfInput
              v-model="cardCVC"
              :value="cardCVC"
              type="number"
              label="Code CVC"
              name="cardCVC"
              class="credit-card-form__input credit-card-form__input--small credit-card-form__input--with-spacer"
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
            label="Save this card for other purchases"
            class="credit-card-form__element form__checkbox"
            @change="updateField('cardKeep', $event)"
          />
        </div>
      </transition>
      <div class="form__action">
        <SfButton
          class="sf-button--full-width form__action-button"
          @click="$emit('click:next')"
          >Review order
        </SfButton>
        <SfButton
          class="sf-button--full-width sf-button--underlined color-secondary form__action-button form__action-button--secondary smartphone-only"
          @click="$emit('click:back')"
        >
          Go back
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
  SfComponentSelect,
  SfRadio,
  SfImage,
  SfCheckbox,
} from "@storefront-ui/vue";
import axios from "axios";
export default {
  name: "Payment",
  components: {
    SfHeading,
    SfInput,
    SfButton,
    SfComponentSelect,
    SfRadio,
    SfImage,
    SfCheckbox,
  },
  props: {
    paymentMethods: {
      type: Array,
      default: () => [],
    },
    shipping: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Object,
      default: () => ({}),
    },
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
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      years: ["2020", "2021", "2022", "2025"],
      countries: [],
    };
  },
  computed: {
    isCreditCard() {
      return ["debit", "mastercard", "electron"].includes(this.paymentMethod);
    },
  },
  watch: {
    payment: {
      handler() {
        this.sameAsShipping = this.value.sameAsShipping;
        this.streetName = this.value.streetName;
        this.apartment = this.value.apartment;
        this.city = this.value.city;
        this.state = this.value.state;
        this.zipCode = this.value.zipCode;
        this.country = this.value.country;
        this.phoneNumber = this.value.phoneNumber;
        this.paymentMethod = this.value.paymentMethod;
        this.cardNumber = this.value.card.number;
        this.cardHolder = this.value.card.holder;
        this.cardMonth = this.value.card.month;
        this.cardYear = this.value.card.year;
        this.cardCVC = this.value.card.cvc;
        this.cardKeep = this.value.card.keep;
      },
      immediate: true,
    },
    sameAsShipping: {
      handler(value) {
        if (value) {
          this.firstName = this.shipping.firstName;
          this.lastName = this.shipping.lastName;
          this.streetName = this.shipping.streetName;
          this.apartment = this.shipping.apartment;
          this.city = this.shipping.city;
          this.state = this.shipping.state;
          this.zipCode = this.shipping.zipCode;
          this.country = this.shipping.country;
          this.phoneNumber = this.shipping.phoneNumber;
          this.paymentMethod = this.shipping.paymentMethod;
        } else {
          this.firstName = "";
          this.lastName = "";
          this.streetName = "";
          this.apartment = "";
          this.city = "";
          this.state = "";
          this.zipCode = "";
          this.country = "";
          this.phoneNumber = "";
          this.paymentMethod = "";
        }
      },
      immediate: true,
    },
  },
  mounted() {
    this.getCountries();
  },
  methods: {
    updateField(fieldName, fieldValue) {
      this.$emit("input", {
        ...this.value,
        [fieldName]: fieldValue,
      });
    },
    getCountries() {
      axios
        .get("https://restcountries.eu/rest/v2/all?fields=name")
        .then((response) => {
          const countries = response.data.map((country) => country.name);
          this.countries = countries;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.title {
  --heading-padding: var(--spacer-base) 0;
  @include for-desktop {
    --heading-title-font-size: var(--h3-font-size);
    --heading-padding: var(--spacer-xl) 0;
  }
}
.form {
  &__checkbox {
    --checkbox-label-color: var(--c-dark-variant);
    margin: 0 0 var(--spacer-sm) 0;
  }
  &__group {
    display: flex;
    align-items: center;
  }
  &__action-button {
    &:first-child {
      margin: var(--spacer-xl) 0 0 0;
    }
    &--secondary {
      margin: var(--spacer-base) 0;
    }
  }
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 var(--spacer-2xl) 0 var(--spacer-xs);
    &__element {
      padding: 0 0 var(--spacer-xs) 0;
      flex: 0 0 100%;
      &--half {
        flex: 1 1 50%;
        &-even {
          padding: 0 0 0 var(--spacer-xl);
        }
      }
    }
    &__action {
      flex: 0 0 100%;
      display: flex;
    }
    &__action-button {
      --button-width: 25rem;
    }
  }
}
.payment-methods {
  border: 1px solid var(--c-light);
  border-width: 0 0 1px 0;
  padding: 0 0 var(--spacer-sm) 0;
  @include for-desktop {
    display: flex;
    justify-content: space-between;
    padding: var(--spacer-xs) 0;
    border-width: 1px 0;
  }
}
.payment-method {
  --radio-container-align-items: center;
  --radio-container-padding: var(--spacer-sm) 0;
  --ratio-content-margin: 0 0 0 var(--spacer-lg);
  --radio-background: transparent;
  white-space: nowrap;
  @include for-desktop {
    --radio-container-padding: var(--spacer-sm);
  }
}
.credit-card-form {
  padding: var(--spacer-xl) 0 0 0;
  &__group {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  &__element {
    flex: 1;
  }
  &__label {
    font-size: var(--font-size--lg);
    padding: var(--spacer-sm) 0 0 0;
    flex: 1;
  }
  &__button {
    --button-padding: var(--spacer-sm) 0 0 var(--spacer-sm);
    text-align: right;
    flex: 1;
  }
  &__input {
    flex: 1;
    padding: 0 0 var(--spacer-sm) 0;
  }
  @include for-desktop {
    width: 100%;
    padding: var(--spacer-lg) var(--spacer-xl);
    &__element {
      display: flex;
    }
    &__label {
      padding: var(--spacer-sm) var(--spacer-sm) 0 0;
      &--small {
        flex: 0 0 calc(100% / 3);
      }
    }
    &__button {
      text-align: left;
    }
    &__input {
      align-self: center;
      &--with-spacer {
        margin: 0 var(--spacer-lg) 0 0;
      }
      &--small {
        flex: 0 0 calc(100% / 3);
      }
    }
  }
}
</style>
