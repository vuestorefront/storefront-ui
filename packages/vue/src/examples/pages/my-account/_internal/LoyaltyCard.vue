<template>
  <SfTabs :open-tab="1" class="single-tab">
    <SfTab title="Loyalty Card">
      <p class="message">
        This feature is not implemented yet! Please take a look at<br />
        <a class="link" href="#"
          >https://github.com/DivanteLtd/vue-storefront/issues
        </a>
        for our Roadmap!
      </p>
    </SfTab>
  </SfTabs>
</template>
<script>
import { SfTabs } from "@storefront-ui/vue";
export default {
  name: "LoyalityCard",
  components: { SfTabs },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
@import "../../shared-styles.scss";
</style>
