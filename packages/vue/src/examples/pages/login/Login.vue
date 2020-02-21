<template>
  <div>
    <SfModal :visible="true">
      <transition name="fade" mode="out-in">
        <div v-if="isLogin" key="log-in">
          <div class="form">
            <SfInput
              v-model="email"
              name="email"
              label="Your email"
              class="form__element"
            />
            <SfInput
              v-model="password"
              name="password"
              label="Password"
              type="password"
              class="form__element"
            />
            <SfCheckbox
              v-model="rememberMe"
              name="remember-me"
              label="Remember me"
              class="form__element"
            />
            <SfButton class="sf-button--full-width form__button"
              >Login</SfButton
            >
          </div>
          <div class="action">
            <SfButton class="sf-button--text color-secondary"
              >Forgotten password?</SfButton
            >
          </div>
          <div class="bottom">
            Don't have and account yet?
            <SfButton
              class="sf-button--text color-secondary"
              @click="isLogin = false"
              >Register today?</SfButton
            >
          </div>
        </div>
        <div v-else key="sign-up" class="form">
          <div class="from">
            <SfInput
              v-model="email"
              name="email"
              label="Your email"
              class="form__element"
            />
            <SfInput
              v-model="firstName"
              name="first-name"
              label="First Name"
              class="form__element"
            />
            <SfInput
              v-model="lastName"
              name="last-name"
              label="Last Name"
              class="form__element"
            />
            <SfInput
              v-model="password"
              name="password"
              label="Password"
              type="password"
              class="form__element"
            />
            <SfCheckbox
              v-model="createAccount"
              name="create-account"
              label="I want to create an account"
              class="form__element"
            />
            <SfButton class="sf-button--full-width form__button"
              >Create an account</SfButton
            >
          </div>
          <div class="action">
            or
            <SfButton
              class="sf-button--text color-secondary"
              @click="isLogin = true"
              >login in to your account</SfButton
            >
          </div>
        </div>
      </transition>
    </SfModal>
  </div>
</template>
<script>
import { SfModal, SfInput, SfButton, SfCheckbox } from "@storefront-ui/vue";
export default {
  name: "Login",
  components: { SfModal, SfInput, SfButton, SfCheckbox },
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
      createAccount: false,
      rememberMe: false,
      firstName: "",
      lastName: ""
    };
  },
  watch: {
    isLogin() {
      this.email = "";
      this.password = "";
      this.createAccount = false;
      this.rememberMe = false;
      this.firstName = "";
      this.lastName = "";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

.form {
  &__element {
    margin: 0 0 var(--spacer-extra-big) 0;
  }
}
.action,
.bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--spacer-big) 0 var(--spacer-big) 0;
  font: 300 var(--font-size-regular) / 1.6 var(--body-font-family-secondary);
  & > * {
    margin: 0 0 0 var(--spacer);
  }
}
.action {
  margin: var(--spacer-big) 0 var(--spacer-big) 0;
}
.bottom {
  padding: var(--spacer-extra-big) 0 0 0;
  margin: var(--spacer-extra-big) 0 0 0;
  border: 1px solid var(--c-light);
  border-width: 1px 0 0 0;
}
</style>
