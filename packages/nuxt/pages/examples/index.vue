<template>
  <div>
    <SfHeading title="Example pages" />
    <SfList v-for="example in examples" :key="example">
      <nuxt-link :to="'/examples/' + example" class="sf-list__item">{{
        example
      }}</nuxt-link>
    </SfList>
  </div>
</template>

<script>
import { SfButton, SfHeading, SfList } from "@storefront-ui/vue";

export default {
  components: {
    SfButton,
    SfHeading,
    SfList
  },
  data() {
    return {
      examples: [
        "Category",
        "Checkout",
        "Home",
        "Login",
        "MyAccount",
        "Product",
        "Static",
        "ThankYou"
      ]
    };
  }
};
</script>