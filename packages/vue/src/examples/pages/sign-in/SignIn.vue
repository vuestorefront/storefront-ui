<template>
  <div id="sign-in">
    <SfModal :visible="true">
      <template v-if="true">
        <SfInput v-model="email" label="Your email" class="input" />
        <SfInput label="First Name" class="input" />
        <SfInput label="Last Name" class="input" />
        <SfInput v-model="password" label="Password" type="password" class="input" />
        <SfCheckbox v-model="createAccount" value="create-account" label="I want to create an account" class="checkbox" />
        <SfButton class="sf-button--full-width submit"
          >Create an account</SfButton
        >
        <div class="message">
          or <SfButton class="sf-button--text">login in to your account</SfButton>
        </div>
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
    return {
      email: "",
      password: "",
      createAccount: []
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
#sign-in {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
  }
}
.input,
.checkbox {
  margin-bottom: $spacer-extra-big;
}
.submit {
  margin-bottom: $spacer-big;
}
.message{
  text-align: center;
}
</style>
