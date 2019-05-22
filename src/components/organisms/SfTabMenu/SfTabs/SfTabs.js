import SfTab, { TAB_COMPONENT_NAME } from "../SfTab/SfTab.vue";
import SfTabsNavigation from "../SfTabsNavigation/SfTabsNavigation.vue";
import Vue from "vue";
export default {
  name: "SfTabs",

  components: { SfTab, SfTabsNavigation },

  provide() {
    return {
      changeTab: this.changeTab,
      sharedState: this.sharedState
    };
  },

  props: {
    router: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String],
      default: null
    }
  },

  data() {
    return {
      sharedState: {
        activeTab: this.value,
        tabs: []
      }
    };
  },

  mounted() {
    this.updateTabs();
    this.$nextTick(() => {
      if (!this.value) {
        this.changeTab(this.sharedState.tabs[0].valueComputed);
      }
    });
  },

  updated() {
    this.updateTabs();
  },

  methods: {
    changeTab(tab) {
      Vue.set(this.sharedState, "activeTab", tab);
      this.$emit("input", tab);
    },
    updateTabs() {
      this.sharedState.tabs = this.$children.filter(component => {
        return component.$options.name === TAB_COMPONENT_NAME;
      });
    }
  }
};
