import SfTab from "./_internal/SfTab.vue";
import Vue from "vue";

Vue.component("SfTab", SfTab);

export default {
  name: "SfTabs",
  components: {
    SfTab
  },
  props: {
    /** Which tab should be open at the beginning  */
    openTab: {
      type: Number,
      required: false
    }
  },
  methods: {
    toggle(id) {
      this.$children.forEach(child => {
        child._uid === id
          ? (child.isActive = !child.isActive)
          : (child.isActive = false);
      });
    },
    openChild() {
      if (this.openTab < this.$children.length + 1) {
        this.$children[this.openTab - 1].isActive = true;
      }
    }
  },
  mounted() {
    this.$on("toggle", this.toggle);
    if (this.openTab) this.openChild();
  }
};
