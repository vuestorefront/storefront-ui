<template>
  <div class="credit-card-form">
    <div class="credit-card-form__group">
      <span class="credit-card-form__label credit-card-form__label--required"
        >Number</span
      >
      <div class="credit-card-form__element">
        <SfInput
          v-model="cardNumber"
          name="cardNumber"
          class=" credit-card-form__input"
        />
      </div>
    </div>
    <div class="credit-card-form__group">
      <span class="credit-card-form__label credit-card-form__label--required"
        >Card holder</span
      >
      <div class="credit-card-form__element">
        <SfInput
          v-model="cardHolder"
          name="cardHolder"
          class=" credit-card-form__input"
        />
      </div>
    </div>
    <div class="credit-card-form__group">
      <span class="credit-card-form__label credit-card-form__label--required"
        >Expiry date</span
      >
      <div class="credit-card-form__element">
        <SfInput v-model="cardMonth" label="Month" name="month" class="credit-card-form__input "/>
        <SfInput v-model="cardYear" label="Year" name="year" class="credit-card-form__input"/>
      </div>
    </div>
    <div class="credit-card-form__group">
      <span class="credit-card-form__label credit-card-form__label--required"
        >Code CVC</span
      >
      <div class="credit-card-form__element">
        <SfInput
          v-model="cardCVC"
          name="cardCVC"
          class=" credit-card-form__input credit-card-form__input--small"
        />
      </div>
    </div>
    <SfCheckbox
      v-model="cardKeep"
      name="keepcard"
      label="I want to keed this data for other purchases."
    />
  </div>
</template>
<script>
import { SfInput, SfCheckbox } from "../../../../../index.js";
export default {
  name: "CreditCard",
  components: {
    SfInput,
    SfCheckbox
  },
  data() {
    return {
      cardNumber: "",
      cardHolder: "",
      cardMonth: "",
      cardYear: "",
      cardCVC: "",
      cardKeep: false,
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
.credit-card-form {
  &__group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 $spacer-big 0;
  }
  &__label {
    flex: unset;
  }
  &__element {
    display: flex;
    flex: 0 0 66.666%;
  }
  &__input {
    flex: 1;
    &--small {
      flex: 0 0 46.666%;
    }
    & + & {
      margin-left: $spacer-big;
    }
  }
}
</style>
