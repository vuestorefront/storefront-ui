<template>
  <div id="sign-in">
    <SfModal :visible="true">
      <template v-if="false">
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
        <SfInput v-model="email" label="Your email" class="input"/>
        <SfInput v-model="password" label="Password" type="password" class="input"/>
        <SfCheckbox v-model="rememberMe" value="remember-me" label="Remember me" class="checkbox"/>
        <SfButton class="sf-button--full-width submit">Log in</SfButton>
        <div class="message">
          <SfButton class="sf-button--text muted">Forgotten password?</SfButton>
        </div>
        <div class="aside">
          Don't have and account yet?
          <SfButton class="sf-button--text">Register today?</SfButton>
        </div>
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
      createAccount: [],
      rememberMe: []
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
}
.message{
  margin-top: $spacer-big;
  text-align: center;
}
  .aside{
    padding-top: $spacer-extra-big;
    margin-top: $spacer-extra-big;
    border-top: 1px solid $c-light;
    text-align: center;
  }
  .muted{
    color: $c-text-muted;
  }
</style>
