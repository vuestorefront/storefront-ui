<template>
  <div>
    <SfModal class="login" :visible="true" :cross="false">
      <template #modal-bar>
        <SfBar
          class="login__bar mobile-only"
          :title="onScreenChange()"
          :back="true"
          :close="false"
        />
        <SfBar class="login__bar desktop-only" :back="false" :close="true" />
      </template>
      <transition name="fade" mode="out-in">
        <div v-if="isMyAccount" class="login__container">
          <SfImage :src="src" />
          <SfHeading
            class="login__heading"
            :title="titleText"
            :subtitle="subtitleText"
            :level="loginHeadinglevel"
          >
            <template #title="{title}">
              <p class="login__heading__title">{{ title }}</p>
            </template>
            <template #subtitle>
              <p class="login__heading__subtitle">
                View orders and update your details.<br />
                Make your checkout fast and easy!
              </p>
            </template>
          </SfHeading>
          <SfButton
            class="sf-button login__btn color-primary"
            @click="onBtnClick('signIn')"
            >SIGN IN</SfButton
          >
          <SfButton
            class="sf-button color-secondary login__btn login__btn--login"
            @click="onBtnClick('join')"
            >JOIN</SfButton
          >
        </div>
        <div v-else-if="isLogin" key="log-in" class="login__form__container">
          <div class="login__form">
            <SfInput
              v-model="email"
              name="email"
              label="Your email"
              class="login__form__element"
            />
            <SfInput
              v-model="password"
              name="password"
              label="Password"
              type="password"
              class="login__form__element"
              :has-show-password="true"
            />
            <SfCheckbox
              v-model="rememberMe"
              name="remember-me"
              label="Remember me"
              class="login__form__element login__form__element--checkbox"
            />
            <SfButton class="sf-button--full-width login__form-btn"
              >Login</SfButton
            >
          </div>
          <div class="login__form__action-btn-wrapper">
            <SfButton class="sf-button--text color-secondary"
              >Forgotten password?</SfButton
            >
          </div>
          <div class="login__form__bottom-btn-wrapper">
            <SfHeading
              title="Don't have an account yet?"
              class="login__form__bottom-heading"
              :level="bottomHeadingLevel"
            />
            <SfButton
              class="sf-button--text color-secondary"
              @click="onBtnClick('signIn')"
              >Register now</SfButton
            >
          </div>
        </div>
        <div v-else-if="isSignIn" key="sign-up" class="login__form__container">
          <div class="login__form">
            <SfInput
              v-model="firstName"
              name="first-name"
              label="Name"
              class="login__form__element"
            />
            <SfInput
              v-model="lastName"
              name="last-name"
              label="Last Name"
              class="login__form__element"
            />
            <SfInput
              v-model="email"
              name="email"
              label="Your email"
              class="login__form__element"
            />
            <SfInput
              v-model="password"
              name="password"
              label="Password"
              type="password"
              class="login__form__element"
            />
            <SfButton class="sf-button--full-width login__form-btn"
              >Create an account</SfButton
            >
          </div>
          <div class="login__form__action-btn-wrapper">
            <SfButton
              class="sf-button--text color-secondary"
              @click="onBtnClick('join')"
              >or Log In To Your Account</SfButton
            >
          </div>
        </div>
      </transition>
    </SfModal>
  </div>
</template>
<script>
import {
  SfBar,
  SfImage,
  SfModal,
  SfInput,
  SfButton,
  SfCheckbox,
  SfHeading
} from "@storefront-ui/vue";
export default {
  name: "Login",
  components: {
    SfBar,
    SfImage,
    SfModal,
    SfInput,
    SfButton,
    SfCheckbox,
    SfHeading
  },
  data() {
    return {
      isMyAccount: true,
      isLogin: false,
      isSignIn: false,
      loginHeadinglevel: 1,
      titleText: "Come on in!",
      subtitleText: `View orders and update your details.
         Make your checkout fast and easy!`,
      bottomHeadingLevel: 3,
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
  },
  methods: {
    onBtnClick(btn) {
      this.isMyAccount = false;
      if (btn === "signIn") {
        this.isSignIn = true;
        this.isLogin = false;
      } else if (btn === "join") {
        this.isLogin = true;
        this.isSignIn = false;
      }
    },
    onScreenChange() {
      if (this.isSignIn === true) {
        return "Join Vue Storefront";
      } else if (this.isLogin === true) {
        return "Log In";
      } else {
        return "My Account";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.login {
  --modal-height: 100%;
  --modal-content-padding: var(--spacer-lg) var(--spacer-base) var(--spacer-2xl)
    var(--spacer-base);
  &__bar {
    height: 3.125rem;
  }
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .sf-image {
      margin: 0 0 0 var(--spacer-2xl);
    }
  }
  &__heading {
    margin: var(--spacer-2xl) 0 var(--spacer-xl) 0;
    &__title {
      color: var(--c-primary);
      font-family: var(--font-family-secondary);
      font-size: var(--h1-font-size);
      font-weight: var(--font-semibold);
    }
    &__subtitle {
      color: var(--c-secondary-variant);
      font-family: var(--font-family-primary);
      font-size: var(--font-base);
    }
  }
  &__btn {
    --button-width: 100%;
    --button-height: 4.0625rem;
    &--login {
      margin: var(--spacer-sm);
    }
  }
  &__form {
    margin: var(--spacer-xl) 0 var(--spacer-lg) 0;
    &__container {
      margin: 0 0 var(--spacer-2xl) 0;
    }

    &__element {
      margin: 0 0 var(--spacer-sm) 0;
      &--checkbox {
        margin: var(--spacer-lg) 0 var(--spacer-2xl);
      }
    }
    &__btn {
      margin: var(--spacer-xl) 0 0 0;
    }
    &__bottom-btn-wrapper,
    &__action-btn-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &__bottom-btn-wrapper {
      margin: var(--spacer-xl) 0 0 0;
    }
    &__bottom-heading {
      color: var(--c-primary);
    }
  }
}
@include for-desktop {
  .login {
    --modal-height: auto;
    --modal-content-padding: var(--spacer-lg);
    &__bar {
      background: var(--c-white);
    }
  }
}
</style>
