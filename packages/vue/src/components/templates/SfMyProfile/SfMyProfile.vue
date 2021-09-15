<template>
  <SfTabs class="sf-my-profile" :open-tab="1">
    <SfTab title="Personal data">
      <p class="message">
        Feel free to edit any of your details below so your account is always up
        to date
      </p>
      <div class="form">
        <SfInput
          v-model="firstName"
          name="firstName"
          label="First Name"
          required
          class="form__element form__element--half"
        />
        <SfInput
          v-model="lastName"
          name="lastName"
          label="Last Name"
          required
          class="form__element form__element--half form__element--half-even"
        />
        <SfInput
          v-model="email"
          type="email"
          name="email"
          label="Your e-mail"
          required
          class="form__element"
        />
        <SfButton
          class="form__button"
          data-testid="save-changes-button"
          @click="updatePersonal"
        >
          Save changes
        </SfButton>
      </div>
      <p class="notice">
        At Brand name, we attach great importance to privacy issues and are
        committed to protecting the personal data of our users. Learn more about
        how we care and use your personal data in the
        <a href="">Privacy Policy.</a>
      </p>
    </SfTab>
    <SfTab title="Password change">
      <p class="message">
        If you want to change the password to access your account, enter the
        following information:<br />Your current email address is
        <span class="message__label">example@email.com</span>
      </p>
      <div class="form">
        <SfInput
          v-model="currentPassword"
          type="password"
          name="currentPassword"
          label="Current Password"
          required
          class="form__element"
        />
        <SfInput
          v-model="newPassword"
          type="password"
          name="newPassword"
          label="New Password"
          required
          class="form__element form__element--half"
        />
        <SfInput
          v-model="repeatPassword"
          type="password"
          name="repeatPassword"
          label="Repeat Password"
          required
          class="form__element form__element--half form__element--half-even"
        />
        <SfButton
          class="form__button"
          data-testid="update-password-button"
          @click="updatePassword"
        >
          Update password
        </SfButton>
      </div>
    </SfTab>
  </SfTabs>
</template>
<script>
import { SfTabs, SfInput, SfButton } from "@storefront-ui/vue";
export default {
  name: "SfMyProfile",
  components: {
    SfTabs,
    SfInput,
    SfButton,
  },
  props: {
    account: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      repeatPassword: "",
    };
  },
  watch: {
    account: {
      handler(value) {
        this.firstName = value.firstName;
        this.lastName = value.lastName;
        this.email = value.email;
      },
      immediate: true,
    },
  },
  methods: {
    updatePersonal() {
      const personal = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      };
      this.$emit("update:personal", personal);
    },
    updatePassword() {
      const password = {
        password: this.newPassword,
      };
      this.$emit("update:password", password);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.form {
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__element {
    margin: 0 0 var(--spacer-lg) 0;
    @include for-desktop {
      flex: 0 0 100%;
    }
    &--half {
      @include for-desktop {
        flex: 1 1 50%;
      }
      &-even {
        @include for-desktop {
          padding: 0 0 0 var(--spacer-lg);
        }
      }
    }
  }
  &__button {
    --button-width: 100%;
    @include for-desktop {
      --button-width: 17.5rem;
    }
  }
}
.message {
  margin: 0 0 var(--spacer-xl) 0;
  color: var(--c-dark-variant);
}
.notice {
  margin: var(--spacer-base) 0 0 0;
  font-size: var(--font-size--sm);
}
a {
  color: var(--c-primary);
  text-decoration: none;
  &:hover {
    color: var(--c-text);
  }
}
</style>
