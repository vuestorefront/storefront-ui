<template>
  <div id="error">
    <SfImage
      class="image"
      :src="require('@storefront-ui/shared/icons/error.svg')"
    />
    <SfHeading
      title="Page not found"
      :level="2"
      subtitle="We are sorry that we can’t find the page, please go back or try again"
      class="heading sf-heading--no-underline"
    />
    <div class="actions">
      <SfButton class="sf-button--full-width actions__button">
        Return to home
      </SfButton>
      <SfButton class="sf-button--full-width sf-button--text actions__button">
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
#error {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    margin: 0 auto;
    max-width: 1240px;
  }
}
.image {
  --image-width: 12.3125rem;
  padding: var(--spacer-xl) 0;
  @include for-desktop {
    --image-width: 22rem;
    padding: var(--spacer-2xl) 0;
  }
}
.heading {
  --heading-title-margin: 0 0 var(--spacer-base);
  --heading-title-color: var(--c-primary);
  --heading-subtitle-color: var(--c-secondary-variant);
  --heading-subtitle-font-size: var(--font-base);
  --heading-subtitle-margin: 0 var(--spacer-base);
  --heading-subtitle-font-family: var(--font-family-primary);
  --heading-title-font-weight: var(--font-semibold);
  @include for-desktop {
    --heading-title-font-size: 5rem;
    --heading-subtitle-margin: 0;
  }
}
.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  margin: var(--spacer-xl) 0 0 0;
  &__button {
    &:last-child {
      margin: var(--spacer-base) 0;
    }
  }
  @include for-desktop {
    margin: var(--spacer-2xl) 0 0 0;
    &__button {
      --button-width: 20.9375rem;
    }
  }
}
</style>
