<template>
  <SfTabs :open-tab="1" class="tab-orphan">
    <SfTab title="My newsletter">
      <p class="message">
        Set up your newsletter and we will send you information about new
        products and trends from the sections you selected every week.
      </p>
      <div class="form">
        <p class="form__title">Sections that interest you</p>
        <div class="form__checkbox-group">
          <SfCheckbox
            v-model="newsletter"
            label="Woman"
            value="woman"
            class="form__element"
          />
          <SfCheckbox
            v-model="newsletter"
            label="Man"
            value="man"
            class="form__element"
          />
          <SfCheckbox
            v-model="newsletter"
            label="Children"
            value="children"
            class="form__element"
          />
        </div>
        <SfButton class="form__button">Save changes</SfButton>
      </div>
      <p class="notice">
        I have read and understand the <a href="#">Privacy</a> and
        <a href="#">Cookies Policy</a> and agree to receive personalized
        commercial information from Brand name by email.
      </p>
    </SfTab>
  </SfTabs>
</template>
<script>
import { SfTabs, SfCheckbox, SfButton } from "@storefront-ui/vue";

export default {
  name: "MyNewsletter",
  components: { SfTabs, SfCheckbox, SfButton },
  data() {
    return { newsletter: "" };
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

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
    font: 500 var(--font-size-regular) / 1.6 var(--font-family-secondary);
  }
  &__button {
    --button-width: 100%;
    @include for-desktop {
      --button-width: auto;
    }
  }
}
.message {
  margin: 0 0 var(--spacer-xl) 0;
  font: var(--font-light) var(--font-base) / 1.6 var(--font-family-primary);
  color: var(--c-dark-variant);
  &__label {
    color: var(--c-text);
  }
}
a {
  color: var(--c-primary);
  text-decoration: none;
  &:hover {
    color: var(--c-text);
  }
}
.notice {
  max-width: 31rem;
  margin: var(--spacer-base) 0 0 0;
  font: var(--font-normal) var(--font-2xs) / 1.6 var(--font-family-primary);
}
</style>
