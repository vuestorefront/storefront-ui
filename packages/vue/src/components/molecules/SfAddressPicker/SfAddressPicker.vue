<template>
  <div class="sf-address-picker">
    <!--@slot Default. Here you should pass your addresses-->
    <slot />
  </div>
</template>
<script>
import SfAddress from "./_internal/SfAddress.vue";
import Vue from "vue";

Vue.component("SfAddress", SfAddress);
export default {
  name: "SfAddressPicker",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selectedValue: this.value,
    };
  },
  provide() {
    return {
      getSelectedValue: this.getSelectedValue,
      setSelectedValue: this.setSelectedValue,
    };
  },
  watch: {
    value(newVal) {
      this.selectedValue = newVal;
    },
  },
  methods: {
    getSelectedValue() {
      return this.selectedValue;
    },
    setSelectedValue(newVal) {
      const newValue = newVal;
      this.selectedValue = newValue;
      this.$emit("change", newValue);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfAddressPicker.scss";
</style>
