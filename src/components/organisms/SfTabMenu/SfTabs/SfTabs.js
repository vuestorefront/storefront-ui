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
    selected: {
      type: [Number, String],
      default: null
    }
  },

  data() {
    return {
      sharedState: {
        activeTab: this.selected,
        tabs: []
      }
    };
  },

  mounted() {
    this.updateTabs();
    this.$nextTick(() => {
      if (!this.selected) {
        this.sharedState.activeTab = this.sharedState.tabs[0].id;
      }
    });
  },

  updated() {
    this.updateTabs();
  },

  methods: {
    changeTab(id) {
      Vue.set(this.sharedState, "activeTab", id);
    },
    updateTabs() {
      this.sharedState.tabs = this.$children.filter(
        component => component.$options.name === TAB_COMPONENT_NAME
      );
    }
  }
};
