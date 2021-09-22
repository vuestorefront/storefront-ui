<template>
  <div class="sf-payment" data-testid="payment">
    <slot
      name="billing-heading"
      v-bind="{ billingHeading, billingHeadingLevel }"
    >
      <SfHeading
        :title="billingHeading"
        :level="billingHeadingLevel"
        class="sf-heading--left sf-heading--no-underline title"
      />
    </slot>
    <div class="form">
      <slot
        name="billing-form"
        v-bind="{
          sameAsShippingCheckboxLabel,
          billingInputsLabels,
          billingSelectLabel,
          countries,
        }"
      >
        <SfCheckbox
          v-model="sameAsShipping"
          :value="sameAsShipping"
          :label="sameAsShippingCheckboxLabel"
          name="copyShippingAddress"
          class="form__element form__checkbox"
          @change="updateField('sameAsShipping', $event)"
        />
        <SfInput
          v-model="firstName"
          :value="firstName"
          :label="billingInputsLabels[0]"
          name="firstName"
          class="form__element form__element--half"
          required
          @input="updateField('firstName', $event)"
        />
        <SfInput
          v-model="lastName"
          :value="lastName"
          :label="billingInputsLabels[1]"
          name="lastName"
          class="form__element form__element--half form__element--half-even"
          required
          @input="updateField('lastName', $event)"
        />
        <SfInput
          v-model="streetName"
          :value="streetName"
          :label="billingInputsLabels[2]"
          name="streetName"
          class="form__element form__element--half"
          required
          @input="updateField('streetName', $event)"
        />
        <SfInput
          v-model="apartment"
          :value="apartment"
          :label="billingInputsLabels[3]"
          name="apartment"
          class="form__element form__element--half form__element--half-even"
          required
          @input="updateField('apartment', $event)"
        />
        <SfInput
          v-model="city"
          :value="city"
          :label="billingInputsLabels[4]"
          name="city"
          class="form__element form__element--half"
          required
          @input="updateField('city', $event)"
        />
        <SfInput
          v-model="state"
          :value="state"
          :label="billingInputsLabels[5]"
          name="state"
          class="form__element form__element--half form__element--half-even"
          required
          @input="updateField('state', $event)"
        />
        <SfInput
          v-model="zipCode"
          :value="zipCode"
          :label="billingInputsLabels[6]"
          name="zipCode"
          class="form__element form__element--half"
          required
          @input="updateField('zipCode', $event)"
        />
        <SfSelect
          v-model="country"
          :value="country"
          :placeholder="billingSelectLabel"
          class="
            form__element
            form__element--half
            form__element--half-even
            form__select
            sf-select--underlined
          "
          required
          data-testid="country"
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
          :label="billingInputsLabels[7]"
          name="phone"
          class="form__element"
          required
          @input="updateField('phoneNumber', $event)"
        />
        <SfCheckbox
          v-model="invoice"
          :value="invoice"
          :label="generateInvoiceCheckboxlabel"
          name="getInvoice"
          class="form__element form__checkbox"
          @change="updateField('invoice', $event)"
        />
      </slot>
    </div>
    <slot
      name="payment-heading"
      v-bind="{ paymentHeading, paymentHeadingLevel }"
    >
      <SfHeading
        :title="paymentHeading"
        :level="paymentHeadingLevel"
        class="sf-heading--left sf-heading--no-underline title"
      />
    </slot>
    <div class="form">
      <slot name="payment-form" v-bind="{ paymentMethods }">
        <div class="payment-methods" data-testid="payment-methods">
          <slot name="payment-methods">
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
                      :alt="item.value"
                      class="payment-image"
                      :lazy="false"
                    />
                  </template>
                </div>
              </template>
            </SfRadio>
          </slot>
        </div>
        <transition :name="transition">
          <slot
            name="credit-card-form"
            v-bind="{ months, years, cvcCodeButtonText, expiryDateLabel }"
          >
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
                  class="
                    credit-card-form__label
                    credit-card-form__label--small
                    credit-card-form__label--required
                  "
                  >{{ expiryDateLabel }}</span
                >
                <div class="credit-card-form__element">
                  <SfSelect
                    v-model="cardMonth"
                    :value="cardMonth"
                    label="Month"
                    class="
                      credit-card-form__input
                      credit-card-form__input--with-spacer
                      form__select
                      sf-select--underlined
                    "
                    @change="updateField('cardMonth', $event)"
                  >
                    <SfSelectOption
                      v-for="monthOption in months"
                      :key="monthOption"
                      :value="monthOption"
                    >
                      {{ monthOption }}
                    </SfSelectOption>
                  </SfSelect>
                  <SfSelect
                    v-model="cardYear"
                    :value="cardYear"
                    label="Year"
                    class="
                      credit-card-form__input
                      form__select
                      sf-select--underlined
                    "
                    @change="updateField('cardYear', $event)"
                  >
                    <SfSelectOption
                      v-for="yearOption in years"
                      :key="yearOption"
                      :value="yearOption"
                    >
                      {{ yearOption }}
                    </SfSelectOption>
                  </SfSelect>
                </div>
              </div>
              <div class="credit-card-form__group">
                <SfInput
                  v-model="cardCVC"
                  :value="cardCVC"
                  type="number"
                  label="Code CVC"
                  name="cardCVC"
                  class="
                    credit-card-form__input
                    credit-card-form__input--small
                    credit-card-form__input--with-spacer
                  "
                  @input="updateField('cardCVC', $event)"
                />
                <SfButton
                  class="sf-button--text credit-card-form__button"
                  @click="$emit('find-cvc')"
                  >{{ cvcCodeButtonText }}</SfButton
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
          </slot>
        </transition>
      </slot>
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
  SfCheckbox,
} from "@storefront-ui/vue";
export default {
  name: "SfPayment",
  components: {
    SfHeading,
    SfInput,
    SfButton,
    SfSelect,
    SfRadio,
    SfImage,
    SfCheckbox,
  },
  props: {
    paymentMethods: {
      type: Array,
      default: () => [],
    },
    transition: {
      type: String,
      default: "sf-fade",
    },
    billingHeading: {
      type: String,
      default: "Billing address",
    },
    billingHeadingLevel: {
      type: Number,
      default: 3,
    },
    sameAsShippingCheckboxLabel: {
      type: String,
      default: "Copy address data from shipping",
    },
    billingInputsLabels: {
      type: Array,
      default: () => [
        "First name",
        "Last name",
        "Street name",
        "House/Apartment number",
        "City",
        "State/Province",
        "Zip-code",
        "Phone number",
      ],
    },
    billingSelectLabel: {
      type: String,
      default: "Country",
    },
    generateInvoiceCheckboxlabel: {
      type: String,
      default: "I want to generate invoice",
    },
    paymentHeading: {
      type: String,
      default: "Payment methods",
    },
    paymentHeadingLevel: {
      type: Number,
      default: 3,
    },
    countries: {
      type: Array,
      default: () => [],
    },
    years: {
      type: Array,
      default: () => [],
    },
    months: {
      type: Array,
      default: () => [],
    },
    cvcCodeButtonText: {
      type: String,
      default: "Where can I find CVC code",
    },
    expiryDateLabel: {
      type: String,
      default: "Expiry date:",
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
    };
  },
  computed: {
    isCreditCard() {
      return ["debit", "mastercard", "electron"].includes(this.paymentMethod);
    },
  },
  watch: {
    payment: {
      handler(value) {
        if (value) {
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
        } else {
          this.sameAsShipping = false;
          this.streetName = "";
          this.apartment = "";
          this.city = "";
          this.state = "";
          this.zipCode = null;
          this.country = "";
          this.phoneNumber = null;
          this.paymentMethod = "";
          this.cardNumber = null;
          this.cardHolder = "";
          this.cardMonth = null;
          this.cardYear = null;
          this.cardCVC = null;
          this.cardKeep = "";
        }
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
  methods: {
    updateField(fieldName, fieldValue) {
      this.$emit("input", {
        ...this.value,
        [fieldName]: fieldValue,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.title {
  --heading-padding: var(--spacer-xl) 0 var(--spacer-lg);
  --heading-title-font-weight: var(--font-weight--bold);
  &:not(:first-of-type) {
    --heading-padding: var(--spacer-xl) 0;
    border-bottom: 2px solid var(--c-light);
  }
  @include for-desktop {
    --heading-title-font-size: var(--h3-font-size);
    --heading-title-font-weight: var(--font-weight--semibold);
    --heading-padding: var(--spacer-xl) 0;
  }
}
.form {
  &__element {
    margin: 0 0 var(--spacer-base) 0;
    &:last-of-type {
      margin: 0;
    }
  }
  &__checkbox {
    margin: 0 0 var(--spacer-xl) 0;
  }
  &__group {
    display: flex;
    align-items: center;
  }
  &__select {
    display: flex;
    align-items: center;
    --select-option-font-size: var(--font-size--base);
    --select-dropdown-color: blue;
    ::v-deep .sf-select__dropdown {
      margin: 0 0 2px 0;
      font-size: var(--font-size--base);
      font-family: var(--font-family--secondary);
      color: var(--c-link);
    }
  }
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    &__element {
      margin: 0 0 var(--spacer-sm) 0;
      flex: 0 0 100%;
      &--half {
        flex: 1 1 50%;
        &-even {
          padding: 0 0 0 var(--spacer-base);
        }
      }
    }
    &__checkbox {
      margin: 0 0 var(--spacer-xl) 0;
    }
    &__action-button {
      --button-width: 25rem;
    }
  }
}
.payment-methods {
  border-bottom: solid 2px var(--c-light);
  padding: 0 0 var(--spacer-base) 0;
  margin-bottom: var(--spacer-lg);
  @include for-desktop {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacer-xl);
    padding: var(--spacer-xs) 0;
    width: 100%;
  }
}
.payment-method {
  --radio-container-align-items: center;
  --radio-container-padding: var(--spacer-base) var(--spacer-sm) 0;
  --ratio-content-margin: 0 0 0 var(--spacer-lg);
  --radio-background: transparent;
  color: var(--c-link);
  white-space: nowrap;
  ::v-deep .sf-image {
    width: 3.125rem;
  }
  @include for-desktop {
    --radio-container-padding: var(--spacer-sm);
  }
}
.credit-card-form {
  width: 100%;
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
    font-size: var(--font-size--base);
    font-family: var(--font-family--secondary);
    color: var(--c-link);
    padding: var(--spacer-sm) 0 0 0;
    flex: 1;
  }
  &__button {
    --button-padding: var(--spacer-base) 0 0 var(--spacer-sm);
    text-align: right;
    flex: 1;
  }
  &__input {
    flex: 1;
    padding: 0 0 var(--spacer-sm) 0;
  }
  @include for-desktop {
    width: 38.125rem;
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
