<template>
  <div class="sf-personal-details">
    <div class="log-in">
      <slot name="log-in" v-bind="{ buttonText, logInInfo }">
        <SfButton
          class="log-in__button sf-button--full-width color-secondary"
          data-testid="login-button"
          >{{ buttonText }}</SfButton
        >
        <p class="log-in__info">{{ logInInfo }}</p>
      </slot>
    </div>
    <slot name="heading" v-bind="{ headingTitle, headingTitleLevel }">
      <SfHeading
        :title="headingTitle"
        :level="headingTitleLevel"
        class="sf-heading--left sf-heading--no-underline title"
      />
    </slot>
    <div class="form">
      <slot
        name="form"
        v-bind="{ inputsLabels, additionalDeatils, characteristics }"
      >
        <SfInput
          v-model="firstName"
          :value="firstName"
          :label="inputsLabels[0]"
          name="firstName"
          class="form__element form__element--half"
          required
          @input="updateField('firstName', $event)"
        />
        <SfInput
          v-model="lastName"
          :value="lastName"
          :label="inputsLabels[1]"
          name="lastName"
          class="form__element form__element--half form__element--half-even"
          required
          @input="updateField('lastName', $event)"
        />
        <SfInput
          v-model="email"
          :value="email"
          :label="inputsLabels[2]"
          name="email"
          class="form__element"
          required
          @input="updateField('email', $event)"
        />
        <div class="info">
          <slot
            name="additional-info"
            v-bind="{ additionalDeatils, characteristics }"
          >
            <p class="info__heading">
              {{ additionalDeatils }}
            </p>
            <SfCharacteristic
              v-for="(characteristic, key) in characteristics"
              :key="key"
              :description="characteristic.description"
              :icon="characteristic.icon"
              :size-icon="characteristic.size"
              class="info__characteristic"
            />
          </slot>
        </div>
        <slot
          name="ceate-account"
          v-bind="{
            createAccountCheckboxLabel,
            createAccountTransition,
            createAccountInputLabel,
          }"
        >
          <SfCheckbox
            v-model="createAccount"
            name="createAccount"
            :label="createAccountCheckboxLabel"
            class="form__checkbox"
            data-testid="create-account-checkbox"
          />
          <transition :name="createAccountTransition">
            <SfInput
              v-if="createAccount"
              v-model="password"
              :has-show-password="true"
              type="password"
              :label="createAccountInputLabel"
              class="form__element"
              required
              data-testid="create-password-input"
            />
          </transition>
        </slot>
      </slot>
    </div>
  </div>
</template>
<script>
import {
  SfInput,
  SfCheckbox,
  SfButton,
  SfHeading,
  SfCharacteristic,
} from "@storefront-ui/vue";
export default {
  name: "SfPersonalDetails",
  components: {
    SfInput,
    SfCheckbox,
    SfButton,
    SfHeading,
    SfCharacteristic,
  },
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    buttonText: {
      type: String,
      default: "Log into your account",
    },
    logInInfo: {
      type: String,
      default: "or fill the details below:",
    },
    headingTitle: {
      type: String,
      default: "Personal details",
    },
    headingTitleLevel: {
      type: Number,
      default: 3,
    },
    inputsLabels: {
      type: Array,
      default: () => ["First name", "Last name", "Your email"],
    },
    additionalDeatils: {
      type: String,
      default: "Enjoy these perks with your free account!",
    },
    characteristics: {
      type: Array,
      default: () => [
        { description: "Faster checkout", icon: "clock", size: "24px" },
        {
          description: "Earn credits with every purchase",
          icon: "credits",
          size: "24px",
        },
        {
          description: "Full rewards program benefits",
          icon: "rewards",
          size: "24px",
        },
        { description: "Manage your wishlist", icon: "heart", size: "24px" },
      ],
    },
    createAccountTransition: {
      type: String,
      default: "sf-fade",
    },
    createAccountCheckboxLabel: {
      type: String,
      default: "I want to create an account",
    },
    createAccountInputLabel: {
      type: String,
      default: "Create Password",
    },
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      createAccount: false,
    };
  },
  watch: {
    personalDetails: {
      handler() {
        this.firstName = this.value.firstName;
        this.lastName = this.value.lastName;
        this.email = this.value.email;
      },
      immediate: true,
    },
    createAccount(value) {
      if (!value) this.password = "";
    },
  },
  methods: {
    updateField(fieldName, fieldValue) {
      this.$emit("input", {
        ...this.value,
        [fieldName]: fieldValue,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.title {
  --heading-padding: var(--spacer-xl) 0 var(--spacer-base);
  --heading-title-font-weight: var(--font-weight--bold);
  @include for-desktop {
    --heading-title-font-size: var(--h3-font-size);
    --heading-title-font-weight: var(--font-weight--semibold);
    --heading-padding: var(--spacer-xl) 0;
  }
}
.log-in {
  &__info {
    margin: 0;
    color: var(--c-dark-variant);
    font: var(--font-weight--medium) var(--font-size--base) / 1.6
      var(--font-family--secondary);
    @include for-desktop {
      font-weight: var(--font-weight--normal);
    }
  }
  &__button {
    margin: var(--spacer-xl) 0 var(--spacer-base) 0;
    @include for-desktop {
      margin: var(--spacer-xl) 0;
      --button-width: 25rem;
    }
  }
}
.info {
  &__heading {
    font-family: var(--font-family--secondary);
    font-weight: var(--font-weight--medium);
    color: var(--c-link);
    margin-bottom: var(--spacer-base);
  }
  &__characteristic {
    --characteristic-description-font-size: var(--font-size--base);
    margin: 0 0 var(--spacer-base) var(--spacer-2xs);
  }
  @include for-desktop {
    width: 37.5rem;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    &__heading {
      flex: 100%;
      margin: 0 0 var(--spacer-lg) 0;
    }
    &__characteristic {
      margin: 0 0 var(--spacer-2xs) 0;
      flex: 0 50%;
      box-sizing: border-box;
      padding-right: var(--spacer-3xl);
      &:nth-of-type(2),
      &:nth-of-type(3) {
        padding-right: var(--spacer-2xl);
      }
    }
  }
}
.form {
  &__element {
    --input-padding: var(--spacer-sm) 0 var(--spacer-2xs) 0;
    margin: 0 0 var(--spacer-base) 0;
  }
  &__checkbox {
    margin: var(--spacer-base) 0 var(--spacer-xl);
    --checkbox-font-family: var(--font-family--primary);
    --checkbox-font-size: var(--font-size--base);
  }
  &__action-button {
    &:first-child {
      margin: var(--spacer-sm) 0 0 0;
    }
    &--secondary {
      margin: var(--spacer-base) 0;
    }
    @include for-desktop {
      --button-width: 25rem;
    }
  }
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    &__element {
      margin: 0 0 var(--spacer-base) 0;
      flex: 0 0 100%;
      &--half {
        flex: 1 1 50%;
        &-even {
          padding: 0 0 0 var(--spacer-base);
        }
      }
    }
    &__checkbox {
      margin: var(--spacer-lg) 0 var(--spacer-xl);
    }
  }
}
</style>
