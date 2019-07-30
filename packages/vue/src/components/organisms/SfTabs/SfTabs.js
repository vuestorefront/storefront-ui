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
      default: [
        {
          title: "Apple",
          content: "Apple is a great fruit",
          isActive: false
        },
        {
          title: "Banana",
          content: "Banana is a great fruit",
          isActive: false
        },
        {
          title: "Peach",
          content: "Peach is a great fruit",
          isActive: false
        },
        {
          title: "Orange",
          content: "Orange is a great fruit",
          isActive: false
        }
      ]
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
