import SfTab from './_internal/SfTab.vue'

export default {
  name: "SfTabs",
  components: {
    SfTab
  },

  props: {
    tabs: {
      type: Array,
      required: true
    }
  },

  methods: {
    activate(index) {
      this.tabs.forEach((tab, tabIndex) => {
        tab.isActive = false
        if (tabIndex === index) tab.isActive = true
      });
    }
  }
};