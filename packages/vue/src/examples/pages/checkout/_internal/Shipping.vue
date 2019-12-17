<template>
  <div>
    <SfHeading
      title="2. Shipping"
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
      title="Shipping method"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="form">
      <div class="form__radio-group">
        <SfRadio
          v-for="item in shippingMethods"
          :key="item.value"
          v-model="shippingMethod"
          :label="item.label"
          :value="item.value"
          name="shippingMethod"
          :description="item.description"
          class="form__element form__radio"
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
  SfRadio
} from "../../../../../index.js";
export default {
  name: "Shipping",
  components: {
    SfHeading,
    SfInput,
    SfButton,
    SfSelect,
    SfRadio
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
      shippingMethod: "inpost",
      shippingMethods: [
        {
          label: "Pickup in the store",
          value: "store",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        },
        {
          label: "Delivery to home",
          value: "home",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        },
        {
          label: "Paczkomaty InPost",
          value: "inpost",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        },
        {
          label: "48 hours coffee",
          value: "coffee",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        },
        {
          label: "Urgent 24h",
          value: "urgent",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        }
      ]
    };
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
    margin-bottom: 0;
    &-group{
      margin-left: -#{$spacer-big};
      margin-right: -#{$spacer-big};
      margin-bottom: $spacer-extra-big;
    }
  }
}
</style>
