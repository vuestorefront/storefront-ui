<template>
  <div>
    <SfModal :visible="true" :cross="false" title="My Account">
      <!-- <transition name="fade" mode="out-in"> -->
      <transition name="fade" mode="out-in">
        <!-- <SfBar title="My Account" :close="false" /> -->
        <div class="login-container">
          <SfImage :src="src" />
          <SfSection title-heading="Come on in!" :level-heading="1">
            <p>
              View orders and update your details.<br />
              Make your checkout fast and easy!
            </p>
          </SfSection>
          <SfButton
            class="sf-button login-button__signin"
            @click="isSignIn = true"
            >SIGN IN</SfButton
          >
          <SfButton
            class="sf-button login-button__login"
            @click="isLogin = true"
            >JOIN</SfButton
          >
          <SfBottomNavigation>
            <SfBottomNavigationItem
              v-for="(item, key) in items"
              :key="key"
              :icon="item.icon"
              :label="item.label"
              icon-size="20px"
            />
            <SfBottomNavigationItem
              label="Basket"
              icon="add_to_cart"
              :is-floating="isFloating"
            >
              <template #icon>
                <SfCircleIcon>
                  <SfIcon
                    icon="add_to_cart"
                    color="white"
                    size="28px"
                    :style="{ margin: '0 0 0 -2px' }"
                  />
                </SfCircleIcon>
              </template>
            </SfBottomNavigationItem>
          </SfBottomNavigation>
        </div>
      </transition>
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
          <SfButton class="sf-button--full-width form__button">Login</SfButton>
        </div>
        <div class="action">
          <SfButton class="sf-button--text color-secondary"
            >Forgotten password?</SfButton
          >
        </div>
        <div class="bottom">
          Don't have and account yet?
          <!-- <SfButton
                class="sf-button--text color-secondary"
                @click="isLogin = false"
                >Register today?</SfButton
              > -->
        </div>
      </div>
      <div v-if="isSignIn" key="sign-up" class="form">
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
          <!-- <SfButton
                class="sf-button--text color-secondary"
                @click="isLogin = true"
                >login in to your account</SfButton
              > -->
        </div>
      </div>
      <!-- </transition> -->
    </SfModal>
  </div>
</template>
<script>
import {
  // SfBar,
  SfImage,
  SfSection,
  SfModal,
  SfInput,
  SfButton,
  SfCheckbox,
  SfBottomNavigation,
  SfCircleIcon,
  SfIcon
} from "@storefront-ui/vue";
export default {
  name: "Login",
  components: {
    // SfBar,
    SfImage,
    SfSection,
    SfModal,
    SfInput,
    SfButton,
    SfCheckbox,
    SfBottomNavigation,
    SfCircleIcon,
    SfIcon
  },
  data() {
    return {
      isLogin: false,
      isSignIn: false,
      email: "",
      password: "",
      createAccount: false,
      rememberMe: false,
      firstName: "",
      lastName: "",
      src: {
        mobile: {
          url: "/assets/storybook/Login/EmptyHistory.png"
        },
        desktop: {
          url: "/assets/storybook/Login/EmptyHistory.png"
        }
      },
      items: [
        { icon: "menu", label: "Menu" },
        { icon: "heart", label: "Heart" },
        { icon: "profile", label: "Profile" }
      ],
      label: "Home",
      icon: "home",
      isFloating: true
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
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sf-heading__title {
  color: var(--c-primary);
  font-weight: var(--font-semibold);
}
.sf-section__content {
  color: var(--c-secondary-variant);
  font-family: var(--font-family-secondary);
  font-size: var(--font-base);
}
.login-button__login {
  --button-background: var(--c-secondary);
  margin: var(--spacer-sm);
}
.login-button__signin {
  --button-background: var(--c-primary);
}
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
  font: 300 var(--font-size-regular) / 1.6 var(--font-family-secondary);
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
