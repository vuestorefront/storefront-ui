import SfTab2 from './_internal/SfTab2.vue'
// import SfTab, { TAB_COMPONENT_NAME } from "./_internal/SfTab.vue";
// import SfTabsNavigation from "./_internal/SfTabsNavigation.vue";

// Vue.component("SfTab", SfTab);
// Vue.component("SfTabsNavigation", SfTabsNavigation);

export default {
  name: "SfTabs2",
  components: {
    SfTab2
  },

  // provide() {
  //   return {
  //     changeTab: this.changeTab,
  //     sharedState: this.sharedState,
  //     fireEvent: this.fireEvent,
  //     listenEvent: this.listenEvent
  //   };
  // },

  // model: {
  //   prop: "value",
  //   event: "change"
  // },

  // props: {
  //   /**
  //    * Value of selected option, this prop has v-model support
  //    */
  //   value: {
  //     type: [Number, String],
  //     default: null
  //   }
  // },

  data() {
    return {
      tabs: [{
          title: 'Apple',
          content: 'Apple is a great fruit',
          isActive: true
        },
        {
          title: 'Banana',
          content: 'Banana is a great fruit',
          isActive: false
        },
        {
          title: 'Peach',
          content: 'Peach is a great fruit',
          isActive: false
        },
        {
          title: 'Orange',
          content: 'Orange is a great fruit',
          isActive: false
        },
      ]
    };
  },

  // mounted() {
  //   this.setTabs();
  //   this.$nextTick(() => {
  //     if (!this.value) {
  //       this.changeTab(this.sharedState.tabs[0].valueComputed);
  //     }
  //   });
  // },

  // updated() {
  //   this.setTabs();
  // },

  methods: {
    activate(index) {
      this.tabs.forEach((tab, tabIndex) => {
        tab.isActive = false
        if (tabIndex === index) tab.isActive = true
      });
    }
    // changeTab(tab) {
    //   this.$set(this.sharedState, "activeTabValue", tab);
    //   this.fireEvent("change", tab);
    // },
    // setTabs() {
    //   this.sharedState.tabs = this.$children.filter(component => {
    //     return component.$options.name === TAB_COMPONENT_NAME;
    //   });
    // },
    // fireEvent(name, value) {
    //   this.$emit(name, value);
    // },
    // listenEvent(name, callback) {
    //   this.$on(name, callback);
    // }
  }
};