<template>
  <SfTabs class="sf-my-profile" :open-tab="1">
    <SfTab :title="tabsTitles[0]">
      <slot name="personal-data-message" v-bind="{ personalDataDescription }">
        <p class="message">
          {{ personalDataDescription }}
        </p>
      </slot>
      <div class="form" v-bind="{ personalInputsLabels, buttonsTexts }">
        <slot name="personal-data-form">
          <SfInput
            v-model="firstName"
            name="firstName"
            :label="personalInputsLabels[0]"
            required
            class="form__element form__element--half"
          />
          <SfInput
            v-model="lastName"
            name="lastName"
            :label="personalInputsLabels[1]"
            required
            class="form__element form__element--half form__element--half-even"
          />
          <SfInput
            v-model="email"
            type="email"
            name="email"
            :label="personalInputsLabels[2]"
            required
            class="form__element"
          />
          <SfButton
            class="form__button"
            data-testid="save-changes-button"
            @click="updatePersonal"
          >
            {{ buttonsTexts[0] }}
          </SfButton>
        </slot>
      </div>
      <slot name="personal-data-notice">
        <p class="notice">
          At Brand name, we attach great importance to privacy issues and are
          committed to protecting the personal data of our users. Learn more
          about how we care and use your personal data in the
          <a href="">Privacy Policy.</a>
        </p>
      </slot>
    </SfTab>
    <SfTab :title="tabsTitles[1]">
      <slot name="password-change-message">
        <p class="message">
          {{ passwordChangeDescription[0] }}<br />{{
            passwordChangeDescription[1]
          }}
          <span class="message__label">{{ passwordChangeEmail }}</span>
        </p>
      </slot>
      <div class="form">
        <slot
          name="password-change-form"
          v-bind="{ passwordInputsLabels, buttonsTexts }"
        >
          <SfInput
            v-model="currentPassword"
            type="password"
            name="currentPassword"
            :label="passwordInputsLabels[0]"
            required
            class="form__element"
          />
          <SfInput
            v-model="newPassword"
            type="password"
            name="newPassword"
            :label="passwordInputsLabels[1]"
            required
            class="form__element form__element--half"
          />
          <SfInput
            v-model="repeatPassword"
            type="password"
            name="repeatPassword"
            :label="passwordInputsLabels[2]"
            required
            class="form__element form__element--half form__element--half-even"
          />
          <SfButton
            class="form__button"
            data-testid="update-password-button"
            @click="updatePassword"
          >
            {{ buttonsTexts[1] }}
          </SfButton>
        </slot>
      </div>
    </SfTab>
  </SfTabs>
</template>
<script>
import { SfTabs, SfInput, SfButton } from "@storefront-ui/vue"
export default {
  name: "SfMyProfile",
  components: {
    SfTabs,
    SfInput,
    SfButton,
  },
  props: {
    tabsTitles: {
      type: Array,
      default: () => ["Personal data", "Password change"],
    },
    account: {
      type: Object,
      default: () => ({}),
    },
    personalInputsLabels: {
      type: Array,
      default: () => ["First Name", "Last Name", "Your e-mail"],
    },
    passwordInputsLabels: {
      type: Array,
      default: () => ["Current Password", "New Password", "Repeat Password"],
    },
    buttonsTexts: {
      type: Array,
      default: () => ["Save changes", "Update password"],
    },
    personalDataDescription: {
      type: String,
      default:
        "Feel free to edit any of your details below so your account is always up to date",
    },
    passwordChangeDescription: {
      type: Array,
      default: () => [
        "If you want to change the password to access your account, enter the following information:",
        "Your current email address is",
      ],
    },
    passwordChangeEmail: {
      type: String,
      default: "example@email.com",
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
    }
  },
  watch: {
    account: {
      handler(value) {
        this.firstName = value.firstName
        this.lastName = value.lastName
        this.email = value.email
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
      }
      this.$emit("update:personal", personal)
    },
    updatePassword() {
      const password = {
        password: this.newPassword,
      }
      this.$emit("update:password", password)
    },
  },
}
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
