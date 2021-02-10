<template>
  <div v-show="initialTabActivated" class="sf-tabs">
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
  data() {
    return {
      initialTabActivated: false
    }
  },
  props: {
    /** Which tab should be open at the beginning  */
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
  mounted() {
    this.$on("toggle", this.toggle);
    if (this.openTab) this.openChild();
  },
  methods: {
    toggle(id) {
      this.$children.forEach((child) => {
        child._uid === id
          ? (child.isActive = !child.isActive)
          : (child.isActive = false);
      });
    },
    openChild() {
      if (this.openTab < this.$children.length + 1) {
        this.$children[this.openTab - 1].isActive = true;
        this.initialTabActivated = true;
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
