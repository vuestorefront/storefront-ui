<template>
  <div class="sf-address-picker">
    <slot />
  </div>
</template>
<script>
import SfAddress from "./_internal/SfAddress.vue";
import Vue from "vue";

Vue.component("SfAddress", SfAddress);
export default {
  name: "SfAddressPicker",
  model: {
    prop: "selected",
  },
  data() {
    return {
      selected: "",
    };
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfAddressPicker.scss";
</style>
