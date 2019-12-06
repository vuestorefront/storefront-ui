<template>
  <div id="sign-in">
    <SfModal :visible="true">
      <template v-if="true">
        <SfInput label="Your email" />
        <SfInput label="First Name" />
        <SfInput label="Last Name" />
        <SfInput label="Password" type="password" />
        <SfCheckbox label="I want to create an account" />
        <SfButton>Create an account</SfButton>
        or <SfButton class="sf-button--text">login in to your account</SfButton>
      </template>
      <template v-else>
        <SfInput label="Your email" />
        <SfInput label="Password" type="password" />
        <SfCheckbox label="Remember me" />
        <SfButton>Log in</SfButton>
        <SfButton class="sf-button--text">Forgotten password?</SfButton>
        Don't have and account yet?
        <SfButton class="sf-button--text">Register today?</SfButton>
      </template>
    </SfModal>
  </div>
</template>

<script>
import { SfModal, SfInput, SfButton, SfCheckbox } from "../../../../index.js";
export default {
  name: "SignIn",
  components: { SfModal, SfInput, SfButton, SfCheckbox },
  data() {
    return {};
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
#sign-in {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
  }
}
</style>
