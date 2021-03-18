<template>
  <div class="sf-tabs">
    <!--@slot Default. Here you should pass your tabs-->
    <slot />
  </div>
</template>
<script>
import Vue from "vue";
import SfTab from "./_internal/SfTab.vue";
Vue.component("SfTab", SfTab);

export default {
  name: "SfTabs",
  props: {
    /** Which tab should be open  */
    openTab: {
      type: Number,
      default: 1,
    },
    /** Max height of visible content  */
    tabMaxContentHeight: {
      type: String,
      default: "",
    },
    /** Text for button showing content  */
    tabShowText: {
      type: String,
      default: "show",
    },
    /** Text for button hiding content  */
    tabHideText: {
      type: String,
      default: "hide",
    },
  },
  watch: {
    openTab(newValue, oldValue) {
      if (newValue === oldValue) return;
      this.toggle(this.$children[newValue - 1]._uid);
    },
  },
  mounted() {
    this.$on("toggle", this.toggle);
    if (this.openTab) this.openChild();
  },
  methods: {
    toggle(id) {
      this.$children.forEach((child) => {
        child._uid === id ? (child.isActive = true) : (child.isActive = false);
      });
      const active =
        this.$children.findIndex((child) => child.isActive === true) + 1;
      this.$emit("click:tab", active);
    },
    openChild() {
      if (this.openTab < this.$children.length + 1) {
        this.$children[this.openTab - 1].isActive = true;
      }
    },
  },
  provide: function () {
    const tabConfig = {};
    Object.defineProperty(tabConfig, "tabMaxContentHeight", {
      get: () => this.tabMaxContentHeight,
    });
    Object.defineProperty(tabConfig, "tabShowText", {
      get: () => this.tabShowText,
    });
    Object.defineProperty(tabConfig, "tabHideText", {
      get: () => this.tabHideText,
    });
    return {
      tabConfig,
    };
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfTabs.scss";
</style>
