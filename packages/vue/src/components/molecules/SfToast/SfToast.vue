<template>
  <section class="sf-toast" :class="`sf-toast--${positionClass}`">
    <slot />
  </section>
</template>

<script>
import Vue from "vue";
import SfToastItem from "./_internal/SfToastItem.vue";
Vue.component("SfToastItem", SfToastItem);
export default {
  name: "SfToast",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return (
          [
            "top",
            "top-left",
            "top-right",
            "bottom",
            "bottom-right",
            "bottom-left",
          ].indexOf(value) > -1
        );
      },
    },
    transition: {
      type: String,
      default: "sf-collapse-top",
    },
    duration: {
      type: Number,
      default: 2000,
    },
  },
  computed: {
    positionClass() {
      switch (this.position) {
        case "top":
        case "top-left":
        case "top-right":
          return "top";
        case "bottom":
        case "bottom-left":
        case "bottom-right":
          return "bottom";
        default:
          return "";
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfToast.scss";
</style>
