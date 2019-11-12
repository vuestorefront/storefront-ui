<template>
  <div class="personal-details">
    <SfHeading
      :level="2"
      title="1. Personal Details"
      class="sf-heading--left sf-heading--no-underline"
    />
    <div class="form">
      <SfInput
        v-model="personalDetails.firstName"
        class="form__element"
        label="First name"
        name="first-name"
        required
      />
      <SfInput
        v-model="personalDetails.lastName"
        class="form__element form__element--half"
        label="Last name"
        name="last-name"
        required
      />
      <SfInput
        v-model="personalDetails.email"
        class="form__element form__element--half"
        label="Your email"
        name="email"
        required
      />
      <SfCheckbox
        v-model="personalDetails.createAccount"
        class="form__element"
        label="I want to create an account"
        value="create"
        name="create-account"
      />
      <SfButton class="form__element form__element--half"
        >Continue to shopping</SfButton
      >
      <div class="form__element form__element--half">
        or <SfButton class="sf-button--text">log in to your account</SfButton>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SfHeading,
  SfInput,
  SfCheckbox,
  SfButton
} from "../../../../../index.js";
export default {
  name: "PersonalDetails",
  components: {
    SfHeading,
    SfInput,
    SfCheckbox,
    SfButton
  },
  data() {
    return {
      personalDetails: {
        firstName: "",
        lastName: "",
        email: "",
        createAccount: []
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.form {
  display: flex;
  flex-wrap: wrap;
  &__element {
    flex: 0 0 100%;
    margin: $spacer-big 0;
    align-self: center;
    &--half {
      flex: auto;
      & + & {
        margin-left: $spacer-extra-big;
      }
    }
  }
}
</style>
