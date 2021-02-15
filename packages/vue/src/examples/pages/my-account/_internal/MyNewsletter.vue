<template>
  <SfTabs :open-tab="1" class="single-tab">
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
            name="Woman"
            value="woman"
            class="form__element"
          />
          <SfCheckbox
            v-model="newsletter"
            label="Man"
            name="Man"
            value="man"
            class="form__element"
          />
          <SfCheckbox
            v-model="newsletter"
            label="Children"
            name="Children"
            value="children"
            class="form__element"
          />
        </div>
        <SfButton class="form__button">Save changes</SfButton>
      </div>
      <p class="notice">
        I have read and understand the <a class="link" href="#">Privacy</a> and
        <a class="link" href="#">Cookies Policy</a> and agree to receive
        personalized commercial information from Brand name by email.
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
    return {
      newsletter: [],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
@import "../../shared-styles.scss";
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
</style>
