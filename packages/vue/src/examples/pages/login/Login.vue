<template>
  <SfModal
    class="log-in"
    :visible="true"
    :back="false"
    :cross="false"
    :title="modalTitle"
  >
    <transition name="fade" mode="out-in">
      <div v-if="isLogIn" key="log-in" class="form__container">
        <div class="form">
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
          <SfButton class="sf-button--full-width form__action-button">
            Log In
          </SfButton>
        </div>
        <div class="form__action-button-wrapper">
          <SfButton class="sf-button--text color-secondary">
            Forgotten password?
          </SfButton>
        </div>
        <div
          class="form__action-button-wrapper form__action-button-wrapper--secondary"
        >
          <SfHeading
            title="Don't have an account yet?"
            class="form__heading"
            :level="formHeadingLevel"
          />
          <SfButton
            class="sf-button--text color-secondary"
            @click="isLogIn = false"
          >
            Register now
          </SfButton>
        </div>
      </div>
      <div v-else key="sign-up" class="form__container">
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
            type="email"
          />
          <SfInput
            v-model="password"
            name="password"
            label="Password"
            type="password"
            class="form__element"
          />
          <SfButton class="sf-button--full-width form__action-button">
            Create an account
          </SfButton>
        </div>
        <div class="form__action-button-wrapper">
          <SfButton
            class="sf-button--text color-secondary"
            @click="isLogIn = true"
          >
            or Log In To Your Account
          </SfButton>
        </div>
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
  SfHeading
} from "@storefront-ui/vue";
export default {
  name: "Login",
  components: {
    SfModal,
    SfInput,
    SfButton,
    SfCheckbox,
    SfHeading
  },
  data() {
    return {
      isLogIn: true,
      formHeadingLevel: 3,
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
      }
    };
  },
  computed: {
    modalTitle() {
      return this.isLogIn ? "Log In" : "Join Vue Storefront";
    }
  },
  watch: {
    isLogIn() {
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
.log-in {
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
}
.heading {
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
.action-button {
  --button-width: 100%;
  --button-height: 4.0625rem;
  &--secondary {
    margin: var(--spacer-sm);
  }
}
.form {
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
  &__action-button {
    margin: var(--spacer-xl) 0 0 0;
  }
  &__action-button-wrapper,
  &__action-button-wrapper--secondary {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__action-button-wrapper--secondary {
    margin: var(--spacer-xl) 0 0 0;
  }
  &__heading {
    color: var(--c-primary);
  }
}
@include for-desktop {
  .log-in {
    --modal-height: auto;
    --modal-content-padding: var(--spacer-lg);
    &__bar {
      background: var(--c-white);
    }
  }
}
</style>
