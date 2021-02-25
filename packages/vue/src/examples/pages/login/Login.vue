<template>
  <SfModal id="login" :visible="true" :title="modalTitle">
    <transition name="sf-fade" mode="out-in">
      <div
        v-if="isLogIn"
        key="log-in"
        class="modal-content"
        data-testid="login-modal"
      >
        <form class="form" @submit.prevent="() => false">
          <SfInput
            v-model="email"
            name="email"
            label="Your email"
            class="form__element"
            type="email"
          />
          <SfInput
            v-model="password"
            name="password"
            label="Password"
            type="password"
            class="form__element"
            :has-show-password="true"
          />
          <SfCheckbox
            v-model="rememberMe"
            name="remember-me"
            label="Remember me"
            class="form__element form__checkbox"
          />
          <SfButton
            type="submit"
            class="sf-button--full-width form__submit"
            data-testid="log-in-button"
          >
            Log In
          </SfButton>
        </form>
        <SfButton
          class="sf-button--text action-button"
          data-testid="forgotten-password-button"
        >
          Forgotten password?
        </SfButton>
        <div class="aside">
          <SfHeading
            title="Don't have an account yet?"
            :level="3"
            class="aside__heading"
          />
          <SfButton
            class="sf-button--text"
            data-testid="register-now-button"
            @click="isLogIn = false"
          >
            Register now
          </SfButton>
        </div>
      </div>
      <div
        v-else
        key="sign-up"
        class="modal-content"
        data-testid="signin-modal"
      >
        <form class="form" @submit.prevent="() => false">
          <SfInput
            v-model="firstName"
            name="first-name"
            label="Name"
            class="form__element"
          />
          <SfInput
            v-model="lastName"
            name="last-name"
            label="Last Name"
            class="form__element"
          />
          <SfInput
            v-model="email"
            name="email"
            label="Your email"
            class="form__element"
            type="email"
          />
          <SfInput
            v-model="password"
            name="password"
            label="Password"
            type="password"
            class="form__element"
          />
          <SfButton
            type="submit"
            class="sf-button--full-width form__submit"
            data-testid="create-acount-button"
          >
            Create an account
          </SfButton>
        </form>
        <SfButton
          class="sf-button--text action-button"
          data-testid="log-in-account"
          @click="isLogIn = true"
        >
          or Log In To Your Account
        </SfButton>
      </div>
    </transition>
  </SfModal>
</template>
<script>
import {
  SfModal,
  SfInput,
  SfButton,
  SfCheckbox,
  SfHeading,
} from "@storefront-ui/vue";
export default {
  name: "Login",
  components: {
    SfModal,
    SfInput,
    SfButton,
    SfCheckbox,
    SfHeading,
  },
  data() {
    return {
      isLogIn: true,
      email: "",
      password: "",
      createAccount: false,
      rememberMe: false,
      firstName: "",
      lastName: "",
    };
  },
  computed: {
    modalTitle() {
      return this.isLogIn ? "Log In" : "Join Vue Storefront";
    },
  },
  watch: {
    isLogIn() {
      this.email = "";
      this.password = "";
      this.createAccount = false;
      this.rememberMe = false;
      this.firstName = "";
      this.lastName = "";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.modal-content,
.aside {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
  width: 100%;
  &__element {
    margin: var(--spacer-base) 0;
  }
  &__checkbox {
    margin: var(--spacer-xl) 0 var(--spacer-2xl) 0;
  }
  &__submit {
    margin: var(--spacer-xl) 0 0 0;
  }
}
.action-button {
  margin: var(--spacer-xl) 0;
}
.aside {
  margin: 0 0 var(--spacer-xl) 0;
  &__heading {
    --heading-title-color: var(--c-primary);
    margin: 0 0 var(--spacer-sm) 0;
  }
}
</style>
