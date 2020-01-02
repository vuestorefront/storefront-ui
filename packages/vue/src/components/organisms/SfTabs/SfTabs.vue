<template>
  <div class="sf-tabs">
    <!--@slot Default. Here you should pass your tabs-->
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
import SfTab from "./_internal/SfTab.vue";
Vue.component("SfTab", SfTab);
export default {
  name: "SfTabs",
  props: {
    /** Which tab should be open at the beginning  */
    openTab: {
      type: Number,
      default: 1
    }
  },
  mounted() {
    this.$on("toggle", this.toggle);
    if (this.openTab) this.openChild();
  },
  methods: {
    toggle(id) {
      this.$children.forEach(child => {
        child._uid === id
          ? (child.isActive = !child.isActive)
          : (child.isActive = false);
      });
    },
    openChild() {
      if (this.openTab < this.$children.length + 1) {
        this.$children[this.openTab - 1].isActive = true;
      }
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfTabs.scss";
</style>
