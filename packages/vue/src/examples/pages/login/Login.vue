<template>
  <div>
    <SfModal :visible="true" :cross="false" title="My Account">
      <!-- <transition name="fade" mode="out-in"> -->
      <template #modal-bar>
        <SfBar
          class="login-bar"
          :title="onScreenChange()"
          :back="true"
          :close="false"
        />
      </template>
      <div v-if="isMyAccount" class="login-container">
        <SfImage :src="src" />
        <SfHeading
          class="login-heading"
          :title="titleText"
          :subtitle="subtitleText"
          :level="loginHeadinglevel"
        >
          <template #title="{title}">
            <p class="login-heading__title">{{ title }}</p>
          </template>
          <template #subtitle>
            <p class="login-heading__subtitle">
              View orders and update your details.<br />
              Make your checkout fast and easy!
            </p>
          </template>
        </SfHeading>
        <SfButton
          class="sf-button login-button login-button--signin"
          @click="onBtnClick('signIn')"
          >SIGN IN</SfButton
        >
        <SfButton
          class="sf-button login-button login-button--login"
          @click="onBtnClick('join')"
          >JOIN</SfButton
        >
      </div>
      <div v-else-if="isLogin" key="log-in" class="form-container">
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
            :has-show-password="true"
          />
          <SfCheckbox
            v-model="rememberMe"
            name="remember-me"
            label="Remember me"
            class="form__element form__element--checkbox"
          />
          <SfButton class="sf-button--full-width form__button">Login</SfButton>
        </div>
        <div class="action">
          <SfButton class="sf-button--text color-secondary"
            >Forgotten password?</SfButton
          >
        </div>
        <div class="bottom">
          <SfHeading
            title="Don't have an account yet?"
            class="bottom-heading"
            :level="bottomHeadingLevel"
          />
          <SfButton
            class="sf-button--text color-secondary"
            @click="onBtnClick('signIn')"
            >Register now</SfButton
          >
        </div>
      </div>
      <div v-else-if="isSignIn" key="sign-up" class="form-container">
        <div class="form">
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
          />
          <SfInput
            v-model="password"
            name="password"
            label="Password"
            type="password"
            class="form__element"
          />
          <SfButton class="sf-button--full-width form__button"
            >Create an account</SfButton
          >
        </div>
        <div class="action">
          <SfButton
            class="sf-button--text color-secondary"
            @click="onBtnClick('join')"
            >or Log In To Your Account</SfButton
          >
        </div>
      </div>
      <!-- </transition> -->
    </SfModal>
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
</template>
<script>
import {
  SfBar,
  SfImage,
  SfModal,
  SfInput,
  SfButton,
  SfCheckbox,
  SfHeading,
  SfBottomNavigation,
  SfCircleIcon,
  SfIcon
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
    SfHeading,
    SfBottomNavigation,
    SfCircleIcon,
    SfIcon
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
.sf-modal {
  --modal-height: 100%;
  --modal-content-padding: var(--spacer-lg) var(--spacer-base) var(--spacer-2xl)
    var(--spacer-base);
}
.login-bar {
  height: 3.125rem;
}
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .sf-image {
    margin: 0 0 0 var(--spacer-2xl);
  }
}
// .sf-heading {
//   --heading-padding: var(--spacer-2xl) 0 var(--spacer-xl) 0;
//   &__title {
//     color: var(--c-primary);
//   }
// }
.login-heading {
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
.login-button {
  --button-width: 100%;
  --button-height: 4.0625rem;
  &--login {
    margin: var(--spacer-sm);
    --button-background: var(--c-secondary);
  }
  &--signin {
    --button-background: var(--c-primary);
  }
}

.form-container {
  margin: 0 0 var(--spacer-2xl) 0;
  .form {
    margin: var(--spacer-xl) 0 var(--spacer-lg) 0;
    &__element {
      margin: 0 0 var(--spacer-sm) 0;
      &--checkbox {
        margin: var(--spacer-lg) 0 var(--spacer-2xl);
      }
    }
    &__button {
      margin: var(--spacer-xl) 0 0 0;
    }
  }
}

.action,
.bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.action {
  margin: 0 0 var(--spacer-xl) 0;
}
.bottom {
  padding: var(--spacer-extra-big) 0 0 0;
  margin: var(--spacer-extra-big) 0 0 0;
  &-heading {
    color: var(--c-primary);
  }
}
</style>
