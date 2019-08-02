import SfTab from "./_internal/SfTab.vue";

export default {
  name: "SfTabs",
  components: {
    SfTab
  },

  props: {
    /** Array of tabs objects  */
    tabs: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    activate(index) {
      this.tabs.forEach((tab, tabIndex) => {
        tab.isActive = false;
        if (tabIndex === index) tab.isActive = true;
      });
    }
  }
};
