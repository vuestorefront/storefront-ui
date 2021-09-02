<template>
  <div id="personal-details">
    <div class="log-in">
      <SfButton
        class="log-in__button sf-button--full-width color-secondary"
        data-testid="login-button"
        >Log into your account</SfButton
      >
      <p class="log-in__info">or fill the details below:</p>
    </div>
    <SfHeading
      title="Personal details"
      :level="3"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="form">
      <SfInput
        v-model="firstName"
        :value="firstName"
        label="First name"
        name="firstName"
        class="form__element form__element--half"
        required
        @input="updateField('firstName', $event)"
      />
      <SfInput
        v-model="lastName"
        :value="lastName"
        label="Last name"
        name="lastName"
        class="form__element form__element--half form__element--half-even"
        required
        @input="updateField('lastName', $event)"
      />
      <SfInput
        v-model="email"
        :value="email"
        label="Your email"
        name="email"
        class="form__element"
        required
        @input="updateField('email', $event)"
      />
      <div class="info">
        <p class="info__heading">Enjoy these perks with your free account!</p>
        <SfCharacteristic
          v-for="(characteristic, key) in characteristics"
          :key="key"
          :description="characteristic.description"
          :icon="characteristic.icon"
          size-icon="24px"
          class="info__characteristic"
        />
      </div>
      <div>
        <SfCheckbox
          v-model="createAccount"
          name="createAccount"
          label="I want to create an account"
          class="form__checkbox"
          data-testid="create-account-checkbox"
        />
      </div>
      <transition name="sf-fade">
        <SfInput
          v-if="createAccount"
          v-model="password"
          :has-show-password="true"
          type="password"
          label="Create Password"
          class="form__element"
          required
          data-testid="create-password-input"
        />
      </transition>
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
    buttonName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      createAccount: false,
      characteristics: [
        { description: "Faster checkout", icon: "clock" },
        { description: "Earn credits with every purchase", icon: "credits" },
        { description: "Full rewards program benefits", icon: "rewards" },
        { description: "Manage your wishlist", icon: "heart" },
      ],
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
