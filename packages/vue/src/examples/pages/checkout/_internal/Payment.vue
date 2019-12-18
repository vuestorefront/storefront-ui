<template>
  <div>
    <SfHeading
      title="3. Payment"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="form">
      <SfCheckbox
        v-model="copyShippingAddress"
        label="Copy address data from shipping"
        name="copyShippingAddress"
        class="form__element"
      />
      <SfInput
        v-model="firstName"
        label="First name"
        name="firstName"
        class="form__element form__element--half"
        required
      />
      <SfInput
        v-model="lastName"
        label="Last name"
        name="lastName"
        class="form__element form__element--half form__element--half-even"
        required
      />
      <SfInput
        v-model="street"
        label="Street name"
        name="street"
        class="form__element"
        required
      />
      <SfInput
        v-model="apartment"
        label="House/Apartment number"
        name="apartment"
        class="form__element"
        required
      />
      <SfInput
        v-model="city"
        label="City"
        name="city"
        class="form__element form__element--half"
        required
      />
      <SfInput
        v-model="state"
        label="State/Province"
        name="state"
        class="form__element form__element--half form__element--half-even"
        required
      />
      <SfInput
        v-model="zipCode"
        label="Zip-code"
        name="zipCode"
        class="form__element form__element--half"
        required
      />
      <SfSelect
        v-model="country"
        label="Country"
        class="form__element form__element--half form__element--half-even form__select sf-select--underlined"
        required
      >
        <SfSelectOption value="poland">
          Poland
        </SfSelectOption>
      </SfSelect>
    </div>
    <SfHeading
      title="Payment methods"
      subtitle="Choose your payment method"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="form">
      <div
        class="form__element form__radio-group form__radio-group--inline payment-methods"
      >
        <!-- todo: adjust to design -->
        <SfRadio
          v-for="item in paymentMethods"
          :key="item.value"
          v-model="paymentMethod"
          :label="item.label"
          :value="item.value"
          name="paymentMethod"
          :description="item.description"
          class="form__radio"
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
                  :src="`/assets/storybook/checkoutpage/${item.value}.png`"
                  class="payment-image"
                />
              </template>
            </div>
          </template>
        </SfRadio>
      </div>
      <transition name="fade">
        <div v-if="isCreditCard" class="form__element credit-card">
          <div class="credit-card__element">
            <span class="credit-card__label credit-card__label--required"
              >Number</span
            >
            <SfInput
              v-model="cardNumber"
              name="cardNumber"
              class="sf-input--bordered credit-card__input"
            />
          </div>
          <div class="credit-card__element">
            <span class="credit-card__label credit-card__label--required"
              >Card holder</span
            >
            <SfInput
              v-model="cardHolder"
              name="cardHolder"
              class="sf-input--bordered credit-card__input"
            />
          </div>
          <div class="credit-card__element">
            <span class="credit-card__label credit-card__label--required"
              >Expiry date</span
            >
            <SfSelect
              v-model="cardMonth"
              label="Month"
              class="sf-select--bordered credit-card__select"
            >
              <SfSelectOption v-for="i in 12" :key="i" :value="i">
                {{ i }}
              </SfSelectOption>
            </SfSelect>
            <SfSelect
              v-model="cardYear"
              label="Year"
              class="sf-select--bordered credit-card__select"
            >
              <SfSelectOption v-for="i in 12" :key="i" :value="i">
                {{ i + 12 }}
              </SfSelectOption>
            </SfSelect>
          </div>
          <div
            class="credit-card__element credit-card__element--spacer-extra-big"
          >
            <span class="credit-card__label credit-card__label--required"
              >Code CVC</span
            >
            <div class="credit-card__cvc">
              <SfInput
                v-model="cardCVC"
                name="cardCVC"
                class="sf-input--bordered credit-card__input credit-card__input--small"
              />
            </div>
          </div>
          <SfCheckbox
            v-model="keepCard"
            name="keepcard"
            label="I want to keed this data for other purchases."
          />
        </div>
      </transition>
      <SfButton
        class="sf-button--text form__action form__action--left"
        @click="$emit('click:back')"
      >
        Go back to Personal details
      </SfButton>
      <SfButton @click="$emit('click:next')">Review order</SfButton>
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
} from "../../../../../index.js";
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
  data() {
    return {
      copyShippingAddress: false,
      firstName: "",
      lastName: "",
      street: "",
      apartment: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phoneNumber: "",
      paymentMethod: "",
      cardNumber: "",
      cardHolder: "",
      cardMonth: null,
      cardYear: null,
      cardCVC: "",
      keepCard: true,
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
      ]
    };
  },
  computed: {
    isCreditCard() {
      return (
        this.paymentMethod === "debit" ||
        this.paymentMethod === "mastercard" ||
        this.paymentMethod === "electron"
      );
    }
  },
  watch: {
    copyShippingAddress(copy) {
      if (copy) {
        this.firstName = "Adam";
        this.lastName = "Kowalski";
        this.street = "Dmowskiego";
        this.apartment = "17";
        this.city = "Wrocław";
        this.state = "Dolnośląskie";
        this.zipCode = "50-203";
        this.country = "poland";
        this.phoneNumber = "+48 577 032 500";
      } else {
        this.firstName = "";
        this.lastName = "";
        this.street = "";
        this.apartment = "";
        this.city = "";
        this.state = "";
        this.zipCode = "";
        this.country = "";
        this.phoneNumber = "";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
@mixin for-desktop {
  @media screen and (min-width: $desktop-min) {
    @content;
  }
}
.title {
  margin-bottom: $spacer-extra-big;
}
.form {
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  &__element {
    margin-bottom: $spacer-extra-big;
    @include for-desktop {
      flex: 0 0 100%;
    }
    &--half {
      @include for-desktop {
        flex: 1 1 50%;
      }
      &-even {
        @include for-desktop {
          padding-left: $spacer-extra-big;
        }
      }
    }
  }
  &__action {
    flex: none;
    margin-left: auto;
    &--left {
      margin-left: unset;
      margin-right: auto;
    }
  }
  &__select {
    // todo: remove after SfSelect refactoring
    ::v-deep .sf-select__selected {
      padding: 5px 0;
    }
  }
  &__radio {
    white-space: nowrap;
    &-group {
      $margin-x: -#{$spacer-big};
      margin-left: $margin-x;
      margin-right: $margin-x;
      margin-bottom: $spacer-extra-big;
      &--inline {
        display: flex;
      }
    }
  }
}
.payment-image {
  height: 2.125rem;
  width: auto;
  ::v-deep & .sf-image__img {
    width: auto;
    max-width: unset;
  }
}
.payment-methods {
  $border: 1px solid $c-light;
  padding: $spacer-big 0;
  border-top: $border;
  border-bottom: $border;
}
.credit-card {
  flex: 0 0 66.666%;
  padding: 0 calc((100% - 66.666%) / 2);
  &__element {
    display: flex;
    align-items: center;
    margin-bottom: $spacer-big;
    &--spacer-extra-big {
      margin-bottom: $spacer-extra-big;
    }
  }
  &__label {
    flex: 1;
    &--required {
      &::after {
        content: "*";
        color: $c-primary;
      }
    }
  }
  &__input {
    flex: 0 0 21.5rem;
    &--small {
      flex: 0 0 7.5rem;
    }
  }
  &__select {
    flex: 0 0 10.125rem;
    ::v-deep .sf-select__selected {
      padding: 5px $spacer-big;
    }
    & + & {
      margin-left: $spacer-big;
    }
  }
  &__cvc {
    flex: 0 0 21.5rem;
    display: flex;
  }
}
.sf-input {
  &--bordered {
    ::v-deep input {
      box-sizing: border-box;
      padding: 5px $spacer-big;
      border: 1px solid $c-light;
    }
  }
}
</style>
