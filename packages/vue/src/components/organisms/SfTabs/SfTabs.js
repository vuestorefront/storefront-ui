import SfTab from "./_internal/SfTab.vue";

export default {
  name: "SfTabs",
  components: {
    SfTab
  },
  props: {
    openTab: {
      type: Number
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
