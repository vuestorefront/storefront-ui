import Vue from "vue";
import SfTab, { TAB_COMPONENT_NAME } from "./_internal/SfTab.vue";
import SfTabsNavigation from "./_internal/SfTabsNavigation.vue";

Vue.component("SfTab", SfTab);
Vue.component("SfTabsNavigation", SfTabsNavigation);

export default {
  name: "SfTabs",

  provide() {
    return {
      changeTab: this.changeTab,
      sharedState: this.sharedState,
      fireEvent: this.fireEvent,
      listenEvent: this.listenEvent
    };
  },

  model: {
    prop: "value",
    event: "change"
  },

  props: {
    /**
     * Value of selected option, this prop has v-model support
     */
    value: {
      type: [Number, String],
      default: null
    }
  },

  data() {
    return {
      sharedState: {
        activeTabValue: this.value,
        tabs: []
      }
    };
  },

  mounted() {
    this.setTabs();
    this.$nextTick(() => {
      if (!this.value) {
        this.changeTab(this.sharedState.tabs[0].valueComputed);
      }
    });
  },

  updated() {
    this.setTabs();
  },

  methods: {
    changeTab(tab) {
      this.$set(this.sharedState, "activeTabValue", tab);
      this.fireEvent("change", tab);
    },
    setTabs() {
      this.sharedState.tabs = this.$children.filter(component => {
        return component.$options.name === TAB_COMPONENT_NAME;
      });
    },
    fireEvent(name, value) {
      this.$emit(name, value);
    },
    listenEvent(name, callback) {
      this.$on(name, callback);
    }
  }
};
