<template>
  <div id="personal-details">
    <div class="log-in desktop-only">
      <SfButton class="log-in__button color-secondary"
        >Log in to your account</SfButton
      >
      <p class="log-in__info">or fill the details below:</p>
    </div>
    <SfHeading
      title="1. Personal details"
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
        <p class="info__heading">
          Enjoy these perks with your free account!
        </p>
        <SfCharacteristic
          v-for="(characteristic, key) in characteristics"
          :key="key"
          :description="characteristic.description"
          :icon="characteristic.icon"
          size-icon="0.75rem"
          class="info__characteristic"
        />
      </div>
      <div class="form__element">
        <SfCheckbox
          v-model="createAccount"
          name="createAccount"
          label="I want to create an account"
          class="form__checkbox"
        />
      </div>
      <transition name="fade">
        <SfInput
          v-if="createAccount"
          v-model="password"
          :has-show-password="true"
          type="password"
          label="Create Password"
          class="form__element"
          required
        />
      </transition>
      <div class="form__action mobile-only">
        <SfButton
          class="sf-button--full-width form__action-button"
          @click="$emit('click:next')"
          >{{ buttonName }}
        </SfButton>
        <SfButton
          class="sf-button--full-width sf-button--text form__action-button form__action-button--secondary"
          >or log in to your account
        </SfButton>
      </div>
    </div>
  </div>
</template>
<script>
import {
  SfInput,
  SfCheckbox,
  SfButton,
  SfHeading,
  SfCharacteristic
} from "@storefront-ui/vue";

export default {
  name: "PersonalDetails",
  components: {
    SfInput,
    SfCheckbox,
    SfButton,
    SfHeading,
    SfCharacteristic
  },
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    buttonName: {
      type: String,
      default: ""
    }
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
        { description: "Full rewards program benefits", icon: "rewards" },
        { description: "Earn credits with every purchase", icon: "credits" },
        { description: "Manage your wishliste", icon: "heart" }
      ]
    };
  },
  methods: {
    updateField(fieldName, fieldValue) {
      this.$emit("input", {
        ...this.value,
        [fieldName]: fieldValue
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

.title {
  --heading-padding: var(--spacer-sm) 0;
  @include for-desktop {
    --heading-padding: 0 0 var(--spacer-base) 0;
  }
}
.log-in {
  &__info {
    padding: var(--spacer-lg) 0;
    color: var(--c-dark-variant);
  }
  &__button {
    margin: var(--spacer-2xl) 0 var(--spacer-xl) 0;
  }
}
.info {
  margin: 0 0 var(--spacer-xl) 0;
  &__heading {
    font-family: var(--font-family-primary);
    font-weight: var(--font-light);
  }
  &__characteristic {
    --characteristic-description-font-size: var(--font-xs);
    margin: 0 0 var(--spacer-sm) var(--spacer-2xs);
  }
  @include for-desktop {
    margin: 0;
    &__heading {
      margin: 0 0 var(--spacer-sm) 0;
      font-size: var(--font-xs);
    }
    &__characteristic {
      margin: var(--spacer-base) 0;
    }
  }
}
.form {
  &__checkbox {
    margin: var(--spacer-base) 0;
  }

  &__action-button {
    &:first-child {
      --button-height: 4.0625rem;
      margin: var(--spacer-sm) 0 0 0;
    }
    &--secondary {
      margin: var(--spacer-base) 0;
    }
  }
  @include for-mobile {
    &__checkbox {
      --checkbox-font-family: var(--font-family-primary);
      --checkbox-font-weight: var(--font-light);
      --checkbox-font-size: var(--font-sm);
    }
  }
  @include for-desktop {
    margin: 0 var(--spacer-2xl) 0 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    &__element {
      margin: 0 0 var(--spacer-base) 0;
      flex: 0 0 100%;
      &--half {
        flex: 1 1 50%;
        &-even {
          padding: 0 0 0 var(--spacer-lg);
        }
      }
    }
  }
}
</style>
