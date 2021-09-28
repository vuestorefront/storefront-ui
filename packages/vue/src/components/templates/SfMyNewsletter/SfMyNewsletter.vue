<template>
  <SfTabs :open-tab="1" class="sf-my-account-content tab-orphan">
    <SfTab :title="tabTitle" data-testid="newsletter-tab">
      <slot name="message" v-bind="{ tabDescription }">
        <p class="message">
          {{ tabDescription }}
        </p>
      </slot>
      <div class="form">
        <p class="form__title">{{ formTitle }}</p>
        <slot name="form" v-bind="{ newsletterSections }">
          <div class="form__checkbox-group">
            <SfCheckbox
              v-for="(name, i) in newsletterSections"
              :key="`${name}-${i}`"
              v-model="newsletter"
              :label="name"
              :name="name"
              :value="name"
              class="form__element"
            />
          </div>
        </slot>
        <slot name="form-button" v-bind="{ buttonText }">
          <SfButton
            class="form__button"
            data-testid="save-changes-button"
            @click="$emit('save-changes', newsletter)"
            >{{ buttonText }}</SfButton
          >
        </slot>
      </div>
      <slot name="notice">
        <p class="notice">
          I have read and understand the <a href="#">Privacy</a> and
          <a href="#">Cookies Policy</a> and agree to receive personalized
          commercial information from Brand name by email.
        </p>
      </slot>
    </SfTab>
  </SfTabs>
</template>
<script>
import { SfTabs, SfCheckbox, SfButton } from "@storefront-ui/vue"
export default {
  name: "SfMyNewsletter",
  components: { SfTabs, SfCheckbox, SfButton },
  props: {
    tabTitle: {
      type: String,
      default: "",
    },
    tabDescription: {
      type: String,
      default: "",
    },
    formTitle: {
      type: String,
      default: "",
    },
    buttonText: {
      type: String,
      default: "Save changes",
    },
    newsletterSections: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      newsletter: [],
    }
  },
}
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.tab-orphan {
  @include for-mobile {
    --tabs-title-display: none;
    --tabs-content-padding: 0;
    --tabs-conent-border-width: 0;
  }
}
.form {
  &__element {
    margin: 0 0 var(--spacer-base) 0;
    &:last-child {
      margin: 0;
    }
  }
  &__checkbox-group {
    margin: 0 0 var(--spacer-xl) 0;
  }
  &__title {
    margin: 0 0 var(--spacer-base) 0;
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
a {
  color: var(--c-primary);
  text-decoration: none;
  &:hover {
    color: var(--c-text);
  }
}
.notice {
  margin: var(--spacer-base) 0 0 0;
  font-size: var(--font-size--xs);
}
</style>
