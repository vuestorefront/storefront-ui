<template>
  <SfTabs :open-tab="1" class="tab-orphan">
    <SfTab title="Loyalty Card">
      <p class="message">
        This feature is not implemented yet! Please take a look at<br />
        <a href="#">https://github.com/DivanteLtd/vue-storefront/issues </a>
        for our Roadmap!
      </p>
    </SfTab>
  </SfTabs>
</template>
<script>
import { SfTabs } from "@storefront-ui/vue";
export default {
  name: "SfLoyaltyCard",
  components: { SfTabs },
};
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
.message {
  margin: 0 0 var(--spacer-sm) 0;
  color: var(--c-dark-variant);
}
a {
  font-weight: var(--font-weight--medium);
  color: var(--c-primary);
  text-decoration: none;
  &:hover {
    color: var(--c-text);
  }
}
</style>
