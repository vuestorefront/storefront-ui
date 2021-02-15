<template>
  <SfTabs :open-tab="1" class="single-tab">
    <SfTab title="My reviews">
      <p class="message">
        This feature is not implemented yet! Please take a look at<br />
        <a class="link" href="#"
          >https://github.com/DivanteLtd/vue-storefront/issues for our
          Roadmap!</a
        >
      </p>
    </SfTab>
  </SfTabs>
</template>
<script>
import { SfTabs } from "@storefront-ui/vue";
export default {
  name: "MyReviews",
  components: { SfTabs },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
@import "../../shared-styles.scss";
</style>
