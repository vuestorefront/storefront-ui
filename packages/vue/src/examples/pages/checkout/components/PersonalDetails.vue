<template>
  <div class="personal-details">
    <SfHeading level="2" title="1. Personal Details" class="sf-heading--left" />
    <SfInput label="First name" name="first-name" required />
    <SfInput label="Last name" name="last-name" required />
    <SfInput label="Your email" name="email" required />
    <SfCheckbox label="I want to create an account" name="create-account" />
    <span>+info</span>
    <SfButton>Continue to shopping</SfButton>
    <span>or log in to your account</span>
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

<style scoped></style>
