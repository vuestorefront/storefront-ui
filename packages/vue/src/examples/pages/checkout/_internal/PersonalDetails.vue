<template>
  <div id="personal-details">
    <div class="log-in">
      <SfButton class="log-in__button sf-button--full-width color-secondary"
        >Log in to your account</SfButton
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
        <p class="info__heading">
          Enjoy these perks with your free account!
        </p>
        <SfCharacteristic
          v-for="(characteristic, key) in characteristics"
          :key="key"
          :description="characteristic.description"
          :icon="characteristic.icon"
          size-icon="24px"
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
      <transition name="sf-fade">
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
      <div class="form__action">
        <SfButton
          class="sf-button--full-width form__action-button"
          @click="$emit('click:next')"
          >{{ buttonName }}
        </SfButton>
        <SfButton
          class="sf-button--full-width sf-button--underlined form__action-button form__action-button--secondary smartphone-only"
          >Go back
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
  SfCharacteristic,
} from "@storefront-ui/vue";
export default {
  name: "PersonalDetails",
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
        { description: "Full rewards program benefits", icon: "rewards" },
        { description: "Earn credits with every purchase", icon: "credits" },
        { description: "Manage your wishliste", icon: "heart" },
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
  --heading-padding: var(--spacer-base) 0;
  @include for-desktop {
    --heading-title-font-size: var(--h3-font-size);
    --heading-padding: 0 0 var(--spacer-base) 0;
  }
}
.log-in {
  &__info {
    margin: var(--spacer-lg) 0;
    color: var(--c-dark-variant);
    font: var(--font-weight--normal) var(--font-size--base) / 1.6
      var(--font-family--secondary);
    // margin-top: var(--spacer-base);
    @include for-desktop {
      font-weight: var(--font-weight--normal);
      font-size: var(--font-size--sm);
    }
  }
  &__button {
    margin: var(--spacer-xl) 0 var(--spacer-base) 0;
    @include for-desktop {
      --button-width: 25rem;
    }
  }
}
.info {
  margin: 0 0 var(--spacer-xl) 0;
  &__heading {
    font-family: var(--font-family--secondary);
    font-weight: var(--font-weight--normal);
    margin-bottom: var(--spacer-base);
  }
  &__characteristic {
    --characteristic-description-font-size: var(--font-size--base);
    margin: 0 0 var(--spacer-sm) var(--spacer-2xs);
  }
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    &__heading {
      flex: 100%;
      margin: 0 0 var(--spacer-sm) 0;
      font-size: var(--font-size--xs);
    }
    &__characteristic {
      margin: 0 0 var(--spacer-base) 0;
      flex: 0 50%;
      &:nth-child(even) {
        margin-right: var(--spacer-2xl);
        flex: 1;
      }
    }
  }
}
.form {
  &__element {
    --input-label-font-size: var(--font-size--base);
    --input-padding: var(--spacer-sm) 0 var(--spacer-2xs) 0;
    margin: 0 0 var(--spacer-xl) 0;
  }
  &__checkbox {
    margin: var(--spacer-base) 0;
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
