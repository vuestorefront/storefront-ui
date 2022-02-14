<template>
  <div v-show="initialTabActivated" class="sf-tabs">
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
    openTab: {
      type: Number,
      default: 1,
    },
    tabMaxContentHeight: {
      type: String,
      default: "",
    },
    tabShowText: {
      type: String,
      default: "show",
    },
    tabHideText: {
      type: String,
      default: "hide",
    },
  },
  data() {
    return {
      tabs: [],
      initialTabActivated: false,
    };
  },
  watch: {
    openTab(newValue, oldValue) {
      if (newValue === oldValue) return;
      this.toggle(this.$children[newValue - 1]._uid);
    },
  },
  mounted() {
    this.$on("toggle", this.toggle);
    this.tabs.push(...this.$children);
    if (this.openTab) this.openChild();
  },
  methods: {
    toggle(id) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab._uid === id;
      });
      const activeTab = this.tabs.findIndex((tab) => tab.isActive === true) + 1;
      this.$emit("click:tab", activeTab);
    },
    openChild() {
      if (this.openTab < this.$children.length + 1) {
        this.tabs[this.openTab - 1].isActive = true;
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
<style lang="scss" src="./SfTabs.scss"></style>
