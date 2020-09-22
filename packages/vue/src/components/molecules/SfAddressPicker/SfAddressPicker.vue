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
  props: {
    selected: {
      type: String,
      default: "",
    },
  },
  provide() {
    const selectedValue = {};
    Object.defineProperty(selectedValue, "selected", {
      get: () => this.selected,
    });
    return {
      selectedValue,
    };
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfAddressPicker.scss";
</style>
