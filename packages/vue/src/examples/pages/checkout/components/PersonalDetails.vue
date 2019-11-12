<template>
  <div class="personal-details">
    <SfHeading
      :level="2"
      title="1. Personal Details"
      class="sf-heading--left sf-heading--no-underline"
    />
    <div class="form">
      <SfInput
        class="form__element"
        label="First name"
        name="first-name"
        required
      />
      <SfInput
        class="form__element form__element--half"
        label="Last name"
        name="last-name"
        required
      />
      <SfInput
        class="form__element form__element--half"
        label="Your email"
        name="email"
        required
      />
      <SfCheckbox
        class="form__element"
        label="I want to create an account"
        name="create-account"
      />
      <SfButton class="form__element form__element--half"
        >Continue to shopping</SfButton
      >
      <span class="form__element form__element--half"
        >or log in to your account</span
      >
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
