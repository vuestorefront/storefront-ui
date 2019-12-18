<template>
  <div>
    <SfHeading
      title="1. Personal Details"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="form">
      <SfInput
        v-model="firstName"
        label="First name"
        name="firstName"
        class="form__element form__element--half"
        required
      />
      <SfInput
        v-model="lastName"
        label="Last name"
        name="lastName"
        class="form__element form__element--half form__element--half-even"
        required
      />
      <SfInput
        v-model="email"
        label="Your email"
        name="email"
        class="form__element"
        required
      />
      <SfCheckbox
        v-model="createAccount"
        name="createAccount"
        label="I want to create an account"
        class="form__element"
      />
      <transition name="fade">
        <SfInput
          v-if="createAccount"
          v-model="password"
          type="password"
          label="Create Password"
          class="form__element"
          required
        />
      </transition>
      <SfButton @click="$emit('click:next')">Continue to shipping</SfButton>
      <div class="form__action">
        or
        <SfButton class="sf-button--text">log in to your account</SfButton>
      </div>
    </div>
  </div>
</template>
<script>
import {
  SfInput,
  SfCheckbox,
  SfButton,
  SfHeading
} from "../../../../../index.js";
export default {
  name: "PersonalDetails",
  components: {
    SfInput,
    SfCheckbox,
    SfButton,
    SfHeading
  },
  data() {
    return {
      firstName: "Adam",
      lastName: "Kowalski",
      email: "akowalski@divante.pl",
      password: "howcoolisthat?",
      createAccount: true
    };
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
@mixin for-desktop {
  @media screen and (min-width: $desktop-min) {
    @content;
  }
}
.title {
  margin-bottom: $spacer-extra-big;
}
.form {
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__element {
    margin-bottom: $spacer-extra-big;
    @include for-desktop {
      flex: 0 0 100%;
    }
    &--half {
      @include for-desktop {
        flex: 1 1 50%;
      }
      &-even {
        @include for-desktop {
          padding-left: $spacer-extra-big;
        }
      }
    }
  }
  &__action {
    flex: none;
    margin-left: auto;
  }
}
</style>
