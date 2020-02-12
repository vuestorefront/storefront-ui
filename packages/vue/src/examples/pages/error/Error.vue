<template>
  <div id="error">
    <SfImage
      class="image"
      :src="{
        mobile: { url: '/assets/storybook/Error/error_mobile.svg' },
        desktop: { url: '/assets/storybook/Error/error.svg' }
      }"
    />
    <SfHeading
      title="Page not found"
      subtitle="We are sorry that we can’t find the page, please go back or try again"
      class="heading sf-heading--no-underline"
    />
    <div class="actions">
      <SfButton class="sf-button--full-width actions__button">
        Return to home
      </SfButton>
      <SfButton
        class="sf-button--full-width sf-button--text actions__button actions__button--secondary"
        @click="$emit('click:back')"
      >
        Back
      </SfButton>
    </div>
  </div>
</template>

<script>
import { SfButton, SfImage, SfHeading } from "@storefront-ui/vue";

export default {
  name: "Error",
  components: { SfButton, SfImage, SfHeading }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
@mixin for-desktop {
  @media screen and (min-width: $desktop-min) {
    @content;
  }
}
#error {
  box-sizing: border-box;
  padding: 0 1.25rem;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
  }
}
.image {
  padding: var(--spacer-extra-big);
  display: flex;
  justify-content: center;
}
.heading {
  text-align: center;
  ::v-deep .sf-heading__subtitle {
    margin-top: var(--spacer-big);
  }
}
.actions {
  margin: 6.25rem auto 0;
  max-width: 250px;
  &__button {
    &--secondary {
      margin: var(--spacer-big) 0;
    }
  }
}
</style>
