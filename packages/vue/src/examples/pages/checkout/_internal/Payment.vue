<template>
  <div>
    <SfHeading
      title="3. Payment"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="form">
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
        class="form__element form__element--half"
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
        class="form__element form__element--half"
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
        class="form__element form__element--half form__select sf-select--underlined"
      >
        <SfSelectOption value="poland">Poland</SfSelectOption>
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
                ></SfImage>
              </template>
            </div>
          </template>
        </SfRadio>
      </div>
      <div
        v-if="isCreditCard"
        class="form__element"
        :style="{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '40px'
        }"
      >
        <SfInput
          v-model="cardNumber"
          :style="{ width: '500px', marginBottom: '20px' }"
          name="cardNumber"
          label="Number"
        />
        <SfInput
          v-model="cardExpiry"
          :style="{ width: '500px', marginBottom: '20px' }"
          name="cardExpiry"
          label="Expiry date"
        />
        <SfInput
          v-model="cardCVC"
          :style="{ width: '500px', marginBottom: '20px' }"
          name="cardCVC"
          label="Code CVC"
        />
        <SfCheckbox
          v-model="keepCard"
          name="keepcard"
          label="I want to keed this data for other purchases."
        />
      </div>
      <SfButton class="sf-button--text form__action form__action--left"
        >Go back to Personal details</SfButton
      >
      <SfButton>Continue to payment</SfButton>
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
      firstName: "Adam",
      lastName: "Kowalski",
      street: "Dmowskiego",
      apartment: "17",
      city: "Wrocław",
      state: "Dolnośląskie",
      zipCode: "50-203",
      country: "poland",
      phoneNumber: "+48 577 032 500",
      paymentMethod: "debit",
      cardNumber: "4097968681276022",
      cardExpiry: "22/24",
      cardCVC: "678",
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
      & + &:not(:nth-child(odd)) {
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
</style>
